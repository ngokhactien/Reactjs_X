import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import {CartContext} from '../context/Cart' ;

const TopMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink >
                  <Link to="/home">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink >
              <Link to="/product">Product</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink >
              <CartContext.Consumer>
                {
                  ({ cartItem }) =>  <Link to="/product">Cart ({cartItem.length})</Link>
                }
              </CartContext.Consumer>
           
              </NavLink>
            </NavItem>
            
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default TopMenu;