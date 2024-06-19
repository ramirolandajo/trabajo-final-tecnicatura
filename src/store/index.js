import {configureStore} from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import {setupListeners} from "@reduxjs/toolkit/query";
import {authApi} from "../services/authService";
import {userApi} from "../services/userService";
export default configureStore({
    reducer: {
        authReducer,
        [userApi.reducerPath]: userApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware).concat(userApi.middleware)
})

setupListeners(configureStore.dispatch);
