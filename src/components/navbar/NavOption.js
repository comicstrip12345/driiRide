import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';

const NavOption = ({ children }) => {
  return (
    <Link href='/'>
      {children}
    </Link>
  );
};

NavOption.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default NavOption;
