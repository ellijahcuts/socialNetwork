import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";


class ProfileContainerFunc extends React.Component<ProfilePropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile
                {...this.props}
                profilePage={this.props.profilePage}
            />
        );
    };
}

type mapStatePropsType = {
    profilePage: ProfileType | null
}
type mapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
export type ProfilePropsType = mapStatePropsType & mapDispatchPropsType

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        profilePage: state.profilePage.profile
    }
}

const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileContainerFunc);


export default ProfileContainer;
