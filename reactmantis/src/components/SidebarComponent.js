import React from'react';
import { Collapse, Card, CardHeader, CardBody } from 'reactstrap';

function RenderNav( {header}) {
    return (
        <Card className="rounded-0">
            <CardHeader className="border-bottom-0">{header.name}</CardHeader>
            <Collapse>
                <CardBody>{header.subtitle}</CardBody>
            </Collapse>
        </Card>
    );
}

function Sidebar(props) {
    const header = props.headers.map(header => {
        return (
            <div key={header.id}>
                <RenderNav header={header} />
            </div>
        );
    });

    return (
        <React.Fragment>
            {header}
        </React.Fragment>
    );
}

export default Sidebar;

//NOTE: This is not done correctly; need to write a function for toggling and determining state