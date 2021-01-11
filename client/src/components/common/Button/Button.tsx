import React from 'react';
import * as S from './ButtonStyle';

type ButtonProps = {
  children?: string;
};

const Button = ({ children }) => {
  return <S.Button>{children}</S.Button>;
};

export default Button;
