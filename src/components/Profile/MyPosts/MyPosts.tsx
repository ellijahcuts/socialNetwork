import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";


const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts.map(
        p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>
    )
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let newText = newPostElement.current.value
            props.updateNewPostText(newText)
        }
    }

    return (
        <div>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea value={props.newPostText} ref={newPostElement} onChange={onPostChange}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post
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
