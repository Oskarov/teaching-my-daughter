import {appReducer}       from "../slices/app";
import {modalReducer}     from "../slices/modal";
import {statisticReducer} from "../slices/statistic";
import {settingsReducer}  from "../slices/settings";
import {teacherReducer} from "../slices/teacher";

const reducer = {
    app: appReducer,
    modal: modalReducer,
    statistic: statisticReducer,
    settings: settingsReducer,
    teacher: teacherReducer,
};
export default reducer;
