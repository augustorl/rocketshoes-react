import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingCart } from 'react-icons/md';
import { Container, Cart } from './styles';

import logo from '../../assets/Logo.png';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} widht={400} alt="Rocketshoes" />
      </Link>
      <Cart to="/cart">
        <strong>My cart</strong>

        <div>
          <MdShoppingCart size={30} color="#5d737e" />
          <span>{cartSize}</span>
        </div>
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
