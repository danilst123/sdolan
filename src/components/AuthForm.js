import React from 'react';
import {connect} from 'react-redux'
import { getToken } from '../features/auth/authSlice'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


class AuthForm extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.submitAuthForm = this.submitAuthForm.bind(this);
        this.changeUserName = this.changeUserName.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    changeUserName(event) {
        this.setState({username: event.target.value});
    }

    changePassword(event) {
        this.setState({password: event.target.value});
    }

    submitAuthForm(event) {
        const { getToken } = this.props;
        event.preventDefault();
        getToken(this.state);
    }

    render() {

        return (

            <div>
                <h1>Auth</h1>
                {!this.props.oidc.access_token &&
                    <form id="firstAuthForm" autoComplete="off" onSubmit={this.submitAuthForm}>
                        <label>

                            <TextField
                                id="outlined-basic"
                                label="Имя пользователя"
                                variant="outlined"
                                name="login"
                                value={this.state.username}
                                onChange={this.changeUserName}
                            />

                        </label>
                        <br/><br/>
                        <label>

                            <TextField
                                id="outlined-basic"
                                type="password"
                                label="Пароль"
                                variant="outlined"
                                name="password"
                                value={this.state.password}
                                onChange={this.changePassword}
                            />

                        </label>
                        <br/><br/>
                        <Button
                            name='auth'
                            type="submit"
                            variant="contained">Войти</Button>
                    </form>
                }
            </div>


        );
    }

}


const mapStateToProps = (state) => {
    return {
        oidc: state.auth.oidc
    }
}

export default connect(mapStateToProps, {getToken})(AuthForm);