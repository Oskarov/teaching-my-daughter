import {appReducer}       from "../slices/app";
import {modalReducer}     from "../slices/modal";
import {statisticReducer} from "../slices/statistic";
import {settingsReducer}  from "../slices/settings";

const reducer = {
    app: appReducer,
    modal: modalReducer,
    statistic: statisticReducer,
    settings: settingsReducer
};
export default reducer;
