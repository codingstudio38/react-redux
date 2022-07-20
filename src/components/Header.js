import React, { Fragment } from "react";
function Header(props) {
    // console.log("Header data", props.data);
    return (
        <Fragment>
            <div className="container mt-5 mb-0">
                <div className="col-md-12" style={{ height: "50px" }}>
                    <div className="cartspan">{props.data.length}</div>
                    <img className="addtocart" src="img/Cart-add-icon.png" />
                </div>
            </div>
        </Fragment >
    )
}
export default Header;