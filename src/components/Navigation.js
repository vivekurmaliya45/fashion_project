import React, { useState } from "react"
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"

export default function Navigation() {
const { currentUser, logout } = useAuth()
const history = useHistory()

async function handleLogout() {
  await logout()
  history.push("/login")
}

  return (
    <>
      <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>Fashionalyty</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='mr-auto'>
                <Nav.Link href='/add'>Add New Outfit</Nav.Link>
                <Nav.Link href='/outfits'>Outfits</Nav.Link>
              </Nav>
              <Nav>
              {/* <Nav.Link href="#">Logged As: {currentUser.email}</Nav.Link> */}
              <Nav.Link href='#' onClick={handleLogout}>Logout</Nav.Link>
              {/* <Nav.Link href="/update-profile">
                Edit Profile
              </Nav.Link> */}
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
     
    </>
  );

}