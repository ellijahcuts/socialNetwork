import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsPropsType} from "./DialogsContainer";

import {Field, InjectedFormProps, reduxForm} from "redux-form";

type MessageFormDataType = {
    newMessageText:string
}
const AddMessageDialogForm = (props: InjectedFormProps<MessageFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your Message'} name={'newMessageText'} component={'textarea'}/>
            </div>
            <div>
                <button>Send Message</button>
            </div>
        </form>
    );
};
export const AddMessageDialogReduxForm = reduxForm<MessageFormDataType>({form: 'addMessageDialog'})(AddMessageDialogForm)


const Dialogs = (props: DialogsPropsType) => {

    let dialogsElement = props.dialogsPage.dialogs.map
    (d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    let messagesElements = props.dialogsPage.messages.map
    (m => <Message key={m.id} id={m.id} message={m.message}/>)

    let addNewMessage = (newText: MessageFormDataType) => {
        console.log(newText)
        debugger
        props.addMessage(newText.newMessageText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddMessageDialogReduxForm onSubmit={addNewMessage}/>
        </div>
    )
}


export default Dialogs;
