import { DECREMENT } from "../action/counterAction";
import {FETCH_USER_LOGIN_SUCCESS} from "../action/userAction"
const INITIAL_STATE = {
  user: {
    email: "",
    username: "",
    image: "",
    role: "",
    createAt: "",
    id: "",
  },
  isAuth: false,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          email: action?.payload?.DT?.email,
          username: action?.payload?.DT?.username,
          image: action?.payload?.DT?.image,
          role: action?.payload?.DT?.role,
          createAt: action?.payload?.DT?.createAt,
          id: action?.payload?.DT?.id,
        },
        isAuth: true,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default userReducer;
