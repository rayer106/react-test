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
  ListSubheader,
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
  marginBottom: theme.spacing(0),
  borderBottom: `1px solid #EAEAEA`,
}));

const StyledListItemButton = styled(ListItemButton)(({ theme, active }) => ({
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(0),
  padding: theme.spacing(1, 2),
  backgroundColor: active ? '#FFF8F6' : 'transparent',
  '&:hover': {
    backgroundColor: '#FFF8F6',
  },
}));

const StyledListSubheader = styled(ListSubheader)(({ theme }) => ({
  backgroundColor: 'transparent',
  padding: theme.spacing(1, 2),
  lineHeight: '30px',
  fontSize: '12px',
  fontWeight: 500,
  color: '#999',
  textTransform: 'uppercase',
}));

// 重新组织导航项，添加分类
const navItems = [
  { 
    //category: '主要功能',
    items: [
      { path: '/', icon: <TrendingUp />, translationKey: 'navigation.daily_visits' },
      { path: '/hotlist', icon: <Favorite />, translationKey: 'navigation.my_hotlist' },
      { path: '/products', icon: <ShoppingBag />, translationKey: 'navigation.commission_products' },
      { path: '/commissions', icon: <AttachMoney />, translationKey: 'navigation.my_commissions' },
      { path: '/setup', icon: <Settings />, translationKey: 'navigation.setup' },
    ]
  }
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
        {navItems.map((category, index) => (
          <React.Fragment key={index}>
            <StyledListSubheader>{category.category}</StyledListSubheader>
            
            {category.items.map((item) => {
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
                      primary={
                        <Typography 
                          variant="body2"
                          fontWeight={isActive ? 500 : 400}
                          color={isActive ? '#FF7846' : '#333'}
                          fontSize="14px"
                          noWrap
                          sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }}
                        >
                          {t(item.translationKey)}
                        </Typography>
                      }
                    />
                  </StyledListItemButton>
                </ListItem>
              );
            })}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;