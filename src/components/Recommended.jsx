import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBBtn, MDBInput, MDBBadge, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const Recommended = () => {
    return (
        <>
            <div className="d-flex align-items-start flex-column bd-highlight">
                <div className="h2 mt-5">Recommended Items </div>
            </div>

            <div class="row row-cols-1 row-cols-md-4 g-4 mt-1">
                <div class="col">
                    <div class="card">
                        <MDBListGroup>
                            <MDBListGroupItem>
                                <img src="images/jacket.jpg" class="rounded float-start" height="100"></img>
                            </MDBListGroupItem>
                            <MDBListGroupItem>
                                    <h5 class="card-title text-dark">Gaming Headset with Mic</h5>
                                    <p class="card-text text-dark fw-bold">$18.95</p>
                            </MDBListGroupItem>
                            <MDBListGroupItem>
                                <div class="card-footer text-success">
                                    <MDBBtn color='success'>
                                        Add to cart
                                    </MDBBtn>
                                </div>
                            </MDBListGroupItem>
                        </MDBListGroup>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <MDBListGroup>
                            <MDBListGroupItem>
                                <img src="images/jacket.jpg" class="rounded float-start" height="100"></img>
                            </MDBListGroupItem>
                            <MDBListGroupItem>
                                    <h5 class="card-title text-dark">Apple Watch Series 1 Sport</h5>
                                    <p class="card-text text-dark fw-bold">$120.00</p>
                            </MDBListGroupItem>
                            <MDBListGroupItem>
                                <div class="card-footer text-success">
                                    <MDBBtn color='success'>
                                        Add to cart
                                    </MDBBtn>
                                </div>
                            </MDBListGroupItem>
                        </MDBListGroup>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <MDBListGroup>
                            <MDBListGroupItem>
                                <img src="images/jacket.jpg" class="rounded float-start" height="100"></img>
                            </MDBListGroupItem>
                            <MDBListGroupItem>
                                    <h5 class="card-title text-dark">Men's Denim Jeans Shorts</h5>
                                    <p class="card-text text-dark fw-bold">$80.50</p>
                            </MDBListGroupItem>
                            <MDBListGroupItem>
                                <div class="card-footer text-success">
                                    <MDBBtn color='success'>
                                        Add to cart
                                    </MDBBtn>
                                </div>
                            </MDBListGroupItem>
                        </MDBListGroup>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <MDBListGroup>
                            <MDBListGroupItem>
                                <img src="images/jacket.jpg" class="rounded float-start" height="100"></img>
                            </MDBListGroupItem>
                            <MDBListGroupItem >
                                    <h5 class="card-title text-dark">Mens T-shirt Cotton Base Layer Slim fit</h5>
                                    <p class="card-text text-dark fw-bold">$13.90</p>
                            </MDBListGroupItem>
                            <MDBListGroupItem>
                                <div class="card-footer text-success">
                                    <MDBBtn color='success'>
                                        Add to cart
                                    </MDBBtn>
                                </div>
                            </MDBListGroupItem>
                        </MDBListGroup>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Recommended;