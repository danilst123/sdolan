import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/auth/userSlice";
import themeSlice from "../features/theme/slice";
import viewSlice from "../features/view/slice";
import { getUser } from "../features/auth/userSlice";
import { setUpInterceptors } from "../services/api/api";

const apiMiddleWare = (store) => (next) => (action) => {
  setUpInterceptors(store);
  return next(action);
};

const store = configureStore({
  reducer: {
    auth: authReducer,
    userInfo: userReducer,
    theme: themeSlice,
    view: viewSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMiddleWare),
});

//subscribers
let currentToken;
store.subscribe(() => {
  let previousToken = currentToken;

  currentToken = store.getState().auth.oidc.id_token;

  //here update store data
  if (previousToken !== currentToken && previousToken !== "") {
    store.dispatch(getUser());
  }
});

export default store;
