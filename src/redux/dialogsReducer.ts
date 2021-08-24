import {v1} from "uuid";

const ADD_MESSAGE = 'ADD-MESSAGE'

export type DialogsType = {
    name: string
    id: string
}
export type MessagesType = {
    id: string
    message: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type DialogActionTypes =
    | ReturnType<typeof addMessage>

let initialState = {
    dialogs: [
        {id: v1(), name: 'Ilya'},
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Vasya'},
        {id: v1(), name: 'Sirgay'},
        {id: v1(), name: 'Alexandra'},
        {id: v1(), name: 'Feodor'},
    ],
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Hola'},
        {id: v1(), message: 'Sup'},
        {id: v1(), message: 'Privet'},
        {id: v1(), message: 'Zdorova'},
    ]
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogActionTypes): DialogsPageType => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {id: v1(), message: action.newMessageText}
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        default:
            return state
    }
}
export const addMessage = (newMessageText:string) => {
    return {
        type: ADD_MESSAGE,
        newMessageText
    } as const
}

