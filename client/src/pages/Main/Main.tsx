import React from 'react';
import * as S from './MainStyle';
import { Header } from '../../components/Header';
import { FormikContainer } from '../../components/common/FormikContainer';

const Main = () => {
  return (
    <S.Container>
      <Header />
      <FormikContainer />
    </S.Container>
  );
};

export default Main;
