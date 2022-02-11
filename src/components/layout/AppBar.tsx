import * as React from 'react';

import ROUTES from '@/routes';
import StyledLink from '@/components/common/StyledLink';

const AppBar: React.FC = () => (
  <div>
    <StyledLink displayText="News" to={ROUTES.NEWS} />
    <StyledLink displayText="Home" to={ROUTES.HOME} />
  </div>
);

export default AppBar;
