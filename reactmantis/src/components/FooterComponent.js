import React from 'react';

function Footer(props) {
    return (
        <footer className="site-footer d-flex align-items-end">
            <div className="container">
                <div className="row">             
                    <div className="col text-center">
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '} {/* the stuff in brackets creates whitespace*/}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a>
                        <p>copyright 2020</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;