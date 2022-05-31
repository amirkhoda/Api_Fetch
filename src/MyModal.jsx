import React, { useState } from 'react'
import { Modal, Button, ModalBody, ModalHeader, ModalFooter } from 'react-bootstrap'
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
                <Button style={{ marginLeft: "2rem", color: "inherit", textDecoration: "none" }} onClick={() => { setShowLogin(true) }}>Login</Button>
                <Button style={{ marginLeft: "15rem", color: "inherit", textDecoration: "none" }} onClick={() => { setShowLogin(false) }}>SignUp</Button>
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