import { AppBar } from '@mui/material';
import AppNavBar from './app-nav-bar/app-nav-bar';
import IdenticSearchBar from './identic-search-bar/identic-search-bar';

function Header() {
  return (
    // компонент <AppBar /> под капотом преобразуется в <header></header>

    <AppBar>
      <AppNavBar />
      <IdenticSearchBar />
      {/* TODO: Сделать контейнер для хедера */}
    </AppBar>
  );
}

export default Header;
