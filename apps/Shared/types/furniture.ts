import { ImageRequireSource } from 'react-native';

export enum FurnitureType {
  UpholsteredChair = 'UpholsteredChair',
  ComfortableSofa = 'ComfortableSofa',
}

export interface IFurniture {
  id: string
  src?: string | ImageRequireSource | null
  title: string
  description: string
  price: number
  rating: number
  type: FurnitureType
}

export interface ICartItem {
  item: IFurniture
  count: number
}
