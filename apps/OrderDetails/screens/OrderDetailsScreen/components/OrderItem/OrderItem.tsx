import { memo, useMemo } from 'react';
import { Image, Text, View } from 'react-native';
import { ICartItem } from '@root/Shared/types/furniture';
import { getFurnitureSource } from '@root/Shared/utils/getFurnitureSource';
import { styles } from './styles';

interface IProps {
  cart: ICartItem
}

export const OrderItem = memo((props: IProps) => {
  const { cart } = props;
  const { item: furniture, count } = cart;
  const source = useMemo(() => getFurnitureSource(furniture), [furniture]);
  const itemPrice = `$${furniture.price} - ${count}`;

  return (
    <View style={styles.header}>
      {source && (
        <Image
          style={styles.mainAvatar}
          source={source}
          resizeMode='cover'
        />
      )}
      <View style={styles.title}>
        <Text style={styles.titleText}>{furniture.title}</Text>
        <Text style={styles.titleText}>{itemPrice}</Text>
      </View>
    </View>
  );
});

OrderItem.displayName = 'OrderItem';
