import React from "react";
import PropTypes from "prop-types";

const Footer = props => {
    const { job } = props;
    return(
        <div className="footer">
            <hr/>
            <h2>This is Footer</h2>
            <h2>{job}</h2>

        </div>
    )
}
Footer.defaultProps = {
    job: 'Full Stack Developer'
}
Footer.propTypes = {
    job: PropTypes.string.isRequired
}
export default Footer