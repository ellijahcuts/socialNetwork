import React from "react";
import {AddMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addMessage: () => {
            dispatch(AddMessageActionCreator)
        },
        updateNewMessageText: (text: string) => {
            dispatch(UpdateNewMessageTextActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;
