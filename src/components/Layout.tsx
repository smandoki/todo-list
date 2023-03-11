import React from 'react';
import Aside from './Aside';
import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {
  return (
    <>
      <Header />
      <Aside />
      <Outlet />
    </>
  );
}

export default Layout;
