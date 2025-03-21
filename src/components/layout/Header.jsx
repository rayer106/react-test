import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/slices/authSlice';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Divider
} from '@mui/material';
import { AccountCircle, ExpandMore } from '@mui/icons-material';

const Header = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleClose();
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: 1, borderColor: '#EAEAEA', backgroundColor: 'white', height: '64px' }}>
      <Toolbar sx={{ height: '100%', px: 3 }}>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          {/* 移除欢迎文本和访问量信息 */}
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            size="medium"
            onClick={handleMenu}
            color="inherit"
            edge="end"
            sx={{ 
              p: 0
            }}
          >
            <Avatar sx={{ width: 32, height: 32, bgcolor: '#FF7846' }}>
              {user?.name?.charAt(0) || 'U'}
            </Avatar>
          </IconButton>
        </Box>
        
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          slotProps={{
            paper: {
              elevation: 2,
              sx: { minWidth: 180, mt: 1, borderRadius: 1.5 }
            }
          }}
        >
          <MenuItem sx={{ pointerEvents: 'none', opacity: 0.7 }}>
            <Typography variant="body2" sx={{ fontSize: '14px' }}>{t('app.reset_password')}</Typography>
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleLogout}>
            <Typography variant="body2" sx={{ fontSize: '14px', color: '#FF7846' }}>{t('app.logout')}</Typography>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;