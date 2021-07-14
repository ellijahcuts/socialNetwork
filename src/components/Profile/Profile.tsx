import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
import {ActionsTypes, ProfilePageType, StoreType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {AppStateType} from "../../redux/redux-store";

type ComponentsPropsType = {
    state: AppStateType
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ComponentsPropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                state={props.state}
                dispatch={props.dispatch}
            />
        </div>
    );
};
export default Profile;
