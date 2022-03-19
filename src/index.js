import React from "react";
import ReactDOM from "react-dom";

//! Добавление собственного midleware
import { spamFilter } from "./redux/middleware";
//

//! Создание нашего хранилища внутри головного компонента

import { createStore } from "redux";
import { rootReducer } from "./redux/rootReducer";
import { Provider } from "react-redux";

import { compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";

//! Создание нашего REDUX-STORE(хранилища), в который передали наш корневой REDUCER - в котором храняться все reducers - для изменения state в store

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, spamFilter),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  //! Компонент PROVIDER - оборачивает наш компонент APP , и получает объект хранилища, чтобы в последствии передавать всем вложенным объектам APP доступ к основному хранилищк 'STORE'
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
