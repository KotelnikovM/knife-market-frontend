import { LocalGroceryStoreOutlined } from '@mui/icons-material';
import { Badge, Typography } from '@mui/material';

function Basket() {
  return (
    <Badge sx={{ ml: '7vh' }}>
      <LocalGroceryStoreOutlined />
      <Typography>Оформить заказ</Typography>
    </Badge>
  );
}

export default Basket;
