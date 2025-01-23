import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { Formik } from 'formik';
import { Text } from '@root/Shared/components/Text';
import { AppInput } from '@root/Shared/components/formFields/AppInput';
import { Button } from '@root/Shared/components/Button';
import { useCallback, useMemo } from 'react';
import { userStore } from '@root/Shared/store/userStore';
import { EditAvatar } from './components/EditAvatar';
import { styles } from './styles';
import { IUserInfoFields } from './types';

interface IProps {
  onSubmit?: () => void
}

export const UserInfoForm = observer((props: IProps) => {
  const { onSubmit } = props;
  const { t } = useTranslation('profile');

  const initialValues = useMemo<IUserInfoFields>(() => ({
    avatar: userStore.userInfo.avatar,
    name: userStore.userInfo.name,
  }), []);

  const handleFormSubmit = useCallback((values: IUserInfoFields) => {
    userStore.updateUserInfo(values);
    onSubmit?.();
  }, [onSubmit]);

  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <View>
            <EditAvatar formikName='avatar' />
          </View>
          <View style={styles.nameContainer}>
            <AppInput
              formikName='name'
              placeholder={t('form.name.placeholder')}
            />
            <Button onPress={() => handleSubmit()}>
              <View style={styles.innerButton}>
                <Text style={styles.buttonText}>{t('form.submit')}</Text>
              </View>
            </Button>
          </View>
        </View>
      )}
    </Formik>
  );
});

UserInfoForm.displayName = 'UserInfoForm';
