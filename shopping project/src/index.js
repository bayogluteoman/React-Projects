import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
/*  Provider nesnesini projemize dahil diyoruz. Ardından sarmallama işlemini 
gerçekleştiriyoruz. Provider ile sararken store adında bir parametre tanımlamanız 
gerekiyor. Bu parametrenin içine yazacağınız değişken adı sizin storunuza verdiğiniz
isim ile aynı olmak zorunda. */
