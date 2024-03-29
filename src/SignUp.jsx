import React from 'react'
import { Modal, ModalFooter, ModalHeader, ModalBody, Form, FormGroup, Input, Button, Container, Col, CardTitle, CardFooter, Jumbotron, Label } from 'reactstrap'

function SignUp() {
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
                {/* name */}
                <div style={{ marginTop: "1rem" }}>
                    <label className="text-white" style={{ fontSize: "16px" }}>Name : </label>
                    <input style={{ borderRadius: "10px", marginLeft: "8px",height:"35px" }} size="15" placeholder="Enter Your Name" />
                    {/* lastName */}
                    <label className="text-white" style={{ fontSize: "16px", marginLeft: "1rem" }}>LastName : </label>
                    <input style={{ borderRadius: "10px", marginLeft: "8px",height:"35px" }} size="15" placeholder="Enter Your LastName" />
                </div>

                {/* email */}
                <div style={{ marginTop: "2rem" }}>
                    <label className="text-white" style={{ fontSize: "16px" }}>Email : </label>
                    <input style={{ borderRadius: "10px", marginLeft: "12px",height:"35px" }} size="15" placeholder="Enter Your Email" />
                    {/* phone */}
                    <label className="text-white" style={{ fontSize: "16px", marginLeft: "2rem" }}>Phone : </label>
                    <input style={{ borderRadius: "10px", marginLeft: "15px",height:"35px" }} size="15" placeholder="Enter Your phone: +98" />
                </div>
                {/* username */}
                <div style={{ marginTop: "2rem" }}>
                    <label className="text-white" style={{ fontSize: "16px" }}>UserName : </label>
                    <input style={{ borderRadius: "10px", marginLeft: "12px",height:"35px" }} size="20" placeholder="UserName" />

                    <label className="text-white" style={{ marginLeft: "1.7rem" }}>Gender:</label>
                    <select style={{ height: "2rem", marginLeft: "1rem", borderRadius: "10px",height:"35px" }}>
                        <option value="age">Gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">other</option>
                    </select>
                </div>
                {/* password */}
                <div style={{ marginTop: "2rem" }}>
                    <label className="text-white" style={{ fontSize: "16px" }}>Password : </label>
                    <input style={{ borderRadius: "10px", marginLeft: "15px",height:"35px" }} size="20" placeholder="Password" />

                    <label className="text-white" style={{ marginLeft: "2.7rem" }} >Age:</label>
                    <select style={{ height: "2rem", marginLeft: "1rem", borderRadius: "10px",height:"35px" }} placeholder="Age">
                        <option value="age">Your age</option>
                        <option value="1">10</option>
                        <option value="2">1</option>
                        <option value="3">12</option>
                        <option value="3">13</option>
                        <option value="3">14</option>
                        <option value="3">15</option>
                        <option value="3">16</option>
                        <option value="3">17</option>
                        <option value="3">18</option>
                        <option value="3">19</option>
                        <option value="3">20</option>
                        <option value="3">21</option>
                        <option value="3">22</option>
                        <option value="3">23</option>
                        <option value="3">24</option>
                        <option value="3">25</option>
                        <option value="3">26</option>
                        <option value="3">27</option>
                        <option value="3">28</option>
                        <option value="3">29</option>
                        <option value="3">30</option>
                        <option value="3">31</option>
                        <option value="3">32</option>
                        <option value="3">33</option>
                        <option value="3">34</option>
                        <option value="3">35</option>
                        <option value="3">36</option>
                        <option value="3">37</option>
                        <option value="3">38</option>
                        <option value="3">39</option>
                        <option value="3">40</option>
                        <option value="3">42</option>
                        <option value="3">43</option>
                        <option value="3">44</option>
                        <option value="3">45</option>
                        <option value="3">46</option>
                        <option value="3">47</option>
                        <option value="3">48</option>
                        <option value="3">49</option>
                        <option value="3">50</option>
                    </select>
                </div>

                <div class="text-center">
                    <Button onMouseEnter={MouseEnterSubmit} onMouseLeave={MouseLeaveSubmit} className="text-white " style={{ backgroundColor: "#ea4c89", border: "none", marginTop: "2rem", width: "5rem", height: "3rem", borderRadius: "15px" }}>SignUp</Button>
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

export default SignUp
