import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import * as S from './SignUpFormStyle';

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
          <S.SignUpArea>
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
                    <S.SignUpButton
                      type="submit"
                      disabled={formik.isSubmitting || !formik.isValid}
                    >
                      Sign Up
                    </S.SignUpButton>
                  </S.Form>
                );
              }}
            </S.Formik>
            <S.SignUpFacebookButton>
              Sign up with Facebook
            </S.SignUpFacebookButton>
            <S.SignUpGoogleButton>Sign up with Google</S.SignUpGoogleButton>
          </S.SignUpArea>
          <Link to="/signIn">
            <S.MoveToSignInButton>Move to Sign In</S.MoveToSignInButton>
          </Link>
        </S.Box>
      </S.Container>
    </>
  );
};

export default SignInForm;
