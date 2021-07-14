import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <h2>This is Header Section</h2>
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