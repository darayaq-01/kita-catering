import { configureStore } from "@reduxjs/toolkit"

import userReducer from 'views/admin/userSlice'

import loginReducer from "views/auth/Login/loginSlice";
import registrationReducer from 'views/auth/Registration/userRegistrationSlice'


const store = configureStore({
    reducer: {
        user: userReducer,
        login: loginReducer,
        registration: registrationReducer,
    }
})

export default store;