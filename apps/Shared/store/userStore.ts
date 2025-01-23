import { makeAutoObservable, toJS } from 'mobx';
import { ICartItem, IFurniture } from '@root/Shared/types/furniture';
import { mmkvStorage } from '@root/Shared/utils/mmkvStorage';

export interface IUserInfo {
  name?: string | null;
  email?: string | null;
  address?: string | null;
  avatar?: string | null;
}

export interface IOrder {
  cartItems: ICartItem[];
  userInfo?: IUserInfo;
  amountOfGoods: number;
  feeFromAmount: string;
  totalPayments: string;
}

const initialUserInfo = { name: null, email: null, address: null };

export const SHIPPING_FEE = 0.07;
export const STORE_KEY = 'appStore';

export class UserStore {
  userInfo: IUserInfo = initialUserInfo;
  myCart: ICartItem[] | null = [];
  myOrders: IOrder[] = [];

  constructor () {
    makeAutoObservable(this);
    this.hydrate();
  }

  addToCart (item: IFurniture) {
    if (!this.myCart) this.myCart = [];
    if (this.myCart.some(cartItem => cartItem.item.id === item.id)) return false;
    this.myCart.push({ item, count: 1 });

    return this.persist();
  }

  updateUserInfo (info: IUserInfo) {
    this.userInfo = { ...this.userInfo, ...info };
    this.persist();
  }

  completeOrder () {
    if (!this.myCart?.length) return false;

    const amountOfGoods = this.myCart
      .reduce((prev, curr) => prev + curr.item.price * curr.count, 0) || 0;

    const feeFromAmount = amountOfGoods * SHIPPING_FEE;
    const totalPayments = feeFromAmount + amountOfGoods;

    this.myOrders.push({
      cartItems: this.myCart,
      amountOfGoods,
      feeFromAmount: feeFromAmount.toFixed(2),
      totalPayments: totalPayments.toFixed(2),
      userInfo: toJS(this.userInfo),
    });
    this.myCart = [];

    return this.persist();
  }

  removeFromCart (item: IFurniture) {
    if (!this.myCart) return false;
    this.myCart = this.myCart.filter(cartItem => cartItem.item.id !== item.id);

    return this.persist();
  }

  getCartItemById (id: IFurniture['id']) {
    if (!this.myCart) return null;

    return this.myCart.find(cartItem => cartItem.item.id === id);
  }

  updateCartItemCount (id: IFurniture['id'], update: (prevCount: number) => number) {
    const cartItem = this.getCartItemById(id);
    if (!cartItem) return false;

    cartItem.count = update(cartItem.count);

    if (cartItem.count <= 0) this.removeFromCart(cartItem.item);

    return this.persist();
  }

  persist () {
    mmkvStorage.set(
      STORE_KEY,
      JSON.stringify({
        userInfo: this.userInfo,
        myCart: this.myCart,
        myOrders: this.myOrders,
      }),
    );

    return true;
  }

  hydrate () {
    const storedData = mmkvStorage.getString(STORE_KEY);
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      this.userInfo = parsedData.userInfo || initialUserInfo;
      this.myCart = parsedData.myCart || [];
      this.myOrders = parsedData.myOrders || [];
    }
  }
}

export const userStore = new UserStore();
