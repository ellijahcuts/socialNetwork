import React from "react";
import s from "./ProfileInfo.module.css";
import {ProfileType} from "../../../redux/profileReducer";
import Preloader from "../../common/Preloader";
import ProfileStatus from "./ProfileStatus";

export type ProfileInfoType = {
    profilePage: ProfileType | null
    status: string
    updateUserStatus: (status:string)=>void
}

const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profilePage) {
        return <Preloader/>
    }

    return (
        <div className={s.descriptionBlock}>
            <img src={props.profilePage.photos.large} alt={"Your ad could be here"}/>
            <hr/>
            <h4>Status</h4>
            <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
            <hr/>
            <span>
                <h4>My Name</h4>
            <div>{props.profilePage.fullName}</div>
                <h4>About Me</h4>
            <div>{props.profilePage.aboutMe}</div>
            </span>
            <span>
                <h4>Looking for a Job Status</h4>
                {props.profilePage.lookingForAJob
                    ? <img style={{width: 50}}
                           src={"https://w7.pngwing.com/pngs/783/837/png-transparent-exclamation-point-illustration-black-and-white-area-font-exclamation-mark-text-black-product-design-thumbnail.png"}/>
                    : <img style={{width: 50}}
                           src={"https://e7.pngegg.com/pngimages/549/632/png-clipart-no-symbol-sign-sign-stop-miscellaneous-angle.png"}/>
                }
                <h4>Job description</h4>
            <div>{props.profilePage.lookingForAJobDescription}</div>
            </span>
            <span>
            <h4>My Contacts</h4>
                {props.profilePage.contacts.vk ?
                    <div><b>VK: </b>{props.profilePage.contacts.vk}</div>
                    : null}
                {props.profilePage.contacts.github ?
                    <div><b>GIT: </b>{props.profilePage.contacts.github}</div>
                    : null}
                {props.profilePage.contacts.facebook ?
                    <div><b>FB: </b>{props.profilePage.contacts.facebook}</div>
                    : null}
                {props.profilePage.contacts.twitter ?
                    <div><b>TWI: </b>{props.profilePage.contacts.twitter}</div>
                    : null}
                {props.profilePage.contacts.instagram ?
                    <div><b>INST: </b>{props.profilePage.contacts.instagram}</div>
                    : null}
                {props.profilePage.contacts.website ?
                    <div><b>SITE: </b>{props.profilePage.contacts.website}</div>
                    : null}
                {props.profilePage.contacts.youtube ?
                    <div><b>YouTube: </b>{props.profilePage.contacts.youtube}</div>
                    : null}
                {props.profilePage.contacts.mainLink ?
                    <div><b>MainLink: </b>{props.profilePage.contacts.mainLink}</div>
                    : null}

        </span>

        </div>
    );
};
export default ProfileInfo
