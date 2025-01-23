import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@root/Shared/components/Button';
import { ArrowRightIcon } from '@root/Shared/assets/icons';
import { UserInfoForm } from '@root/Shared/components/UserInfoForm';
import { useNavigation } from '@react-navigation/native';
import { TRootNavProp } from '@root/Root/navigation/RootNavigator';
import { gen } from '@root/Shared/utils/router/gen';
import { r } from '@root/Shared/constants/routes';
import { styles } from './styles';

export const ReservationsScreen = memo(() => {
  const { t } = useTranslation('reservation');
  const navigation = useNavigation<TRootNavProp>();

  const handleFormSubmit = useCallback(() => {
    navigation.navigate(gen.loc(r.app.cart.success));
  }, [navigation]);

  return (
    <SafeAreaView style={styles.root} edges={['bottom']}>
      <UserInfoForm onSubmit={handleFormSubmit}>
        {({ handleSubmit, isValid }) => (
          <Button
            disabled={!isValid}
            layoutStyle={styles.button}
            onPress={() => handleSubmit()}
          >
            <Text style={styles.buttonText}>
              {t('submit')}
            </Text>
            <ArrowRightIcon width={24} height={24} />
          </Button>
        )}
      </UserInfoForm>
    </SafeAreaView>
  );
});

ReservationsScreen.displayName = 'ReservationsScreen';
