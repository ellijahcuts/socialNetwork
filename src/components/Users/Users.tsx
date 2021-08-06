import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/none-avatar.png";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from 'react-router-dom';
import axios from "axios";


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
                        {u.followed ?
                            <button onClick={() =>{

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {'API-KEY':'4206485e-0290-4078-a67d-87761ec4f1b5'}
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unFollow(u.id)
                                        }
                                    })
                            }}
                            >UnFollow</button>
                            : <button onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {'API-KEY':'4206485e-0290-4078-a67d-87761ec4f1b5'}
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id)
                                        }
                                    })
                            }}
                            >Follow</button>}
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
