import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Body from './BodyComponent';
import Sidebar from './SidebarComponent';
import { Col, Row} from 'reactstrap';

class Main extends Component {
    render () {
        return (
            <React.Fragment>
                <Header />
                <div>
                    <Row>
                        <Col xs={4} className="d-none d-lg-block pr-0">
                            <Sidebar />
                        </Col>
                        <Col className="pl-0">
                            <Body />
                        </Col>
                    </Row>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;