import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Nav, Container, Navbar, NavDropdown, Form, FormControl, Card, Col, Row } from 'react-bootstrap'
import { CardColumns, CardText } from 'reactstrap'

function Data(props) {
    const [data, setData] = useState([])
    const [minIndex, setMinIndex] = useState(0)
    const [maxIndex, setMaxIndex] = useState(0)
    const [searchTerm, setSearchTerm] = useState('')


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
                <Col sm = "4">
                <Card className="mt-5 d-flex d-md-flex col-lg-6 mb-4 " bg="dark" text="white" border="dark" style={{ width: '18rem',minHeight:'300px',maxHeight:'500'}}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Title>{data.body}</Card.Title>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>

            </Card>
            </Col>
            )

        }
        if (searchTerm == "") {

            return (
                <Col sm = "4">
                    <Card className="mt-5 d-flex d-md-flex col-lg-6 mb-4 " bg="dark" text="white" border="dark" style={{ width: '18rem',minHeight:'300px',maxHeight:'500'}}>
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>{data.body}</Card.Title>
                        <Card.Text>
                        </Card.Text>
                    </Card.Body>

                </Card>
                </Col>
                
            )

        }


    })


    return (
        <body>
            <Navbar className="navbar-dark bg-dark" bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Api_Fetch</Navbar.Brand>
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
                            <Button variant="outline-warning">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
            <div className="text-center align-items-center mt-5 m-4  " >

                <form>
                    <div>
                        <label className=" me-4">Min of number :</label>
                        <input className=" text-center w-25 ms-auto me-auto" required type="text" name="id" placeholder="Enter Your min number:" onChange={(event) => {
                            setMinIndex((event.target.value));
                        }} />




                    </div>
                    <div>
                        <label className="me-4 mt-4 ">Max of number :</label>
                        <input className=" text-center w-25 ms-auto me-auto" type="text" name="id" placeholder="Enter Your max number:" onChange={(event) => {
                            setMaxIndex((event.target.value));

                        }} />

                    </div>

                    <div class="form-text ms-3 mt-2">
                        Between 1-200 number
                    </div>
                </form>
                <h1 className="mt-5">use axios with react js</h1>
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
                   

            </div>

        </body>
    )
}

export default Data
