import React from "react";
import s from "./Post.module.css";


type ComponentPropsType = {
    message: string
    likesCount: number
}

const Post = (props: ComponentPropsType) => {
    return (
        <div className={s.item}>
            <img src="https://pyxis.nymag.com/v1/imgs/e6c/02c/cbe672af6609198720b69efd475ab5f641-avatar-last-airbender.rsquare.w1200.jpg"></img>
            {props.message}
            <div>
                <span>♥</span> {props.likesCount}
            </div>
        </div>
    );
};
export default Post;
