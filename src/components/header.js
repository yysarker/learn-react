import React, {Component} from 'react';

class Header extends Component {
    render() {
        const {name, phone, email, roll} =this.props;
        return (
            <div>
                <h2>This is Header Section</h2>
                <h2>{roll}</h2>
                <hr/>
                <h3>Name: {name}.</h3>
                <h3>phone: {phone}.</h3>
                <h3>Email: {email}.</h3>
                <nav>
                    <ul>
                        <li><a href={'#'}>Home</a></li>
                        <li><a href={'#'}>Main</a></li>
                        <li><a href={'#'}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;