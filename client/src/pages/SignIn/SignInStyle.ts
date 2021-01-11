import { Button } from '../../components/common/Button';
import styled from 'styled-components';

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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.div`
  margin: 40px;
`;

export const SignInButton = styled(Button)`
  margin: 5px;
  width: 200px;
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
