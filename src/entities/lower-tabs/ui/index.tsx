import React, { useState } from 'react';
import {
  Box,
  Container,
  Divider,
  Popover,
  Toolbar,
  Typography,
} from '@mui/material';
import StyledTabs from 'shared/tabs/styled-tabs';
import StyledTab from 'shared/tabs/styled-tab';
import { popoverData } from '../api/fakeApi';

export const LowerTabs = (): JSX.Element => {
  const [value, setValue] = useState<string | number>('Каталог ножей');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = useState<null | Element>(null);

  const handleClick = (event: React.SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

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
          <StyledTab
            label="Каталог ножей"
            sx={tabStyle}
            onClick={handleClick}
          />
          <StyledTab label="Клинковое оружие" sx={tabStyle} />
          <StyledTab label="Сувенирные изделия" sx={tabStyle} />
          <StyledTab label="Фонари ARMYTEK" sx={tabStyle} />
          <StyledTab label="Сопуствующие товары" sx={tabStyle} />
        </StyledTabs>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            {popoverData.map((el) => {
              return (
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#141414',
                  }}
                >
                  <Typography
                    sx={{
                      color: '#FFFFFF',
                      margin: '31px 95px 0 0',
                      fontWeight: 900,
                    }}
                  >
                    {el.category}
                  </Typography>
                  <Divider
                    sx={{ mt: '30px', background: 'rgba(255, 255, 255, 0.3)' }}
                  />
                  {el.data.map((element) => {
                    return (
                      <Typography
                        sx={{
                          color: '#FFFFFF',
                          margin: '20px 30px 0 0',
                          ':hover': {
                            color: '#E8AA31',
                            textDecoration: 'underline',
                          },
                        }}
                      >
                        {element}
                      </Typography>
                    );
                  })}
                  <Divider
                    sx={{ mt: 'auto', background: 'rgba(255, 255, 255, 0.3)' }}
                  />
                  <Typography sx={{ color: '#E8AA31', mt: '30px', mb: '30px' }}>
                    Смотреть все
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Popover>
      </Container>
    </Toolbar>
  );
};
