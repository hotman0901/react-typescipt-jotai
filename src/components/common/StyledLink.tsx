import React from 'react';
import { Link } from 'react-router-dom';

const Styles: React.CSSProperties = {
  color: '#2368ff',
  padding: '0 20px'
};

interface Props {
  displayText: string;
  to: string;
}

const StyledLink: React.FC<Props> = ({ displayText, to }) => (
  <Link to={to} style={Styles}>
    {displayText}
  </Link>
);

export default StyledLink;
