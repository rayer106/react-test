import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Divider,
  Stack,
  Avatar,
  IconButton,
  Tab,
  Tabs
} from '@mui/material';
import { PhotoCamera, Save } from '@mui/icons-material';

const Setup = () => {
  const { t } = useTranslation();
  const { user } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState('profile');
  
  // 个人资料表单状态
  const [profileForm, setProfileForm] = useState({
    username: user?.username || '',
    email: user?.email || '',
    phone: user?.phone || ''
  });
  
  // 佣金账户表单状态
  const [commissionForm, setCommissionForm] = useState({
    bankName: user?.bankName || '',
    accountName: user?.accountName || '',
    accountNumber: user?.accountNumber || '',
    paypalEmail: user?.paypalEmail || ''
  });
  
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleCommissionChange = (e) => {
    const { name, value } = e.target;
    setCommissionForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // 处理个人资料提交逻辑
    console.log('Profile form submitted:', profileForm);
  };
  
  const handleCommissionSubmit = (e) => {
    e.preventDefault();
    // 处理佣金账户提交逻辑
    console.log('Commission form submitted:', commissionForm);
  };

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 3 }}>
        {t('setup.title')}
      </Typography>
      
      <Paper elevation={0} sx={{ border: 1, borderColor: 'divider', borderRadius: 1 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab value="profile" label={t('setup.profile')} sx={{ textTransform: 'none' }} />
          <Tab value="commission" label={t('setup.commission_account')} sx={{ textTransform: 'none' }} />
        </Tabs>
        
        <Box sx={{ p: 3 }}>
          {activeTab === 'profile' && (
            <form onSubmit={handleProfileSubmit}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <Avatar
                  src={user?.avatar}
                  alt={user?.username}
                  sx={{ width: 80, height: 80, mr: 2 }}
                />
                <Box>
                  <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    {t('setup.profile_picture')}
                  </Typography>
                  <Button
                    variant="outlined"
                    component="label"
                    startIcon={<PhotoCamera />}
                    size="small"
                  >
                    {t('setup.upload')}
                    <input
                      type="file"
                      hidden
                      accept="image/*"
                    />
                  </Button>
                </Box>
              </Box>
              
              <Stack spacing={3} direction={{ xs: 'column', md: 'row' }} flexWrap="wrap">
                <Box sx={{ width: { xs: '100%', md: '48%' } }}>
                  <TextField
                    fullWidth
                    label={t('setup.username')}
                    name="username"
                    value={profileForm.username}
                    onChange={handleProfileChange}
                    margin="normal"
                    variant="outlined"
                  />
                </Box>
                <Box sx={{ width: { xs: '100%', md: '48%' } }}>
                  <TextField
                    fullWidth
                    label={t('setup.email')}
                    name="email"
                    type="email"
                    value={profileForm.email}
                    onChange={handleProfileChange}
                    margin="normal"
                    variant="outlined"
                  />
                </Box>
                <Box sx={{ width: { xs: '100%', md: '48%' } }}>
                  <TextField
                    fullWidth
                    label={t('setup.phone')}
                    name="phone"
                    value={profileForm.phone}
                    onChange={handleProfileChange}
                    margin="normal"
                    variant="outlined"
                  />
                </Box>
              </Stack>
              
              <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  startIcon={<Save />}
                >
                  {t('setup.save_changes')}
                </Button>
              </Box>
            </form>
          )}
          
          {activeTab === 'commission' && (
            <form onSubmit={handleCommissionSubmit}>
              <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
                {t('setup.commission_account_desc')}
              </Typography>
              
              <Stack spacing={3} direction={{ xs: 'column', md: 'row' }} flexWrap="wrap">
                <Box sx={{ width: { xs: '100%', md: '48%' } }}>
                  <TextField
                    fullWidth
                    label={t('setup.bank_name')}
                    name="bankName"
                    value={commissionForm.bankName}
                    onChange={handleCommissionChange}
                    margin="normal"
                    variant="outlined"
                  />
                </Box>
                <Box sx={{ width: { xs: '100%', md: '48%' } }}>
                  <TextField
                    fullWidth
                    label={t('setup.account_name')}
                    name="accountName"
                    value={commissionForm.accountName}
                    onChange={handleCommissionChange}
                    margin="normal"
                    variant="outlined"
                  />
                </Box>
                <Box sx={{ width: { xs: '100%', md: '48%' } }}>
                  <TextField
                    fullWidth
                    label={t('setup.account_number')}
                    name="accountNumber"
                    value={commissionForm.accountNumber}
                    onChange={handleCommissionChange}
                    margin="normal"
                    variant="outlined"
                  />
                </Box>
                <Box sx={{ width: { xs: '100%', md: '48%' } }}>
                  <TextField
                    fullWidth
                    label={t('setup.paypal_email')}
                    name="paypalEmail"
                    type="email"
                    value={commissionForm.paypalEmail}
                    onChange={handleCommissionChange}
                    margin="normal"
                    variant="outlined"
                  />
                </Box>
              </Stack>
              
              <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  startIcon={<Save />}
                >
                  {t('setup.save_account')}
                </Button>
              </Box>
            </form>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default Setup;