import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Friend from "./Friend";

import { useSelector } from "react-redux";

const Friends = () => {
    //data are from store
    const list_of_friends = useSelector((state) => state.counter.friends);
    const number_of_friends = useSelector((state) => state.counter.number_of_friends);

    return (
        <Container className="mt-5">
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