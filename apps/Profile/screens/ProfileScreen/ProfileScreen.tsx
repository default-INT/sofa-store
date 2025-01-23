import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Linking, ScrollView, StyleSheet, View } from 'react-native';
import { baseStyles } from '@root/Shared/styles/baseStyles';
import { Text } from '@root/Shared/components/Text';
import { OpacityPressable } from '@root/Shared/components/OpacityPressable';
import { SimpleArrowRightIcon } from '@root/Shared/assets/icons';
import { useNavigation } from '@react-navigation/native';
import { TRootNavProp } from '@root/Root/navigation/RootNavigator';
import { gen } from '@root/Shared/utils/router/gen';
import { r } from '@root/Shared/constants/routes';
import { styles } from './styles';
import { UserInfo } from './components/UserInfo';

const mockedLink = 'https://google.com';

export const ProfileScreen = memo(() => {
  const { t } = useTranslation('profile');
  const navigation = useNavigation<TRootNavProp>();

  const handleOpenLink = useCallback((link: string) => async () => {
    const isSupported = await Linking.canOpenURL(link);

    if (isSupported) return Linking.openURL(link);
  }, []);

  const handleMoveToUserInfo = useCallback(() => {
    navigation.navigate(gen.loc(r.app.orderingInformation));
  }, [navigation]);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={StyleSheet.compose(baseStyles.screenContainer, styles.root)}>
        <UserInfo />
        <Text style={styles.titleText}>{t('settings.title')}</Text>
        <OpacityPressable
          layoutStyle={styles.goToOrderingInfoBtn}
          onPress={handleMoveToUserInfo}
        >
          <Text>{t('settings.ordering_information')}</Text>
          <SimpleArrowRightIcon />
        </OpacityPressable>
        <View style={styles.linkRow}>
          <View style={styles.linkColumn}>
            <OpacityPressable
              layoutStyle={StyleSheet.compose(styles.button, styles.privacyPolicy)}
              onPress={handleOpenLink(mockedLink)}
            >
              <Text style={styles.buttonText}>{t('settings.privacy_policy')}</Text>
            </OpacityPressable>
            <OpacityPressable
              layoutStyle={StyleSheet.compose(styles.button, styles.developerWebsite)}
              onPress={handleOpenLink(mockedLink)}
            >
              <Text style={styles.buttonText}>{t('settings.developer_website')}</Text>
            </OpacityPressable>
          </View>
          <View style={styles.linkColumn}>
            <OpacityPressable
              layoutStyle={StyleSheet.compose(styles.button, styles.termOfUse)}
              onPress={handleOpenLink(mockedLink)}
            >
              <Text style={styles.buttonText}>{t('settings.terms_of_use')}</Text>
            </OpacityPressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
});

ProfileScreen.displayName = 'ProfileScreen';
