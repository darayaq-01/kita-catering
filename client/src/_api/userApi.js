import axios from "axios";

// routes
const rootUrl = "/api/users"
const loginUrl = rootUrl + "/login";
/* const userProfileUrl = rootUrl + "/"; */
// test if works 
const userProfileUrl = rootUrl;
const logoutUrl = rootUrl + "/logout";
const newAccessJWT = rootUrl + "tokens";
const userVerificationUrl = userProfileUrl + "/verify";

export const userRegistration = (frmData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.post(userProfileUrl, frmData);

            resolve(res.data);

            if (res.data.status === "success") {
                resolve(res.data);
            }
        } catch (error) {
            reject(error);
        }
    });
};

export const userRegistrationVerification = (frmData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.patch(userVerificationUrl, frmData);

            resolve(res.data);
            if (res.data.status === "success") {
                resolve(res.data);
            }
        } catch (error) {
            reject({ status: "error", message: error.error });
        }
    });
};

export const userLogin = (frmData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.post(loginUrl, frmData);

            resolve(res.data);
            localStorage.setItem('admin', res.data.isAdmin)
            console.log("is login admin?", res.data.isAdmin)


            if (res.data.token) {
                sessionStorage.setItem("accessJWT", res.data.token);
                localStorage.setItem(
                    "kitaCateringSite",
                    JSON.stringify({ refreshJWT: res.data.refreshJWT })
                );
            }
        } catch (error) {
            reject(error);
        }
    });
};

export const fetchUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const accessJWT = sessionStorage.getItem("accessJWT");

            if (!accessJWT) {
                reject("Token not found!");
            }

            const res = await axios.get(userProfileUrl + "/profile", {
                headers: {
                    Authorization: `Bearer ${accessJWT}`,
                },
            });
            if (res.data) {
                console.log('isAdmin', res.data.isAdmin);
            } else {
                console.log('res.data does not exist')
            }

            resolve(res.data);
        } catch (error) {
            console.log(error);
            reject(error.message);
        }
    });
};

export const fetchNewAccessJWT = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const { refreshJWT } = JSON.parse(localStorage.getItem("kitaCateringSite"));

            if (!refreshJWT) {
                reject("Token not found!");
            }

            const res = await axios.get(newAccessJWT, {
                headers: {
                    Authorization: refreshJWT,
                },
            });

            if (res.data.status === "success") {
                sessionStorage.setItem("accessJWT", res.data.accessJWT);
            }

            resolve(true);
        } catch (error) {
            if (error.message === "Request failed with status code 403") {
                localStorage.removeItem("kitaCateringSite");
            }

            reject(false);
        }
    });
};

export const userLogout = async () => {
    try {
        await axios.delete(logoutUrl, {
            headers: {
                Authorization: sessionStorage.getItem("accessJWT"),
            },
        });
    } catch (error) {
        console.log(error);
    }
};




