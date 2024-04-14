import React                   from 'react';
import {Dialog, DialogContent} from "@mui/material";
import styles                  from './statistic.module.scss';
import {useSelector}           from "react-redux";
import {TStore}                from "../../../store/store";

interface StatisticPopupProps {
    isOpen: boolean,
    setOpen:  React.Dispatch<React.SetStateAction<boolean>>,
}

const StatisticPopup: React.FC<StatisticPopupProps> = ({setOpen, isOpen}) => {
    const stat = useSelector((state:TStore)=> state.statistic.completedTasks);
    const statR = stat.reverse();

    return <Dialog
        open={isOpen}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-dialog-title"
        aria-describedby="simple-dialog-description"
        className={styles.dialog}
        maxWidth={"lg"}
    >
        <DialogContent className={styles.content}>
           <div className={styles.header}>Статистика</div>

               {!!stat.length && <div className={styles.list}>
                   {statR.map((el, idx)=>{
                       const date = new Date(el.dateTime);
                       return <div key={el.uuid} className={styles.item}>
                            <div className={styles.number}>{idx+1}</div>
                            <div className={styles.name}>{el.name}</div>
                            <div className={styles.count}>{el.rightCount+el.wrongCount}</div>
                            <div className={styles.right}>{el.rightCount}</div>
                            <div className={styles.wrong}>{el.wrongCount}</div>
                            <div className={styles.time}>{date.toISOString().substring(0, 10)} {date.toLocaleTimeString()}</div>
                   </div>})}
               </div>}


        </DialogContent>
    </Dialog>;
}

export default StatisticPopup;
