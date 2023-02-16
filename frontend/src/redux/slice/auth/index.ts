import { createSlice } from "@reduxjs/toolkit";

export interface AuthState{
  mode: string,
  id: String | null,
  user: String | null,
  token: String | null,
  card: Array<Object>
}

const initialState: AuthState = {
  mode: "white",
  id: null,
  user: null,
  token: null,
  card: [],
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark": "light"
    },
    setId: (state, action ) => {
      state.id = action.payload.id
    },
    setLogin: (state, action ) => {
      state.user = action.payload.user
      state.token = action.payload.token
    },
    setLogout: (state) => {
      state.user = null
      state.token = null
      state.card = []
      state.id = null
    },
    setCard: (state, action) => {
      state.card = action.payload.data;
    },
    setNotCard: (state) => {
      state.card = [];
    },
  },
})

export const { setMode, setId, setLogin, setLogout , setCard, setNotCard} = authSlice.actions

export default authSlice.reducer