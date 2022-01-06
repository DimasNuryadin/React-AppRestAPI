import React, { useContext, useState } from 'react'
// Ketik rfc : untuk fungsional

import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavbarText,
    Button
} from 'reactstrap';
import { CartContext } from '../../CartContext';
import { NavLink } from 'react-router-dom';

const NavBarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    // Memanggil Context dari Cart Context
    const {value, setValue} = useContext(CartContext)

    return (
        <div>
            <Navbar
                color="light"
                expand="md"
                fixed=""
                light
            >
                <NavbarBrand href="/">
                    reactstrap
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink to="/" className="nav-link">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/about" className="nav-link">
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/mahasiswa" className="nav-link">
                                Mahasiswa
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/kelas" className="nav-link">
                                CLass
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/functional" className="nav-link">
                                Hook
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/useeffect" className="nav-link">
                                Use Effects
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/produk" className="nav-link">
                                Produk
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/reducer" className="nav-link">
                                Reducer
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        <Button color='danger'>
                            <i className="fa fa-shopping-cart"></i>
                            <span className='badge badge-light'>{value} </span>
                        </Button>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavBarComp