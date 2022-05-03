import React from 'react'
import Navigation from "../components/Navigation"
import { Container } from "react-bootstrap"
export default ({ children }) => {
  return (
    <Container
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}
    >
      <div className="w-100" > 
          <Navigation style={{marginBottom: "50px"}}/>
          <Container style={{marginTop: '100px'}}>{children}</Container>
      </div>
      </Container>
  )
}