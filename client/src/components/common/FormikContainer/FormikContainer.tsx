import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from '../Button';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const FormikContainer = () => {
  const initialValues = {
    email: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
  });
  const onSubmit = (values: any) => console.log('Form data: ', values);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
