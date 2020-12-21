import React, {useState} from'react';
import { Collapse, Card, CardHeader, CardBody } from 'reactstrap';

function RenderNav( {header}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    if(header.subtitle === 0){
        return (
            <Card className="rounded-0">
                <CardHeader className="border-bottom-0">{header.name}</CardHeader>
            </Card>
        );
    } else {
        return (
            <Card className="rounded-0">
                <CardHeader btn onClick={toggle} className="border-bottom-0">{header.name}</CardHeader>
                <Collapse isOpen={isOpen}>
                        {header.subtitles.map(subtitle =>{
                            return (
                                <CardBody className="pt-2 pb-2" key={subtitle.id}>
                                    {subtitle.name}
                                </CardBody>
                            );
                        })}
                </Collapse>
            </Card>
        );
    }
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

//NOTE:
//want to do a hover and mouseout event for clicking and hovering over navbar headers