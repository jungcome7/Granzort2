import * as Yup from 'yup';

export type FormValues = {
  userId?: string;
};

const useUserFormik = () => {
  const initialValues: FormValues = {
    userId: '',
  };

  const onSubmit = (values: FormValues, onSubmitProps: any) => {
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  const validationSchema = Yup.object({
    userId: Yup.string().required('Required'),
  });

  return { initialValues, onSubmit, validationSchema };
};

export default useUserFormik;
