import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navigation.css"
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { logOut } from '../features/userslice';

function Navigation() {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(logOut())

    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand >Ecommerce Coder</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {/*if no user */}
                        {!user &&
                            (<LinkContainer to="/login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>)
                        }
                        {/*if user */}
                        {user && (

                            <NavDropdown title={`${user.email}`} id="basic-nav-dropdown">
                                {user.isAdmin && (
                                    <>
                                        <LinkContainer to="/dashboard">
                                            <NavDropdown.Item>Dashboard</NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to="/new-product">
                                            <NavDropdown.Item>Create Product</NavDropdown.Item>
                                        </LinkContainer>
                                    </>
                                )}
                                {!user.isAdmin && (
                                    <>
                                        <LinkContainer to="/cart">
                                            <NavDropdown.Item>Cart</NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to="/orders">
                                            <NavDropdown.Item>My orders</NavDropdown.Item>
                                        </LinkContainer>
                                    </>
                                )}
                                <NavDropdown.Divider />
                                <Button variant="danger" onClick={handleLogout} className='logout-btn' >Logout</Button>
                            </NavDropdown>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation