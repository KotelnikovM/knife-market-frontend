import { AppBar } from '@mui/material';
import AppNavBar from './app-nav-bar/app-nav-bar';
import IdenticSearchBar from './identic-search-bar/identic-search-bar';
import MainTabs from './main-tabs/main-tabs';

function Header() {
  return (
    // компонент <AppBar /> под капотом преобразуется в <header></header>

    <AppBar>
      <AppNavBar />
      <IdenticSearchBar />
      <MainTabs />

      {/* TODO: Сделать контейнер для хедера */}
    </AppBar>
  );
}

export default Header;
