import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { userRegistrationVerification } from "_api/userApi";

/* import "./userVerification.style.css"; */
const initialResponse = {
    status: "",
    message: "",
};
const UserVerification = () => {
    const { _id, email } = useParams();

    const [response, setResponse] = useState(initialResponse);

    useEffect(() => {
        const dt = { _id, email };
        const apiCall = async () => {
            const result = await userRegistrationVerification(dt);
            setResponse(result);
        };
        !response.status && apiCall();
    }, [_id, email, response]);

    //call api and send the _id to verify user

    return (
        <div className="registration-page bg-info">
            <div className="mt-5">
                <div className="containter">
                    {!response.status && <p>loading...</p>}

                    {response.status && (
                        <div>
                            {response.status === "success" ? "success" : "danger"}
                            {response.message}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserVerification;