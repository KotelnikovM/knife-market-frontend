import { Person } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import StyledTabs from '../tabs/styled-tabs';
import StyledTab from '../tabs/styled-tab';

function Header() {
  const [value, setValue] = useState('О нас');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    // компонент <AppBar /> под капотом преобразуется в <header></header>
    <AppBar sx={{ background: '#141414' }}>
      <Toolbar
        sx={{
          width: '1580px',
          m: '0 auto',
          display: 'flex',
        }}
      >
        <StyledTabs
          value={value}
          onChange={handleChange}
          sx={{ boxSizing: 'border-box', flexGrow: 0.94 }}
          // TODO: доделать адаптивность, чтобы при увеличении размеров личный кабинет отображался корректно
        >
          <StyledTab
            label="О нас"
            sx={{
              color: '#FFFFFF',
              fontWeight: '500',
              fontSize: '16px',

              mr: '20px',
            }}
          />
          <StyledTab
            label="Оплата и доставка"
            sx={{
              color: '#FFFFFF',
              fontWeight: '500',
              fontSize: '16px',
              mr: '20px',
            }}
          />
          <StyledTab
            label="Новости"
            sx={{
              color: '#FFFFFF',
              fontWeight: '500',
              fontSize: '16px',
              mr: '20px',
            }}
          />
          <StyledTab
            label="Контакты"
            sx={{
              color: '#FFFFFF',
              fontWeight: '500',
              fontSize: '16px',
            }}
          />
        </StyledTabs>

        <IconButton sx={{ color: '#FFFFFF' }}>
          <Person />
        </IconButton>
        <Typography>Личный кабинет</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
