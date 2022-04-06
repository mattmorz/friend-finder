import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Friend = (props) => {
    const [toggle, setToggle ] = useState(false);

    const toggleFriend = () => {
        setToggle((prev)=>!prev);
        toggle ? props.remove_friend(): props.add_friend();
    }
    return (
       <>
           <p className="fw-bold fs-2">{props.name}</p>
           <p className="fs-5">{props.short_bio}</p>
           <Row>
                <Col>
                    <Button onClick={toggleFriend} className={toggle ? "disabled": ""}>Add as Friend</Button>
                </Col>
                <Col>
                    { toggle && <Button className="btn-danger" onClick={toggleFriend}>Unfriend</Button>}
                    
                </Col>
            </Row>
            
       </>

    )
};

export default Friend;