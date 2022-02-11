import React from 'react';

import Footer from '@/components/layout/Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <div id="app_container">
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
