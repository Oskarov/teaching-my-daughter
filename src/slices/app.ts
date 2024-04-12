import {createSlice, PayloadAction}                              from '@reduxjs/toolkit';
import {IAppState, IConfirmation, IInformation}                  from "../interfaces/IApp";

const initialState: IAppState = {
    loadingText: '',
}


const appSlice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        setLoading: (state, {payload}: PayloadAction<string>) => {
            return {
                ...state,
                loadingText: payload
            }
        },
    }
})

export const appReducer = appSlice.reducer;
export const {
    setLoading
} = appSlice.actions;
