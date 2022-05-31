import React, { useState } from 'react'
import { Modal, Button, ModalBody, ModalHeader, ModalFooter } from 'react-bootstrap'
import { Label,Input } from 'reactstrap'
import LoginModal from './LoginModal'
import SignUp from './SignUp'


function MyModal(props) {
    const [showLogin, setShowLogin] = useState(true)

    function MouseEnterFooterModal(e) {
        e.target.style.backgroundColor = '#ea4c89'
    }
    function MouseLeaveFpoterModal(e) {
        e.target.style.backgroundColor = '#BAB9B9'

    }
    function showLoginModal() {
        if (showLogin) {
            return (
                <LoginModal />
            )
        }
        else {
            return (
                <SignUp />
            )
        }
    }
    return (
        <Modal {...props} contentClassName="bg-dark" >
            <ModalHeader className="text-white">
                <div style={{marginLeft:"3rem"}}>
                <Input id="tab1" type="radio" name="tabs" style={{color: "inherit", textDecoration: "none",marginTop:"0.7rem",display:"none",border:"0",borderRadius:"0",padding:"0",lineHeight:"normal",fontFamily:"inherit",boxSizing:"border-box",backgroundColor:"initial",cursor:"default",appearance:"auto",writingMode:"horizontal-tb",textRendering:"auto",color:"fieldtext",letterSpacing:"normal",wordSpacing:"normal",textTransform:"none",textIndent:"0px",textShadow:"none",textAlign:"start"}} onClick={() => { setShowLogin(true) }}/>
                <Label class="tab-lable" for="tab1"style={{fontSize:"1.5rem",color:"#555"}} >Login</Label>
                </div>
                <div style={{marginRight:"3rem"}}>
                <Input id="tab2" type="radio" name="tabs" style={{ marginLeft:"12rem", color: "inherit", textDecoration: "none",marginTop:"0.7rem",display:"none",border:"0",borderRadius:"0",padding:"0",lineHeight:"normal",fontFamily:"inherit",boxSizing:"border-box",backgroundColor:"initial",cursor:"default",appearance:"auto",writingMode:"horizontal-tb",textRendering:"auto",color:"fieldtext",letterSpacing:"normal",wordSpacing:"normal",textTransform:"none",textIndent:"0px",textShadow:"none",textAlign:"start"}} onClick={() => { setShowLogin(false) }}/>
                <Label class="tab-lable" for="tab2" style={{fontSize:"1.5rem",color:"#555"}}>signup</Label>
                </div>
            </ModalHeader>
            <ModalBody>
                {showLoginModal()}
            </ModalBody>
            <ModalFooter>
                <Button onMouseEnter={MouseEnterFooterModal} onMouseLeave={MouseLeaveFpoterModal} style={{ backgroundColor: "#BAB9B9" }} onClick={props.onHide}>Okay</Button>
            </ModalFooter>
        </Modal>
    )
}

export default MyModal