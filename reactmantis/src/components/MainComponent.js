import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Sidebar from './SidebarComponent';

class Main extends Component {
    render () {
        return (
            <React.Fragment>
                <Header />
                <Sidebar />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;
