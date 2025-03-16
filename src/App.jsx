import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import store from './store';
import './i18n';
import './App.css';

// 布局组件
import Layout from './components/layout/Layout';

// 页面组件
import Dashboard from './pages/Dashboard';
import Hotlist from './pages/Hotlist';
import Products from './pages/Products';
import Commissions from './pages/Commissions';
import Setup from './pages/Setup';

// 创建主题
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF7846', // 橙色主题
      light: 'rgba(255, 120, 70, 0.1)',
    },
    secondary: {
      main: '#f50057',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
      light: 'rgba(255, 248, 225, 0.5)',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
    background: {
      default: '#F8F9FA',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
    },
    subtitle1: {
      fontSize: '0.875rem',
    },
    body1: {
      fontSize: '0.875rem',
    },
    body2: {
      fontSize: '0.75rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 4,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '12px 16px',
          borderColor: '#EAEAEA',
        },
        head: {
          fontWeight: 500,
          backgroundColor: '#FFF8F6',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:last-child td, &:last-child th': {
            borderBottom: 0,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: '0.75rem',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          minHeight: 48,
          padding: '0 16px',
        },
      },
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout><Dashboard /></Layout>} />
            <Route path="/hotlist" element={<Layout><Hotlist /></Layout>} />
            <Route path="/products" element={<Layout><Products /></Layout>} />
            <Route path="/commissions" element={<Layout><Commissions /></Layout>} />
            <Route path="/setup" element={<Layout><Setup /></Layout>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
