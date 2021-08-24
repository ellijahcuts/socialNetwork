import React from 'react';
import {InjectedFormProps, Field, reduxForm} from "redux-form";
import {FormElementInput} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'}
                       name={'login'}
                       component={FormElementInput}
                       validate={required}
                />
            </div>
            <div>
                <Field placeholder={"Password"}
                       name={"password"}
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

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
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


export default Login;
