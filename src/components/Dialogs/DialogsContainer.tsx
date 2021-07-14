import React from "react";
import {AddMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import StoreContext from "../../../src/store-context";
import Dialogs from "./Dialogs";

type ComponentPropsType = {

}

const DialogsContainer = (props: ComponentPropsType) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                let state = store.getState()
                let addMessage = () => {
                    store.dispatch(AddMessageActionCreator(state.dialogsPage.newMessageText))
                }
                let onMessageChange = (text: string) => {
                    store.dispatch(UpdateNewMessageTextActionCreator(text))
                }
                return(
                <Dialogs
                    state={state}
                    addMessage={addMessage}
                    updateNewMessageText={onMessageChange}/>)
            }
            }
        </StoreContext.Consumer>
    )
}
export default DialogsContainer;
