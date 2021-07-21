import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";

import {AppStateType} from "../../redux/redux-store";
import {FollowActionCreator, SetUsersActionCreator, UnFollowActionCreator, UserType} from "../../redux/usersReducer";


let mapStateToProps = (state:AppStateType)=>{
    return{
        users: state.usersPage.users
    }
}
let mapDispatchToProps=(dispatch:any)=>{
    return{
        follow: (userID:number) => {
            dispatch(FollowActionCreator(userID))
        },
        unFollow: (userID: number) => {
            dispatch(UnFollowActionCreator(userID))
        },
        setUsers:(users: Array<UserType>)=>{
            dispatch(SetUsersActionCreator(users))
        }
    }
}


    const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;
