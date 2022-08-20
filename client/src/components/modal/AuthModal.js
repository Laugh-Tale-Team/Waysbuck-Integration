import React, { useContext, useState } from 'react'
import { Nav, Button, Modal, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

export default function AuthModal() {
    
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [shows, setShows] = useState(false);
  const handleShows = () => setShows(true);
  const handleCloses = () => setShows(false);

  const switchLogin = () => {
    setShow(true);
    setShows(false);
  };

  const switchRegister = () => {
    setShows(true);
    setShow(false);
  };

  const [form, setForm] = useState({
    name:'',
    email:'',
    password:'',
  })

  const {name, email, password} = form

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const navigate = useNavigate()
  const [state, dispatch] = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById('emailInput').value
    const password = document.getElementById('passwordInput').value
  

  let status 
  if (email === 'admin@mail.com') {
    status = 'admin'
    navigate('/admin')
  } else {
    status = 'user'
    navigate('/')
  }

  const data ={
    email,
    password,
    status,
  }

  dispatch ({
    type: 'LOGIN_SUCCESS',
    payload: data,
  })
  setShow(false)
  }

 
  
  return (
    <div>
        <Nav>
            <Nav.Link className=" fw-bolder text-danger">
              <Button
                className="btn btn-auth-white fw-semibold px-4"
                variant="danger"
                onClick={handleShow}
              >
                Login
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Body closebutton="true">
                  <div>
                    <h1 className="mb-4 text-danger fw-bolder">Login</h1>{" "}
                    
                    <Form >
                        <Form.Control
                          className="formInput border-danger mb-3"
                          type="email"
                          id="emailInput"
                          name="email"
                          value={email}
                          onChange={handleChange}
                          placeholder="your email"
                        />
                        <Form.Control
                          className="formInput border-danger mb-3"
                          type="password"
                          name="password"
                          value={password}
                          onChange={handleChange}
                          id="passwordInput"
                          placeholder="your password"
                        />
                      <Button variant="danger" type="submit" className="w-100" onClick={handleSubmit}>
                        Submit
                      </Button>
                    </Form>
                  </div>
                  <div className="mt-3 text-center">
                    <p>
                      Dont have an account please{" "}
                      <strong
                        className="toReg text-danger point"
                        onClick={switchRegister}
                      >
                        Register
                      </strong>
                    </p>
                  </div>
                </Modal.Body>
              </Modal>

            </Nav.Link>
            <Nav.Link className="me-5 fw-bolder text-danger">
              <Button
                className="btn btn-auth-red fw-semibold px-4"
                variant="danger"
                onClick={handleShows}
              >
                Signup
              </Button>

              <Modal show={shows} onHide={handleCloses}>
                <Modal.Body>
                  <h1 className="mb-4 text-danger fw-bolder">Register</h1>{" "}
                  <Form onSubmit={handleSubmit}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlName"
                    >
                      <Form.Control
                        className="formInput border-danger"
                        type="text"
                        placeholder="your name"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Control
                        className="formInput border-danger"
                        type="email"
                        placeholder="your email"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlPassword1"
                    >
                      <Form.Control
                        type="password"
                        className="formInput border-danger"
                        placeholder="your password"
                        autoFocus
                      />
                    </Form.Group>
                    <Button variant="danger" type="submit" className="w-100">
                      Submit
                    </Button>
                  </Form>
                  <div className="mt-3 text-center">
                    <p>
                      Already have an account please{" "}
                      <strong
                        className="toLogin text-danger point"
                        onClick={switchLogin}
                      >
                        Login
                      </strong>
                    </p>
                  </div>
                </Modal.Body>
              </Modal>

            </Nav.Link>
          </Nav>
    </div>
  )
}
