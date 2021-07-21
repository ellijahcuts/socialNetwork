import React from "react";
import {AddMessageActionCreator, DialogsPageType, UpdateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";



type mapStatePropsType = {
    dialogsPage: DialogsPageType
}
type mapDispatchPropsType = {
    addMessage: () => void
    updateNewMessageText: (text: string) => void

}
export type DialogsPropsType = mapStatePropsType & mapDispatchPropsType

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: any):mapDispatchPropsType => {
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
