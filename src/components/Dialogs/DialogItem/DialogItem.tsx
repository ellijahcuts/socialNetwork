import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type ComponentPropsType = {
    name: string
    id: number
}

const DialogItem = (props: ComponentPropsType) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem;
