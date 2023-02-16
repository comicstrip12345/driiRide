import { Stack } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const Navbar = ({ direction, children, justifyContent, ...sx }) => {
  return (
    <Stack direction={direction} justifyContent={justifyContent} {...sx}>
      {children}
    </Stack>
  );
};

Navbar.propTypes = {
  direction: PropTypes.string,
  children: PropTypes.instanceOf(Object).isRequired,
  justifyContent: PropTypes.string,
};

export default Navbar;
