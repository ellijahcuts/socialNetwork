import {v1} from "uuid";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

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
    newMessageText: string
}

export type DialogActionTypes =
    | ReturnType<typeof AddMessageActionCreator>
    | ReturnType<typeof UpdateNewMessageTextActionCreator>


let initialState = {
    dialogs: [
        {id: v1(), name: 'Ilya'},
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Vasya'},
        {id: v1(), name: 'Sirgay'},
        {id: v1(), name: 'Alexandra'},
        {id: v1(), name: 'Feodor'}
    ],
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Hola'},
        {id: v1(), message: 'Sup'},
        {id: v1(), message: 'Privet'},
        {id: v1(), message: 'Zdorova'}
    ],
    newMessageText: " ",
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogActionTypes): DialogsPageType => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = state.newMessageText
            return {
                ...state,
                newMessageText: "",
                messages: [...state.messages, {id: v1(), message: newMessage}]
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state
    }
}
export const AddMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    } as const
}
export const UpdateNewMessageTextActionCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: newText
    } as const
}
