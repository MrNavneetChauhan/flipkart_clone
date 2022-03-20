import {store} from "./redux/store"
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider} from 'react-redux';
 
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { TemplateProvider } from './components/context/coreCss';
import { UserContextProvider } from './components/context/user.context';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store} >
    <UserContextProvider>
    <TemplateProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </TemplateProvider>
    </UserContextProvider>
    </ReduxProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
