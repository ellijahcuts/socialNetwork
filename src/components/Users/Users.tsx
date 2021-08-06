import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/none-avatar.png";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from 'react-router-dom';
import axios from "axios";
import {followAPI} from "../../api/api";


export type UsersAPIPropsType = {
    onPageChanged: (pageNumber: number) => void
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    usersPage: Array<UserType>
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUserCount: (totalCount: number) => void
}


const Users = (props: UsersAPIPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return (
                        <span onClick={() => {
                            props.onPageChanged(p)
                        }}
                              className={props.currentPage === p ? s.selectedPage : ""}>{p}</span>
                    )
                })}
            </div>
            {props.usersPage.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img
                            src={u.photos.small != null ? u.photos.small : userPhoto}
                            alt={'Loading...'}
                            className={s.usersPhoto}
                        />
                            </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ?
                            <button onClick={() => {
                                followAPI.deleteUnfollow(u.id)
                                    .then(data => {
                                        if (data.resultCode == 0) {
                                            props.unFollow(u.id)
                                        }
                                    })
                            }}>UnFollow</button>
                            :
                            <button onClick={() => {
                                followAPI.postFollow(u.id)
                                    .then(data => {
                                        if (data.resultCode == 0) {
                                            props.follow(u.id)
                                        }
                                    })
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
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
