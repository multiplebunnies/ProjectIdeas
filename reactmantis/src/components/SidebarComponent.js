import React, { useState } from'react';
import { Collapse, Card, CardHeader, CardBody } from 'reactstrap';

function RenderNav( {header}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    function changeBackground(e) {
        e.target.style.background = "#2a2a2a";
        e.target.style.color = "white";
    }

    function changeBack(e) {
        e.target.style.background = "";
        e.target.style.color = "";
    }

    if (header.subtitle === 0){
        return (
            <Card className="rounded-0">
                <CardHeader className="border-bottom-0">{header.name}</CardHeader>
            </Card>
        );
    } else {
        return (
            <Card className="rounded-0">
                <CardHeader btn className="border-bottom-0 rounded-0" onClick={toggle}
                onMouseOver={changeBackground} onMouseOut={changeBack}>
                    {header.name} <i class="fa fa-angle-down float-right"></i>
                </CardHeader>
                <Collapse isOpen={isOpen}>
                        {header.subtitles.map(subtitle =>{
                            return (
                                <CardBody btn className="pt-2 pb-2" key={subtitle.id} 
                                          onMouseOver={changeBackground} onMouseOut={changeBack}>
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
//why does the down arrow appear on all results, even when it is in the else part of the statement?
//event listner so two events for click: collapse toggle and background-color change (buttons)
//I know that the arrows are an issue with the hover events

//IS IT BAD PRACTICE TO DO WHAT I HAVE DONE HERE?