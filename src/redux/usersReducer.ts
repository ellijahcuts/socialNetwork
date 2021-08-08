import { Dispatch } from "redux";
import {followAPI, usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAl_USERS-COUNT'
const SPINNER_IS_FETCHING = 'SPINNER-IS-FETCHING'
const SPINNER_IS_FOLLOWING_PROGRESS = 'SPINNER-IS-FOLLOWING-PROGRESS'


export type UserType = {
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
export type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
}
const initialState: UsersPageType = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}
export type UsersActionTypes =
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unFollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUserCount>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof setIsFollowingProgress>



export const usersReducer = (state = initialState, action: UsersActionTypes): UsersPageType => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case SPINNER_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case SPINNER_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            }
        }
        default:
            return state
    }
}
///ACTION CREATORS
export const followSuccess = (userID: string) => {
    return {
        type: FOLLOW,
        userID: userID
    } as const
}
export const unFollowSuccess = (userID: string) => {
    return {
        type: UNFOLLOW,
        userID: userID
    } as const
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users: users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    } as const
}
export const setTotalUserCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount: totalCount
    } as const
}
export const setIsFetching = (isFetching: boolean) => {
    return {
        type: SPINNER_IS_FETCHING,
        isFetching: isFetching
    } as const
}
export const setIsFollowingProgress = (isFetching: boolean, userID: string) => {
    return {
        type: SPINNER_IS_FOLLOWING_PROGRESS,
        isFetching: isFetching,
        userID: userID
    } as const
}
///THUNK CREATOR
export const getUsers = (currentPage: number,pageSize: number) => {
   return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUserCount(data.totalCount))
        })
    }
}
export const follow = (userID: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFollowingProgress(true,userID))
        followAPI.postFollow(userID)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(followSuccess(userID))
                }
                dispatch(setIsFollowingProgress(false,userID))
            })
    }
}
export const unFollow = (userID: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFollowingProgress(true,userID))
        followAPI.deleteUnfollow(userID)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(unFollowSuccess(userID))
                }
                dispatch(setIsFollowingProgress(false,userID))
            })
    }
}
