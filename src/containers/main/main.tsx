import React  from 'react';
import styles from "./main.module.scss";
import {Link} from "react-router-dom";
import mainStyle from 'all.module.scss';


interface MainProps {

}

const Main: React.FC<MainProps> = ({}) => {
    return <div className={styles.main}>
        <div className={mainStyle.centerWrapper}>
            <div className={mainStyle.centerContainer}>
                <div className={styles.header}>Учим дочку</div>
                <div className={mainStyle.links}>
                    <Link to="/SubActSig">Предмет, Действие, Признак</Link>
                </div>
                <div className={styles.footer}/>
            </div>
        </div>

    </div>;
}

export default Main;
