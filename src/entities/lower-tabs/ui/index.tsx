import React, { useState } from 'react';
import { Container, Toolbar } from '@mui/material';
import StyledTabs from 'shared/tabs/styled-tabs';
import StyledTab from 'shared/tabs/styled-tab';

export const LowerTabs = (): JSX.Element => {
  const [value, setValue] = useState('Каталог ножей');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const tabStyle = {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: '16px',
  };

  return (
    <Toolbar
      component="nav"
      sx={{
        maxHeight: '70px',
        background: '#141414',
      }}
    >
      {/* TODO: Добавить выплывающие списки категорий*/}
      <Container component="div" maxWidth="xl">
        <StyledTabs
          value={value}
          onChange={handleChange}
          sx={{
            boxSizing: 'border-box',
            width: '100%',
            '& .MuiTabs-flexContainer': {
              justifyContent: 'space-between',
            },
          }}
        >
          <StyledTab label="Каталог ножей" sx={tabStyle} />
          <StyledTab label="Клинковое оружие" sx={tabStyle} />
          <StyledTab label="Сувенирные изделия" sx={tabStyle} />
          <StyledTab label="Фонари ARMYTEK" sx={tabStyle} />
          <StyledTab label="Сопуствующие товары" sx={tabStyle} />
        </StyledTabs>
      </Container>
    </Toolbar>
  );
};
