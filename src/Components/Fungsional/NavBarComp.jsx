import React, { useContext, useState } from 'react'
// Ketik rfc : untuk fungsional

import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Button
} from 'reactstrap';
import { CartContext } from '../../CartContext';

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
                            <NavLink href="/">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/mahasiswa">
                                Mahasiswa
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/kelas">
                                CLass
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/functional">
                                Hook
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/useeffect">
                                Use Effects
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/produk">
                                Produk
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