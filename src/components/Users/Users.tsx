import React from 'react';
import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from 'axios';
import userPhoto from '../../assets/images/none-avatar.png'

const Users = (props: UsersPropsType) => {
    if (props.usersPage.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            })
    }

    return (
        <div>
            {props.usersPage.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img
                            src={u.photos.small != null ? u.photos.small : userPhoto}
                            alt={"User's avatar"}
                            className={s.usersPhoto}
                        />
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => props.unFollow(u.id)}>Follow</button>
                            : <button onClick={() => props.follow(u.id)}>Unfollow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default Users;
