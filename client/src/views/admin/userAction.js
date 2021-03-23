
import { getUserSuccess, getUserFail } from "./userSlice";
import { fetchUser } from "../../_api/userApi";


export const getUserProfile = () => async (dispatch) => {
    try {
        await fetchUser().then((response) => dispatch(getUserSuccess(response.data)))
    } catch (err) {
        return console.log(err.message)
    }

};