import * as Yup from 'yup';

export type FormValues = {
  email?: string;
};

const useEmailFormik = () => {
  const initialValues: FormValues = {
    email: '',
  };

  const onSubmit = (values: FormValues, onSubmitProps: any) => {
    console.log(values);
    console.log(onSubmitProps);
    // Submit 성공 api response를 받은 후
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
  });

  return { initialValues, onSubmit, validationSchema };
};

export default useEmailFormik;
