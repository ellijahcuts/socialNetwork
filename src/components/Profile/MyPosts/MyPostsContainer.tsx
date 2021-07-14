import React, {ChangeEvent} from "react";
import {ActionsTypes, PostType, StoreType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";

type ComponentPropsType = {
    state: AppStateType
    dispatch: (action: ActionsTypes) => void
}

export const MyPostsContainer = (props: ComponentPropsType) => {
    let addPost = () => {
        props.dispatch(addPostActionCreator(props.state.profilePage.newPostText))
    }

    let onPostChange = (text: string) => {
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <MyPosts
            message={props.state.profilePage.newPostText}
            posts={props.state.profilePage.posts}
            addPost={addPost}
            updateNewPostText={onPostChange}
        />

    );
};
export default MyPostsContainer;
