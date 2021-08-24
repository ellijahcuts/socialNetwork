import React from "react";
import {addPost, PostType,} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";

type mapStatePropsType = {
    posts: Array<PostType>
}
type mapDispatchPropsType = {
    addPost: (newPostText:string) => void

}
export type MyPostsPropsType = mapStatePropsType & mapDispatchPropsType

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        posts: state.profilePage.posts,
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);


export default MyPostsContainer;
