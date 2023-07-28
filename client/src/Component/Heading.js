import React from "react";
import {Link} from "react-router-dom"
import {Navbar, Container, Nav,} from 'react-bootstrap';

function Heading() {

    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to="/" style={{ color: "white", textDecoration: "none"}}>Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/upload" style={{ color: "white", textDecoration: "none"}}>Upload</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/" style={{ color: "white", textDecoration: "none"}}>List</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Heading;