import React from 'react';
import {InjectedFormProps, Field, reduxForm} from "redux-form";
import {FormElementInput} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginTC, logoutTC} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                       name={'email'}
                       component={FormElementInput}
                       validate={required}
                />
            </div>
            <div>
                <Field placeholder={"Password"}
                       name={"password"}
                       /*type={"password"}*/
                       component={FormElementInput}
                       validate={required}
                />
            </div>
            <div>
                <Field type={"checkbox"}
                       name={"rememberMe"}
                       component={FormElementInput}
                       validate={required}
                />
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'loginForm'})(LoginForm)

type MapStateToPropsType = {
    isAuth: boolean
}

type LoginPropsType = {
    isAuth: boolean
    loginTC: (email: string, password: string, rememberMe: boolean) => void
}

const LoginPage = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <hr/>
            <h2>Извините, вы не вошли / Sorry, you are not logged in</h2>
            <hr/>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {loginTC})(LoginPage);
