import React from "react";
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: string
}

const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem;
