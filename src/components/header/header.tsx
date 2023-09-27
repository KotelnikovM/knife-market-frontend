import { AppBar } from '@mui/material';
import AppNavBar from './app-nav-bar/app-nav-bar';
import IdenticSearchBar from './identic-search-bar/identic-search-bar';

function Header() {
  return (
    // компонент <AppBar /> под капотом преобразуется в <header></header>
    <AppBar>
      {/* TODO: Сделать контейнер для хедера */}

      <AppNavBar />
      <IdenticSearchBar />
    </AppBar>
  );
}

export default Header;
