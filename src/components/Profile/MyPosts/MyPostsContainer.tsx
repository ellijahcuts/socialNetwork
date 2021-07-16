import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";


type ComponentPropsType = {

}


let mapStateToProps = (state:AppStateType)=>{
    return{
        posts: state.profilePage.posts,
        message: state.profilePage.newPostText
    }
}
let mapDispatchToProps=(dispatch:any)=>{
    return{
        addPost: () => {
            dispatch(addPostActionCreator)
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        }}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);





export default MyPostsContainer;
