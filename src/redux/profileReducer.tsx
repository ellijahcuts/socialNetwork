import {ActionsTypes, PostType, ProfilePageType} from "./store";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
    posts: [
        {id: 1, message: 'Hi, whats up', likesCount: 25},
        {id: 2, message: 'Hello guys', likesCount: 68},
        {id: 3, message: 'Lets go in CS', likesCount: 924},
        {id: 4, message: 'I can try again', likesCount: 2},
    ],
    newPostText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes):ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state

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
