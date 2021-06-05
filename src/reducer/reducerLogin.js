import { LOGIN_LOAD, LOGIN_SUCC, LOGIN_FAIL } from "../const/constLogin";
function reducerLogin(state = [], action) {
  switch (action.type) {
    case LOGIN_LOAD:
      return { loading: true };
    case LOGIN_SUCC:
      return { loading: false, dataLogin: action.payload };
    case LOGIN_FAIL:
      return { err: action.err };
    default:
      return state;
  }
}
export default reducerLogin;
