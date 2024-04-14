export enum ISASTypes {
    Предмет = "Предмет",
    Действие = "Действие",
    Признак = "Признак"
}

export enum ISASQuestions {
    Что = "Что?",
    Кто = "Кто?",
    ЧтоДелает = "Что делает?",
    Какой = "Какой? Какая? Какие?"
}

export interface ISASTask1question {
    number: number,
    rightAnswer: ISASQuestions,
    questionItem: string,
}