import React,{ useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Friend from "./Friend";

const Friends = () => {
    const friends = [
        {
            "id":1,
            "name": "Matt Morales",
            "short_bio": "I used fingers a lot."
        },
        {
            "id":2,
            "name": "Zayin Gomez",
            "short_bio": "Registered Nurse."
        },
        {
            "id":3,
            "name": "Zed Morales",
            "short_bio": "Cries a lot."
        },
    ];

    const [counter,setCounter] = useState(0);

    const incrementer = () =>(
        setCounter(counter + 1)
    )
    const decrementer = () =>(
        setCounter(counter - 1)
    )

    return (
        <Container className="mt-5">
            <Row>
                {<p className="fs-5">You have {counter} {counter <= 1 ? "friend.": "friends."} </p>}
            </Row>
            <Row>
                {friends.map((friend)=>(
                    <Col className="p-2 m-2 bg-light text-center rounded-3" key={"col_"+friend.id}>
                        <Friend name={friend.name} short_bio={friend.short_bio} add_friend = {incrementer} remove_friend = {decrementer}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )
};

export default Friends;