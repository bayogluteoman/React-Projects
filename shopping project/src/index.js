import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

import { Provider} from 'react-redux';
import store from './redux/store';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>  
      <App />
    </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*  Provider nesnesini projemize dahil diyoruz. Ardından sarmallama işlemini 
gerçekleştiriyoruz. Provider ile sararken store adında bir parametre tanımlamanız 
gerekiyor. Bu parametrenin içine yazacağınız değişken adı sizin storunuza verdiğiniz
isim ile aynı olmak zorunda. */
