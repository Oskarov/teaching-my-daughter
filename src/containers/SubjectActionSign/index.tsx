import React     from 'react';
import {Link}    from "react-router-dom";
import mainStyle from "../../all.module.scss";
import styles from './index.module.scss';

interface SubjectActionSignProps {

}

const SubjectActionSign: React.FC<SubjectActionSignProps> = ({}) => {
    return <div>
        <div className={mainStyle.centerWrapper}>
            <div className={mainStyle.centerContainer}>
                <div className={styles.header}>Предмет, Действие, Признак</div>
                <div className={mainStyle.links}>
                    <Link to="/SubActSig/FindRight">Задание 1: Найди подходящие слова</Link>
                </div>
                <div className={mainStyle.links}>
                    <Link to="/SubActSig/LessonTwo">Задание 2: Найди подходящую категорию слов</Link>
                </div>
                <div className={mainStyle.links}>
                    <Link to="/SubActSig/LessonThree">Задание 3: Найди слово, которое отвечает на вопрос</Link>
                </div>
                <div className={mainStyle.links}>
                    <Link to="/SubActSig/LessonFour">Задание 4: Найди слово, которое относится к нужной категории</Link>
                </div>
            </div>
        </div>

    </div>;
}

export default SubjectActionSign;
