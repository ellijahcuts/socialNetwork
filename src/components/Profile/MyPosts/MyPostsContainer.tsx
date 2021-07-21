import React from "react";
import {addPostActionCreator, PostType, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
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
let mapDispatchToProps = (dispatch: any):mapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator)
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;
