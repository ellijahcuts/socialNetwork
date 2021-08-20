import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";

export type ProfileAPIPropsType={
    profilePage: ProfileType | null
    status:string
    updateUserStatus:(status: string)=>void
}

const Profile = (props:ProfileAPIPropsType) => {
    return (
        <div>
            <ProfileInfo profilePage={props.profilePage} updateUserStatus={props.updateUserStatus} status={props.status}/>
            <MyPostsContainer/>
        </div>
    );
};
export default Profile;
