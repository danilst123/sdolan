import React from 'react';
import {connect} from 'react-redux'


class UserInfo extends React.Component{

    render() {

        return (
            <div>

                name: {this.props.user.name}, <br/>
                email: {this.props.user.email},

            </div>
        );
    }

}


const mapStateToProps = (state) => {

    return {
        user: state.userInfo
    }
}

export default connect(mapStateToProps)(UserInfo);