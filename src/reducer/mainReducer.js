import { TASKING_LOAD, TASKING_SUCC, TASKING_FAIL } from "../const/const";

function condition(state= [], action) {
  switch (action.type) {
    case TASKING_LOAD:
      return { loading: true };
    case TASKING_SUCC:
      return { loading: false, actdata: action.comp };
    case TASKING_FAIL:
      return { msg: action.error };
    default:
      return state;
  }
}
export default condition;
