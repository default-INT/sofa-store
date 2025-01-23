import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LogoIcon } from '@root/Shared/assets/icons';
import { GradientText } from '@root/Shared/components/GradientText';
import { useCurrentScreen } from '@root/Shared/hooks/useCurrentScreen';
import { gen } from '@root/Shared/utils/router/gen';
import { r } from '@root/Shared/constants/routes';
import { LeftContent } from './components/LeftContent';
import { IDefaultParams } from './types';
import { styles } from './styles';

export const Header = memo(() => {
  const { t } = useTranslation('header');
  const [currentScreenName, , { params }] = useCurrentScreen()!;
  const headerParams = (params || {}) as IDefaultParams;
  const splitName = currentScreenName.split('/');
  const shortName = splitName[splitName.length - 1];

  const rootLayoutStyles = useMemo(() => {
    if (headerParams.transparentHeader) {
      return StyleSheet.compose(styles.root, styles.transparentBackground);
    }

    return styles.root;
  }, [headerParams?.transparentHeader]);

  const isTabNavigator = currentScreenName.includes(gen.loc(r.app.tabs));

  const titleStyles = useMemo(() => {
    if (!isTabNavigator) return styles.wideTitle;

    return {};
  }, [isTabNavigator]);

  return (
    <SafeAreaView edges={['top', 'left', 'right']}>
      <View style={rootLayoutStyles}>
        <LeftContent currentScreenName={currentScreenName} params={params as IDefaultParams} />
        <View style={styles.title}>
          <GradientText title={t(`${shortName}.title`)} style={titleStyles} />
          <LogoIcon style={styles.logoBox} />
        </View>
      </View>
    </SafeAreaView>
  );
});

Header.displayName = 'Header';
