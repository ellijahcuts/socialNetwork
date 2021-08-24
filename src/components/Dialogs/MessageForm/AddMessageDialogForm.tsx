import React from 'react';
import {InjectedFormProps, Field, reduxForm} from "redux-form";
import {FormElementTextArea} from "../../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength200 = maxLengthCreator(200)

type MessageFormDataType = {
    newMessageText:string
}
const AddMessageDialogForm = (props: InjectedFormProps<MessageFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your Message'}
                       name={'newMessageText'}
                       component={FormElementTextArea}
                       validate={[required, maxLength200]}/>
            </div>
            <div>
                <button>Send Message</button>
            </div>
        </form>
    );
};
export const AddMessageForm = reduxForm<MessageFormDataType>({form: 'addMessageDialog'})(AddMessageDialogForm)
