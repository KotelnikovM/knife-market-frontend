import { Container, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Person } from '@mui/icons-material';
import StyledTabs from '../../../shared/tabs/styled-tabs';
import StyledTab from '../../../shared/tabs/styled-tab';

export const UpperTabs = (): JSX.Element => {
  const [value, setValue] = useState<string>('О нас');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Toolbar
      component="nav"
      sx={{
        maxHeight: '70px',
        background: '#141414',
      }}
    >
      <Container component="div" maxWidth="xl" sx={{ display: 'flex' }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          sx={{ boxSizing: 'border-box', width: '100%' }}
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
          <Typography>Личный кабинет</Typography>
        </IconButton>
      </Container>
    </Toolbar>
  );
};
