import {authAPI} from "../api/api";
import {BaseThunkType} from "./redux-store";
import {FormAction, stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA'

export type AuthPageType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
const initialState: AuthPageType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export type AuthActionTypes =
    | ReturnType<typeof setAuthUserData>

export const authReducer = (state = initialState, action: AuthActionTypes): AuthPageType => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {userId, email, login, isAuth}
    } as const
}


type ThunkType = BaseThunkType<AuthActionTypes| FormAction>

export const getAuthUserData = (): ThunkType => dispatch => {
    authAPI.getMe()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}
export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkType => dispatch => {
    authAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : "Some error"
                dispatch(stopSubmit('loginForm', {_error: message}))
            }
        })
}
export const logoutTC = (): ThunkType => dispatch => {
    authAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}
