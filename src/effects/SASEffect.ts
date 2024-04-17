import {Dispatch}         from "redux";
import {
    ISASCategories,
    ISASQuestions,
    ISASTask1question,
    ISASTask2question,
    ISASTask3question,
    ISASTask4question
}                         from "../interfaces/ISubjectActionSign";
import {
    sasActions,
    sasSigns,
    sasWhats,
    sasWhos
}                         from "../data/sas";
import {shuffleArray}     from "../utils/shuffleArray";
import RandomArrayElement from "../utils/randomArrayElement";

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
        const actions: ISASTask1question[] = shuffleArray(sasActions.split(',').map(i => ({
            number: 0,
            questionItem: i,
            rightAnswer: ISASQuestions.ЧтоДелает
        })));
        const signs: ISASTask1question[] = shuffleArray(sasSigns.split(',').map(i => ({
            number: 0,
            questionItem: i,
            rightAnswer: ISASQuestions.Какой
        })));
        const whos: ISASTask1question[] = shuffleArray(sasWhos.split(',').map(i => ({
            number: 0,
            questionItem: i,
            rightAnswer: ISASQuestions.Кто
        })));
        const whats: ISASTask1question[] = shuffleArray(sasWhats.split(',').map(i => ({
            number: 0,
            questionItem: i,
            rightAnswer: ISASQuestions.Что
        })));
        const allCategoriesQuestions: ISASTask1question[] = shuffleArray([...actions, ...whos, ...whats, ...signs]) as ISASTask1question[];
        const slicedQuestions = allCategoriesQuestions.slice(0, count);
        const resultQuestions:ISASTask3question[] = slicedQuestions.map(item=>({
            number: 1,
            questionItem: item.rightAnswer,
            rightAnswer: item.questionItem,
            variants: []
        }));
        resultQuestions.map(item=>{
            const variants:string[] = [item.rightAnswer];
            if (item.questionItem !== ISASQuestions.ЧтоДелает){
                variants.push(RandomArrayElement(actions).questionItem);
            }
            if (item.questionItem !== ISASQuestions.Какой){
                variants.push(RandomArrayElement(signs).questionItem);
            }
            if (item.questionItem !== ISASQuestions.Кто){
                variants.push(RandomArrayElement(whos).questionItem);
            }
            if (item.questionItem !== ISASQuestions.Что){
                variants.push(RandomArrayElement(whats).questionItem);
            }

            return {
                ...resultQuestions,
                variants: variants
            }
        });

        return resultQuestions.map((item, idx) => ({
            ...item,
            number: idx + 1
        }));
    }
}
export const formTask4 = (count: number) => {
    return async function (dispatch: Dispatch<any>): Promise<ISASTask4question[]> {
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
        const slicedQuestions = allCategoriesQuestions.slice(0, count);
        const resultQuestions:ISASTask4question[] = slicedQuestions.map(item=>({
            number: 1,
            questionItem: item.rightAnswer,
            rightAnswer: item.questionItem,
            variants: []
        }));
        resultQuestions.map(item=>{
            const variants:string[] = [item.rightAnswer];
            if (item.questionItem !== ISASCategories.Действие){
                variants.push(RandomArrayElement(actions).questionItem);
            }
            if (item.questionItem !== ISASCategories.Признак){
                variants.push(RandomArrayElement(signs).questionItem);
            }
            if (item.questionItem !== ISASCategories.Предмет){
                variants.push(RandomArrayElement(items).questionItem);
            }
            return {
                ...resultQuestions,
                variants: variants
            }
        });

        return resultQuestions.map((item, idx) => ({
            ...item,
            number: idx + 1
        }));
    }
}