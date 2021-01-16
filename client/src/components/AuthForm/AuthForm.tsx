import React from 'react';
import { Link } from 'react-router-dom';
import useUserFormik from '../../hooks/useUserFormik';
import * as S from './AuthFormStyle';

type AuthFormProps = {
  type: 'signIn' | 'signUp';
};

const AuthForm = ({ type }: AuthFormProps) => {
  const { initialValues, onSubmit, validationSchema } = useUserFormik();

  type Mapper = {
    signIn: string;
    signUp: string;
    moveTo: 'signUp' | 'signIn';
  };

  const mapper: Mapper = {
    signIn: 'Sign In',
    signUp: 'Sign Up',
    moveTo: type === 'signIn' ? 'signUp' : 'signIn',
  };

  return (
    <>
      <S.Container>
        <S.Box>
          <S.Logo>GRANZORT</S.Logo>
          <S.AuthWrapper>
            <S.Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              // validateOnMount
              onSubmit={onSubmit}
            >
              {(formik) => {
                return (
                  <S.Form>
                    <S.UserIdWrapper>
                      <S.Label htmlFor="user-id">
                        <S.HeartIcon
                          fill={formik.isValid && formik.values.email}
                        />
                      </S.Label>
                      <S.Field
                        type="text"
                        placeholder="아이디를 입력하세요.."
                        name="userId"
                        id="user-id"
                      />
                    </S.UserIdWrapper>
                    <S.ErrorMessage name="userId" component="div" />

                    <S.PasswordWrapper>
                      <S.Label htmlFor="password">
                        <S.HeartIcon
                          fill={formik.isValid && formik.values.email}
                        />
                      </S.Label>
                      <S.Field
                        type="password"
                        placeholder="비밀번호를 입력하세요.."
                        name="password"
                        id="password"
                      />
                    </S.PasswordWrapper>
                    <S.ErrorMessage name="password" component="div" />

                    {type === 'signIn' && (
                      <>
                        <S.PasswordConfirmWrapper>
                          <S.Label htmlFor="password-confirm">
                            <S.HeartIcon
                              fill={formik.isValid && formik.values.email}
                            />
                          </S.Label>
                          <S.Field
                            type="password"
                            placeholder="비밀번호를 입력하세요.."
                            name="passwordConfirm"
                            id="password-confirm"
                          />
                        </S.PasswordConfirmWrapper>
                        <S.ErrorMessage
                          name="passwordConfirm"
                          component="div"
                        />
                      </>
                    )}

                    <S.AuthButton
                      type="submit"
                      disabled={formik.isSubmitting || !formik.isValid}
                    >
                      {mapper[type]}
                    </S.AuthButton>
                  </S.Form>
                );
              }}
            </S.Formik>
            <S.AuthFacebookButton>
              {`${mapper[type]} with Facebook`}
            </S.AuthFacebookButton>
            <S.AuthGoogleButton>
              {`${mapper[type]} with Google`}
            </S.AuthGoogleButton>
          </S.AuthWrapper>
          <Link to={`/${mapper.moveTo}`}>
            <S.MoveToButton>{`Move To ${
              mapper[mapper.moveTo]
            }`}</S.MoveToButton>
          </Link>
        </S.Box>
      </S.Container>
    </>
  );
};

export default AuthForm;
