import React from 'react';
import { Card, CardText, CardSubtitle, CardBody, Col, Row, CardImg } from 'reactstrap';import MantisStandin from '../images/mantis_standin.jpg';

function RenderCard( {mantis} ) {
    return (
        <Card className="pl-3 pt-3 rounded-0">
            <CardImg src={mantis.image} alt={mantis.name}/>
            <CardBody>
                <CardSubtitle>{mantis.name} {mantis.age}</CardSubtitle>
                <CardText>${mantis.price}</CardText>
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
            <Row>
                <Col className="mt-2 title-container">
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
            <div className="pr-1 pl-1">
                {mantis}
            </div>
        </React.Fragment>
    );
}

export default Body;