import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {
    FollowActionCreator,
    SetUsersActionCreator,
    UnFollowActionCreator,
    UserType
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type mapStatePropsType = {
    usersPage: Array<UserType>
}
type mapDispatchPropsType = {
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: (users: Array<UserType>) => void
}
export type UsersPropsType =  mapStatePropsType & mapDispatchPropsType

let mapStateToProps = (state: AppStateType):mapStatePropsType => {
    return {
        usersPage: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch):mapDispatchPropsType => {
    return {
        follow: (userID: string) => {
            dispatch(FollowActionCreator(userID))
        },
        unFollow: (userID: string) => {
            dispatch(UnFollowActionCreator(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(SetUsersActionCreator(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
