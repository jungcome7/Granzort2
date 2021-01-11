import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SignIn } from './pages/SignIn';
import { Main } from './pages/Main';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/signIn" exact>
          <SignIn />
        </Route>
      </Switch>
    </>
  );
};

export default App;
