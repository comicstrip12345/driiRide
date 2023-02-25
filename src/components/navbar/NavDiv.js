import { Stack } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const NavDiv = ({ children, ...props }) => {
  return (
    <Stack {...props}>
      {children}
    </Stack>
  );
};

NavDiv.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default NavDiv;
