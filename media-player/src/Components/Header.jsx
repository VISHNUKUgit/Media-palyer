import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <Navbar className="bg-info">
        <Container>
          <Navbar.Brand href="#home">
          <Link to={"/"} style={{textDecoration:"none"}}>
          <i class="fa-regular fa-circle-play fa-xl"></i>{' '}
            Media Player
          </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header