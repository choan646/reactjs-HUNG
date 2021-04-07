import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles";

//Setup redux
import { createStore, applyMiddleware, compose } from "redux";

//Ket noi react voi redux lai voi nhau
import { Provider } from "react-redux";
// import rootReducer
import rootReducer from "./redux/reducers/rootReducer";
//Setup redux-thunk
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk);

//Gộp middleware và rudux devtool lại làm 1
const enhancer = compose(
  middleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


//Tao store tu reducer
const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
