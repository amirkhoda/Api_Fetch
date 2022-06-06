import React from 'react'
import { Modal, ModalFooter, ModalHeader, ModalBody, Form, FormGroup, Input, Button, Container, Col, CardTitle, CardFooter, Jumbotron, Label } from 'reactstrap'

function LoginModal() {
    function MouseEnterrModal(e) {
        e.target.style.backgroundColor = '#000000'
    }

    function MouseLeaveModal(e) {
        e.target.style.backgroundColor = '#BAB9B9'

    }


    function MouseEnterSubmit(e) {
        e.target.style.width = "29rem"

    }

    function MouseLeaveSubmit(e) {
        e.target.style.width = "5rem"
    }

    return (
        <div>
            <Form className="form">
                <FormGroup>
                    <Label className="text-white mb-2" for="exampleEmail">Username</Label>
                    <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter Your Email"
                    />
                </FormGroup>
                <FormGroup className="mt-4">
                    <Label className="text-white mb-2" for="examplePassword">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="Enter Your Password"
                    />
                    <Label className="text-white mt-2" ><a href="">Forget Password?</a></Label>
                </FormGroup>
                <div class="text-center">
                    <Button onMouseEnter={MouseEnterSubmit} onMouseLeave={MouseLeaveSubmit} className="text-white " style={{ backgroundColor: "#ea4c89", border: "none", marginTop: "2rem", width: "5rem", height: "3rem", borderRadius: "15px" }}>Submit</Button>
                </div>
                <div style={{marginTop:"1rem"}}>
                    <hr className="text-white" style={{width:"40%",display:"inline-block" , float:"left",backgroundColor:"#ea4c89"}} />
                    <hr className="text-white" style={{ width:"40%", display:"inline-block",float:"right",backgroundColor:"#ea4c89"}} />
                    <span style={{paddingLeft:"2.5rem",color:"#ea4c89"}} >Or</span>
                </div>
                <Button onMouseEnter={MouseEnterrModal} onMouseLeave={MouseLeaveModal} className="text-white" style={{ backgroundColor: "#BAB9B9", border: "none", marginTop: "2rem", width: "29rem", height: "3rem" }}><img src="../assets/GitHub.png" style={{ height: "2rem", marginRight: "1rem" }} />  Sign in With Google</Button>
                <Button onMouseEnter={MouseEnterrModal} onMouseLeave={MouseLeaveModal} className="text-white" style={{ backgroundColor: "#BAB9B9", border: "none", marginTop: "2rem", width: "29rem", height: "3rem" }}><img src="../assets/google.png" style={{ height: "2rem", marginRight: "1rem" }} />  Sign in With GitHub</Button>

            </Form>
        </div>
    )
}

export default LoginModal
