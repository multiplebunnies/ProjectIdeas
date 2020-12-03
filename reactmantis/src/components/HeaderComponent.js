import React, { useState } from 'react';
import Logo from '../images/mantis_full.png';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

//will eventually add react-router to this page

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="header-nav" expand="lg" dark>
            <div className="container-fluid">
                {/* website logo---------------- */}
                <span className="logo d-none d-lg-block">
                    <a href="/"><img src={Logo} height="100" width="105" alt="Logo"/></a>
                </span>
                {/* website name--------------- */}
                <NavbarBrand href="/" className="website-name"><h1>Mantis Place</h1></NavbarBrand>
                {/* shopping bag icon-----------*/}
                <span className="shopping-bag">
                    <a className="fa fa-shopping-bag fa-lg" href="/"/> {/*will fix the bootstrap modal issue with breakpoints later*/}
                </span>
                {/* navbar toggler and links----*/}
                <NavbarToggler className="toggler order-first align-items-center" onClick={toggle} />
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
                            <NavLink className="d-lg-none" href="/caresheets/">Care Sheets</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/mantises/">Mantises</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="d-lg-none" href="/spiders/">Spiders</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="d-lg-none" href="/feederinsects/">Feeder Insects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="d-lg-none" href="/starterkits/">Starter Kits</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/accessories/">Accessories</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="d-lg-none" href="/giftshop/">Gift Shop</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="d-lg-none" href="/shoppingsupplies/">Shipping Supplies</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="d-lg-none" href="/contactus/">Contact Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="d-lg-none" href="/policies/">Shopping and Site Policy</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
      </Navbar>
    </div>
  );
}

export default Header;