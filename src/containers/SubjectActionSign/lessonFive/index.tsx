import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ISASCategories, ISASQuestions, ISASTask5question} from "../../../interfaces/ISubjectActionSign";
import mainStyle from "../../../all.module.scss";
import styles from "./index.module.scss";
import TaskCompleted from "../../../components/taskCompleted/taskCompleted";
import TaskOverlay from "../../../components/taskOverlay/taskOverlay";
import {addStatisticData} from "../../../effects/statisticEffect";
import {TStore} from "../../../store/store";
import {formTask5} from "../../../effects/SASEffect";
import CN from "classnames";

interface LessonFiveSubjectActionSignProps {

}

const LessonFiveSubjectActionSign: React.FC<LessonFiveSubjectActionSignProps> = ({}) => {
    const dispatch = useDispatch();
    const [questions, setQuestions] = useState<ISASTask5question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [overlayData, setOverlayData] = useState<'' | 'Правильно' | 'Не правильно'>('');

    const [rightAnswersCount, setRightAnswersCount] = useState(0);
    const [wrongAnswersCount, setWrongAnswersCount] = useState(0);
    const [testCompleted, setTestCompeted] = useState(false);
    const numberOfQuestions = useSelector((state: TStore) => state.settings.numberOfQuestions);
    const overlayDelayMs = useSelector((state: TStore) => state.settings.overlayDelayMs);
    const [partOne, setPartOne] = useState('');
    const [partTwo, setPartTwo] = useState('');


    useEffect(() => {
        const fn = async () => {
            const data = await dispatch(formTask5(numberOfQuestions)) as unknown as ISASTask5question[];
            if (data.length) {
                setQuestions(data);
            }
        }
        fn();
    }, [])


    useEffect(() => {
        if (partOne && partTwo) {
            answerHandler(partOne, partTwo)
        }
    }, [partOne, partTwo]);


    const answerHandler = (item1: string, item2: string) => {
        const answer = `${item1} ${item2}`
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

        setPartOne('')
        setPartTwo('')
    }


    return <div className={mainStyle.centerWrapper}>
        <div className={mainStyle.centerContainer}>
            <div className={styles.newContainer}>

            <div className={styles.header}>Задание 5: К чему относится слово?</div>
            {!testCompleted && <div>
                <TaskOverlay testCompleted={testCompleted} questions={questions}
                             currentQuestionIndex={currentQuestionIndex} overlayData={overlayData} compareWords={'относится к категории'}/>
                <div className={styles.subheader}>Нажми правильную кнопку. К чему относится слово <span>зелёного</span> цвета?
                </div>
                {questions.length > 0 && !!questions[currentQuestionIndex] && <div>
                    <div>
                        <div className={styles.counter}>Вопрос
                            № {questions[currentQuestionIndex].number} из {questions.length}</div>
                        <div className={styles.word}>{questions[currentQuestionIndex].questionItem}</div>
                        <div className={styles.buttonWrapper}>
                            <div className={CN(mainStyle.answerButton, {
                                [mainStyle.active]: partOne === ISASCategories.Предмет
                            })} onClick={() => {
                                setPartOne(ISASCategories.Предмет)
                            }}>{ISASCategories.Предмет}</div>
                            <div className={CN(mainStyle.answerButton, {
                                [mainStyle.active]: partOne === ISASCategories.Действие
                            })}  onClick={() => {
                                setPartOne(ISASCategories.Действие)
                            }}>{ISASCategories.Действие}</div>
                            <div className={CN(mainStyle.answerButton, {
                                [mainStyle.active]: partOne === ISASCategories.Признак
                            })}  onClick={() => {
                               setPartOne(ISASCategories.Признак)
                            }}>{ISASCategories.Признак}</div>
                        </div>

                        <div className={styles.buttonWrapper}>
                            <div className={CN(mainStyle.answerButton, {
                                [mainStyle.active]: partTwo === ISASQuestions.Что
                            })}  onClick={() => {
                                setPartTwo(ISASQuestions.Что)
                            }}>{ISASQuestions.Что}</div>
                            <div className={CN(mainStyle.answerButton, {
                                [mainStyle.active]: partTwo === ISASQuestions.Кто
                            })}  onClick={() => {
                                setPartTwo(ISASQuestions.Кто)
                            }}>{ISASQuestions.Кто}</div>
                            <div className={CN(mainStyle.answerButton, {
                                [mainStyle.active]: partTwo === ISASQuestions.ЧтоДелает
                            })}  onClick={() => {
                                setPartTwo(ISASQuestions.ЧтоДелает)
                            }}>{ISASQuestions.ЧтоДелает}</div>
                            <div className={CN(mainStyle.answerButton, {
                                [mainStyle.active]: partTwo === ISASQuestions.Какой
                            })}  onClick={() => {
                                setPartTwo(ISASQuestions.Какой)
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

export default LessonFiveSubjectActionSign;
