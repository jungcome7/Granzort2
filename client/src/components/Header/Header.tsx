import React from 'react';
import { Button } from '../common/Button';
import * as S from './HeaderStyle';

const Header = () => {
  return (
    <S.Container>
      <S.Logo>GRANZORT</S.Logo>
      <Button>이것은 버튼이다</Button>
    </S.Container>
  );
};

export default Header;
