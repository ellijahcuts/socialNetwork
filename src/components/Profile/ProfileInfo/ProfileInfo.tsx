import React from "react";
import s from "./ProfileInfo.module.css";
import {ProfileType} from "../../../redux/profileReducer";
import Preloader from "../../common/Preloader";

export type ProfileInfoType = {
    profilePage: ProfileType | null
}

const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profilePage) {
        return <Preloader/>
    }

    return (
        <div className={s.descriptionBlock}>
            <img src={props.profilePage.photos.large} alt={"Your ad could be here"}/>
            <span>
                <h4>My Name</h4>
            <div>{props.profilePage.fullName}</div>
                <h4>About Me</h4>
            <div>{props.profilePage.aboutMe}</div>
            </span>
            <span>
                <h4>Looking for a Job Status</h4>
                {props.profilePage.lookingForAJob
                    ? <img style={{width: 50}} src={"https://w7.pngwing.com/pngs/783/837/png-transparent-exclamation-point-illustration-black-and-white-area-font-exclamation-mark-text-black-product-design-thumbnail.png"}/>
                    : <img style={{width: 50}} src={"https://e7.pngegg.com/pngimages/549/632/png-clipart-no-symbol-sign-sign-stop-miscellaneous-angle.png"}/>
                }
                <h4>Job description</h4>
            <div>{props.profilePage.lookingForAJobDescription}</div>
            </span>
            <span>
            <h4>My Contacts</h4>
            <div>{props.profilePage.contacts.vk}</div>
            <div>{props.profilePage.contacts.github}</div>
            <div>{props.profilePage.contacts.facebook}</div>
            <div>{props.profilePage.contacts.twitter}</div>
            <div>{props.profilePage.contacts.instagram}</div>
            <div>{props.profilePage.contacts.website}</div>
            <div>{props.profilePage.contacts.youtube}</div>
            <div>{props.profilePage.contacts.mainLink}</div>
        </span>

        </div>
    );
};
export default ProfileInfo
