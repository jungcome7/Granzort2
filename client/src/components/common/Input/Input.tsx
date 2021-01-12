import React from 'react';
import * as S from './InputStyle';

type InputProps = {
  label?: string;
  name: string;
};

const Input = ({ label, name }: InputProps) => {
  return (
    <S.Container>
      {label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.Field id={name} name={name}></S.Field>
      <S.ErrorMessage component="div" name={name} />
    </S.Container>
  );
};

export default Input;
