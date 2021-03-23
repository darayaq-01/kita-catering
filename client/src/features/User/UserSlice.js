import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// routes
// const rootURL = "/api"
// const userURL = `rootURL + "/users/login"`
// const productURL = `rootURL + "/products`

export const signupUser = createAsyncThunk(
    'users/signupUser',
    async (
        {
            firstName,
            lastName,
            email,
            address: { street, houseNumber, postalCode, location },
            password,
        },
        thunkAPI
    ) => {
        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    address: {
                        street,
                        houseNumber,
                        postalCode,
                        location,
                    },
                    password,
                }),
            });
            let data = await response.json();
            console.log('36. userSlice: data', data);

            if (response.status === 200) {
                localStorage.setItem('token', data.token);
                return { ...data, firstName: firstName, email: email };
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (e) {
            console.log('Error', e.response.data);
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

export const loginUser = createAsyncThunk(
    'users/login',
    async ({ email, password }, thunkAPI) => {
        try {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });
            let data = await response.json();
            console.log('response', data);
            if (response.status === 200) {
                localStorage.setItem('token', data.token);
                return data;
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (e) {
            console.log('Error', e.response.data);
            thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

export const fetchUserBytoken = createAsyncThunk(
    'users/fetchUserByToken',
    async ({ token }, thunkAPI) => {
        try {
            const response = await fetch('/api/users/profile', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            let data = await response.json();
            console.log(data);
            localStorage.setItem('firstName', data.firstName);
            localStorage.setItem('isAdmin', data.isAdmin);

            if (response.status === 200) {
                return { ...data };
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (e) {
            console.log('Error', e.response.data);
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        firstName: '',
        lastName: '',
        email: '',
        address: {
            street: '',
            houseNumber: '',
            postalCode: '',
            location: '',
        },
        password: '',
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: '',
    },
    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;

            return state;
        },
    },
    extraReducers: {
        [signupUser.fulfilled]: (state, { payload }) => {
            console.log('payload', payload);
            state.isFetching = false;
            state.isSuccess = true;
            state.email = payload.user.email;
            state.firstName = payload.user.name;
        },
        [signupUser.pending]: (state) => {
            state.isFetching = true;
        },
        [signupUser.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.message;
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            state.email = payload.email;
            state.firstName = payload.name;
            state.isFetching = false;
            state.isSuccess = true;
            return state;
        },
        [loginUser.rejected]: (state, { payload }) => {
            console.log('payload', payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.message;
        },
        [loginUser.pending]: (state) => {
            state.isFetching = true;
        },
        [fetchUserBytoken.pending]: (state) => {
            state.isFetching = true;
        },
        [fetchUserBytoken.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.isSuccess = true;

            state.email = payload.email;
            state.firstName = payload.name;
        },
        [fetchUserBytoken.rejected]: (state) => {
            console.log('fetchUserBytoken');
            state.isFetching = false;
            state.isError = true;
        },
    },
});

export const { clearState } = userSlice.actions;

export const userSelector = (state) => state.user;
