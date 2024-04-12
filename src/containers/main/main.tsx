import React  from 'react';
import styles from "./main.module.scss";
import {Link} from "react-router-dom";

interface MainProps {

}

const Main: React.FC<MainProps> = ({}) => {
    return <div className={styles.main}>
        <Link to="/SubActSig">Предмет, Действие, Признак</Link>
    </div>;
}

export default Main;
