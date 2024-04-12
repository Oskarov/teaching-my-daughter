import React, {useEffect, useState} from 'react';
import {useDispatch}                from "react-redux";
import {formTask1}                  from "../../../effects/SASEffect";
import {ISASTask1question}          from "../../../interfaces/ISubjectActionSign";
import mainStyle                    from "../../../all.module.scss";
import styles                       from "./index.module.scss";

interface FindRightSubjectActionSignProps {

}

const FindRightSubjectActionSign: React.FC<FindRightSubjectActionSignProps> = ({}) => {
    const dispatch = useDispatch();
    const [questions, setQuestions] = useState<ISASTask1question[]>([]);


    useEffect(() => {
        const fn = async () => {
            const data = await dispatch(formTask1(10)) as unknown as ISASTask1question[];
            if (data.length) {
                setQuestions(data);
            }
        }
        fn();
    }, [])

    return  <div className={mainStyle.centerWrapper}>
        <div className={mainStyle.centerContainer}>
            <div className={styles.header}>Задание 1: Найди подходящие слова</div>


        </div>
    </div>;
}

export default FindRightSubjectActionSign;
