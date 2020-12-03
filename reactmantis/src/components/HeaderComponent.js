import React, { useState } from 'react';
import Logo from '../images/mantis_full.png';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

//will eventually add react-router to this page

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="header-nav" expand="md">
        <span className="logo">
            <a href="/">
                <img src={Logo} height="100" width="105" alt="Logo"/>
            </a>
        </span>
        <NavbarBrand href="/"><h1>Mantis Place</h1></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/videos/">Videos</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/newarrivals/">New Arrivals</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/mantises/">Mantises</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/accessories/">Accessories</NavLink>
                </NavItem>
            </Nav>
            <span className="shopping">
                <a className="fa fa-shopping-bag fa-lg" href="/"></a> {/*will fix the bootstrap modal issue with breakpoints later*/}
            </span>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;