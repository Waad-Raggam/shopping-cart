import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBBadge } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const CartTable = () => {
    return (
        <>
            <MDBListGroup style={{ minWidth: '60rem' }}>
                <MDBListGroupItem className='justify-content-between align-items-center'>
                    <div className="div">
                        <h2 className='fw-bold'>Your shopping cart</h2>
                    </div>
                </MDBListGroupItem>

                <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
                    <div className="d-flex">
                        <img src="images/jacket.jpg" class="rounded float-start" height="100"></img>
                        <div className="div flex-column p-3">
                            <div className='text-start fw-bold'>John Doe</div>
                            <div className='text-muted'>john.doe@gmail.com</div>
                        </div>
                    </div>
                    <MDBBadge pill light color='success'>
                        Active
                    </MDBBadge>
                </MDBListGroupItem>

                <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
                    <div>
                        <div className='fw-bold'>Alex Ray</div>
                        <div className='text-muted'>alex.ray@gmail.com</div>
                    </div>
                    <MDBBadge pill light color='primary'>
                        Onboarding
                    </MDBBadge>
                </MDBListGroupItem>
                <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
                    <div>
                        <div className='fw-bold'>Kate Hunington</div>
                        <div className='text-muted'>kate.hunington@gmail.com</div>
                    </div>
                    <MDBBadge pill light color='warning'>
                        Awaiting
                    </MDBBadge>
                </MDBListGroupItem>
            </MDBListGroup>
        </>
    );
};

export default CartTable;