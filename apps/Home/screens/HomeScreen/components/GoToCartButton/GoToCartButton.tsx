import { observer } from 'mobx-react-lite';
import LinearGradient from 'react-native-linear-gradient';
import { BasketIcon } from '@root/Shared/assets/icons';
import { theme } from '@root/Shared/styles/theme';
import { View } from 'react-native';
import { OpacityPressable } from '@root/Shared/components/OpacityPressable';
import { userStore } from '@root/Shared/store/userStore';
import { Text } from '@root/Shared/components/Text';
import { useNavigation } from '@react-navigation/native';
import { TRootNavProp } from '@root/Root/navigation/RootNavigator';
import { gen } from '@root/Shared/utils/router/gen';
import { r } from '@root/Shared/constants/routes';
import { useCallback } from 'react';
import { styles } from './styles';

export const GoToCartButton = observer(() => {
  const navigation = useNavigation<TRootNavProp>();
  const myCartItems = userStore.myCart?.length;

  const handleGoToCart = useCallback(() => {
    navigation.navigate(gen.loc(r.app.cart));
  }, [navigation]);

  return (
    <OpacityPressable
      layoutStyle={styles.container}
      onPress={handleGoToCart}
    >
      <View style={styles.innerContainer}>
        <LinearGradient
          colors={['#55A8A1', '#3F7C77', '#000000']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.fill}
        >
          <BasketIcon width={30} height={30} color={theme.white} />
        </LinearGradient>
        {Boolean(myCartItems) && (
          <View style={styles.counter}>
            <Text style={styles.counterText}>{myCartItems}</Text>
          </View>
        )}
      </View>
    </OpacityPressable>
  );
});

GoToCartButton.displayName = 'AddToCartButton';
