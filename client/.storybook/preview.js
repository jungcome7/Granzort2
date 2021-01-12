import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import GlobalStyle from '../src/styles/GlobalStyle';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <>
      <MemoryRouter>
          <GlobalStyle />
          <Story />
      </MemoryRouter>
    </>
  ),
];
