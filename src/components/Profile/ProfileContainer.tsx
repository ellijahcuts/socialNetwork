import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, getUserStatus, ProfileType, putUserStatus} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type ParamsPropsType = {
    userId: string
    status: string
}

type mapStatePropsType = {
    profilePage: ProfileType | null
    status: string
    authorizedUserID: number | null,
    isAuth: boolean
}

type mapDispatchPropsType = {
    getUserProfile: (userId: number | null) => void
    getUserStatus: (userId: number | null) => void
    putUserStatus: (status: string) => void
}

export type ProfilePropsType = mapStatePropsType & mapDispatchPropsType
export type WithRouterPropsType = RouteComponentProps<ParamsPropsType> & ProfilePropsType

class ProfileContainer extends React.Component<WithRouterPropsType> {
    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = Number(this.props.authorizedUserID)
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <Profile
                profilePage={this.props.profilePage}
                status={this.props.status}
                updateUserStatus={this.props.putUserStatus}
            />
        );
    };
}

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        profilePage: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserID: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    (connect(mapStateToProps, {getUserProfile, getUserStatus, putUserStatus})),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

