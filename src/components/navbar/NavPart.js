import { Stack } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const NavPart = ({ children, ...props }) => {
  return (
    <Stack {...props}>
      {children}
    </Stack>
  );
};

NavPart.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default NavPart;
