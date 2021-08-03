import React from "react";
import {addPost, PostType, updateNewPostText} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";

type mapStatePropsType = {
    posts: Array<PostType>
    newPostText: string
}
type mapDispatchPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}
export type MyPostsPropsType = mapStatePropsType & mapDispatchPropsType

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}


const MyPostsContainer = connect(mapStateToProps, {addPost,updateNewPostText})(MyPosts);


export default MyPostsContainer;
