import * as Yup from 'yup';

export type FormValues = {
  email?: string;
};

const useEmailFormik = () => {
  const initialValues: FormValues = {
    email: '',
  };

  const onSubmit = (values: FormValues, onSubmitProps: any) => {
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email').required('Required'),
  });

  return { initialValues, onSubmit, validationSchema };
};

export default useEmailFormik;
