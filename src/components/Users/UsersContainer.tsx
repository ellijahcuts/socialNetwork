import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {
    FollowActionCreator, SetCurrentPageActionCreator, SetTotalUserCountActionCreator,
    SetUsersActionCreator,
    UnFollowActionCreator,
    UserType
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type mapStatePropsType = {
    usersPage: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type mapDispatchPropsType = {
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber:number)=>void
    setTotalUserCount: (totalCount: number)=>void
}
export type UsersPropsType = mapStatePropsType & mapDispatchPropsType

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        follow: (userID: string) => {
            dispatch(FollowActionCreator(userID))
        },
        unFollow: (userID: string) => {
            dispatch(UnFollowActionCreator(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(SetUsersActionCreator(users))
        },
        setCurrentPage: (pageNumber: number)=>{
            dispatch(SetCurrentPageActionCreator(pageNumber))
        },
        setTotalUserCount: (totalCount: number)=>{
            dispatch(SetTotalUserCountActionCreator(totalCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
