import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { GlobalStyles } from './style/globalStyle';
import {theme} from './style/theme';
import {ThemeProvider} from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
);
