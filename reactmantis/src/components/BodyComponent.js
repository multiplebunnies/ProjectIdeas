import React, {useState} from 'react';
import { Card, CardText, CardSubtitle, CardBody, CardImg, Col, Row,
         Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

function RenderCard( {mantis} ) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <React.Fragment>
            <Card className="h-100 rounded-0">
                <CardImg src={mantis.image} className="mantis-image" alt={mantis.name} onClick={toggle}/>
                <CardBody>
                    <CardSubtitle className="mantis-name">{mantis.name}</CardSubtitle>
                    <CardText className="mantis-price">${mantis.price}</CardText>
                </CardBody>
            </Card>

            <Modal centered isOpen={isOpen} toggle={toggle} >
                <ModalHeader toggle={toggle} className="product-header"><h1>Product Preview</h1></ModalHeader>
                <ModalBody>
                    <Row>
                        <Col xs={5} sm={4}>
                            <CardImg className="img-thumbnail" src={mantis.image} alt={mantis.name}>
                            </CardImg>
                        </Col>
                        <Col sm={7}>
                            <Col>
                                <Row className="product-name">
                                    {mantis.name}
                                </Row>
                                <Row className="product-price pb-2">
                                    ${mantis.price}
                                </Row>
                                <Row className="product-description pb-2">
                                {mantis.description}
                                </Row>
                            </Col>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                        <Button className="p-2 rounded-0 product-button">View Product</Button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
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

//TODO:
//fix button behavior
//add hover and quickview button so one can open the modal