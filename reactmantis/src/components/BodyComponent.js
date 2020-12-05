import React from 'react';
import { Card, CardTitle, CardText, CardBody } from 'reactstrap';

function Body() {
    return (
        <Card>
            <CardBody>
                <CardTitle><h1>Card Title</h1></CardTitle>
                <CardText>
                This is where the content will eventually be.
                </CardText>
            </CardBody>
        </Card>
    );
}

export default Body;