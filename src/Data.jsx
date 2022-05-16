import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Nav, Container, Navbar, NavDropdown, Form, FormControl, Card, Col, Row } from 'react-bootstrap'
import { CardColumns, CardFooter, CardText, CardTitle, Jumbotron } from 'reactstrap'
import { faHeart, faEdit } from "@fortawesome/free-solid-svg-icons";
import EdiText from 'react-editext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from './Footer';
import ParticleComponent from './ParticleComponent';

function Data(props) {
    const [data, setData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    function MouseEnter(event) {
        event.target.style.color = '#ea4c89';
    }
    function MouseLeave(event) {
        event.target.style.color = "#BAB9B9";
    }

  

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log("Done", res.data)
                setData(res.data)
            }).catch(err => console.log(err))
    }, [])






    const arr = data.map((data, index) => {


        if (searchTerm == data.id) {
            return (
                <Col sm="4">

                    <Card className="mt-5 d-flex d-md-flex col-lg-6 mb-4 " bg="dark" text="white" border="dark" style={{ width: '18rem', minHeight: '340px', maxHeight: '500' }}>
                        <Card.Header style={{ border: "#BAB9B9", color: "#D283A1", borderStyle: "solid", borderRightStyle: "none", borderLeftStyle: "none", borderTopStyle: "none", textAlign: "left" }}>UserId: {data.userId}</Card.Header>
                        <CardTitle>ID: {data.id}</CardTitle>
                        <Card.Body>
                            <EdiText>
                                {data.body}

                            </EdiText>
                        </Card.Body>
                        <CardFooter style={{ border: "#BAB9B9", color: "#BAB9B9", borderStyle: "solid", borderRightStyle: "none", borderLeftStyle: "none", borderBottomStyle: "none", textAlign: "left" }}>
                            salaam
                            <FontAwesomeIcon onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} icon={faHeart} style={{ marginLeft: "10rem" }}></FontAwesomeIcon>
                            <FontAwesomeIcon onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} icon={faEdit} style={{ marginLeft: "13px" }}></FontAwesomeIcon>
                        </CardFooter>

                    </Card>

                </Col>
            )

        }
        if (searchTerm == "") {

            return (
                <Col sm="4">
                    <Card className="mt-5 ms-5 col-lg-6 mb-4 " bg="dark" text="white" border="dark" style={{ width: '18rem', minHeight: '340px', maxHeight: '500' }}>
                        <Card.Header style={{ border: "#BAB9B9", color: "#D283A1", borderStyle: "solid", borderRightStyle: "none", borderLeftStyle: "none", borderTopStyle: "none", textAlign: "left" }}>UserId: {data.userId}</Card.Header>
                        <CardTitle>ID: {data.id}</CardTitle>
                        <Card.Body>
                            <CardTitle>
                                {data.body}
                            </CardTitle>
                        </Card.Body>
                        <CardFooter style={{ border: "#BAB9B9", color: "#BAB9B9", borderStyle: "solid", borderRightStyle: "none", borderLeftStyle: "none", borderBottomStyle: "none", textAlign: "left" }}>
                            salaam
                            
                                <FontAwesomeIcon onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} icon={faHeart} style={{ marginLeft: "10rem" }}  ></FontAwesomeIcon>
                            
                            <FontAwesomeIcon onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} icon={faEdit} style={{ marginLeft: "13px" }} ></FontAwesomeIcon>

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
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Setting</Nav.Link>
                                <Nav.Link href="#about">About</Nav.Link>


                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    onChange={(event) => {
                                        setSearchTerm((event.target.value));
                                    }}
                                />

                                <Button style={{ border: 'none', backgroundColor: "#ea4c89" }}>Search</Button>
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


                {/*  <table class="table table-dark w-50 ms-auto me-auto mt-5 ">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arr}
                    </tbody>
                </table> */}



                <Container>
                    <Row>
                        {arr}
                    </Row>
                </Container>
                <Footer />
            </div>





        </body>
    )
}

export default Data
