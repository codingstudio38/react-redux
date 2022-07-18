import React, { Fragment } from "react";
import { Button } from 'react-bootstrap';
function Home(props) {
    console.log("Home", props);
    return (
        <Fragment>
            <div className="container mt-5 mb-5">
                <div className="col-md-12 mt-2 mb-2" style={{ height: "50px" }}>
                    <img className="addtocart" src="img/Cart-add-icon.png" />
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card ">
                            <img className="card-img-top" src="img/iphone.PNG" />
                            <div className="card-body">
                                <h5 className="card-title">Iphone 13 Pro</h5>
                                <p className="card-text">Some quick example text to build on the card title.</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Price: $1000</li>
                                <li className="list-group-item">20 Left Only</li>
                            </ul>
                            <div className="card-body">
                                <Button className="btn-info btn-sm" onClick={() => props.addToCartHandler({ price: 1000, name: "iphone 11" })}>Add Cart</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img className="card-img-top" src="img/iphone.PNG" />
                            <div className="card-body">
                                <h5 className="card-title">Iphone 13 Pro</h5>
                                <p className="card-text">Some quick example text to build on the card title.</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Price: $1000</li>
                                <li className="list-group-item">20 Left Only</li>
                            </ul>
                            <div className="card-body">
                                <Button className="btn-info btn-sm">Add Cart</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img className="card-img-top" src="img/iphone.PNG" />
                            <div className="card-body">
                                <h5 className="card-title">Iphone 13 Pro</h5>
                                <p className="card-text">Some quick example text to build on the card title.</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Price: $1000</li>
                                <li className="list-group-item">20 Left Only</li>
                            </ul>
                            <div className="card-body">
                                <Button className="btn-info btn-sm">Add Cart</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img className="card-img-top" src="img/iphone.PNG" />
                            <div className="card-body">
                                <h5 className="card-title">Iphone 13 Pro</h5>
                                <p className="card-text">Some quick example text to build on the card title.</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Price: $1000</li>
                                <li className="list-group-item">20 Left Only</li>
                            </ul>
                            <div className="card-body">
                                <Button className="btn-info btn-sm">Add Cart</Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment >
    )
}
export default Home;