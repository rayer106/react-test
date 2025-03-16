import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, Link } from 'react-router-dom';
import { 
  Box, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText,
  Typography,
  styled
} from '@mui/material';
import { 
  TrendingUp, 
  Favorite, 
  ShoppingBag, 
  AttachMoney, 
  Settings 
} from '@mui/icons-material';

const LogoWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(2),
  borderBottom: `1px solid #EAEAEA`,
}));

const StyledListItemButton = styled(ListItemButton)(({ theme, active }) => ({
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(0.5),
  padding: theme.spacing(1.5, 2),
  backgroundColor: active ? '#FFF8F6' : 'transparent',
  '&:hover': {
    backgroundColor: '#FFF8F6',
  },
}));

const navItems = [
  { path: '/', icon: <TrendingUp />, translationKey: 'navigation.daily_visits' },
  { path: '/hotlist', icon: <Favorite />, translationKey: 'navigation.my_hotlist' },
  { path: '/products', icon: <ShoppingBag />, translationKey: 'navigation.commission_products' },
  { path: '/commissions', icon: <AttachMoney />, translationKey: 'navigation.my_commissions' },
  { path: '/setup', icon: <Settings />, translationKey: 'navigation.setup' },
];

const Sidebar = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <Box sx={{ 
      width: 240, 
      minWidth: 240,
      maxWidth: 240,
      bgcolor: 'white', 
      height: '100vh', 
      borderRight: 1, 
      borderColor: '#EAEAEA',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.03)',
      overflow: 'hidden',
      position: 'fixed',
      left: 0,
      top: 0,
      zIndex: 1200
    }}>
      <LogoWrapper>
        <Typography variant="h6" color="#FF7846" fontWeight="bold" noWrap sx={{ fontSize: '18px' }}>
          {t('app.title')}
        </Typography>
      </LogoWrapper>
      
      <List sx={{ px: 2 }}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          
          return (
            <ListItem key={item.path} disablePadding sx={{ mb: 1 }}>
              <StyledListItemButton
                component={Link}
                to={item.path}
                active={isActive ? 1 : 0}
                sx={{ width: '100%' }}
              >
                <ListItemIcon sx={{ 
                  color: isActive ? '#FF7846' : '#666',
                  minWidth: 36
                }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={t(item.translationKey)} 
                  primaryTypographyProps={{
                    fontWeight: isActive ? 500 : 400,
                    color: isActive ? '#FF7846' : '#333',
                    fontSize: '14px',
                    noWrap: true,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                />
              </StyledListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Sidebar;