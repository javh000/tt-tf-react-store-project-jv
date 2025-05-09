import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';

const CartLoginGroup = ({ onclick, className }) => {

    return (
    <div className={className}>
      <CartWidget onClick={onclick} />
      <Nav.Link as={Link} to="/login">
        Login
      </Nav.Link>
    </div>
  );
};

export default CartLoginGroup;
