import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://pngimg.com/uploads/hello/hello_PNG4.png"></img>
            </div>
            <div className={s.descriptionBlock}> avatar + description</div>
        </div>
    );
};
export default ProfileInfo;
