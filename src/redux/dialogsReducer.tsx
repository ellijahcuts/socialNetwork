import {DialogItemType} from "../components/Dialogs/DialogItem/DialogItem";
import {MessageType} from "../components/Dialogs/Message/Message";
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageText: string
}

export type DialogActionTypes =
    | ReturnType<typeof AddMessageActionCreator>
    | ReturnType<typeof UpdateNewMessageTextActionCreator>


let initialState = {
    dialogs: [
        {id: 1, name: 'Ilya'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Vasya'},
        {id: 4, name: 'Sirgay'},
        {id: 5, name: 'Alexandra'},
        {id: 6, name: 'Feodor'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Hola'},
        {id: 4, message: 'Sup'},
        {id: 5, message: 'Privet'},
        {id: 6, message: 'Zdorova'}
    ],
    newMessageText: " ",
}

export const dialogsReducer = (state= initialState , action: DialogActionTypes):DialogsPageType => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = state.newMessageText
            return {
                ...state,
                newMessageText:"",
                messages: [...state.messages, {id: new Date().getTime(), message: newMessage}]
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
export const AddMessageActionCreator = (newMessage: string) => {
    return {
        type: ADD_MESSAGE,
        newMessage: newMessage
    } as const
}
export const UpdateNewMessageTextActionCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: newText
    } as const
}
