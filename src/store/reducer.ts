import {appReducer}           from "../slices/app";
import {modalReducer}         from "../slices/modal";

const reducer = {
    app: appReducer,
    modal: modalReducer,
};
export default reducer;
