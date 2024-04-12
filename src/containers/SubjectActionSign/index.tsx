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

            </div>
        </div>

    </div>;
}

export default SubjectActionSign;
