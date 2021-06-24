import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://woodoobarbershop.com/wp-content/uploads/stylish-man-in-a-barber-shop-PNP5WVU.jpg"></img>
            </div>
            <div className={s.descriptionBlock}> avatar + description</div>
        </div>
    );
};
export default ProfileInfo;
