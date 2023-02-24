import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import usersReducer from "./userSlice";
// ...

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "block",
  version: 1,
  storage,
};

const appReducer = combineReducers({
  users: usersReducer,
});

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// });

// Infer the `RootState` and `AppDispatch` types from the store itself
var RootState = store.getState;
// Inferred type: {users: UsersState}
var AppDispatch = store.dispatch;
