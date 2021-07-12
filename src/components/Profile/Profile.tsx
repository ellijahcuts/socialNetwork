import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
import {ActionsTypes, ProfilePageType} from "../../redux/store";

type ComponentsPropsType = {
    state: ProfilePageType
    message: string
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ComponentsPropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     message={props.state.newPostText}
                     dispatch={props.dispatch}
                     /*addPostCallback={props.addPostCallback}
                     updateNewPostTextCallback={props.updateNewPostTextCallback}*//>
        </div>
    );
};
export default Profile;
