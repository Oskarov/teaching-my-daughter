import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    ISASQuestions,
    ISASTask4question,
    ISASTask1question,
    ISASCategories
} from "../../../interfaces/ISubjectActionSign";
import mainStyle from "../../../all.module.scss";
import styles from "./index.module.scss";
import TaskCompleted from "../../../components/taskCompleted/taskCompleted";
import TaskOverlay from "../../../components/taskOverlay/taskOverlay";
import {addStatisticData} from "../../../effects/statisticEffect";
import {TStore} from "../../../store/store";
import {formTask4} from "../../../effects/SASEffect";

interface LessonFourSubjectActionSignProps {

}

const LessonFourSubjectActionSign: React.FC<LessonFourSubjectActionSignProps> = ({}) => {
    const dispatch = useDispatch();
    const [questions, setQuestions] = useState<ISASTask4question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [overlayData, setOverlayData] = useState<'' | 'Правильно' | 'Не правильно'>('');

    const [rightAnswersCount, setRightAnswersCount] = useState(0);
    const [wrongAnswersCount, setWrongAnswersCount] = useState(0);
    const [testCompleted, setTestCompeted] = useState(false);
    const numberOfQuestions = useSelector((state: TStore) => state.settings.numberOfQuestions);
    const overlayDelayMs = useSelector((state: TStore) => state.settings.overlayDelayMs);


    useEffect(() => {
        const fn = async () => {
            const data = await dispatch(formTask4(numberOfQuestions)) as unknown as ISASTask4question[];
            if (data.length) {
                setQuestions(data);
                console.log(data)
            }
        }
        fn();
    }, [])


    const answerHandler = (answer: string ) => {
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

            <div className={styles.header}>Задание 4: Подбери слово, которое относится к нужной категории</div>
            {!testCompleted && <div>
                <TaskOverlay testCompleted={testCompleted} questions={questions}
                             currentQuestionIndex={currentQuestionIndex} overlayData={overlayData} compareWords={'правильный ответ'} firstWord={'К категории'}/>
                <div className={styles.subheader}>Нажми правильную кнопку. Какое слово относится к категории <span>зелёного</span> цвета?
                </div>
                {questions.length > 0 && !!questions[currentQuestionIndex] && <div>
                    <div>
                        <div className={styles.counter}>Вопрос
                            № {questions[currentQuestionIndex].number} из {questions.length}</div>
                        <div className={styles.word}>{questions[currentQuestionIndex].questionItem}</div>
                        <div className={styles.buttonWrapper}>
                            {questions[currentQuestionIndex].variants.map((element, idx) =><div key={idx} className={mainStyle.answerButton} onClick={() => {
                                answerHandler(element)}}>{element}</div>)}
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

export default LessonFourSubjectActionSign;
