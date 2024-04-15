import React       from 'react';
import styles      from './taskCompleted.module.scss';
import {Link}      from "react-router-dom";
import CachedIcon  from '@mui/icons-material/Cached';
import ReplyIcon   from '@mui/icons-material/Reply';
import CottageIcon from '@mui/icons-material/Cottage';
import {Tooltip}   from "@mui/material";

interface TaskOverlayProps {
    taskCompleted: boolean,
    rightAnswersCount: number,
    wrongAnswersCount: number,
    targetToReturn: string,
}

const TaskCompleted: React.FC<TaskOverlayProps> = ({
                                                       taskCompleted,
                                                       rightAnswersCount,
                                                       wrongAnswersCount,
                                                       targetToReturn
                                                   }) => {

    const refreshPage = () => {
        window.location.reload();
    }

    return <>
        {taskCompleted && <div className={styles.completed}>
            <div className={styles.cong}>Поздравляю, тест пройден! Умничка!</div>
            <div className={styles.resume}> В этот раз правильных ответов <span>{rightAnswersCount}</span>, а не
                правильных <span>{wrongAnswersCount}</span></div>
            <div className={styles.control}>
                <Tooltip title={'Вернуться в список заданий'}>
                    <Link to={`/${targetToReturn}`} className={styles.button}>
                        <ReplyIcon/>
                    </Link>
                </Tooltip>
                <Tooltip title={'Пройти задание заново'} onClick={refreshPage}>
                    <div className={styles.button}>
                        <CachedIcon/>
                    </div>
                </Tooltip>
                <Tooltip title={'Вернуться на главную страницу'}>
                    <Link to={`/`} className={styles.button}>
                        <CottageIcon/>
                    </Link>
                </Tooltip>
            </div>
        </div>}
    </>;
}

export default TaskCompleted;
