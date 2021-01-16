import {
  ErrorMessage as FErrorMessage,
  Field as FField,
  Form as FForm,
  Formik as FFormik,
} from 'formik';
import styled from 'styled-components';
import PALETTE from '../../styles/color-variables';
import { Button } from '../common/Button';
import Heart from '../icons/Heart';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  margin-top: 100px;
  border-radius: 10px;
  width: 600px;
  height: 600px;
  position: relative;
  background-color: ${PALETTE.WHITE};
`;

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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

export const Label = styled.label``;

export const UserIdWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  padding: 4px 0;
  margin: 5px;
  border: 1px solid ${PALETTE.GRAY[2]};
  border-radius: 5px;
`;

export const PasswordWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  padding: 4px 0;
  margin: 5px;
  border: 1px solid ${PALETTE.GRAY[2]};
  border-radius: 5px;
`;

export const PasswordConfirmWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  padding: 4px 0;
  margin: 5px;
  border: 1px solid ${PALETTE.GRAY[2]};
  border-radius: 5px;
`;

export const HeartIcon = styled(Heart)``;

export const Field = styled(FField)`
  background-color: white;
  font-size: 18px;
  &::placeholder {
    color: ${PALETTE.GRAY[1]};
  }
`;
export const ErrorMessage = styled(FErrorMessage)`
  color: red;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 18px;
`;

export const Logo = styled.div`
  margin: 70px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

type AuthButtonProps = {
  disabled?: boolean;
};

export const AuthButton = styled(Button)<AuthButtonProps>`
  margin: 5px;
  width: 300px;
  font-size: 18px;
  padding: 14px;
  background-color: ${(props) =>
    props.disabled ? PALETTE.GRAY[1] : PALETTE.MAIN};
  &:hover {
    opacity: ${(props) => !props.disabled && 0.9};
    cursor: ${(props) => props.disabled && 'default'};
  }
`;

export const AuthFacebookButton = styled(Button)`
  margin: 5px;
  width: 300px;
  font-size: 18px;
  padding: 14px;
  background-color: #1877f2;
  &:hover {
    opacity: 0.9;
  }
`;

export const AuthGoogleButton = styled(Button)`
  margin: 5px;
  width: 300px;
  font-size: 18px;
  padding: 14px;
  border: 1px solid ${PALETTE.GRAY[2]};
  background-color: ${PALETTE.WHITE};
  color: grey;
  &:hover {
    background-color: ${PALETTE.GRAY[0]};
  }
`;

export const MoveToButton = styled(Button)`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 20px;
  background-color: transparent;
  color: ${PALETTE.GRAY[3]};
  font-weight: 600;
  font-size: 18px;
  &:hover {
    color: ${PALETTE.BLACK};
  }
`;
