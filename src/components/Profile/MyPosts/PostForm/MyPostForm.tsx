import React from 'react';
import {InjectedFormProps, Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {FormElementTextArea} from "../../../common/FormControls/FormControls";

const maxLength10 = maxLengthCreator(10)

type PostFormDataType = {
    newPostText: string
}
const PostTextForm = (props: InjectedFormProps<PostFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your Message'}
                       name={'newPostText'}
                       component={FormElementTextArea}
                       validate={[required, maxLength10]}

                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};
export const PostForm = reduxForm<PostFormDataType>({form: 'AddPostProfile'})(PostTextForm)
