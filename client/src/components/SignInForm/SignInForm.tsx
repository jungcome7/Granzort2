import React from 'react';
import * as Yup from 'yup';
import * as S from './SignInFormStyle';

type FormValues = {
  email?: string;
};

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

const SignInForm = () => {
  return (
    <>
      <S.Container>
        <S.Box>
          <S.Logo>GRANZORT</S.Logo>
          <S.Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            // validateOnMount
            onSubmit={onSubmit}
          >
            {(formik) => {
              console.log(formik);
              return (
                <S.Form>
                  <S.Field
                    type="text"
                    placeholder="이메일을 입력하세요.."
                    name="email"
                  />
                  <S.ErrorMessage name="email" component="div" />
                  <S.SignInButton
                    type="submit"
                    disabled={formik.isSubmitting || !formik.isValid}
                  >
                    Sign In
                  </S.SignInButton>
                </S.Form>
              );
            }}
          </S.Formik>
          <S.SignInFacebookButton>Sign in with Facebook</S.SignInFacebookButton>
          <S.SignInGoogleButton>Sign in with Google</S.SignInGoogleButton>
        </S.Box>
      </S.Container>
    </>
  );
};

export default SignInForm;
