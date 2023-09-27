import { IconButton, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import StyledTabs from '../../tabs/styled-tabs';
import StyledTab from '../../tabs/styled-tab';
import { Person } from '@mui/icons-material';

function AppNavBar() {
  const [value, setValue] = useState<string>('О нас');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Toolbar
      sx={{
        width: '1580px',
        m: '0 auto',
        display: 'flex',
        background: '#141414',
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
  );
}

export default AppNavBar;
