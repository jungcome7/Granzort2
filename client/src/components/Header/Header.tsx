import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../common/Button';
import * as S from './HeaderStyle';

const Header = () => {
  return (
    <S.Container>
      <S.Logo>GRANZORT</S.Logo>
      <Link to="/signin">
        <Button>이것은 버튼이다</Button>
      </Link>
    </S.Container>
  );
};

export default Header;
