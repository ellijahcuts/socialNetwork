import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsPropsType} from "./DialogsContainer";
import {AddMessageForm} from "./MessageForm/AddMessageDialogForm";

type MessageFormDataType = {
    newMessageText: string
}

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
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    )
}


export default Dialogs;
