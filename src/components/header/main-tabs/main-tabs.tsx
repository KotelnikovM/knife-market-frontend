import React, { useState } from 'react';
import StyledTabs from '../../tabs/styled-tabs';
import StyledTab from '../../tabs/styled-tab';
import { Container, Toolbar } from '@mui/material';

function MainTabs() {
  const [value, setValue] = useState('Каталог ножей');

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
      {/* TODO: разобраться как сделать равномерные отступы между табами */}
      <Container component="div" maxWidth="xl">
        <StyledTabs
          value={value}
          onChange={handleChange}
          sx={{
            boxSizing: 'border-box',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <StyledTab
            label="Каталог ножей"
            sx={{
              color: '#FFFFFF',
              display: 'block',
              fontWeight: '500',
              fontSize: '16px',
            }}
          />
          <StyledTab
            label="Клинковое оружие"
            sx={{
              color: '#FFFFFF',
              fontWeight: '500',
              fontSize: '16px',
            }}
          />
          <StyledTab
            label="Сувенирные изделия"
            sx={{
              color: '#FFFFFF',
              fontWeight: '500',
              fontSize: '16px',
            }}
          />
          <StyledTab
            label="Фонари ARMYTEK"
            sx={{
              color: '#FFFFFF',
              fontWeight: '500',
              fontSize: '16px',
            }}
          />
          <StyledTab
            label="Сопуствующие товары"
            sx={{
              color: '#FFFFFF',
              fontWeight: '500',
              fontSize: '16px',
            }}
          />
        </StyledTabs>
      </Container>
    </Toolbar>
  );
}

export default MainTabs;
