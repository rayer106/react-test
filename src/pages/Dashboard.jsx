import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Box, Typography, Paper, Divider, Stack } from '@mui/material';
import DashboardStats from '../components/dashboard/DashboardStats';
import CommissionStats from '../components/commission/CommissionStats';

const Dashboard = () => {
  const { t } = useTranslation();
  const { user } = useSelector((state) => state.auth);

  return (
    <Box>
      {/* 仪表盘统计 */}
      <Box sx={{ mb: 4 }}>
        <DashboardStats />
      </Box>
      
      {/* 佣金统计 */}
      <Box sx={{ mb: 4 }}>
        <CommissionStats />
      </Box>
      
      {/* 推广者ID */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: 3, 
          border: 1, 
          borderColor: '#EAEAEA', 
          borderRadius: 2,
          bgcolor: 'rgba(236, 236, 236, 0.3)',
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)'
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1" color="#666" sx={{ mr: 1, fontSize: '14px' }}>
              {t('influencer.id')}:
            </Typography>
            <Typography variant="body1" fontWeight="medium" sx={{ fontSize: '14px' }}>
              {user?.id}
            </Typography>
          </Box>
          <Typography variant="body2" color="#FF7846" sx={{ fontWeight: 'medium', fontSize: '14px' }}>
            {t('influencer.contact')}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Dashboard;