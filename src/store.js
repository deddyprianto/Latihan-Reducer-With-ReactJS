import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import condition from "./reducer/mainReducer";
import reducerLogin from "./reducer/reducerLogin";

const reduce = combineReducers({
  mainPage: condition,
  login: reducerLogin,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reduce, composeEnhancer(applyMiddleware(thunk)));
export default store;
