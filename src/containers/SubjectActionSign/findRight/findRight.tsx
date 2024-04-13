import React, {useEffect, useState} from 'react';
import {useDispatch}                from "react-redux";
import {formTask1}                  from "../../../effects/SASEffect";
import {ISASQuestions, ISASTask1question} from "../../../interfaces/ISubjectActionSign";
import mainStyle                    from "../../../all.module.scss";
import styles                       from "./index.module.scss";

interface FindRightSubjectActionSignProps {

}

const FindRightSubjectActionSign: React.FC<FindRightSubjectActionSignProps> = ({}) => {
    const dispatch = useDispatch();
    const [questions, setQuestions] = useState<ISASTask1question[]>([]);


    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);





    useEffect(() => {
        const fn = async () => {
            const data = await dispatch(formTask1(10)) as unknown as ISASTask1question[];
            if (data.length) {
                console.log(data);
                setQuestions(data);
            }
        }
        fn();
    }, [])


    const answerHandler = (answer: ISASQuestions) => {

    }



    return  <div className={mainStyle.centerWrapper}>
        <div className={mainStyle.centerContainer}>
            <div className={styles.header}>Задание 1: На какой вопрос отвечает слово?</div>
            <div className={styles.subheader}>На какой вопрос отвечает слово зеленого цвета?</div>
            {questions.length > 0 && !!questions[currentQuestionIndex] && <div>
                <div>
                    <span className='active-question-no'>{questions[currentQuestionIndex].number}</span>
                    <span className='total-question'>{questions.length}</span>
                    <div>{questions[currentQuestionIndex].questionItem}</div>
                    <div>
                        <div onClick={(answerHandler) => questions[currentQuestionIndex]}>{ISASQuestions.Кто}</div>
                        <div onClick={(answerHandler) => questions[currentQuestionIndex]}>{ISASQuestions.Что}</div>
                        <div onClick={(answerHandler) => questions[currentQuestionIndex]}>{ISASQuestions.ЧтоДелает}</div>
                        <div onClick={(answerHandler) => questions[currentQuestionIndex].}>{ISASQuestions.Какой}</div>
                    </div>

                </div>

            </div>}
        </div>
    </div>;
}

export default FindRightSubjectActionSign;
