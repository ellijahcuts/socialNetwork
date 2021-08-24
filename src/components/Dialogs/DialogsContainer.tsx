import React from "react";
import {addMessage, DialogsPageType, MessagesType} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type mapStatePropsType = {
    dialogsPage: DialogsPageType
}
type mapDispatchPropsType = {
    addMessage: (newMessageText:string) => void
}

export type DialogsPropsType = mapStatePropsType & mapDispatchPropsType

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}


export default compose<React.ComponentType>(
    (connect(mapStateToProps, {addMessage})),
    withAuthRedirect,
)(Dialogs);
