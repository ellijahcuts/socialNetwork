import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA'
const SPINNER_IS_FETCHING = 'SPINNER-IS-FETCHING'

export type AuthType = {
    id: string
    name: string
    photos: {
        small: string
        large: string
    }
    followed: boolean,
    status: string
    location: { city: string, country: string }
}
export type AuthPageType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isFetching: boolean
    isAuth: boolean
}
const initialState: AuthPageType = {
    userId: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false
}
export type AuthActionTypes =
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof setIsFetching>


export const authReducer = (state = initialState, action: AuthActionTypes): AuthPageType => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.data, isAuth: true}
        }
        case SPINNER_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}
export const setAuthUserData = (userId: number, email: string, login: string) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login}
    } as const
}
export const setIsFetching = (isFetching: boolean) => {
    return {
        type: SPINNER_IS_FETCHING,
        isFetching
    } as const
}
export const getAuthUserData = () => {
   return (dispatch: Dispatch) => {
       authAPI.getMe().then(
           data => {
           dispatch(setIsFetching(false))
           let {id, email, login} = data.data
           dispatch(setAuthUserData(id, email, login))
       })
    }
}
