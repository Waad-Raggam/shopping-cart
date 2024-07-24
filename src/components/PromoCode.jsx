import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBInput, MDBBadge, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const PromoCode = () => {
    return (
        <>
            <MDBListGroup >
                <MDBListGroupItem >
                    <div class="container">
                        <div class="row">
                            Have coupon?
                            <div className="row">
                                <div className="col">
                                    <MDBInput type="text" >
                                    </MDBInput>
                                </div>
                                <div className="col">
                                    <button type="button" class="btn btn-primary">Apply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </MDBListGroupItem>
            </MDBListGroup>
        </>
    );
};

export default PromoCode;