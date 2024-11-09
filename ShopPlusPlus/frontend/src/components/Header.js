import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import { Store } from '../Store';

const Header = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Nav.Link
            as={NavLink}
            to="/"
            end
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            <Navbar.Brand>ShopPlusPlus</Navbar.Brand>
          </Nav.Link>

          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              end
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/product"
              end
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Product
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/cart"
              end
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Cart
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
            </Nav.Link>

            {userInfo ? (
              <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/profile" end>
                  User Profile
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/orderhistory" end>
                  Order History
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as="button" onClick={signoutHandler}>
                  Sign Out
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link
                as={NavLink}
                to="/signin"
                end
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Sign In
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

// import React, { useContext } from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
// import { NavLink } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Badge from 'react-bootstrap/esm/Badge';
// import { Store } from '../Store';

// const Header = () => {
//   const { state } = useContext(Store);
//   const { cart } = state;

//   return (
//     <header>
//       <Navbar bg="dark" variant="dark" expand="lg">
//         <Container>
//           {/* Brand Link */}
//           <LinkContainer to="/" exact>
//             <Navbar.Brand>ShopPlusPlus</Navbar.Brand>
//           </LinkContainer>

//           <Nav className="ms-auto">
//             {/* Home Link with exact path */}
//             <LinkContainer to="/" exact>
//               <Nav.Link as={NavLink} to="/" exact>
//                 Home
//               </Nav.Link>
//             </LinkContainer>

//             {/* Product and Contact Links */}
//             <LinkContainer to="/Product">
//               <Nav.Link as={NavLink} to="/Product">
//                 Product
//               </Nav.Link>
//             </LinkContainer>
//             <LinkContainer to="/contact">
//               <Nav.Link as={NavLink} to="/contact">
//                 Contact
//               </Nav.Link>
//             </LinkContainer>

//             {/* Cart Link */}
//             <LinkContainer to="/cart">
//               <Nav.Link as={NavLink} to="/cart">
//                 Cart
//                 {cart.cartItems.length > 0 && (
//                   <Badge pill bg="danger">
//                     {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
//                   </Badge>
//                 )}
//               </Nav.Link>
//             </LinkContainer>
//           </Nav>
//         </Container>
//       </Navbar>
//     </header>
//   );
// };

// export default Header;
