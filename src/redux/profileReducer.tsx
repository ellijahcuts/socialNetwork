import {PostType} from "../components/Profile/MyPosts/Post/Post";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

export type ProfilePageType= {
    posts: Array<PostType>
    newPostText: string
}
export type ProfileActionTypes =
    | ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>


let initialState = {
    posts: [
        {id: 1, message: 'Hi, whats up', likesCount: 25},
        {id: 2, message: 'Hello guys', likesCount: 68},
        {id: 3, message: 'Lets go in CS', likesCount: 924},
        {id: 4, message: 'I can try again', likesCount: 2},
    ],
    newPostText: ''
}

export const profileReducer = (state = initialState, action: ProfileActionTypes): ProfilePageType => {


    switch (action.type) {
        case ADD_POST:
            let newPost = state.newPostText
            return {
                ...state,
                newPostText: "",
                posts: [...state.posts, {id: new Date().getTime(), message: newPost, likesCount: 0}]
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }

        default:
            return state

    }
}
export const addPostActionCreator = (newPost: string) => {
    return {
        type: ADD_POST,
        newPost: newPost
    } as const
}
export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}
