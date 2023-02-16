import { Container, Typography } from '@mui/material';
import React from 'react';
import { Navbar, NavPart, NavbarLogo } from 'src/components/navbar';

const Home = () => {
  return (
    <Container maxWidth={'lg'}>
      <Navbar
        direction="row"
        justifyContent="space-between"
        sx={{ marginY: { xs: '20px', sm: '31px', lg: '20px' } }}
      >
        <NavPart>
          <NavbarLogo type='txt'>
            <Typography
              component="span"
              fontFamily="Poppins-Bold"
              color="var(--black)"
              fontSize={{ xs: '17px', sm: '32px', lg: '20px' }}
            >
              drii
            </Typography>
            <Typography
              component="span"
              fontFamily="Poppins-Bold"
              color="var(--main)"
              fontSize={{ xs: '17px', sm: '32px', lg: '20px' }}
            >
              Ride
            </Typography>
          </NavbarLogo>
        </NavPart>
      </Navbar>
    </Container>
  );
};

export default Home;
