import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar as BootstrapNavbar,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

import { ReactComponent as CartSVG } from '../images/cart.svg';
import { useCart } from '../lib/cart.context';
const LINKS = [{ link: '/', text: 'HOME'  }];
const Navbar = () => {
  const cart = useCart();
  const cartItemsTotal = cart.reduce((total, item) => total + item.quantity, 0);
  const cartPriceTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <BootstrapNavbar  light className="px-0 border-bottom mb-3" color="olive" >
      <Nav className="mr-auto" navbar>
        {LINKS.map(({ link, text }) => (
          <NavItem key={link}>
            <NavLink to={link} tag={Link}>
              {text}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <NavbarText>
        <Link
          to="/checkout"
          className="d-flex align-items-center"
          style={{ textDecoration: 'none' }}
        >
          <CartSVG width={35} />
     
          <div
            className="circle bg-dark text-light rounded-circle d-flex justify-content-center align-items-center mx-2"
            style={{ width: 30, height: 35}}
          >
            {cartItemsTotal}
          </div>
          <div>
            <b>Rs {cartPriceTotal}</b>
            </div>
        </Link>
      </NavbarText>
    </BootstrapNavbar>
  );
};
export default Navbar;
