import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";

export type ProfileAPIPropsType={
    profilePage: ProfileType | null
}

const Profile = (props:ProfileAPIPropsType) => {
    return (
        <div>
            <ProfileInfo profilePage={props.profilePage}/>
            <MyPostsContainer/>
        </div>
    );
};
export default Profile;
