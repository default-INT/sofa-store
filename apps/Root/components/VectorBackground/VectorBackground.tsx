/* eslint-disable global-require */
import { memo, PropsWithChildren, useMemo } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { useCurrentScreen } from '@root/Shared/hooks/useCurrentScreen';
import { gen } from '@root/Shared/utils/router/gen';
import { r } from '@root/Shared/constants/routes';
import { styles } from './styles';

const SCREENS_WITH_BACKGROUND = [
  gen.loc(r.app.tabs.orders),
  gen.loc(r.app.orderDetails),
];

export const VectorBackground = memo((props: PropsWithChildren<{}>) => {
  const { children } = props;
  const currentScreenOptions = useCurrentScreen();
  const [currentScreen] = currentScreenOptions || [];
  const isScreenWithVector = currentScreen && SCREENS_WITH_BACKGROUND.includes(currentScreen);

  const innerContainerStyle = useMemo(() => {
    if (isScreenWithVector) return styles.flex;

    return StyleSheet.compose(styles.flex, styles.backgroundWhite);
  }, [isScreenWithVector]);

  return (
    <ImageBackground
      source={require('@root/Shared/assets/images/orders-background-3.png')}
      resizeMode='cover'
      style={StyleSheet.compose(styles.flex, styles.backgroundWhite)}
    >
      <View style={innerContainerStyle}>
        {children}
      </View>
    </ImageBackground>
  );
});

VectorBackground.displayName = 'OrdersLayout';
