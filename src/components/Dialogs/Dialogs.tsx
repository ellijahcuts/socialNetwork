import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsPropsType} from "./DialogsContainer";


const Dialogs = (props: DialogsPropsType) => {

    let dialogsElement = props.dialogsPage.dialogs.map
    (d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    let messagesElements = props.dialogsPage.messages.map
    (m => <Message key={m.id} id={m.id} message={m.message}/>)

    let message = props.dialogsPage.newMessageText

    let onAddMessage = () => {
        props.addMessage()
    }
    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <textarea className={s.textarea} value={message} onChange={onMessageChange}/>
            <button className={s.buttonAdd} onClick={onAddMessage}>Add Message</button>
            <button>Remove</button>
        </div>
    )
}


export default Dialogs;
