import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Body from './BodyComponent';
import Sidebar from './SidebarComponent';
import { Col, Row} from 'reactstrap';
import { MANTISES } from '../shared/mantises';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mantises: MANTISES,
        };
    }

    render () {
        return (
            <React.Fragment>
                <Header />
                <div>
                    <Row>
                        <Col xs={4} className="d-none d-lg-block">
                            <Sidebar />
                        </Col>
                        <Col>
                            <Body mantises={this.state.mantises}/>
                        </Col>
                    </Row>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;