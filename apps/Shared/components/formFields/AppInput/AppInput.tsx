import { memo, useMemo } from 'react';
import { Field } from 'formik';
import { StyleProp, StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Error } from '../Error';
import { IAppInputFieldProps, AppInputField } from './AppInputField';

import { styles } from './styles';

export interface IAppInputProps extends IAppInputFieldProps {
  formikName?: string;
  errorModifiers?: StyleProp<TextStyle>;
  formikModifiers?: StyleProp<ViewStyle>;
}

export const AppInput = memo((props: IAppInputProps) => {
  const { formikName, errorModifiers, formikModifiers } = props;
  const { t } = useTranslation();

  if (!formikName) return <AppInputField {...props} />;

  return (
    <Field name={formikName}>
      {({ field, meta }: any) => {
        const { onChange, onBlur, onFocus, ...fieldProps } = field;
        const onChangeText = useMemo(() => onChange(formikName), [onChange]);
        const onBlurWrap = useMemo(() => onBlur(formikName), [onBlur]);

        return (
          <View style={StyleSheet.compose(styles.formikContainer, formikModifiers)}>
            <AppInputField
              {...meta}
              {...fieldProps}
              onChangeText={onChangeText}
              onBlur={onBlurWrap}
              {...props}
            />
            {meta.touched && meta.error && (
              <Error errorMessage={t(meta.error)} modifiers={errorModifiers} />
            )}
          </View>
        );
      }}
    </Field>
  );
});

AppInput.displayName = 'AppInput';
