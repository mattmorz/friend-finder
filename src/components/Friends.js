import React, {useEffect,useState}from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Toast from "react-bootstrap/Toast";
import Friend from "./Friend";

import { useSelector } from "react-redux";

import { useLocation }  from "react-router-dom";
;

const Friends = () => {
    //data are from store
    const list_of_friends = useSelector((state) => state.counter.friends);
    const number_of_friends = useSelector((state) => state.counter.number_of_friends);

    const [show, setShow] = useState(false);
    const location = useLocation()

    //console.log(location.pathname)

    useEffect(
        () => {   
            console.log('The updated number of friends: '+number_of_friends)                            
            if(number_of_friends == 3){
                setShow(true);
            }
            return () => {
                console.log('cleanup number of friends: '+number_of_friends)
            }
        },
        [number_of_friends]
    )

    return (
        <Container className="mt-3 position-relative">
            <Row>
                <Col xs={6}>
                    <Toast onClose={() => setShow(false)} show={show} position="top-center" className="position-absolute mt-0" bg="success">
                        <Toast.Header>
                            <strong className="me-auto">Message</strong>
                        </Toast.Header>
                        <Toast.Body className="text-white">You have added all as friends.</Toast.Body>
                    </Toast>
                </Col>
            </Row>
            <Row>
                {<p className="fs-5">You have {number_of_friends} {number_of_friends <= 1 ? "friend.": "friends."} </p>}
            </Row>
            <Row>
                {list_of_friends.map((friend)=>(
                    <Col className="p-2 m-2 bg-dark text-white text-center rounded-3" key={friend.id}>
                        <Friend id={friend.id} name={friend.name} short_bio={friend.short_bio} is_friend={friend.is_friend}/>
                    </Col>
                ))}
            </Row>

        </Container>
    )
};

export default Friends;