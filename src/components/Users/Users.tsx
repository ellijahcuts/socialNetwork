import React from 'react';
import {UserType} from "../../redux/usersReducer";
import s from './Users.module.css'

type ComponentPropsType = {
    users: Array<UserType>
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
}
const Users = (props: ComponentPropsType) => {
        if (props.users.length === 0) {
            props.setUsers(
                [
                    {
                        id: 1,
                        avatarUrl: 'https://sponzhik.ru/useruploads/foto/3946/avatar_ne_zagrugen__razmer_avatara_bolshe_150_px.jpg',
                        followed: true,
                        fullName: 'Ilya',
                        status: 'im sexy im i know it',
                        location: {city: 'Minsk', country: 'Belarus'}
                    },
                    {
                        id: 2,
                        avatarUrl: 'https://lh3.googleusercontent.com/proxy/3KpfsLC3gNzkqZwshTl1hUAtiaAn71aLpyyUB4P-hgBbqTfQJa1jugwElGenY6HB5P1yXIHjDfXm_AM',
                        followed: false,
                        fullName: 'Jabroni',
                        status: '300 baks',
                        location: {city: 'New York', country: 'America'}
                    },
                    {
                        id: 3,
                        avatarUrl: 'http://avatar-collection.ru/images/avatar-687.jpg',
                        followed: true,
                        fullName: 'Bondage',
                        status: 'go to the gym',
                        location: {city: 'St.Peterburg', country: 'Russia'}
                    },
                ])
        }

        return (
            <div>
                {props.users.map(u => <div key={u.id}>
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
