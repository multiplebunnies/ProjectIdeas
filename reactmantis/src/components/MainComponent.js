import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Body from './BodyComponent';
import Sidebar from './SidebarComponent';
import Home from './HomeComponent';
import Videos from './VideosComponent';
import NewArrivals from './NewArrivalsComponent';
import Accessories from './AccessoriesComponent';
import { Col, Row} from 'reactstrap';
import { MANTISES } from '../shared/mantises';
import { HEADERS } from '../shared/sidebarnav';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mantises: MANTISES,
            headers: HEADERS
        };
    }

    render () {
        const HomePage = () => {
            return (
                <Home />
            );
        };

        const VideosPage = () => {
            return (
                <Videos />
            )
        }

        const NewArrivalsPage = () => {
            return (
                <NewArrivals />
            )
        }

        const AccessoriesPage = () => {
            return (
                <Accessories />
            )
        }

        

        return (
            <React.Fragment>
                <Header />

                <Row>
                    <Col xs={4} className="d-none d-lg-block">
                        <Sidebar headers={this.state.headers}/>
                    </Col>
                    <Col>
                        <Switch>
                            <Route path='/home' component={HomePage}/>
                            <Route exact path='/mantises' render={() => <Body mantises={this.state.mantises} />} />

                            <Route path='/videos' component={VideosPage}/>
                            <Route path='/newarrivals' component={NewArrivalsPage}/>
                            <Route path='/accessories' component={AccessoriesPage}/>

                            <Redirect to='/home' />
                        </Switch>
                    </Col>
                </Row>
            
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;