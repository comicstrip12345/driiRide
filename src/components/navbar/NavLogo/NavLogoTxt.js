import React from 'react';
import PropTypes from 'prop-types';

const NavLogoTxt = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

NavLogoTxt.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default NavLogoTxt;
