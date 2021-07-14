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
export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
export type AddMessageActionType = ReturnType<typeof AddMessageActionCreator>
export type UpdateNewMessageTextActionType = ReturnType<typeof UpdateNewMessageTextActionCreator>


export type ActionsTypes =
    AddPostActionType
    | UpdateNewPostTextActionType
    | AddMessageActionType
    | UpdateNewMessageTextActionType

export type StoreType = {
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action:
                   ReturnType<typeof addPostActionCreator>
                   | ReturnType<typeof updateNewPostTextActionCreator>
                   | ReturnType<typeof AddMessageActionCreator>
                   | ReturnType<typeof UpdateNewMessageTextActionCreator>
    ) => void
}


