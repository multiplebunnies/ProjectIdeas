import React, { useState } from'react';
import { Collapse, Card, Button } from 'reactstrap';

function RenderNav( {header} ) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    if (header.subtitle === 0) {
        return (
            <Card className="rounded-0">
                <Button className="navbar-buttons btn-light w-100 rounded-0 p-2">
                    {header.name} <i class="fa fa-angle-down float-right"></i>
                </Button>
            </Card>
        );
    } else {
        return (
            <Card className="rounded-0">
                <Button onClick={toggle} className="navbar-buttons btn-light w-100 rounded-0 p-2">
                    {header.name} <i class="fa fa-angle-down float-right"></i>
                </Button>
                <Collapse isOpen={isOpen}>
                    {header.subtitles.map(subtitle => {
                        return (
                            <Button className="navbar-buttons subtitle-buttons btn-light w-100 rounded-0 p-2" key={subtitle.id}>
                                {subtitle.name}
                            </Button>
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