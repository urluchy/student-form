import React, { Component } from 'react';

export class Profile extends Component {
    render(){
        return (
            <div class="container mt-5">
            <h4>Profile details: </h4>
            <p>Your first name: {this.props.firstName}</p>
            <p>Your last name: {this.props.lastName}</p>
            <p>Your email: {this.props.email}</p>
            <p>Your password: {this.props.password}</p>
            </div>
        )
    }
}

export default Profile;