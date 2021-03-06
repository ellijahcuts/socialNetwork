import React from 'react';
import {connect} from "react-redux";
import {follow, getUsers, setCurrentPage, setIsFollowingProgress, unFollow, UserType} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {Redirect} from "react-router-dom";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSelector
} from "../../redux/usersSelectors";

type mapStatePropsType = {
    usersPage: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
    isAuth: boolean
}
type mapDispatchPropsType = {
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setCurrentPage: (pageNumber: number) => void
    setIsFollowingProgress: (isFetching: boolean, userId: string) => void
    getUsers: (currentPage: number, pageSize: number) => void
}
export type UsersPropsType = mapStatePropsType & mapDispatchPropsType

export class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"}/>
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users usersPage={this.props.usersPage}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   setCurrentPage={this.props.setCurrentPage}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

/*let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
    }
}*/
let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        usersPage: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            follow,
            setCurrentPage,
            unFollow,
            setIsFollowingProgress,
            getUsers
        }),
)(UsersContainer);
