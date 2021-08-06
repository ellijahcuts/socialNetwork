import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";

type ParamsPropsType={
    userId: string
}

type mapStatePropsType = {
    profilePage: ProfileType | null
}

type mapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

export type ProfilePropsType = mapStatePropsType & mapDispatchPropsType
export type WithRouterPropsType=RouteComponentProps<ParamsPropsType> & ProfilePropsType

class ProfileContainerFunc extends React.Component<WithRouterPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = "2";
        }
        profileAPI.getProfile(userId)
            .then(data => {
                this.props.setUserProfile(data)
            })
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
        profilePage: state.profilePage.profile
    }
}

let withUrlDataContainerComponent = withRouter(ProfileContainerFunc)

const ProfileContainer = connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);


export default ProfileContainer;
