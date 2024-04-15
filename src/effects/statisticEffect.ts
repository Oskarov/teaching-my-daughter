import {Dispatch}        from "redux";
import {ICompletedTasks} from "../interfaces/IStatistic";
import {addCompleted}    from "../slices/statistic";

export const addStatisticData = (data: ICompletedTasks) => {
    return async function (dispatch: Dispatch<any>) {
      dispatch(addCompleted(data));
    }
}