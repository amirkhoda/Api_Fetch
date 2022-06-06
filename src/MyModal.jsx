import React, { useState } from 'react'
import { Modal, Button, ModalBody, ModalHeader, ModalFooter } from 'react-bootstrap'
import { Label,Input } from 'reactstrap'
import LoginModal from './LoginModal'
import SignUp from './SignUp'
import './App.css';


function MyModal(props) {
    const [showLogin, setShowLogin] = useState(true)

    const [textColorLogin, setTextColorLogin] = useState('white');
    const [textColorSignUp, setTextColorSignUp] = useState('black');



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
                <div  style={{marginLeft:"3rem"}} >
                <input id="tab1" type="radio" name="tabs"  style={{display:"none"}}  onClick={() => { setShowLogin(true);setTextColorSignUp('black');setTextColorLogin('white')}}/>
                <label class="tab_lable" for="tab1" style={{fontSize:"1.5rem",color:textColorLogin}}>Login</label> 
                </div>
                
                
                <div style={{marginRight:"3rem"}}>
                <input id="tab2" type="radio" name="tabs" style={{ display:"none"}} onClick={() => { setShowLogin(false);setTextColorLogin('black'); setTextColorSignUp('white') }}/>
                <label class="tab_lable" for="tab2" style={{fontSize:"1.5rem",color:textColorSignUp}}>signup</label>
                </div>
            </ModalHeader>
            <ModalBody>
                {showLoginModal()}
            </ModalBody>
            
        </Modal>
    )
}

export default MyModal