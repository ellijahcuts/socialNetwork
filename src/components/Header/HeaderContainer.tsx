import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserData,setIsFetching} from "../../redux/authReducer";
import Preloader from "../common/Preloader";


type mapStatePropsType = {
    isAuth: boolean
    login: string | null
    isFetching:boolean

}
type mapDispatchPropsType = {
    setAuthUserData: (userId:number, email:string, login: string) => void
    setIsFetching: (isFetching: boolean) => void
}
type HeaderContainerPropsType = mapStatePropsType & mapDispatchPropsType

class HeaderContainerFunc extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                this.props.setIsFetching(false)
                let {id, email, login} = response.data.data
                this.props.setAuthUserData(id, email, login)
            })
    }

    render() {
        return<>
        {this.props.isFetching ? <Preloader/> : null}
        <Header
            isAuth={this.props.isAuth}
            login={this.props.login}
        />
        </>
    }

}

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        isFetching: state.auth.isFetching

    }
}

const HeaderContainer = connect(mapStateToProps, {setAuthUserData, setIsFetching})(HeaderContainerFunc);

export default HeaderContainer;
