import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail } from 'validator';

import { register } from '../../redux/actions/auth';

const required = (value) => {
    if (!value) {
        return <div role="alert">field required!</div>;
    }
};

const validEmail = (value) => {
    if (!isEmail(value)) {
        return <div role="alert">not a valid email</div>;
    }
};

const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return <div role="alert">username must be more than 3 char</div>;
    }
};

const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return <div role="alert">pass must be between 6 - 40 char</div>;
    }
};

const Register = () => {
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successful, setSuccessful] = useState(false);

    const { message } = useSelector((state) => state.message);
    const dispatch = useDispatch();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(register(username, email, password))
                .then(() => {
                    setSuccessful(true);
                })
                .catch(() => {
                    setSuccessful(false);
                });
        }
    };
    return (
        <div>
            <div>image</div>
            <Form onSubmit={handleRegister} ref={form}>
                {!successful && (
                    <>
                        <div>
                            <label htmlFor="username">username</label>
                            <Input
                                type="text"
                                name="username"
                                value={username}
                                onChange={onChangeUsername}
                                validations={[required, vusername]}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">email</label>
                            <Input
                                type="text"
                                name="email"
                                value={email}
                                onChange={onChangeEmail}
                                validations={[required, validEmail]}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">password</label>
                            <Input
                                type="password"
                                name="password"
                                value={password}
                                onChange={onChangePassword}
                                validations={[required, vpassword]}
                            />
                        </div>
                        <div>
                            <button>sign up btn</button>
                        </div>
                    </>
                )}

                {message && (
                    <div>
                        <div
                            className={
                                successful ? 'bg-green-400' : 'bg-red-400'
                            }
                            role="alert"
                        >
                            {message}
                        </div>
                    </div>
                )}
                <CheckButton style={{ display: 'none' }} ref={checkBtn} />
            </Form>
        </div>
    );
};

export default Register;
