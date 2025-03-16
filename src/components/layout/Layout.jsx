import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F8F9FA' }}>
      <Sidebar />
      <Box sx={{ 
        flexGrow: 1, 
        display: 'flex', 
        flexDirection: 'column',
        width: 'calc(100vw - 260px)',
        marginLeft: '260px'
      }}>
        <Header />
        <Box 
          component="main" 
          sx={{ 
            flexGrow: 1, 
            backgroundColor: '#F8F9FA',
            width: '100%',
            boxSizing: 'border-box'
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;