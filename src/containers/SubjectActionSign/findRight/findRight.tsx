import React, {useEffect, useState}       from 'react';
import {useDispatch}                      from "react-redux";
import {formTask1}                        from "../../../effects/SASEffect";
import {ISASQuestions, ISASTask1question} from "../../../interfaces/ISubjectActionSign";
import mainStyle                          from "../../../all.module.scss";
import styles                             from "./index.module.scss";
import CN                                 from 'classnames';

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


    useEffect(() => {
        const fn = async () => {
            const data = await dispatch(formTask1(10)) as unknown as ISASTask1question[];
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
                setTestCompeted(true);
            } else {
                setCurrentQuestionIndex(state => state + 1);
            }

        }, 5000)
    }


    return <div className={mainStyle.centerWrapper}>
        <div className={mainStyle.centerContainer}>
            {!testCompleted && <div>
                {questions.length > 0 && !!questions[currentQuestionIndex] && !!overlayData &&
                <div className={CN(styles.overlay, {
                    [styles.wrong]: overlayData === "Не правильно"
                })}>
                    <div>
                        <div className={styles.verdict}>{overlayData}</div>
                        <div
                            className={styles.rightAnswer}>Слово <span>{questions[currentQuestionIndex].questionItem}</span> отвечает
                            на
                            вопрос <span>{questions[currentQuestionIndex].rightAnswer}</span></div>
                    </div>
                </div>}
                <div className={styles.header}>Задание 1: На какой вопрос отвечает слово?</div>
                <div className={styles.subheader}>На какой вопрос отвечает слово зеленого цвета?</div>
                {questions.length > 0 && !!questions[currentQuestionIndex] && <div>
                    <div>
                        <div>Вопрос № {questions[currentQuestionIndex].number} из {questions.length}</div>
                        <div>{questions[currentQuestionIndex].questionItem}</div>
                        <div>
                            <div onClick={() => {
                                answerHandler(ISASQuestions.Кто)
                            }}>{ISASQuestions.Кто}</div>
                            <div onClick={() => {
                                answerHandler(ISASQuestions.Что)
                            }}>{ISASQuestions.Что}</div>
                            <div onClick={() => {
                                answerHandler(ISASQuestions.ЧтоДелает)
                            }}>{ISASQuestions.ЧтоДелает}</div>
                            <div onClick={() => {
                                answerHandler(ISASQuestions.Какой)
                            }}>{ISASQuestions.Какой}</div>
                        </div>

                    </div>

                </div>}
            </div>}

            {testCompleted && <div>
                <div>Поздравляю, тест пройден! Умничка!</div>
                <div> В этот раз правильных ответов <span>{rightAnswersCount}</span>, а не
                    правильных <span>{wrongAnswersCount}</span></div>
            </div>}

        </div>
    </div>;
}

export default FindRightSubjectActionSign;
