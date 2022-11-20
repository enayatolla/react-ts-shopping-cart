import React from 'react';
import {Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';

const Navbar = () => {
    const { openCart, closeCart, cartQuantity } = useShoppingCart()
    return (
        <NavbarBs sticky="top" className='bg-white shadow-sm mb-3'>

            <Container>
                <Nav className='me-auto'>
                    <Nav.Link as={NavLink} to="/"  >Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/store"  >Store</Nav.Link>
                    <Nav.Link as={NavLink} to="/about"  >About</Nav.Link>
                </Nav>

                
                <Button 
                    onClick={openCart}
                    style={{width: "3rem",height: "3rem", position:"relative"}}
                    variant="outline-primary"
                    className='rounded-circle'
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path 
                            d="m 11,10 0.497683,2 h 6 L 18,10 H 11 M 1,1 h 4 l 2.68,13.39 a 2,2 0 0 0 2,1.61 h 9.72 a 2,2 0 0 0 2,
                            -1.61 L 23,6 H 6 m 15,15 a 1,1 0 0 1 -1,1 1,1 0 0 1 -1,-1 1,1 0 0 1 1,-1 1,1 0 0 1 1,1 z m -11,0 a 1,1 0 0 1 -1,
                            1 1,1 0 0 1 -1,-1 1,1 0 0 1 1,-1 1,1 0 0 1 1,1 z" 
                        />
                    </svg>
                    {cartQuantity > 0 && (
                        <div
                            className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
                            style={{color:"white", width:"1.5rem", height:"1.5rem",position:"absolute", bottom:0, right:0, transform:"translate(25%, 25%)"}}

                        >{cartQuantity}</div>
                    )}
                </Button>
                
            </Container>
        </NavbarBs>
    )
}

export default Navbar