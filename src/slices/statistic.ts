import {createSlice, PayloadAction}             from '@reduxjs/toolkit';
import {IAppState, IConfirmation, IInformation} from "../interfaces/IApp";
import {ICompletedTasks, IStatisticState}         from "../interfaces/IStatistic";
import {generateRandomString, generateRandomUUid} from "../utils/generateRandomString";

const initialState: IStatisticState = {
    completedTasks: []
}


const statisticSlice = createSlice({
    name: 'statistic',
    initialState: initialState,
    reducers: {
        addCompleted: (state, {payload}: PayloadAction<ICompletedTasks>) => {
            const time = new Date();
            return {
                ...state,
                completedTasks: [...state.completedTasks, {
                    ...payload,
                    dateTime: time.toString(),
                    uuid: generateRandomUUid()
                }]
            }
        },
    }
})

export const statisticReducer = statisticSlice.reducer;
export const {
    addCompleted
} = statisticSlice.actions;
