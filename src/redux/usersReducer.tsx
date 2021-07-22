const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'


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
}
const initialState: UsersPageType = {
    users: []
}
export type UsersActionTypes =
    | ReturnType<typeof FollowActionCreator>
    | ReturnType<typeof UnFollowActionCreator>
    | ReturnType<typeof SetUsersActionCreator>


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
            return {...state, users: [...state.users, ...action.users]}
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

