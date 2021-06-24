import React from "react";
import s from './../Dialogs.module.css'

type ComponentPropsType = {
    message: string
}
const Message = (props: ComponentPropsType) => {
    return <div className={s.dialog}>{props.message}</div>
}

export default Message;
