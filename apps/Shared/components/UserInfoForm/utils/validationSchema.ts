import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .max(100, 'common:errors.max_100')
    .required('common:errors.required'),
  email: Yup.string()
    .email('common:errors.email')
    .required('common:errors.required'),
  address: Yup.string()
    .max(100, 'common:max_100')
    .required('common:errors.required'),
});
