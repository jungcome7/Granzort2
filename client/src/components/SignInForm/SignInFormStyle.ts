import {
  ErrorMessage as FErrorMessage,
  Field as FField,
  Form as FForm,
  Formik as FFormik,
} from 'formik';
import styled from 'styled-components';
import { Button } from '../../components/common/Button';

export const Formik = styled(FFormik)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Form = styled(FForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: red;
`;
export const Field = styled(FField)`
  background-color: white;
  padding: 10px;
  margin: 10px;
  width: 180px;
`;
export const ErrorMessage = styled(FErrorMessage)`
  color: red;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Box = styled.div`
  margin-top: 50px;
  background-color: lightgrey;
  border-radius: 10px;
  width: 500px;
  height: 500px;
  position: relative;
`;

export const SignInArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.div`
  margin: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type SignInButtonProps = {
  disabled?: boolean;
};

export const SignInButton = styled(Button)<SignInButtonProps>`
  margin: 5px;
  width: 200px;
  background-color: ${(props) => props.disabled && 'red'};
`;

export const SignInFacebookButton = styled(Button)`
  margin: 5px;
  width: 200px;
  background-color: #1877f2;
`;

export const SignInGoogleButton = styled(Button)`
  margin: 5px;
  width: 200px;
  border: 2px solid grey;
  background-color: white;
  color: grey;
`;

export const MoveToSignUpButton = styled(Button)`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 20px;
  background-color: transparent;
  color: black;
  font-weight: 600;
`;
