import {ActionsTypes, MessageType,} from "./store";
import {DialogItemType} from "../components/Dialogs/DialogItem/DialogItem";
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export type DialogPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageText: string
}

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

export const dialogsReducer = (state: DialogPageType = initialState, action: ActionsTypes):DialogPageType => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: MessageType = {
                id: new Date().getTime(),
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = "";
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}
export const AddMessageActionCreator = (newMessage: string) => {
    return {
        type: 'ADD-MESSAGE',
        newMessage: newMessage
    } as const
}
export const UpdateNewMessageTextActionCreator = (newText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newText: newText
    } as const
}
