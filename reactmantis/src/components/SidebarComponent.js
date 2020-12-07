import React, { Component } from 'react';
import { Collapse, Card, CardHeader, CardBody } from 'reactstrap';

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state= {
            isNavOpen: false,
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render () {
        return (
            <React.Fragment>
                <Card className="rounded-0 border-bottom-0">
                    <CardHeader>Home</CardHeader>
                </Card>
                <Card className="rounded-0 border-bottom-0">
                    <CardHeader>Videos</CardHeader>
                </Card>
                <Card className="rounded-0 border-bottom-0">
                    <CardHeader>New Arrivals</CardHeader>
                </Card>
                <Card className="rounded-0 border-bottom-0">
                    <CardHeader onClick={this.toggleNav}>Care Sheets<i className="fa fa-angle-down float-right"/></CardHeader>
                    <Collapse isOpen={this.state.isNavOpen} onClick={this.toggleNav}>
                        <CardBody>Sublink</CardBody>
                    </Collapse>
                </Card>
                <Card className="rounded-0 border-bottom-0">
                    <CardHeader onClick={this.toggleNav}>Praying Mantises<i className="fa fa-angle-down float-right"/></CardHeader>
                    <Collapse isOpen={this.state.isNavOpen} onClick={this.toggleNav}>
                        <CardBody>Sublink</CardBody>
                    </Collapse>
                </Card>
                <Card className="rounded-0 border-bottom-0">
                    <CardHeader onClick={this.toggleNav}>Feeder Insects<i className="fa fa-angle-down float-right"/></CardHeader>
                    <Collapse isOpen={this.state.isNavOpen} onClick={this.toggleNav}>
                        <CardBody>Sublink</CardBody>
                    </Collapse>
                </Card>
                <Card className="rounded-0 border-bottom-0">
                    <CardHeader onClick={this.toggleNav}>Starter Kits<i className="fa fa-angle-down float-right"/></CardHeader>
                    <Collapse isOpen={this.state.isNavOpen} onClick={this.toggleNav}>
                        <CardBody>Sublink</CardBody>
                    </Collapse>
                </Card>
                <Card className="rounded-0 border-bottom-0">
                    <CardHeader onClick={this.toggleNav}>Accessories<i className="fa fa-angle-down float-right"/></CardHeader>
                    <Collapse isOpen={this.state.isNavOpen} onClick={this.toggleNav}>
                        <CardBody>Sublink</CardBody>
                    </Collapse>
                </Card>
                <Card className="rounded-0 border-bottom-0">
                    <CardHeader onClick={this.toggleNav}>Gift Shop<i className="fa fa-angle-down float-right"/></CardHeader>
                    <Collapse isOpen={this.state.isNavOpen} onClick={this.toggleNav}>
                        <CardBody>Sublink</CardBody>
                    </Collapse>
                </Card>
                <Card className="rounded-0">
                    <CardHeader onClick={this.toggleNav}>Shopping Supplies<i className="fa fa-angle-down float-right"/></CardHeader>
                    <Collapse isOpen={this.state.isNavOpen} onClick={this.toggleNav}>
                        <CardBody>Sublink</CardBody>
                    </Collapse>
                </Card>
                <Card className="rounded-0">
                    <CardHeader>Spiders</CardHeader>
                </Card>
                <Card className="rounded-0">
                    <CardHeader>Contact Us</CardHeader>
                </Card>
            </React.Fragment>
        );
    }
}

export default Sidebar;