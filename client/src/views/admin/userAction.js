
import { getUserPending, getUserSuccess, getUserFail } from "./userSlice";
import { fetchUser } from "../../_api/userApi";

export const getUserProfile = () => async (dispatch) => {
    try {
        dispatch(getUserPending());

        const result = await fetchUser();
        console.log("const result:", result)

        if (result.user && result.user._id)
            return dispatch(getUserSuccess(result.user));

        dispatch(getUserFail("User is not found"));
    } catch (error) {
        dispatch(getUserFail(error));
    }
};