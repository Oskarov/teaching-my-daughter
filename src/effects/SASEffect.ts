import {Dispatch}     from "redux";
import {
    ISASCategories,
    ISASQuestions,
    ISASTask1question,
    ISASTask2question,
    ISASTask3question,
    ISASTask4question
}                     from "../interfaces/ISubjectActionSign";
import {
    sasActions,
    sasSigns,
    sasWhats,
    sasWhos
}                     from "../data/sas";
import {shuffleArray} from "../utils/shuffleArray";

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

export const formTask2 = (count: number) => {
    return async function (dispatch: Dispatch<any>): Promise<ISASTask2question[]> {
        const actions: ISASTask2question[] = sasActions.split(',').map(i => ({
            number: 0,
            questionItem: i,
            rightAnswer: ISASCategories.Действие
        }));
        const signs: ISASTask2question[] = sasSigns.split(',').map(i => ({
            number: 0,
            questionItem: i,
            rightAnswer: ISASCategories.Признак
        }));
        const items: ISASTask2question[] = [...sasWhos.split(','), ...sasWhats.split(',')].map(i => ({
            number: 0,
            questionItem: i,
            rightAnswer: ISASCategories.Предмет
        }));
        const allCategoriesQuestions: ISASTask2question[] = shuffleArray([...actions, ...items, ...signs]) as ISASTask2question[];
        const resultQuestions = allCategoriesQuestions.slice(0, count);

        return resultQuestions.map((item, idx) => ({
            ...item,
            number: idx + 1
        }));
    }
}

export const formTask3 = (count: number) => {
    return async function (dispatch: Dispatch<any>): Promise<ISASTask3question[]> {
        return [{
            number: 1,
            rightAnswer: 'Гуляет',
            questionItem: ISASQuestions.ЧтоДелает,
            variants:['Гуляет', 'Кошка', 'Фиолетовый', 'Чашка']
        }];
    }
}
export const formTask4 = (count: number) => {
    return async function (dispatch: Dispatch<any>): Promise<ISASTask4question[]> {
        return [{
            number: 1,
            rightAnswer: 'Гуляет',
            questionItem: ISASCategories.Действие,
            variants:['Гуляет', 'Кошка', 'Фиолетовый', 'Чашка']
        }];
    }
}