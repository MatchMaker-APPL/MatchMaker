import React from 'react';
import { Link, useNavigate, NavLink } from "react-router-dom";
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
    from 'mdb-react-ui-kit';

    import '../styles/login.css';
    
    import { useContext, useState } from "react";

    import ContextOrigin from "../Context";
    const { Context } = ContextOrigin;

    export default function Login() {
        const { setSession, users } = useContext(Context);

        const [user, setUser] = useState({});
      
        const navigate = useNavigate();
        const addUser = () => {
          const userExists =
            users.some((u) => u.email == user.email && u.password == user.password) ||
            true;
          if (userExists) {
            setSession(user);
            alert("Usuario identificado con éxito");
            navigate("/dashboard");
          } else {
            alert("Email o contraseña incorrecta");
          }
        };

    return (
        <MDBContainer className='login px-4' style={{  borderRadius: '25px'}} >

            <MDBCard className=' my-5 cascading-left' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
                <MDBRow className=' g-0'>

                    <MDBCol >
                        <img src="https://w-wa.co.uk/wp-content/uploads/2021/04/Wynne-Williams_associates_landscape_architects_essex_MUGA_design_drone_shot.jpg"
                            alt="Login image" className="w-100" style={{height:'600px', width:'1000px'}} />
                    </MDBCol> 

                    <MDBCol md='6'>
                        <MDBCardBody className='d-flex flex-column'>

                            <div className='d-flex flex-row mt-2'>
                                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                                <span className="h1 fw-bold mb-0">Logo</span>
                            </div>

                            <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

                            <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" 
                            onChange={({ target }) => setUser({ ...user, ["email"]: target.value })}/>

                            <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" 
                            onChange={({ target }) => setUser({ ...user, ["password"]: target.value })} />

                            <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={addUser}>Login</MDBBtn>
                            <a className="small text-muted" href="/recover">Forgot password?</a>
                            <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <NavLink to="/register" style={{ color: '#393f81' }}>Register here</NavLink></p>

                            <div className='d-flex flex-row justify-content-start'>
                                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                                <a href="#!" className="small text-muted">Privacy policy</a>
                            </div>

                        </MDBCardBody>
                    </MDBCol>

                </MDBRow>
            </MDBCard>

        </MDBContainer>
    );
}
