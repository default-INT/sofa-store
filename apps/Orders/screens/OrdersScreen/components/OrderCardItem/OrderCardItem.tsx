import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ListRenderItem, Text, View } from 'react-native';
import { IOrder, userStore } from '@root/Shared/store/userStore';
import { OrderCardWrapper } from '@root/Shared/components/OrderCardWrapper';
import { getFurnitureSource } from '@root/Shared/utils/getFurnitureSource';
import { OpacityPressable } from '@root/Shared/components/OpacityPressable';
import { useNavigation } from '@react-navigation/native';
import { TRootNavProp } from '@root/Root/navigation/RootNavigator';
import { gen } from '@root/Shared/utils/router/gen';
import { r } from '@root/Shared/constants/routes';
import { toJS } from 'mobx';
import { styles } from './styles';

interface IProps {
  order: IOrder
}

export const OrderCardItem = memo((props: IProps) => {
  const { order } = props;
  const { cartItems } = order;
  const { t } = useTranslation('orders');
  const navigation = useNavigation<TRootNavProp>();
  const firstCartItem = cartItems[0];
  const secondCartItem = cartItems[1];
  const firstFurniture = firstCartItem.item;
  const firstItemPrice = `$${firstFurniture.price} - ${firstCartItem.count}`;
  const source = useMemo(() => getFurnitureSource(firstFurniture), [firstFurniture]);
  const secondSource = getFurnitureSource(secondCartItem?.item);
  const otherCounter = `+${cartItems.length - 1}`;
  const userInfo = order.userInfo || userStore.userInfo;

  const handlePress = useCallback(() => {
    navigation.navigate(gen.loc(r.app.orderDetails), {
      screen: gen.loc(r.app.orderDetails.root),
      params: { order: toJS(order) },
    });
  }, [navigation, order]);

  return (
    <OpacityPressable onPress={handlePress}>
      <OrderCardWrapper>
        <View style={styles.header}>
          {source && (
            <Image
              style={styles.mainAvatar}
              source={source}
              resizeMode='cover'
            />
          )}
          <View style={styles.title}>
            <Text style={styles.titleText}>{firstFurniture.title}</Text>
            <Text style={styles.titleText}>{firstItemPrice}</Text>
            {secondSource && (
              <View style={styles.secondaryView}>
                <Text style={styles.otherCountText}>{otherCounter}</Text>
                <View style={styles.opacityView} />
                <Image
                  style={styles.secondaryAvatar}
                  source={secondSource}
                  resizeMode='cover'
                />
              </View>
            )}
          </View>
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfoText}>{userInfo.name}</Text>
          <Text style={styles.userInfoText}>{userInfo.email}</Text>
          <Text style={styles.userInfoText}>{userInfo.address}</Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.priceLabel}>{t('card.total_payment')}</Text>
          <Text style={styles.priceText}>
            {t('common:dollars_val', { value: order.totalPayments })}
          </Text>
        </View>
      </OrderCardWrapper>
    </OpacityPressable>
  );
});

export const renderOrderItem: ListRenderItem<IOrder> = listItem => (
  <OrderCardItem order={listItem.item} />
);

OrderCardItem.displayName = 'OrderCardItem';
