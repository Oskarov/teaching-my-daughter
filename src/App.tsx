import React, {useEffect}                                           from 'react';
import styles                                                       from './app.module.scss';
import {useDispatch, useSelector}                                   from "react-redux";
import Main                                                         from "./containers/main/main";
import ReduxConfirmationDialog                                      from "./components/reduxConfirmationDialog";
import ReduxInformationDialog                                       from "./components/reduxInformationDialog";
import {TStore}                                                     from "./store/store";
import Loader                                                       from "./components/loader";
import {setLoading}                                                 from "./slices/app";
import {createBrowserRouter, Route, Router, RouterProvider, Routes} from 'react-router-dom';
import SubjectActionSign                                            from "./containers/SubjectActionSign";
import FindRightSubjectActionSign
                                                                    from "./containers/SubjectActionSign/findRight/findRight";


function App() {
    const {loadingText} = useSelector((state: TStore) => ({
        loadingText: state.app.loadingText
    }));
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch(setLoading(''))
        }, 1000)
    }, []);

    let router = createBrowserRouter([
        {
            path: "/",
            loader: () => ({ message: "Loading main page" }),
            Component() {
                return <Main/>
            },
        },
        {
            path: "/SubActSig",
            loader: () => ({ message: "Loading page" }),
            Component() {
                return <SubjectActionSign/>
            },
        },
        {
            path: "/SubActSig/FindRight",
            loader: () => ({ message: "Loading page" }),
            Component() {
                return <FindRightSubjectActionSign/>
            },
        },
    ]);

    return (
        <div className={styles.app}>
            <Loader loading={!!loadingText} content={loadingText}/>
            <RouterProvider router={router}/>
            <ReduxConfirmationDialog/>
            <ReduxInformationDialog/>
        </div>
    );
}

export default App;
