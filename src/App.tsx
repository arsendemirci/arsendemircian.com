'use client';
import { Fragment } from 'react';
import { AppHeader, AppFooter, PageCard } from '@/components';
const App = (props: any) => {
  return (
    <Fragment>
      <AppHeader title="Arsen Demirci" />
      <main>
        <PageCard>{props.children}</PageCard>
      </main>
      <AppFooter />
    </Fragment>
  );
};

export default App;
