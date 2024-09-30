import Badge from '@mui/material/Badge/Badge';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import Menu from '@mui/material/Menu';
import { useState } from 'react';

export const Header = () => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getData = useSelector((store: any) => store.cartReducer.carts);
  const totalCartAmount = getData.reduce((total: number, item: any) => total + item.price * item.qnty, 0);

  return (
    <Navbar bg="dark" data-bs-theme="dark" style={{ height: 60 }}>
      <Container>
        <NavLink to="/" className="text-decoration-none text-light mx-3">Add to Cart</NavLink>
        <Nav className="me-auto">
          <NavLink to="/" className="text-decoration-none text-light mx-3">Home</NavLink>
          <NavLink to="/card-details" className="text-decoration-none text-light">Card Details</NavLink>
        </Nav>
        <Badge
          badgeContent={getData.length}
          color="primary"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: 'pointer' }}></i>
        </Badge>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{ 'aria-labelledby': 'basic-button' }}
        >
          {getData.length > 0 ? (
            <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "34rem", padding: 10 }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {getData.map((ele: any) => (
                    <tr key={ele.id}>
                      <td>
                        <NavLink to={`/cart/${ele.id}`} onClick={handleClose}>
                          <img src={ele.imgdata} style={{ width: "5rem", height: "5rem" }} alt={ele.rname} />
                        </NavLink>
                      </td>
                      <td>
                        <p><strong>Restaurant</strong>: {ele.rname}</p>
                        <p><strong>Price</strong>: ₹{ele.price}</p>
                        <p><strong>Dishes</strong>: {ele.address}</p>
                        <p><strong>Quantity</strong>: {ele.qnty}</p>
                        <p><strong>Total</strong>: ₹{ele.price * ele.qnty}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-center"><strong>Total Cart Value:</strong> ₹{totalCartAmount}</p>
            </div>
          ) : (
            <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
              <i className='fas fa-close smallclose'
                onClick={handleClose}
                style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}
              ></i>
              <p style={{ fontSize: 22 }}>Your cart is empty</p>
              <img src="https://cdn.dribbble.com/users/20130/screenshots/2933302/media/2f5c373fc385ed7214241c461e2ad267.gif" alt="Empty cart" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
            </div>
          )}
        </Menu>
      </Container>
    </Navbar>
  );
};
