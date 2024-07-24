import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBBtn, MDBInput, MDBBadge, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const CheckOut = () => {
    return (
        <>
            <MDBListGroup >
                <MDBListGroupItem className='d-flex'>
                    <div className="d-flex flex-grow-1 bd-highlight justify-content-between ">
                        <div className="div">
                            <div className='text'>Total price:</div>
                            <div className='text'>Discount:</div>
                            <div className='text'>Tax:</div>
                        </div>


                        <div className="d-flex">
                            <div className="div">
                                <div className='text'>$329.00</div>
                                <div className='text text-success'>-$60.00</div>
                                <div className='text'>$14.00</div>
                            </div>
                        </div>
                    </div>
                </MDBListGroupItem>
                <MDBListGroupItem >
                    <div className="d-flex mb-2 flex-grow-1 bd-highlight justify-content-between ">
                        <div className="div">
                            <div className='text'>Total price:</div>
                        </div>

                        <div className="d-flex">
                            <div className="div">
                                <div className='text'>$283.00</div>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex align-items-center flex-column bd-highlight mb-3" >
                        <MDBBtn color='light' rippleColor='dark'>
                            Add more items
                        </MDBBtn>
                        <MDBBtn color='success'>
                            Checkout
                        </MDBBtn>
                    </div>

                </MDBListGroupItem>
            </MDBListGroup>
        </>
    );
};


export default CheckOut;