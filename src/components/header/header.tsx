import { AppBar, Link, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    // компонент <AppBar /> под капотом преобразуется в <header></header>
    <AppBar sx={{ background: '#141414' }}>
      <Toolbar
        sx={{
          width: '1580px',
          m: '0 auto',
          display: 'flex',
          //TODO: исправить отсутпы, сделать в соответствии с макетом
          justifyContent: 'space-around',
        }}
      >
        <Typography>
          <Link
            href="#"
            underline="none"
            sx={{
              color: '#FFFFFF',
              fontWeight: '500',
              fontSize: '16px',
              //TODO: исправить отсутпы, сделать в соответствии с макетом
              mr: '20px',
            }}
          >
            О нас
          </Link>
        </Typography>
        <Typography>
          <Link
            href="#"
            underline="none"
            sx={{
              color: '#FFFFFF',
              fontWeight: '500',
              fontSize: '16px',
            }}
          >
            Оплата и доставка
          </Link>
        </Typography>
        <Typography>
          <Link
            href="#"
            underline="none"
            sx={{
              color: '#FFFFFF',
              fontWeight: '500',
              fontSize: '16px',
            }}
          >
            Новости
          </Link>
        </Typography>
        <Typography>
          <Link
            href="#"
            underline="none"
            sx={{
              color: '#FFFFFF',
              fontWeight: '500',
              fontSize: '16px',
            }}
          >
            Контакты
          </Link>
        </Typography>
        <Typography>
          <Link
            href="#"
            underline="none"
            sx={{
              color: '#FFFFFF',
              fontWeight: '500',
              fontSize: '16px',
            }}
          >
            Личный кабинет
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
