import { AppBar } from '@mui/material';
import { UpperTabs } from 'entities/upper-tabs';
import { MiddleLogoAndContacts } from 'entities/middle-logo-and-contacts';
import { LowerTabs } from 'entities/lower-tabs';

export const Header = () => {
  return (
    // компонент <AppBar /> под капотом преобразуется в <header></header>

    <AppBar>
      <UpperTabs />
      <MiddleLogoAndContacts />
      <LowerTabs />
      {/* TODO: Сделать контейнер для хедера */}
    </AppBar>
  );
};
