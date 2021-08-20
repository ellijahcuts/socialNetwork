import React from "react";
import "./App.css";
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import Dialogs from "./components/Dialogs/DialogsContainer";


const App = () => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/login' render={() =>
                        <LoginPage/>}/>
                    <Route path='/dialogs' render={() =>
                        <Dialogs/>}/>
                    <Route path='/profile/:userId?' render={() =>
                        <ProfileContainer/>}/>
                    <Route path='/users' render={() =>
                        <UsersContainer/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;


