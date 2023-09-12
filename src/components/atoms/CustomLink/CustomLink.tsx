import { ReactElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { LinkProps, Link, Typography } from '@mui/material';

export interface CustomLinkProps extends LinkProps {
  children: ReactElement | string;
  path: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ children, ...props }) => (
  <Link {...props} component={RouterLink} to={props.path}>
    {typeof children === 'string' ? (
      <Typography>{children}</Typography>
    ) : (
      children
    )}
  </Link>
);

export default CustomLink;
