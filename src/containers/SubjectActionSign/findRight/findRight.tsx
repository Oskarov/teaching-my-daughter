import React, {useEffect, useState}       from 'react';
import {useDispatch, useSelector}         from "react-redux";
import {formTask1}                        from "../../../effects/SASEffect";
import {ISASQuestions, ISASTask1question} from "../../../interfaces/ISubjectActionSign";
import mainStyle                          from "../../../all.module.scss";
import styles                             from "./index.module.scss";
import TaskCompleted                      from "../../../components/taskCompleted/taskCompleted";
import TaskOverlay                        from "../../../components/taskOverlay/taskOverlay";
import {addStatisticData}                 from "../../../effects/statisticEffect";
import {TStore}                           from "../../../store/store";

interface FindRightSubjectActionSignProps {

}

const FindRightSubjectActionSign: React.FC<FindRightSubjectActionSignProps> = ({}) => {
    const dispatch = useDispatch();
    const [questions, setQuestions] = useState<ISASTask1question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [overlayData, setOverlayData] = useState<'' | 'Правильно' | 'Не правильно'>('');

    const [rightAnswersCount, setRightAnswersCount] = useState(0);
    const [wrongAnswersCount, setWrongAnswersCount] = useState(0);
    const [testCompleted, setTestCompeted] = useState(false);
    const numberOfQuestions = useSelector((state: TStore) => state.settings.numberOfQuestions);
    const overlayDelayMs = useSelector((state: TStore) => state.settings.overlayDelayMs);


    useEffect(() => {
        const fn = async () => {
            const data = await dispatch(formTask1(numberOfQuestions)) as unknown as ISASTask1question[];
            if (data.length) {
                setQuestions(data);
            }
        }
        fn();
    }, [])


    const answerHandler = (answer: ISASQuestions) => {
        const isRight = answer === questions[currentQuestionIndex].rightAnswer;
        if (isRight) {
            setRightAnswersCount(state => state + 1);
        } else {
            setWrongAnswersCount(state => state + 1);
        }
        setOverlayData(isRight ? 'Правильно' : "Не правильно");
        setTimeout(() => {
            setOverlayData('');
            if (currentQuestionIndex === questions.length - 1) {
                setTestCompeted(state => !state);
                dispatch(addStatisticData({
                    name: 'Предмет, действие, признак - 1 - На какой вопрос отвечает слово?',
                    rightCount: rightAnswersCount + (isRight ? 1 : 0),
                    wrongCount: wrongAnswersCount + (!isRight ? 1 : 0)
                }))
            } else {
                setCurrentQuestionIndex(state => state + 1);
            }

        }, overlayDelayMs)
    }


    return <div className={mainStyle.centerWrapper}>
        <div className={mainStyle.centerContainer}>
            <div className={styles.newContainer}>

            <div className={styles.header}>Задание 1: На какой вопрос отвечает слово?</div>
            {!testCompleted && <div>
                <TaskOverlay testCompleted={testCompleted} questions={questions}
                             currentQuestionIndex={currentQuestionIndex} overlayData={overlayData}/>
                <div className={styles.subheader}>Нажми правильную кнопку. На какой вопрос отвечает
                    слово <span>зелёного</span> цвета?
                </div>
                {questions.length > 0 && !!questions[currentQuestionIndex] && <div>
                    <div>
                        <div className={styles.counter}>Вопрос
                            № {questions[currentQuestionIndex].number} из {questions.length}</div>
                        <div className={styles.word}>{questions[currentQuestionIndex].questionItem}</div>
                        <div className={styles.buttonWrapper}>
                            <div className={mainStyle.answerButton} onClick={() => {
                                answerHandler(ISASQuestions.Кто)
                            }}>{ISASQuestions.Кто}</div>
                            <div className={mainStyle.answerButton} onClick={() => {
                                answerHandler(ISASQuestions.Что)
                            }}>{ISASQuestions.Что}</div>
                            <div className={mainStyle.answerButton} onClick={() => {
                                answerHandler(ISASQuestions.ЧтоДелает)
                            }}>{ISASQuestions.ЧтоДелает}</div>
                            <div className={mainStyle.answerButton} onClick={() => {
                                answerHandler(ISASQuestions.Какой)
                            }}>{ISASQuestions.Какой}</div>
                        </div>

                    </div>

                </div>}
            </div>}

            <TaskCompleted taskCompleted={testCompleted} rightAnswersCount={rightAnswersCount}
                           wrongAnswersCount={wrongAnswersCount} targetToReturn='SubActSig'/>
            </div>
        </div>
    </div>;
}

export default FindRightSubjectActionSign;
