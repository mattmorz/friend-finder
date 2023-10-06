import React, {useState,useEffect} from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useDispatch } from "react-redux";
import { removeFriend, addFriend } from "../redux/actions";

const Friend = (props) => {
    const [toggle, setToggle ] = useState(props.is_friend);
    const dispatch = useDispatch();

    const toggleFriend = () => {
        setToggle((prev)=>!prev);
        toggle ? dispatch(removeFriend({id:props.id,full_name:''})) : dispatch(addFriend({id:props.id,full_name:''}));
    }
         

    useEffect(() => {   
        console.log('Friend component did mount and update');
    },[toggle])

    return (
       <>
       
           <p className={toggle ? "fw-bold fs-2 text-warning":"fw-bold fs-2"}>{props.name}</p>
           <p className={toggle ? "fw-bold fs-5 text-warning": "fw-bold fs-5" }>{props.short_bio}</p>
           <Row>
                <Col>
                    <Button size="sm" onClick={toggleFriend} className={toggle ? "btn-secondary mb-2": "btn-primary mb-2"}>{toggle ? "Unfriend": "Add as Friend"}</Button>
                </Col>
            </Row>
            
       </>

    )
};

export default Friend;