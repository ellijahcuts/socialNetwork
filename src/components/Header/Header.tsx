import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css";

export type HeaderAPIPropsType = {
    isAuth: boolean
    login: string | null
}

const Header = (props: HeaderAPIPropsType) => {
    return (
        <header className={s.header}>
            <img
                src="https://3.bp.blogspot.com/-9mcTbiOH1ys/WpxpkRF3MyI/AAAAAAAAy5I/hbQEF984XJokWmxJpad04w7aKUX_-7EuQCLcBGAs/s1600/imperia-black.png"/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>LOGIN</NavLink>}
            </div>
        </header>
    );
};
export default Header;
