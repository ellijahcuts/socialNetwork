import {v1} from "uuid";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET-USER-PROFILE"

export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type ProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string

    }
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType | null
}
let initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: 'Hi, whats up', likesCount: 25},
        {id: v1(), message: 'Hello guys', likesCount: 68},
        {id: v1(), message: 'Lets go in CS', likesCount: 924},
        {id: v1(), message: 'I can try again', likesCount: 2},
    ],
    newPostText: '',
    profile: null
}

export type ProfileActionTypes =
    | ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setUserProfile>


export const profileReducer = (state = initialState, action: ProfileActionTypes): ProfilePageType => {


    switch (action.type) {
        case ADD_POST:
            let newPost = state.newPostText
            return {
                ...state,
                newPostText: "",
                posts: [...state.posts, {id: v1(), message: newPost, likesCount: 0}]
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state

    }
}
export const addPost = () => {
    return {
        type: ADD_POST
    } as const
}
export const updateNewPostText = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    } as const
}
