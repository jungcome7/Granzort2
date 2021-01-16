import * as Yup from 'yup';

export type FormValues = {
  userId?: string;
  password?: string;
  passwordConfirm?: string;
};

const useUserFormik = () => {
  const initialValues: FormValues = {
    userId: '',
    password: '',
    passwordConfirm: '',
  };

  const onSubmit = (values: FormValues, onSubmitProps: any) => {
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  const validationSchema = Yup.object({
    userId: Yup.string().required('Required'),
    password: Yup.string().required('Password is required'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Password Confirmation required'),
  });

  return { initialValues, onSubmit, validationSchema };
};

export default useUserFormik;
