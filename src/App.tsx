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
import Control from 'containers/control/control';
import LessonTwoSubjectActionSign from "./containers/SubjectActionSign/lessonTwo";
import LessonThreeSubjectActionSign from "./containers/SubjectActionSign/lessonThree";
import LessonFourSubjectActionSign from "./containers/SubjectActionSign/lessonFour";


function App() {
    const loadingText = useSelector((state: TStore) => state.app.loadingText);
    const dispatch = useDispatch();
   /* useEffect(() => {
        setTimeout(() => {
            dispatch(setLoading(''))
        }, 1000)
    }, []);*/

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
        {
            path: "/SubActSig/LessonTwo",
            loader: () => ({ message: "Loading page" }),
            Component() {
                return <LessonTwoSubjectActionSign/>
            },
        },
        {
            path: "/SubActSig/LessonThree",
            loader: () => ({ message: "Loading page" }),
            Component() {
                return <LessonThreeSubjectActionSign/>
            },
        },
        {
            path: "/SubActSig/LessonFour",
            loader: () => ({ message: "Loading page" }),
            Component() {
                return <LessonFourSubjectActionSign/>
            },
        },
    ]);

    return (
        <div className={styles.app}>
            <Loader loading={!!loadingText} content={loadingText}/>
            <RouterProvider router={router}/>
            <ReduxConfirmationDialog/>
            <ReduxInformationDialog/>
            <Control/>
        </div>
    );
}

export default App;
