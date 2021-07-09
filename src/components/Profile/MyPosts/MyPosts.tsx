import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ActionsTypes, PostType} from "../../../redux/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

type ComponentPropsType = {
    message: string
    posts: Array<PostType>
    dispatch: (action: ActionsTypes) => void
}

const MyPosts = (props: ComponentPropsType) => {
    let addPost = () => {
            props.dispatch(addPostActionCreator(props.message))
    }
    let postsElements = props.posts.map(
        p => <Post message={p.message} likesCount={p.likesCount}/>
    )

    let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        props.dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
    }

    return (
        <div>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea value={props.message} onChange={onPostChange}/>
            </div>
            <div>
                <button onClick={addPost}>Add post
                </button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};
export default MyPosts;
