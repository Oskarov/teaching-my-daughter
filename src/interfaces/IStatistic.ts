export interface IStatisticState{
    completedTasks: ICompletedTasksWithTime[];
}

export interface ICompletedTasks {
    name: string,
    rightCount: number,
    wrongCount: number,
}

export interface ICompletedTasksWithTime {
    name: string,
    rightCount: number,
    wrongCount: number,
    dateTime: string,
    uuid: string,
}