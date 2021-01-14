import {
  ErrorMessage as FErrorMessage,
  Field as FField,
  Form as FForm,
  Formik as FFormik,
} from 'formik';
import React from 'react';
import styled from 'styled-components';
import PALETTE from '../../styles/color-variables';
import { Button } from '../common/Button';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  margin-top: 100px;
  background-color: lightgrey;
  border-radius: 10px;
  width: 600px;
  height: 600px;
  position: relative;
  background-color: ${PALETTE.WHITE};
`;

export const SignInArea = styled.div`
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

export const Label = styled.label`
  background-image: url('../../../assets/email.svg');
`;

const SvgAttrs = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
})``;

const SvgExpandIcon = styled(SvgAttrs)`
  width: 13.5px;
  height: 6.9px;
  margin: 3px 5px 2px 9px;
`;

export const ExpandIcon = () => (
  <SvgExpandIcon viewBox="0 0 10 6" fill="none">
    <path d="M0 0.5L5 5.5L10 0.5H0Z" fill="grey" />
  </SvgExpandIcon>
);

export const EmailWrapper = styled.div`
  display: flex;
  width: 300px;
  padding: 14px 0;
  margin: 10px;
  border: 1px solid ${PALETTE.GRAY[2]};
  border-radius: 5px;
`;

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

type SignInButtonProps = {
  disabled?: boolean;
};

export const SignInButton = styled(Button)<SignInButtonProps>`
  margin: 5px;
  width: 300px;
  font-size: 18px;
  padding: 14px;

  background-color: ${(props) =>
    props.disabled ? PALETTE.GRAY[2] : PALETTE.MAIN};
  &:hover {
    opacity: 0.9;
    cursor: ${(props) => props.disabled && 'not-allowed'};
  }
`;

export const SignInFacebookButton = styled(Button)`
  margin: 5px;
  width: 300px;
  font-size: 18px;
  padding: 14px;
  background-color: #1877f2;
  &:hover {
    opacity: 0.9;
  }
`;

export const SignInGoogleButton = styled(Button)`
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

export const MoveToSignUpButton = styled(Button)`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 20px;
  background-color: transparent;
  color: ${PALETTE.GRAY[3]};
  font-weight: 600;
  font-size: 18px;
`;
