import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {logoutTC} from "../../redux/authReducer";


type mapStatePropsType = {
    isAuth: boolean
    login: string | null

}
type mapDispatchPropsType = {
    logoutTC: () => void
}
type HeaderContainerPropsType = mapStatePropsType & mapDispatchPropsType

class HeaderContainerFunc extends React.Component<HeaderContainerPropsType> {

    render() {
        return (
            <Header
                isAuth={this.props.isAuth}
                login={this.props.login}
                logout={this.props.logoutTC}
            />
        )
    }
}
let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}
const HeaderContainer = connect(mapStateToProps, {logoutTC})(HeaderContainerFunc);

export default HeaderContainer;
