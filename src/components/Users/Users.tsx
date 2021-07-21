import React from 'react';
import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import {v1} from "uuid";


const Users = (props: UsersPropsType) => {
        if (props.usersPage.length === 0) {
            props.setUsers(
                [
                    {
                        id: v1(),
                        avatarUrl: 'http://avotarov.ru/picture/avatar-100/kartinki/27.jpg',
                        followed: true,
                        fullName: 'Ilya',
                        status: 'im sexy im i know it',
                        location: {city: 'Minsk', country: 'Belarus'}
                    },
                    {
                        id: v1(),
                        avatarUrl: 'http://avotarov.ru/picture/avatar-100/kartinki/41.jpg',
                        followed: false,
                        fullName: 'Jabroni',
                        status: '300 baks',
                        location: {city: 'New York', country: 'America'}
                    },
                    {
                        id: v1(),
                        avatarUrl: 'http://avotarov.ru/picture/avatar-100/kartinki/45.jpg',
                        followed: true,
                        fullName: 'Bondage',
                        status: 'go to the gym',
                        location: {city: 'St.Peterburg', country: 'Russia'}
                    },
                ])
        }

        return (
            <div>
                {props.usersPage.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img
                            src={u.avatarUrl}
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
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
                </div>)}
            </div>
        );
    }
;

export default Users;
