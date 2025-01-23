/* eslint-disable global-require */
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { useCallback, useEffect } from 'react';
import { userStore } from '@root/Shared/store/userStore';
import { Placeholder } from '@root/Shared/components/Placeholder';
import { useNavigation } from '@react-navigation/native';
import { TRootNavProp } from '@root/Root/navigation/RootNavigator';
import { gen } from '@root/Shared/utils/router/gen';
import { r } from '@root/Shared/constants/routes';

export const SuccessScreen = observer(() => {
  const { t } = useTranslation('success');
  const navigation = useNavigation<TRootNavProp>();

  const handleBackToMenu = useCallback(() => {
    navigation.navigate(gen.loc(r.app.tabs), { screen: gen.loc(r.app.tabs.home.root) });
  }, [navigation]);

  useEffect(() => {
    userStore.completeOrder();
  }, []);

  return (
    <Placeholder
      title={t('placeholder_title')}
      source={require('@root/Shared/assets/images/success-order.png')}
      action={{
        title: t('back_to_menu'),
        onSubmit: handleBackToMenu,
      }}
    />
  );
});

SuccessScreen.displayName = 'SuccessScreen';
