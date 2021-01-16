import * as Yup from 'yup';
import useUser from '../hooks/useUser';

export type FormValues = {
  userId?: string;
  password?: string;
  passwordConfirm?: string;
};

const useUserFormik = () => {
  const { user, requestSignUp } = useUser();
  console.log(user);

  const initialValues: FormValues = {
    userId: '',
    password: '',
    passwordConfirm: '',
  };

  const onSubmit = (values: FormValues, onSubmitProps: any) => {
    const { userId, password } = values;
    requestSignUp(userId, password);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
    console.log(values);
  };

  const signInValidationSchema = Yup.object({
    userId: Yup.string().required('Required'),
    password: Yup.string().required('Password is required'),
  });

  const signUpValidationSchema = Yup.object({
    userId: Yup.string().required('Required'),
    password: Yup.string().required('Password is required'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Password Confirmation required'),
  });

  return {
    initialValues,
    onSubmit,
    signInValidationSchema,
    signUpValidationSchema,
  };
};

export default useUserFormik;
