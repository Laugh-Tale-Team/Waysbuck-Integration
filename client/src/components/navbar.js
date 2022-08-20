import React, { useContext, useState } from "react";
import { Container, Navbar} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { Button } from "react-bootstrap/lib/inputgroup";
// import { Form } from "react-bootstrap/lib/navbar";
import logo from "../assets/logo.svg";
import { UserContext } from "../context/userContext";
import AuthModal from "./modal/AuthModal";

export default function NavbarUser() {

  return ( 
    <div>
      <Container>
        <Navbar fixed="top d-flex bg-white justify-content-between">
          <Navbar.Brand className="ms-3 ps-5">
            <img src={logo} style={{ maxWidth: "70px" }} alt="logobrand" />
          </Navbar.Brand>
          <AuthModal/>
        </Navbar>
      </Container>
    </div>
  );
}