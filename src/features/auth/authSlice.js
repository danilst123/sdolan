import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/api/api";

const getToken = createAsyncThunk("auth/getToken", async (payload) => {
  const response = await api.post("get-token/", {
    username: payload.username,
    password: payload.password,
  });

  return response.data;
});

const refreshToken = createAsyncThunk("auth/refreshToken", async (payload) => {
  const response = await api.post("refresh-token/", {
    refresh_token: payload.refresh_token,
  });

  return response.data;
});

const updateLocalStorage = (oidc) => {
  localStorage.oidc = JSON.stringify(oidc);
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    oidc: (function () {
      return {};
    })(),
    context: "sign-in",
  },
  reducers: {
    init(state, action) {
      if (localStorage.oidc) {
        state.oidc = JSON.parse(localStorage.oidc);
      }
    },
    changeContext(state, action) {
      state.context = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getToken.fulfilled, (state, action) => {
        state.oidc = action.payload;
        updateLocalStorage(action.payload);
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.oidc = action.payload;
        updateLocalStorage(action.payload);
      })
      .addCase(getToken.rejected, (state, action) => {
        state.oidc = {};
        updateLocalStorage({});
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.oidc = {};
        updateLocalStorage({});
      });
  },
});

export const { init, changeContext } = authSlice.actions;
export { getToken, refreshToken };
export default authSlice.reducer;
