import React, {useState} from'react';
import { Collapse, Card, CardHeader, CardBody } from 'reactstrap';

function RenderNav( {header}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    // function changeBackground(e) {
    //     e.target.style.background = 'gray';
    // }

    // function changeBack(e) {
    //     e.target.style.background = '#f7f7f7';
    // }

    if(header.subtitle === 0){
        return (
            <Card className="rounded-0">
                <CardHeader className="border-bottom-0">{header.name}</CardHeader>
            </Card>
        );
    } else {
        return (
            <Card className="rounded-0">
                <CardHeader btn className="border-bottom-0 rounded-0" onClick={toggle}>
                    {header.name} <i class="fa fa-angle-down float-right"></i>
                </CardHeader>
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
//rewrite so that event listners and hooks are added to make sidebar nav work properly
//why does the down arrow appear on all results, even when it is in the else part of the statement?