import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData} from "../../redux/authReducer";


type mapStatePropsType = {
    isAuth: boolean
    login: string | null

}
type mapDispatchPropsType = {
    getAuthUserData: () => void
}
type HeaderContainerPropsType = mapStatePropsType & mapDispatchPropsType

class HeaderContainerFunc extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header
                isAuth={this.props.isAuth}
                login={this.props.login}
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

const HeaderContainer = connect(mapStateToProps, {getAuthUserData})(HeaderContainerFunc);

export default HeaderContainer;
