import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import Post, {PostType} from "./Post/Post";


type ComponentPropsType = {
    message: string
    posts:Array<PostType>
    addPost:()=>void
    updateNewPostText: (text:string) => void
}

const MyPosts = (props: ComponentPropsType) => {
    let postsElements = props.posts.map(
        p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>
    )
    let onAddPost = () => {
    props.addPost()
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) =>{
        props.updateNewPostText(e.currentTarget.value)
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
