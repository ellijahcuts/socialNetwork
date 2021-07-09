import {ActionsTypes, DialogPageType, MessageType,} from "./state";

const ADD_MESSAGE='ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT='UPDATE-NEW-MESSAGE-TEXT'

export const dialogsReducer = (state:DialogPageType, action: ActionsTypes) => {
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
