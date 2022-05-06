import { LOGIN_FAILURE, LOGIN_REQ, LOGIN_SUCCESS } from "./action";

const token =  JSON.parse(localStorage.getItem("token")) ||"";
//JSON.parse(localStorage.getItem("token")) ||
const initState = {
  isAuth: token ? true : false,
  token: token,
  isError: false,
  isLoading: false,
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQ:
      return {
        ...state,
        isAuth: false,
        isLoading: true,
        isError: false,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", JSON.stringify(payload));
      return {
        ...state,
        isAuth: true,
        token: payload,
        isLoading: false,
        isError: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuth: false,
        token: "",
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};