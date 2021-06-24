import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {
    ActionsTypes,
    AddMessageActionCreator,
    DialogPageType,
    UpdateNewMessageTextActionCreator
} from "../../redux/state";

type ComponentPropsType = {
    message: string
    state: DialogPageType
    dispatch: (action: ActionsTypes) => void
}

const Dialogs = (props: ComponentPropsType) => {

    let dialogsElement = props.state.dialogs.map
    (d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.state.messages.map
    (m => <Message message={m.message}/>)

    let addMessage = () => {
        props.dispatch(AddMessageActionCreator(props.message))

    }
    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(UpdateNewMessageTextActionCreator(e.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <textarea className={s.textarea} value={props.message} onChange={onMessageChange}/>
            <button className={s.buttonAdd} onClick={addMessage}>Add Message</button>
            <button>Remove</button>
        </div>
    )
}


export default Dialogs;
