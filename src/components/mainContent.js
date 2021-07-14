import React, {Component} from 'react';

class MainContent extends Component {
    render() {
        const {name, Age, Email, phone} = this.props;
        return (
            <div className="main-container mb-3">
                <div className="card">
                    <div className="card-header">
                        <h3>Name : {name.toUpperCase()}</h3>
                    </div>
                    <div className="card-body">
                        <h5>Age : {Age}</h5>
                        <h5>Email : {Email}</h5>
                        <h5>Phone : {phone}</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContent;