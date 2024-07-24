import React from 'react';
import { MDBNavbar, MDBContainer, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBNavbarToggler, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const Navbar = () => {
    return (
        <>
            <MDBNavbar expand='lg' dark bgColor='dark'>
                <MDBContainer fluid>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarColor02'
                        aria-controls='navbarColor02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        
                    </MDBNavbarToggler>
                    <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem className='active'>
                            <MDBNavbarLink aria-current='page' href='#'>
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#'>Features</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#'>About</MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
};

export default Navbar;
