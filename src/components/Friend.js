import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useDispatch, useSelector } from "react-redux";
import { removeFriend, addFriend } from "../redux/ducks/counter";

const Friend = (props) => {
    const [toggle, setToggle ] = useState(props.is_friend);
    const dispatch = useDispatch();

    const toggleFriend = () => {
        setToggle((prev)=>!prev);
        toggle ? dispatch(removeFriend(props.id)) : dispatch(addFriend(props.id));
    }
    return (
       <>
           <p className="fw-bold fs-2">{props.name}</p>
           <p className="fs-5">{props.short_bio}</p>
           <Row>
                <Col>
                    <Button onClick={toggleFriend} className={toggle ? "btn-secondary": "btn-primary"}>{toggle ? "Unfriend": "Add as Friend"}</Button>
                </Col>
            </Row>
            
       </>

    )
};

export default Friend;