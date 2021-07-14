import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type ComponentsPropsType = {
}

const Profile = (props: ComponentsPropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};
export default Profile;
