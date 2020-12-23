import React, { Component } from 'react';
import Logo from '../shared/mantis_full.png';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
        Modal, ModalHeader, ModalBody } from 'reactstrap';
import { NavLink } from 'react-router-dom';                         

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModelOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }


    render () {
        return (
            <React.Fragment>
                <Navbar className="header-nav" expand="lg" dark>
                    <div className="container-fluid">
                        <span className="logo d-none d-lg-block">
                            <a href="/"><img src={Logo} height="100" width="105" alt="Logo"/></a>
                        </span>
                        <NavbarBrand href="/" className="website-name"><h1>Mantis Place</h1></NavbarBrand>
                        <span className="btn shopping-bag" onClick={this.toggleModal}>
                            <i className="fa fa-shopping-bag fa-lg" href="/"></i>
                        </span>
                        <NavbarToggler className="toggler order-first align-items-center" onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/videos">Videos</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/newarrivals">New Arrivals</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="d-lg-none nav-link" to="/home">Care Sheets</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/mantises">Mantises</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="d-lg-none nav-link " to="/home">Spiders</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="d-lg-none nav-link" to="/home">Feeder Insects</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="d-lg-none nav-link" to="/home">Starter Kits</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/accessories">Accessories</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="d-lg-none nav-link" to="/home">Gift Shop</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="d-lg-none nav-link" to="/home">Shipping Supplies</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="d-lg-none nav-link" to="/home">Contact Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="d-lg-none nav-link" to="/home">Shopping and Site Policy</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Modal centered isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Shopping Cart</ModalHeader>
                    <ModalBody>More text here later.</ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;