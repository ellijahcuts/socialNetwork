import React from "react";
import "./App.css";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import store, {ActionsTypes, StoreType} from "./redux/store";
import {AppStateType} from "./redux/redux-store";

type AppPropsType = {
    state: AppStateType
    dispatch: (action: ActionsTypes) => void
}

const App = (props: AppPropsType) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs
                        state={props.state.dialogsPage}
                        message={props.state.dialogsPage.newMessageText}
                        dispatch={props.dispatch.bind(store)}
                    />}/>

                    <Route path='/profile' render={() => <Profile
                        state={props.state.profilePage}
                        message={props.state.profilePage.newPostText}
                        dispatch={props.dispatch.bind(store)}
                    />}/>

                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;


