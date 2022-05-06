import axios from "axios";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGIN_REQ = "LOGIN_REQ";

export const loginReq = () => ({
  type: LOGIN_REQ,
});

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

export const loginFailure = (err) => ({
  type: LOGIN_FAILURE,
  payload: err,
});

export const loginUser = (payload) => (dispatch) => {
  dispatch(loginReq());
  const { email, password } = payload;
  axios
    .post("https://reqres.in/api/login", {
      email,
      password,
    })
    .then((res) => dispatch(loginSuccess(res.data.token)))
    .catch((err) => dispatch(loginFailure(err.message)));
};