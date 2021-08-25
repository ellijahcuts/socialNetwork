import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_USER_STATUS = "SET-USER-STATUS"
const UPDATE_USER_STATUS = "UPDATE-USER-STATUS"

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
    profile: ProfileType | null
    status: string
}
let initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: 'Hi, whats up', likesCount: 25},
        {id: v1(), message: 'Hello guys', likesCount: 68},
        {id: v1(), message: 'Lets go in CS', likesCount: 924},
        {id: v1(), message: 'I can try again', likesCount: 2},
    ],
    profile: null,
    status: ''
}

export type ProfileActionTypes =
    | ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof updateUserStatus>


export const profileReducer = (state = initialState, action: ProfileActionTypes): ProfilePageType => {


    switch (action.type) {
        case ADD_POST:
            let newPost = {id: v1(), message: action.newPostText, likesCount: 0}
            return {
                ...state,
                posts: [...state.posts, newPost]
            }

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_USER_STATUS:
            return {...state, status: action.status}
        case UPDATE_USER_STATUS:
            return {...state, status: action.status}
        default:
            return state

    }
}
export const addPost = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}
export const setUserStatus = (status: string) => {
    return {
        type: SET_USER_STATUS,
        status
    } as const
}
export const updateUserStatus = (status: string) => {
    return {
        type: UPDATE_USER_STATUS,
        status
    } as const
}


export const getUserProfile = (userId: number | null) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

export const getUserStatus = (userId: number | null) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setUserStatus(data))
            })
    }
}
export const putUserStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(updateUserStatus(status))
                }
            })
    }
}
