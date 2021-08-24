import React from 'react';
import {InjectedFormProps, Field, reduxForm} from "redux-form";


type PostFormDataType = {
    newPostText:string
}
const PostForm = (props: InjectedFormProps<PostFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your Message'} name={'newPostText'} component={'textarea'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};
export const PostTextReduxForm = reduxForm<PostFormDataType>({form: 'AddPostProfile'})(PostForm)
