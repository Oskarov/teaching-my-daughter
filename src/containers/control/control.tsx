import React, {useEffect, useState} from 'react';
import styles                       from './control.module.scss';
import PlayArrowIcon                from '@mui/icons-material/PlayArrow';
import PauseIcon                    from '@mui/icons-material/Pause';
import SkipNextIcon                 from '@mui/icons-material/SkipNext';
import SkipPreviousIcon             from '@mui/icons-material/SkipPrevious';
import ReceiptLongIcon              from '@mui/icons-material/ReceiptLong';
import {Tooltip}                    from "@mui/material";
import sound1                       from '../../assets/music/01.mp3';
import sound2                       from '../../assets/music/02.mp3';
import sound3                       from '../../assets/music/03.mp3';
import StatisticPopup               from "./statisticPopup/statisticPopup";

interface MusicProps {

}

const Control: React.FC<MusicProps> = ({}) => {
    const [playState, setPlayState] = useState(true);
    const [players, setPlayer] = useState<HTMLAudioElement[]>([]);
    const [currentTrack, setCurrentTrack] = useState(0);
    const [isStatisticOpen, setStatisticOpen] = useState(false);
    const musicArray = [sound1, sound2, sound3];

    useEffect(() => {
        setPlayer([...musicArray.map(el => new Audio(el))])
    }, [])


    const play = () => {
        if (playState) {
            players[currentTrack].play();
        } else {
            players[currentTrack].pause();
        }
    }

    const next = () => {
        if (!playState) {
            players[currentTrack].load();
        }
        setCurrentTrack(state=> {
            const targetTrack =  currentTrack + 1 >= musicArray.length ? 0 : currentTrack + 1;
            if (!playState){
                players[targetTrack].play();
            }
           return targetTrack;
        });
    }

    const previous = () => {
        if (!playState) {
            players[currentTrack].load();
        }
        setCurrentTrack(state=> {
            const targetTrack =  currentTrack - 1 < 0 ? players.length - 1 : currentTrack - 1;
            if (!playState){
                players[targetTrack].play();
            }
            return targetTrack;
        });
    }

    return <div className={styles.control}>
        <StatisticPopup isOpen={isStatisticOpen} setOpen={setStatisticOpen}/>
        <Tooltip title={'Статистика'}>
            <div className={styles.button} onClick={()=>{setStatisticOpen(true)}}>
                <ReceiptLongIcon/>
            </div>
        </Tooltip>
        <div className={styles.devider}/>
        <Tooltip title={'Предыдущая мелодия'}>
            <div className={styles.button} onClick={previous}>
                <SkipPreviousIcon/>
            </div>
        </Tooltip>
        <Tooltip title={'Предыдущая мелодия'}>
            <div className={styles.button} onClick={() => {
                setPlayState(state => !state);
                play();
            }}>
                {playState ? <PlayArrowIcon/> : <PauseIcon/>}
            </div>
        </Tooltip>
        <Tooltip title={'Следующая мелодия'} onClick={next}>
            <div className={styles.button}>
                <SkipNextIcon/>
            </div>
        </Tooltip>
    </div>;
}

export default Control;
