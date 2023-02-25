import { Box, Button, Container, Stack, Typography } from '@mui/material';
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
  headText1: {
    fontFamily: 'Poppins-Bold',
    color: 'var(--black)',
    fontSize: {
      xs: '7vw',
      sm: '6.5vw',
      md: '6.6vw',
      lg: '46px',
      xl: '60px',
    },
    textAlign: {
      xs: 'center',
      lg: 'left',
    },
  },
  headText2: {
    fontFamily: 'Poppins-Bold',
    color: 'var(--main)',
    fontSize: {
      xs: '7vw',
      sm: '6.5vw',
      lg: '46px',
      xl: '60px',
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
  buttonColor: {
    backgroundColor: 'var(--button)',
    borderRadius: '24px',
    fontFamily: 'Quicksand-Bold',
    padding: {
      xs: '10px',
      md: '19px',
      lg: '14px',
    },
    fontSize: {
      xs: '3vw',
      lg: '16px',
    },
    color: 'white',
    textTransform: 'none',
  },
  bgImgBreakpoints: {
    xs: {
      width: '500px',
      height: '500px',
      position: 'absolute',
      left: '-140px',
      top: '-10px',
      zIndex: -999,
    },
    xs2: {
      width: '500px',
      height: '500px',
      position: 'absolute',
      left: '-140px',
      top: '50px',
      zIndex: -999,
    },
    sm: {
      width: '850px',
      height: '850px',
      position: 'absolute',
      left: '-132px',
      top: '-120px',
      zIndex: -1,
    },
    md: {
      width: '1100px',
      height: '1100px',
      position: 'absolute',
      left: '-202px',
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
  console.log(breakpoint);

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
        <Image
          src={busImage}
          style={styles['bgImgBreakpoints'][breakpoint]}
          alt='busBG'
        />
        <Stack direction={{ xs: 'column', lg: 'row' }} justifyContent='space-between'>
          <Box
            marginBottom={{
              xs: breakpoint === 'xs2' ? '460px' : '52vh',
              sm: '48vh',
            }}
          ></Box>
          <Stack
            marginY={{ lg: '80px', xl: '170px' }}
            width={{ xs: '100%', lg: '40%' }}
            gap={{ xs: '16px', sm: '30px', lg: '27px' }}
          >
            <Typography component='span' sx={styles.headText1}>
              The
              {' '}
              <Typography component='span' sx={styles.headText2}>
                No. 1
              </Typography>
              {' '}
              Transport Booking App in the Philippines
            </Typography>
            <Stack
              direction='row'
              gap={{
                xs: '11px',
                sm: '20px',
                md: '30px',
                lg: '20px',
              }}
              marginX={{
                xs: 'auto',
                lg: 0,
              }}
            >
              <Button sx={styles.buttonColor}>View Schedule</Button>
              <Button sx={styles.buttonColor}>Accounts</Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
