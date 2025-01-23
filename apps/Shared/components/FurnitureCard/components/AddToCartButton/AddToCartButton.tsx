import { useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import LinearGradient from 'react-native-linear-gradient';
import { CartPlusIcon } from '@root/Shared/assets/icons';
import { OpacityPressable } from '@root/Shared/components/OpacityPressable';
import { userStore } from '@root/Shared/store/userStore';
import { IFurniture } from '@root/Shared/types/furniture';
import { styles } from '../../styles';

interface IProps {
  furniture: IFurniture;
}

export const AddToCartButton = observer((props: IProps) => {
  const { furniture } = props;

  const handleAddToCart = useCallback(() => {
    userStore.addToCart(furniture);
  }, [furniture]);

  return (
    <OpacityPressable
      layoutStyle={styles.manageButton}
      onPress={handleAddToCart}
    >
      <LinearGradient
        colors={['#55A8A1', '#3F7C77', '#000000']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.cart}
      >
        <CartPlusIcon width={36} height={36} />
      </LinearGradient>
    </OpacityPressable>
  );
});

AddToCartButton.displayName = 'AddToCartButton';
