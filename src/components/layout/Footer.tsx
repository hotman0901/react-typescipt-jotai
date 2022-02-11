import * as React from 'react';

import StyledLink from '@/components/common/StyledLink';
import ROUTES from '@/routes';

const Footer: React.FC = () => (
  <div>
    <StyledLink displayText="Home" to={ROUTES.HOME} />
    <StyledLink displayText="News" to={ROUTES.NEWS} />
  </div>
);

export default Footer;
