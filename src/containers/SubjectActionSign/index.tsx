import React  from 'react';
import {Link} from "react-router-dom";

interface SubjectActionSignProps {

}

const SubjectActionSign: React.FC<SubjectActionSignProps> = ({}) => {
    return <div>
        <h1>Предмет, Действие, Признак</h1>
        <Link to="/SubActSig/FindRight">Задание 1: Найди подходящие слова</Link>
    </div>;
}

export default SubjectActionSign;
