import React from 'react';
import * as S from './ButtonStyle';

export type ButtonProps = {
  children?: string;
  type?: 'submit' | 'reset';
  disabled?: boolean;
};

const Button = (props: ButtonProps) => {
  return <S.Button {...props} />;
};

export default Button;
