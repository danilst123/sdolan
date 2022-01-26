import './../App.css';
import AuthForm from './AuthForm'

import UserInfo from './UserInfo'
import CourseInfo from './CourseInfo'
import {Component} from "react";
import {getUser} from './../features/auth/userSlice'
import {connect} from "react-redux";


class Auth extends Component{

    componentDidMount() {
        const { getUser } = this.props;
        getUser()
    }

    render() {
        return (
            <div className="App">
                <section>
                    <br />
                    <br />
                    <AuthForm />
                    <UserInfo />
                    <CourseInfo />
                </section>
            </div>
        );
    }

}

export default connect(null, {getUser})(Auth);
