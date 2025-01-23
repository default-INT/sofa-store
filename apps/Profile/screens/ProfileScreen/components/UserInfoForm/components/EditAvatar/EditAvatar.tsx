import { memo, useMemo } from 'react';
import { Field } from 'formik';
import { EditAvatarField, IEditAvatarProps } from './EditAvatarField';

interface IProps extends IEditAvatarProps {
  formikName?:string
}

export const EditAvatar = memo((props: IProps) => {
  const { formikName, ...rest } = props;

  if (!formikName) return <EditAvatarField {...rest} />;

  return (
    <Field name={formikName}>
      {({ field }: any) => {
        const { onChange, value } = field;
        const onChangeText = useMemo(() => onChange(formikName), [onChange]);

        return (
          <EditAvatarField
            value={value}
            onChange={onChangeText}
            {...rest}
          />
        );
      }}
    </Field>
  );
});

EditAvatar.displayName = 'EditAvatar';
