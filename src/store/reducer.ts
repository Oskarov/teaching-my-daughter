import {appReducer}       from "../slices/app";
import {modalReducer}     from "../slices/modal";
import {statisticReducer} from "../slices/statistic";

const reducer = {
    app: appReducer,
    modal: modalReducer,
    statistic: statisticReducer
};
export default reducer;
