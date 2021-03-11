import {
    registrationPending,
    registrationSuccess,
    registrationError,
} from "./userRegistrationSlice";

import { userRegistration } from "_api/userApi";

export const newUserRegistration = (frmDt) => async (dispatch) => {
    try {
        dispatch(registrationPending());

        const result = await userRegistration(frmDt);
        result.status === "success"
            ? dispatch(registrationSuccess(result.message))
            : dispatch(registrationError(result.message));

        console.log(result);
    } catch (error) {
        dispatch(registrationError(error.message));
    }
};

