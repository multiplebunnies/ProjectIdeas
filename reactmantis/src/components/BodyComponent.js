import React from 'react';
import { Card, CardText, CardSubtitle, CardBody, CardImg } from 'reactstrap';

function RenderCard({mantis}) {
    return (
        <Card className="pl-4 pt-3">
            <CardImg src={mantis.image} alt={mantis.name}/>
            <CardBody>
                <CardSubtitle>{mantis.name}</CardSubtitle>
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
        <>
            {mantis}
        </>
    );
}

export default Body;