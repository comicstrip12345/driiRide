import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { Navbar, NavDiv, NavbarLogo } from '@components/navbar';
import Image from 'next/image';
import { busImage } from '@images/index';
import useBreakpoints from '@hooks/useBreakpoints';

const styles = {
  logoText1: {
    fontFamily: 'Poppins-ExtraBold',
    color: 'var(--black)',
    fontSize: {
      xs: '17px',
      sm: '32px',
      md: '42px',
      lg: '20px',
    },
  },
  logoText2: {
    fontFamily: 'Poppins-ExtraBold',
    color: 'var(--main)',
    fontSize: {
      xs: '17px',
      sm: '32px',
      md: '42px',
      lg: '20px',
    },
  },
  navbarContainer: {
    marginY: {
      xs: '20px',
      sm: '25px',
      md: '33px',
      lg: '20px',
    },
    marginX: {
      md: '15px',
    },
  },
  bgImgBreakpoints: {
    xs: {
      width: '500px',
      height: '500px',
      position: 'absolute',
      left: '-120px',
      top: '0px',
      zIndex: -1,
    },
    sm: {
      width: '1027px',
      height: '1027px',
      position: 'absolute',
      left: '-232px',
      top: '-120px',
      zIndex: -1,
    },
    md: {
      width: '1200px',
      height: '1200px',
      position: 'absolute',
      left: '-272px',
      top: '-120px',
      zIndex: -1,
    },
    lg: {
      width: '910px',
      height: '910px',
      position: 'absolute',
      left: '-180px',
      top: '-150px',
      zIndex: -1,
    },
    xl: {
      overflow: 'hidden',
      width: '1390px',
      height: '1390px',
      position: 'absolute',
      left: '-320px',
      top: '-250px',
      zIndex: -1,
    },
  },
};
const Home = () => {
  const breakpoint = useBreakpoints();

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Container maxWidth={breakpoint === 'xl' ? 'xl' : 'lg'}>
        <Navbar
          direction='row'
          justifyContent='space-between'
          sx={styles.navbarContainer}
        >
          <NavDiv>
            <NavbarLogo type='txt'>
              <Typography
                component='span'
                sx={styles.logoText1}
              >
                drii
              </Typography>
              <Typography
                component='span'
                sx={styles.logoText2}
              >
                Ride
              </Typography>
            </NavbarLogo>
          </NavDiv>
        </Navbar>
      </Container>
      <Image
        src={busImage}
        style={styles['bgImgBreakpoints'][breakpoint]}
        alt='busBG'
      />
    </Box>
  );
};

export default Home;
