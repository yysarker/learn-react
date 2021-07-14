import React, {Component} from 'react'
import PropTypes from "prop-types"
class Header extends Component {
    render() {
        const {name, phone, email, roll, gender} =this.props;
        return (
            <div>
                <h2>This is Header Section</h2>
                <h2>{roll}</h2>
                <h3>Name: {name}.</h3>
                <h3>phone: {phone}.</h3>
                <h3>Email: {email}.</h3>
                <h3>Gender: {gender}.</h3>
                <br/>
            </div>
        );
    }
}
Header.defaultProps ={
    gender: "Male"
}
Header.propTypes = {
    roll: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired
}
export default Header;