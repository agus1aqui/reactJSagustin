
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from "@mui/material";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext.jsx';

const CartWidget = () => {

  const { cart } = useContext(CartContext);


  return (
    <Link to="/cart">
      <Badge badgeContent={cart.length} color="primary" showZero={true}>
        <ShoppingCartIcon color="inherit" />
      </Badge>
    </Link>
  )
}
export default CartWidget