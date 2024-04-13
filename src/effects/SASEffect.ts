import {Dispatch}                                from "redux";
import {ISASQuestions, ISASTask1question}        from "../interfaces/ISubjectActionSign";
import {sasActions, sasSigns, sasWhats, sasWhos} from "../data/sas";
import {shuffleArray}                            from "../utils/shuffleArray";

export const formTask1 = (count: number) => {
    return async function (dispatch: Dispatch<any>): Promise<ISASTask1question[]> {
        const actions: ISASTask1question[] = sasActions.split(',').map(i => ({
            number: 0,
            questionItem: i,
            rightAnswer: ISASQuestions.ЧтоДелает
        }));
        const signs: ISASTask1question[] = sasSigns.split(',').map(i => ({
            number: 0,
            questionItem: i,
            rightAnswer: ISASQuestions.Какой
        }));
        const whos: ISASTask1question[] = sasWhos.split(',').map(i => ({
            number: 0,
            questionItem: i,
            rightAnswer: ISASQuestions.Кто
        }));
        const whats: ISASTask1question[] = sasWhats.split(',').map(i => ({
            number: 0,
            questionItem: i,
            rightAnswer: ISASQuestions.Что
        }));
        const allCategoriesQuestions: ISASTask1question[] = shuffleArray([...actions, ...whos, ...whats, ...signs]) as ISASTask1question[];
        const resultQuestions = allCategoriesQuestions.slice(0, count);
        return resultQuestions.map((item, idx) => ({
            ...item,
            number: idx + 1
        }));
    }
}