import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ITeacherState} from "../interfaces/ITeacher";

const initialState: ITeacherState = {
    enable: false,
    password: null
}


const teacherSlice = createSlice({
    name: 'teacher',
    initialState: initialState,
    reducers: {
        setPassword: (state, {payload}: PayloadAction<string>) => {
            return {
                ...state,
                enable: true,
                password: payload

            }
        },
        setEnable: (state, {payload}: PayloadAction<boolean>) => {
            return {
                ...state,
                enable: payload

            }
        },
    }
})

export const teacherReducer = teacherSlice.reducer;
export const {
    setPassword,
    setEnable
} = teacherSlice.actions;
