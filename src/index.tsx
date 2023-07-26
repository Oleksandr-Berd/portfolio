import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import 'antd/dist/reset.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styled/theme';
import { GlobalStyles } from './styled/GlobalStyles';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>


      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
      
    </BrowserRouter>
    </PersistGate>
    </Provider>
);


reportWebVitals();
