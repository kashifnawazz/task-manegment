import {createSlice, PayloadAction} from "@reduxjs/toolkit"


type InitialState = {
    value: AuthState;
}

type AuthState = {
   
}
const initialState = {
    value: {
        isAuth: false,
        username: "",
        uid: "",
        isAdmin: false
    }
}

//