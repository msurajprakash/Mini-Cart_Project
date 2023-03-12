import React from "react";

const Footer = (props) => {

    return(
        <div className="footer">
            <h2>TOTAL: {props.totalAmount()}</h2>
        </div>
    )
}

export default Footer;