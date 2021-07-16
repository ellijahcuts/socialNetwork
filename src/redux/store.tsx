import {addPostActionCreator, profileReducer, updateNewPostTextActionCreator} from "./profileReducer";
import {AddMessageActionCreator, dialogsReducer, UpdateNewMessageTextActionCreator} from "./dialogsReducer";

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}




