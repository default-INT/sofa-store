import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserInfoForm } from '@root/Shared/components/UserInfoForm';
import { Button } from '@root/Shared/components/Button';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export const OrderingInformationScreen = memo(() => {
  const { t } = useTranslation('ordering_information');
  const navigation = useNavigation();

  const handleFormSubmit = useCallback(() => {
    navigation.goBack();
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
            <View style={styles.innerButton}>
              <Text style={styles.buttonText}>
                {t('submit')}
              </Text>
            </View>
          </Button>
        )}
      </UserInfoForm>
    </SafeAreaView>
  );
});

OrderingInformationScreen.displayName = 'OrderingInformationScreen';
