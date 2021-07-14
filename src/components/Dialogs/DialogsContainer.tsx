import React from "react";
import {AddMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import {ActionsTypes} from "../../redux/store";
import {AppStateType} from "../../redux/redux-store";

import Dialogs from "./Dialogs";

type ComponentPropsType = {
    state: AppStateType
    dispatch: (action: ActionsTypes) => void
}

const DialogsContainer = (props: ComponentPropsType) => {

    let addMessage = () => {
        props.dispatch(AddMessageActionCreator(props.state.dialogsPage.newMessageText))

    }
    let onMessageChange = (text: string) => {
        props.dispatch(UpdateNewMessageTextActionCreator(text))
    }

    return (
        <Dialogs
            state={props.state}
            addMessage={addMessage}
            updateNewMessageText={onMessageChange}/>
    );
};


export default DialogsContainer;
