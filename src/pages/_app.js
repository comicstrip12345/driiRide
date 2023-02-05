import React from 'react';
import '@/styles/globals.css';
import PropTypes from 'prop-types';

export default function App({Component, pageProps}) {
  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.instanceOf(Object).isRequired,
};


