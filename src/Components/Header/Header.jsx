import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css"
import logo from "../Assets/logo.png"
import { Link, Links } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
export default function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    return (
        <div className='stickyBar'>
            <Navbar collapseOnSelect expand="lg" className="mainNavBar">
                <Container>
                    <Navbar.Brand className='navlogo'>
                    <Nav.Link as={Link} to="/">
                        
                        <img src={logo} alt="" />
                    </Nav.Link>
                    </Navbar.Brand>
                    <span className="d-block d-lg-none" onClick={() => setShow(!show)}>
            {show ? (
              <>
                <RxCross2 className="text-dark fs-1" />{" "}
              </>
            ) : (
              <>
                <AiOutlineMenu className="text-dark fs-1" />
              </>
            )}
          </span>
                    {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
                    <Navbar.Collapse id="responsive-navbar-nav"    className={show ? "show" : ""}>
                        <Nav className="m-auto">
                            <Nav.Link as={Link} onClick={handleClose}  to="/">Home</Nav.Link>
                            <Nav.Link as={Link} onClick={handleClose}  to="about" >About Us</Nav.Link>
                            <Nav.Link as={Link} onClick={handleClose}  to="services" >Services</Nav.Link>
                            <Nav.Link as={Link} onClick={handleClose}  to="team" > Our Team</Nav.Link>
                            <Nav.Link as={Link} onClick={handleClose}  to="blog"  >Blog </Nav.Link>
                            <Nav.Link as={Link} onClick={handleClose}  to="story" >The story garden </Nav.Link>
                            <Nav.Link as={Link} onClick={handleClose}  to="FlawVoices" >	Flawsome voices </Nav.Link>
                            <Nav.Link as={Link} onClick={handleClose}  to="Resources" >Resource  </Nav.Link>
                            <Nav.Link href="#Testimonials" onClick={handleClose} >Testimonials  </Nav.Link>
                            {/* <Nav.Link href="#pricing">Faq</Nav.Link> */}

                        </Nav>
                        <Nav>
                            <button className=' appointment'> Book a Session </button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
