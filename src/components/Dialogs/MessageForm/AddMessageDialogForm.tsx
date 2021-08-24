import React from 'react';
import {InjectedFormProps, Field, reduxForm} from "redux-form";


type MessageFormDataType = {
    newMessageText:string
}
const AddMessageDialogForm = (props: InjectedFormProps<MessageFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your Message'} name={'newMessage'} component={'textarea'}/>
            </div>
            <div>
                <button>Send Message</button>
            </div>
        </form>
    );
};
export const AddMessageasdDialogReduxForm = reduxForm<MessageFormDataType>({form: 'addMessageDialog'})(AddMessageDialogForm)
