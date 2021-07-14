import React, {ChangeEvent} from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../store-context";
type ComponentPropsType = {

}

export const MyPostsContainer = (props: ComponentPropsType) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                let state = store.getState()
                let addPost = () => {
                    store.dispatch(addPostActionCreator(state.profilePage.newPostText))
                }

                let onPostChange = (text: string) => {
                    store.dispatch(updateNewPostTextActionCreator(text))
                }
                return (
                    <MyPosts
                        posts={state.profilePage.posts}
                        message={state.profilePage.newPostText}
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                    />
                )
            }
            }
        </StoreContext.Consumer>
    );
};
export default MyPostsContainer;
