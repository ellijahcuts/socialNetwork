import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {PostForm} from "./PostForm/MyPostForm";

type PostFormDataType = {
    newPostText: string
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(
        p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>
    )

    let addNewPost = (newText: PostFormDataType) => {
        console.log(newText)
        debugger
        props.addPost(newText.newPostText)
    }

    return (
        <div>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
            </div>
            <PostForm onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};
export default MyPosts;
