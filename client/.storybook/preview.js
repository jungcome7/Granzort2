import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import GlobalStyle from '../src/styles/GlobalStyle';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
  (Story) => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  ),
];
