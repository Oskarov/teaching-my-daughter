import React               from 'react';
import CN                  from "classnames";
import styles              from "./taskOverlay.module.scss";
import {ISASTask1question} from "../../interfaces/ISubjectActionSign";

interface IDefaultQuestion {
    questionItem: string,
    rightAnswer: string
}

interface TaskOverlayProps {
    testCompleted: boolean,
    questions: IDefaultQuestion[],
    currentQuestionIndex: number,
    overlayData: '' | 'Правильно' | 'Не правильно',
    compareWords?: string
}

const TaskOverlay: React.FC<TaskOverlayProps> = ({testCompleted, overlayData, currentQuestionIndex, questions, compareWords}) => {
    if (!compareWords){
        compareWords = 'отвечает на вопрос'
    }
    return (!testCompleted && questions.length > 0 && !!questions[currentQuestionIndex] && !!overlayData) ?
        <div className={CN(styles.overlay, {
            [styles.wrong]: overlayData === "Не правильно"
        })}>
            <div>
                <div className={styles.verdict}>{overlayData}</div>
                <div
                    className={styles.rightAnswer}>Слово <span>{questions[currentQuestionIndex].questionItem}</span> {compareWords} <span>{questions[currentQuestionIndex].rightAnswer}</span></div>
            </div>
        </div> : <div/>
}

export default TaskOverlay;
