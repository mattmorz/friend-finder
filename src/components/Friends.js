import React, {useEffect,useState}from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Toast from "react-bootstrap/Toast";
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { AiOutlineSortAscending,AiOutlineSortDescending } from "react-icons/ai";


import Friend from "./Friend";
import Nav from "./Nav";

import { useSelector } from "react-redux";
import { searchFriend, sortByName} from "../redux/actions";
import { useDispatch } from "react-redux";

const Friends = () => {
    //data are from store
    const list_of_friends = useSelector((state) => state.friend.friends);
    const number_of_friends = useSelector((state) => state.friend.number_of_friends);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    useEffect(
        () => {   
            console.log('The updated number of friends: '+number_of_friends)                            
            if(number_of_friends === 6){
                setShow(true);
            }
            return () => {
                console.log('cleanup number of friends: '+number_of_friends)
            }
        },
        [number_of_friends]
    )
    
    const searchByName = (event)=>{
        let name = event.target.value;//this is the value from the input text
        dispatch(searchFriend({id:'',full_name:name}));
    }

    const handleSortByNameDesc = () => {
        dispatch(sortByName({sortBy:0}));
      };
    const handleSortByNameAsc = () => {
        dispatch(sortByName({sortBy:1}));
    };
    //

    return (
        <>

        <Nav/>
        <Container className="mt-3 position-relative">
            <Row>
                <Col xs={6}>
                    <Toast onClose={() => setShow(false)} show={show} position="top-center" className="position-absolute mt-0" bg="info">
                        <Toast.Header>
                            <strong className="me-auto">Howdy!</strong>
                        </Toast.Header>
                        <Toast.Body className="text-white">You have added all as friends.</Toast.Body>
                    </Toast>
                </Col>
            </Row>
            <Row>
                <Col>
                
                
                    <h5 className="mt-5">Sort By Name: <AiOutlineSortAscending className="fs-3" role="button" onClick={ handleSortByNameAsc}/> <AiOutlineSortDescending className="fs-3" role="button" onClick={handleSortByNameDesc}/></h5>
                    
                
                </Col>
                <Col>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Search</Form.Label>
                        <Form.Control type="text" placeholder="type name..."  onChange={searchByName}/>
                    </Form.Group>
                </Form>
                </Col>
              
            </Row>
            <Row>
                {list_of_friends.map((friend)=>(
                    <Col className="p-2 m-2 bg-light text-dark text-center rounded-3 border border-1 shadow-sm" key={friend.id}>
                        <Friend id={friend.id} name={friend.full_name} short_bio={friend.short_bio} is_friend={friend.is_friend}/>
                    </Col>
                ))}
            </Row>
        </Container>
        </>
    )
};

export default Friends;