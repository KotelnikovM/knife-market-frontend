import { LocalGroceryStoreOutlined } from '@mui/icons-material';
import { Badge, Typography } from '@mui/material';

export const Basket = (): JSX.Element => {
  return (
    <Badge sx={{ ml: '7vh' }}>
      <LocalGroceryStoreOutlined />
      <Typography>Оформить заказ</Typography>
    </Badge>
  );
};
