import React from 'react';
import { Card, CardText, CardSubtitle, CardBody, CardImg, Col, Row } from 'reactstrap';

function RenderCard( {mantis} ) {
    return (
        <Card className="h-100 rounded-0">
            <CardImg src={mantis.image} className="mantis-image" alt={mantis.name}/>
            <CardBody>
                <CardSubtitle className="mantis-name">{mantis.name}</CardSubtitle>
                <CardText className="mantis-price">${mantis.price}</CardText>
            </CardBody>
        </Card>
    );
}

function Body(props) {
    const mantis = props.mantises.map(mantis => {
        return (
            <div key={mantis.id}>
                <RenderCard mantis={mantis} />
            </div>
        );
    });

    return (
        <React.Fragment>

            <Row className="mr-0 ml-0 the-top">
                <Col className="mt-2 ml-0 pl-0 title-container">
                    <h1>Mantises</h1>
                </Col>
                <Col> {/*This will eventually be a react redux dropdown */}
                <form class="container-fluid mt-2">
                    <div class="form-group row pr-1">
                        <select class="form-control">
                            <option value="select">Sort by Featured</option>
                            <option value="1">Sort by Nymphs</option>
                            <option value="2">Sort by Adults</option>
                        </select>
                    </div>
                </form>
                </Col>
            </Row>

            <Col>
                <Row xs={2} sm={3} md={4} className="d-flex flex-fill h-100 the-row">
                    {mantis}
                </Row>
            </Col>

        </React.Fragment>
    );
}

export default Body;