import { observer } from 'mobx-react-lite';
import LinearGradient from 'react-native-linear-gradient';
import { OpacityPressable } from '@root/Shared/components/OpacityPressable';
import { StyleSheet, View } from 'react-native';
import { Text } from '@root/Shared/components/Text';
import { userStore } from '@root/Shared/store/userStore';
import { IFurniture } from '@root/Shared/types/furniture';
import { useCallback } from 'react';
import { styles } from '../../styles';

interface IProps {
  furniture: IFurniture;
}

export const ManageCart = observer((props: IProps) => {
  const { furniture } = props;
  const cartCount = userStore.getCartItemById(furniture.id)?.count;

  const handleAddToCart = useCallback(() => {
    userStore.updateCartItemCount(furniture.id, prev => prev + 1);
  }, [furniture.id]);

  const handleRemoveFromCart = useCallback(() => {
    userStore.updateCartItemCount(furniture.id, prev => prev - 1);
  }, [furniture.id]);

  return (
    <View
      style={styles.manageButton}
    >
      <LinearGradient
        colors={['#55A8A1', '#3F7C77', '#000000']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.compose(styles.cart, styles.cartManage)}
      >
        <OpacityPressable onPress={handleRemoveFromCart}>
          <Text style={styles.manageText}>-</Text>
        </OpacityPressable>
        <Text style={styles.manageText}>{cartCount}</Text>
        <OpacityPressable onPress={handleAddToCart}>
          <Text style={styles.manageText}>+</Text>
        </OpacityPressable>
      </LinearGradient>
    </View>
  );
});

ManageCart.displayName = 'ManageCart';
