import { auth, provider } from "./firebase";
import { LOGIN_LOAD, LOGIN_SUCC, LOGIN_FAIL } from "./const/constLogin";
export const saveInfLogin = () => async (dispatch) => {
  dispatch({
    type: LOGIN_LOAD,
    loading: true,
  });
  try {
    const loginData = await auth.signInWithPopup(provider);
    dispatch({
      type: LOGIN_SUCC,
      payload: loginData.user,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      err: error,
    });
  }
};
