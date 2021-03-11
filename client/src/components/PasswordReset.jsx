import React from "react";

export const ResetPassword = ({
    handleOnChange,
    handleOnResetSubmit,
    formSwitcher,
    email,
}) => {
    return (
        <>
            <div>
                <div>
                    <div className="flex flex-col">
                        <h1 className="text-info text-center">Reset Password</h1>
                        <hr />
                        <form
                            autoComplete="off"
                            onSubmit={handleOnResetSubmit}>
                            <div>
                                <h2>Email Address</h2>
                                <form
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={handleOnChange}
                                    placeholder="Enter Email"
                                    required
                                >
                                </form>
                            </div>

                            <button type="submit">Reset Password</button>
                        </form>
                        <hr />
                    </div>
                </div>

                <div>
                    <div>
                        <a href="#!" onClick={() => formSwitcher("login")}>
                            Login Now
                    </a>
                    </div>
                </div>
            </div>
        </>
    );
};
/*
ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
}; */