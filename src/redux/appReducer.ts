import {BaseThunkType} from "./redux-store";
import {FormAction} from "redux-form";
import {getAuthUserData} from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS'

export type AppPageType = {
    initialized: boolean
}
const initialState: AppPageType = {
    initialized: false
}

export type AppActionTypes =
    | ReturnType<typeof initializedSuccess>

export const appReducer = (state = initialState, action: AppActionTypes): AppPageType => {

    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}
export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS
    } as const
}


type ThunkType = BaseThunkType<AppActionTypes | FormAction>

export const initializeApp = (): ThunkType => dispatch => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })

}
