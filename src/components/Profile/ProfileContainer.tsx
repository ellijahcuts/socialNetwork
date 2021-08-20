import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from "../../redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type ParamsPropsType = {
    userId: string
}

type mapStatePropsType = {
    profilePage: ProfileType | null
}

type mapDispatchPropsType = {
    getUserProfile: (userId: string) => void
}

export type ProfilePropsType = mapStatePropsType & mapDispatchPropsType
export type WithRouterPropsType = RouteComponentProps<ParamsPropsType> & ProfilePropsType

class ProfileContainer extends React.Component<WithRouterPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2";
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile
                profilePage={this.props.profilePage}
            />
        );
    };
}

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        profilePage: state.profilePage.profile,
    }
}

export default compose<React.ComponentType>(
    (connect(mapStateToProps, {getUserProfile})),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

