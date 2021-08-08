import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from "../../redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type ParamsPropsType={
    userId: string
}

type mapStatePropsType = {
    profilePage: ProfileType | null
    isAuth:boolean
}

type mapDispatchPropsType = {
    getUserProfile: (userId: string)=>void
}

export type ProfilePropsType = mapStatePropsType & mapDispatchPropsType
export type WithRouterPropsType=RouteComponentProps<ParamsPropsType> & ProfilePropsType

class ProfileContainerFunc extends React.Component<WithRouterPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = "2";
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={"/login"}/>
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
        isAuth: state.auth.isAuth
    }
}

let withUrlDataContainerComponent = withRouter(ProfileContainerFunc)

const ProfileContainer = connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);


export default ProfileContainer;
