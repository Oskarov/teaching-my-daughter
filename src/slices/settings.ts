import {createSlice, PayloadAction}               from '@reduxjs/toolkit';
import {generateRandomString, generateRandomUUid} from "../utils/generateRandomString";
import {ISettingsState}                           from "../interfaces/ISettings";

const initialState: ISettingsState = {
    numberOfQuestions: 10,
    overlayDelayMs: 5000
}


const settingsSlice = createSlice({
    name: 'settings',
    initialState: initialState,
    reducers: {
        changeNumberOfQuestions: (state, {payload}: PayloadAction<number>) => {
            return {
                ...state,
                numberOfQuestions: payload
            }
        },
        changeOverlayDelay: (state, {payload}: PayloadAction<number>) => {
            return {
                ...state,
                overlayDelayMs: payload
            }
        },
    }
})

export const settingsReducer = settingsSlice.reducer;
export const {
    changeNumberOfQuestions,
    changeOverlayDelay
} = settingsSlice.actions;
