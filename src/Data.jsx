import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Nav, Navbar, FormControl, Card, Row } from 'react-bootstrap'
import { Modal, ModalFooter, ModalHeader, ModalBody, Form, FormGroup, Input, Button, Container, Col, CardTitle, CardFooter, Jumbotron, Label } from 'reactstrap'
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from './Footer';
import ParticleComponent from './ParticleComponent';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import About from './About';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Setting from './Setting';
import './App.css';
import LoginModal from './LoginModal';
import SignUp from './SignUp';
import { height } from 'dom-helpers';
import MyModal from './MyModal';




function Data(props) {
    const [data, setData] = useState([])
    const [searchTerm, setSearchTerm] = useState('') 
    const [modalShow, setModalShow] = useState(false);


    function MouseEnter(event) {
        event.target.style.color = '#ea4c89';
    }
    function MouseLeave(event) {
        event.target.style.color = "#BAB9B9";
    }







    useEffect(() => {
        axios.get('http://localhost:5000/posts')
            .then(res => {
                console.log("Done", res.data)
                setData(res.data)
            }).catch(err => console.log(err))
    }, [])







    const arr = data.map((data, index) => {

        if (searchTerm == data.id) {
            return (
                <Col sm="4">

                    <Card className="mt-5 d-flex d-md-flex col-lg-6 mb-4 " bg="dark" text="white" border="dark" style={{ width: '18rem', minHeight: '380px', maxHeight: '500' }}>
                        <Card.Header style={{ border: "#BAB9B9", color: "#D283A1", borderStyle: "solid", borderRightStyle: "none", borderLeftStyle: "none", borderTopStyle: "none", textAlign: "left" }}>UserId: {data.userId}</Card.Header>
                        <CardTitle>ID: {data.id}</CardTitle>
                        <Card.Body>
                            <EditTextarea
                                name='description'
                                rows={10}
                                style={{ paddingTop: 0 }}
                                column={10}
                                style={{ fontSize: '16px', backgroundColor: "dark" }}
                                defaultValue={data.body}

                            />

                        </Card.Body>
                        <CardFooter style={{ border: "#BAB9B9", color: "#BAB9B9", borderStyle: "solid", borderRightStyle: "none", borderLeftStyle: "none", borderBottomStyle: "none", textAlign: "left" }}>
                            salaam
                            <FontAwesomeIcon onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} icon={faHeart} style={{ marginLeft: "10rem" }} ></FontAwesomeIcon>
                            <FontAwesomeIcon onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} icon={faEye} style={{ marginLeft: "13px" }} ></FontAwesomeIcon>
                        </CardFooter>

                    </Card>

                </Col>
            )

        }
        if (searchTerm == "") {

            return (
                <Col sm="4">
                    <Card className="mt-5 ms-5 col-lg-6 mb-4 " bg="dark" text="white" border="dark" style={{ width: '18rem', minHeight: '380px', maxHeight: '500' }}>
                        <Card.Header style={{ border: "#BAB9B9", color: "#D283A1", borderStyle: "solid", borderRightStyle: "none", borderLeftStyle: "none", borderTopStyle: "none", textAlign: "left" }}>UserId: {data.userId}</Card.Header>
                        <CardTitle>ID: {data.id}</CardTitle>
                        <Card.Body>
                            <EditTextarea
                                name='description'
                                rows={10}
                                style={{ fontSize: '16px' }}
                                defaultValue={data.body}
                                editButtonContent
                                showEditButton

                            />
                        </Card.Body>
                        <CardFooter style={{ border: "#BAB9B9", color: "#BAB9B9", borderStyle: "solid", borderRightStyle: "none", borderLeftStyle: "none", borderBottomStyle: "none", textAlign: "left" }}>
                            salaam

                            <FontAwesomeIcon onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} icon={faHeart} style={{ marginLeft: "10rem" }}></FontAwesomeIcon>
                            <FontAwesomeIcon onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} icon={faEye} style={{ marginLeft: "10px" }} ></FontAwesomeIcon>

                        </CardFooter>

                    </Card>
                </Col>

            )

        }


    })


    return (
        <body>
            <ParticleComponent />
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
            }}>

                <Navbar className="navbar-dark bg-dark" bg="far" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home" className="navbar-warning" style={{ color: '#ea4c89' }}>Api_Fetch</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" variant="outline-warning" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">

                                <Nav.Link>
                                    <Link to="/home" style={{ color: "inherit", textDecoration: "none" }} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>Home</Link>
                                </Nav.Link>

                                <Nav.Link >
                                    <Link to="/setting" style={{ color: "inherit", textDecoration: "none" }} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>Setting</Link>
                                </Nav.Link>

                                <Nav.Link>
                                    <Link to="/about" style={{ color: "inherit", textDecoration: "none" }} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>About</Link>
                                </Nav.Link>

                            </Nav>
                            <Form className="d-flex" style={{ marginRight: "4rem" }}>
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-5 "
                                    aria-label="Search"
                                    onChange={(event) => {
                                        setSearchTerm((event.target.value));
                                    }}
                                />

                                <Button onClick={() => { setModalShow(true) }} style={{ border: 'none', backgroundColor: "#ea4c89", marginRight: "2rem", marginLeft: "4rem" }}>Login</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>

                </Navbar>



                <Jumbotron style={{ textAlign: "center", backgroundColor: "#BAB9B9" }}>

                    <h1 className="display-3">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                        <Button className="mb-3" style={{ backgroundColor: "#ea4c89", border: "none" }}>Learn More</Button>
                    </p>
                </Jumbotron>
                <MyModal show={modalShow} onHide={() => { setModalShow(false) }} />

                <Container>
                    <Routes>
                        <Route path="/home" element={<>
                            <Row>
                                {arr}

                            </Row>
                        </>} />
                    </Routes>

                    <Routes>
                        <Route path="/about" element={<About />} />
                    </Routes>

                    <Routes>
                        <Route path="/setting" element={<Setting />} />
                    </Routes>
                </Container>
                <Footer />
            </div>






        </body>
    )
}

export default Data
