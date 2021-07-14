import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {AppStateType} from "../../redux/redux-store";

type ComponentPropsType = {
    state: AppStateType
    addMessage:()=>void
    updateNewMessageText:(text:string)=>void
}

const Dialogs = (props: ComponentPropsType) => {

    let dialogsElement = props.state.dialogsPage.dialogs.map
    (d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.state.dialogsPage.messages.map
    (m => <Message message={m.message}/>)

    let message = props.state.dialogsPage.newMessageText

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
