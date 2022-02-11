import React from 'react';

import AppBar from '@/components/layout/AppBar';
import Footer from '@/components/layout/Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <div id="app_container">
      <AppBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
