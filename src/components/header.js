import React, {Component} from 'react'
import PropTypes from "prop-types"
class Header extends Component {
    render() {
        const {roll, gender} =this.props;
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-2">
                <div className="container">
                    <a className="navbar-brand" href="/">React JS</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Contact us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
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