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
    _state: RootStateType


    subscribe: (observer: () => void) => void
    _callSubscriber: () => void
    getState: () => RootStateType
    dispatch: (action:
                   ReturnType<typeof addPostActionCreator>
                   | ReturnType<typeof updateNewPostTextActionCreator>
                   | ReturnType<typeof AddMessageActionCreator>
                   | ReturnType<typeof UpdateNewMessageTextActionCreator>
    ) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, whats up', likesCount: 25},
                {id: 2, message: 'Hello guys', likesCount: 68},
                {id: 3, message: 'Lets go in CS', likesCount: 924},
                {id: 4, message: 'I can try again', likesCount: 2},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
    },
    _callSubscriber() {
    },
    getState() {
        return this._state;
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber();
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage: MessageType = {
                id: new Date().getTime(),
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = "";
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber();
        }
    }

}


export const addPostActionCreator = (newPost: string) => {
    return {
        type: 'ADD-POST',
        newPost: newPost
    } as const
}
export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
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


export default store;
