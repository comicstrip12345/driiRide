import React from 'react';
import NavLogoImg from './NavLogoImg';
import NavLogoTxt from './NavLogoTxt';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const NavbarLogo = ({ children, type, ...props }) => {
  const logoType = {
    txt: NavLogoTxt,
    img: NavLogoImg,
  };
  const LogoType = logoType[type];

  return (
    <Box {...props}>
      <LogoType>
        {children}
      </LogoType>
    </Box>
  );
};

NavbarLogo.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.instanceOf(Object).isRequired,
};

export default NavbarLogo;
