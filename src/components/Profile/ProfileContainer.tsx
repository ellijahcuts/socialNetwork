import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
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


let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        profilePage: state.profilePage.profile
    }
}

let withUrlDataContainerComponent = withRouter(ProfileContainerFunc)

const ProfileContainer = connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);


export default ProfileContainer;
