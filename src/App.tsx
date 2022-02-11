import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './AppRoutes';
import Layout from './components/layout/Layout';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
