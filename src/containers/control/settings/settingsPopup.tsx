import React                                   from 'react';
import {Dialog, DialogContent, Slider, styled} from "@mui/material";
import styles                                  from './settings.module.scss';
import {useDispatch, useSelector}              from "react-redux";
import {TStore}                                      from "../../../store/store";
import {changeNumberOfQuestions, changeOverlayDelay} from "../../../slices/settings";

interface SettingsPopupProps {
    isOpen: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const SettingsPopup: React.FC<SettingsPopupProps> = ({setOpen, isOpen}) => {
    const settings = useSelector((state: TStore) => state.settings);
    const dispatch = useDispatch();
    const taskCountLimits = [
        {
            value: 10,
            label: '10 вопросов',
        },
        {
            value: 100,
            label: '100 вопросов'
        }
    ];

    const timeForResultDelays = [
        {
            value: 1,
            label: '1 секунда',
        },
        {
            value: 15,
            label: '15 секунд'
        }
    ];

    function delayText(value: number) {
        return `${value} секунд`;
    }

    const PrettoSlider = styled(Slider)({
        color: '#c6694d',
        height: 8,
        '& .MuiSlider-track': {
            border: 'none',
        },
        '& .MuiSlider-thumb': {
            height: 24,
            width: 24,
            backgroundColor: '#fff',
            border: '2px solid currentColor',
            '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                boxShadow: 'inherit',
            },
            '&::before': {
                display: 'none',
            },
        },
        '& .MuiSlider-valueLabel': {
            lineHeight: 1.2,
            fontSize: 12,
            background: 'unset',
            padding: 0,
            width: 32,
            height: 32,
            borderRadius: '50% 50% 50% 0',
            backgroundColor: '#c6694d',
            transformOrigin: 'bottom left',
            transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
            '&::before': {display: 'none'},
            '&.MuiSlider-valueLabelOpen': {
                transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
            },
            '& > *': {
                transform: 'rotate(45deg)',
            },
        },
    });

    function valuetext(value: number) {
        return `${value}`;
    }

    return <Dialog
        open={isOpen}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-dialog-title"
        aria-describedby="simple-dialog-description"
        className={styles.dialog}
        maxWidth={"lg"}
    >
        <DialogContent className={styles.content}>
            <div className={styles.header}>Настройки</div>

            <div className={styles.block}>
                <div className={styles.label}>Количество вопросов в задании</div>
                <div className={styles.description}>
                    Количество вопросов которые задаются ребёнку когда он начинает задание. Так же количество вопросов
                    которое требуется для того, чтобы завершить задание.
                </div>
                <PrettoSlider
                    aria-label="Custom marks"
                    defaultValue={settings.numberOfQuestions}
                    value={settings.numberOfQuestions}
                    onChange={(e, v) => {
                        if (!!v) {
                            dispatch(changeNumberOfQuestions(v as number))
                        }
                    }}
                    getAriaValueText={valuetext}
                    step={5}
                    min={10}
                    valueLabelDisplay="auto"
                    marks={taskCountLimits}
                />
            </div>

            <div className={styles.block}>
                <div className={styles.label}>Время для просмотра результата ответа</div>
                <div className={styles.description}>
                    Количество времени которое даётся ребёнку на прочтение результата после ответа на вопрос, перед тем как ему/ей будет задан новый вопрос.
                </div>
                <PrettoSlider
                    aria-label="Custom marks"
                    defaultValue={settings.overlayDelayMs/1000}
                    value={settings.overlayDelayMs/1000}
                    onChange={(e, v) => {
                        if (!!v) {
                            dispatch(changeOverlayDelay(v as number * 1000))
                        }
                    }}
                    getAriaValueText={delayText}
                    step={1}
                    min={1}
                    max={15}
                    valueLabelDisplay="auto"
                    marks={timeForResultDelays}
                />
            </div>

        </DialogContent>
    </Dialog>;
}

export default SettingsPopup;
