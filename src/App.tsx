import React, { useState } from 'react';
import logo from './logo.svg';
import LeftNavBar from './components/templates/NavBar/NavBar';
import ContentBody from './components/templates/ContentBody/ContentBody';
import AppRoutes from './routes/Router';
import './App.css';
import { Button, ButtonProps, Box, Card } from '@mui/material';
import { Container } from 'reactstrap';
import { Outlet, useRoutes } from 'react-router-dom';
import './assets/css/style.css';
function App() {
  // const [color, setColor] = useState<ButtonProps['color']>('primary');
  // const [variant, setVariant] =
  //   useState<ButtonProps['variant']>('text');
  // const [size, setSize] = useState<ButtonProps['size']>('small');

  // const customizeMe = () => {
  //   console.log('clicked');
  //   setColor('secondary');
  //   setVariant('contained');
  //   setSize('large');
  // };
  // const routing = useRoutes(routes);

  return (
    <>
    <div>
      <aside>
        {/* <Card
          variant="outlined"
          color="blue"
          sx={{
            width: 320,
            gap: 2,
            '&:hover': {
              boxShadow: 'md',
              borderColor: 'neutral.outlinedHoverBorder',
            },
          }}
        > */}
          <LeftNavBar></LeftNavBar>
        </aside>
      {/* <ContentBody></ContentBody> */}
    {/* </Card> */}
        <AppRoutes />
        <Container>
          <Outlet />
        </Container>
    </div>
    </>
  );
}


export default App;
