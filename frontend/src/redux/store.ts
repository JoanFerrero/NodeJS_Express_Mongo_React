import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import authReducer from './slice/auth'

const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['mode','user','token', 'card', 'id']
}

export const store = configureStore({
  reducer: {
    auth: persistReducer<ReturnType<typeof authReducer>>(persistAuthConfig, authReducer)
  },
  middleware: (defaultMiddleware) => defaultMiddleware({
    serializableCheck: false
  })
})

export type RootState = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch

export const persistor = persistStore(store)

export default store