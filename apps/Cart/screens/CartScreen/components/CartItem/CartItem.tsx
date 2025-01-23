import { observer } from 'mobx-react-lite';
import { Image, ListRenderItem, StyleSheet, View } from 'react-native';
import { Text } from '@root/Shared/components/Text';
import { ICartItem } from '@root/Shared/types/furniture';
import { useCallback, useMemo } from 'react';
import { OpacityPressable } from '@root/Shared/components/OpacityPressable';
import { userStore } from '@root/Shared/store/userStore';
import { getFurnitureSource } from '@root/Shared/utils/getFurnitureSource';
import { styles } from './styles';

interface IProps {
  cartItem: ICartItem
}

export const CartItem = observer((props: IProps) => {
  const { cartItem } = props;
  const furniture = cartItem.item;
  const itemCount = cartItem.count;
  const source = useMemo(() => getFurnitureSource(furniture), [furniture]);

  const handleAddToCart = useCallback(() => {
    userStore.updateCartItemCount(furniture.id, prev => prev + 1);
  }, [furniture.id]);

  const handleRemoveFromCart = useCallback(() => {
    userStore.updateCartItemCount(furniture.id, prev => prev - 1);
  }, [furniture.id]);

  return (
    <View style={styles.container}>
      {source && (
        <Image
          style={styles.image}
          resizeMode='cover'
          source={source}
        />
      )}
      <View style={styles.content}>
        <View style={styles.info}>
          <Text style={styles.title}>{furniture.title}</Text>
          <Text style={styles.description}>{furniture.description}</Text>
        </View>
        <View style={styles.outerManage}>
          <View style={styles.manage}>
            <OpacityPressable
              layoutStyle={styles.manageItem}
              onPress={handleAddToCart}
            >
              <Text style={styles.manageText}>+</Text>
            </OpacityPressable>
            <View style={StyleSheet.compose(styles.manageItem, styles.counter)}>
              <Text style={styles.counterText}>{itemCount > 99 ? '+99' : itemCount}</Text>
            </View>
            <OpacityPressable
              layoutStyle={styles.manageItem}
              onPress={handleRemoveFromCart}
            >
              <Text style={styles.manageText}>-</Text>
            </OpacityPressable>
          </View>
        </View>
      </View>
    </View>
  );
});

export const renderCartItem: ListRenderItem<ICartItem> = listItem => (
  <CartItem cartItem={listItem.item} />
);

CartItem.displayName = 'CartItem';
