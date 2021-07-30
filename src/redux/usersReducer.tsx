const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAl_USERS-COUNT'


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
}
const initialState: UsersPageType = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1
}
export type UsersActionTypes =
    | ReturnType<typeof FollowActionCreator>
    | ReturnType<typeof UnFollowActionCreator>
    | ReturnType<typeof SetUsersActionCreator>
    | ReturnType<typeof SetCurrentPageActionCreator>
    | ReturnType<typeof SetTotalUserCountActionCreator>


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
            return {...state, users:  action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        default:
            return state
    }
}
export const FollowActionCreator = (userID: string) => {
    return {
        type: FOLLOW,
        userID: userID
    } as const
}
export const UnFollowActionCreator = (userID: string) => {
    return {
        type: UNFOLLOW,
        userID: userID
    } as const
}
export const SetUsersActionCreator = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users: users
    } as const
}
export const SetCurrentPageActionCreator = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    } as const
}
export const SetTotalUserCountActionCreator = (totalCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount: totalCount
    } as const
}

