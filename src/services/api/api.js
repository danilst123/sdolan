/**
 * @bxjs_lang_path
 */
import axios from "axios";
import { refreshToken } from "../../features/auth/authSlice";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

let inited = false;
let checkTokenInProcess = false;

const getExpirationDate = (jwtToken) => {
  if (!jwtToken) {
    return null;
  }

  const jwt = JSON.parse(atob(jwtToken.split(".")[1]));

  return (jwt && jwt.exp && jwt.exp * 1000) || null;
};

const isExpired = (exp) => {
  if (!exp) {
    return false;
  }

  return Date.now() > exp;
};

async function checkToken(store) {
  const token = store.getState().auth.oidc.id_token;

  if (checkTokenInProcess) {
    return;
  }

  checkTokenInProcess = true;
  if (token && isExpired(getExpirationDate(token))) {
    await store.dispatch(
      refreshToken({ refresh_token: store.getState().auth.oidc.refresh_token })
    );
    checkTokenInProcess = false;
  }
}

const setUpInterceptors = (store) => {
  if (inited) {
    return;
  }
  inited = true;

  api.interceptors.request.use(
    async (config) => {
      await checkToken(store);
      const token = store.getState().auth.oidc.id_token;
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export default api;
export { setUpInterceptors };
