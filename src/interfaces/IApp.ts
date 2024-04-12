

export interface IAppState {
    loadingText: string
}

export interface IConfirmation {
    isOpen: boolean,
    confirmationFunction: () => void,
    dialogType?: 'positive' | 'negative',
    dialogText?: string
}

export interface IInformation {
    isOpen: boolean,
    modalTitle?: string
    modalText?: any
    closeButton?: boolean
}
