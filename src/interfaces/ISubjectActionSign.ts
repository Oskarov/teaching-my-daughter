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

export enum ISASCategories {
    Предмет = "Предмет",
    Действие = "Действие",
    Признак = "Признак"
}

export interface ISASTask1question {
    number: number,
    rightAnswer: ISASQuestions,
    questionItem: string,
}

export interface ISASTask2question {
    number: number,
    rightAnswer: ISASCategories,
    questionItem: string,
}

export interface ISASTask3question {
    number: number,
    rightAnswer: string, //Кошка
    questionItem: ISASQuestions, //кто? что? что делает?
    variants: string[] //Обязательно включает правильный
}

export interface ISASTask4question {
    number: number,
    rightAnswer: string, //Кошка
    questionItem: ISASCategories, //предмет, признак, действие
    variants: string[] //Обязательно включает правильный
}


export interface ISASTask5question {
    number: number,
    rightAnswer: string, // Действие что Делает? / Признак Какой? / ISASQuestions ISASCategories
    questionItem: string,
}