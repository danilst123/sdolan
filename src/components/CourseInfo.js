import React from 'react';
import api from '../services/api/api';
import {connect} from 'react-redux'


function CourseList(props) {
    const courses = props.courses;

    const listItems = courses.map((course) =>
        <li key={course.id}>{course.fullname}</li>
    );

    return (
        <ul>{listItems}</ul>
    );
}

class CourseInfo extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            courseList: [],
        };

        this.submitGetCourse = this.submitGetCourse.bind(this);

    }


    submitGetCourse(e){

        e.preventDefault();

        api.get('course-list/').then((resp) => {

            this.setState({
                courseList: resp.data
            });

        }, () => {

            this.setState({
                courseList: []
            });

        })

    }


    render() {

        return (

            <div>
                {this.props.oidc.access_token &&
                    <form autoComplete="off" onSubmit={this.submitGetCourse}>
                        <br/><br/>
                        <input type='submit' name='auth' value="Получить список курсов"/>


                        <br/>
                        <br/>
                        <CourseList courses={this.state.courseList}/>

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

export default connect(mapStateToProps)(CourseInfo);