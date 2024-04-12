import {Dispatch}                         from "redux";
import {ISASQuestions, ISASTask1question} from "../interfaces/ISubjectActionSign";

export const formTask1 = (count: number) => {
    return async function (dispatch: Dispatch<any>): Promise<ISASTask1question[]> {
        return [
            {
            questionItem: 'Летит',
            rightAnswer: ISASQuestions.ЧтоДелает,
            number: 1
        }, {
            questionItem: 'Белка',
            rightAnswer: ISASQuestions.Кто,
            number: 2
        }, {
            questionItem: 'Красивая',
            rightAnswer: ISASQuestions.Какой,
            number: 3
        },{
            questionItem: 'Ложка',
            rightAnswer: ISASQuestions.Что,
            number: 4
        },
        ];
    }
}