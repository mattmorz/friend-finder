import React from "react";
import Container from "react-bootstrap/Container";
import MyToast from "./MyToast";

const MyContainer = () => {
    return (
        <Container className="p-3">
            <Container className="p-5 mb-4 bg-light rounded-3">
                <h1 className="header">Welcome To React-Bootstrap</h1>
                <MyToast>
                    We now have Toasts
                    <span role="img" aria-label="tada">
                    🎉
                    </span>
                </MyToast>
            </Container>
        </Container>
    )
};

export default MyContainer;