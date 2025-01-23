import { ReactNode, useCallback } from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { Formik, FormikProps } from 'formik';
import { AppInput } from '@root/Shared/components/formFields/AppInput';
import { CardPlaceholder } from '@root/Shared/components/CardPlaceholder';
import { IUserInfo, userStore } from '@root/Shared/store/userStore';
import { AddressIcon, MailIcon, PersonIcon } from '@root/Shared/assets/icons';
import { validationSchema } from './utils/validationSchema';
import { styles } from './styles';

interface IProps {
  onSubmit?: (values: IUserInfo) => void;
  children?: (formik: FormikProps<IUserInfo>) => ReactNode;
}

export const UserInfoForm = observer((props: IProps) => {
  const { onSubmit, children } = props;
  const { t } = useTranslation('user_info_form');

  const handleSubmit = useCallback((values: IUserInfo) => {
    userStore.updateUserInfo(values);
    onSubmit?.(values);
  }, [onSubmit]);

  return (
    <Formik
      initialValues={userStore.userInfo}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnMount
    >
      {formik => (
        <>
          <CardPlaceholder>
            <View style={styles.cardContainer}>
              <AppInput
                formikName='name'
                icon={PersonIcon}
                label={t('fields.name.label')}
                placeholder={t('fields.name.placeholder')}
              />
              <AppInput
                formikName='email'
                icon={MailIcon}
                keyboardType='email-address'
                autoCorrect={false}
                label={t('fields.email.label')}
                placeholder={t('fields.email.placeholder')}
              />
              <AppInput
                formikName='address'
                icon={AddressIcon}
                autoCorrect={false}
                label={t('fields.address.label')}
                placeholder={t('fields.address.placeholder')}
              />
            </View>
          </CardPlaceholder>
          {children?.(formik)}
        </>
      )}
    </Formik>
  );
});

UserInfoForm.displayName = 'UserInfoForm';
