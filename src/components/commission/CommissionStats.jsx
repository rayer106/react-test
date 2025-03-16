import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Box, Paper, Typography, Stack } from '@mui/material';

const CommissionStats = () => {
  const { t } = useTranslation();
  const { todayCommission, totalCommission } = useSelector((state) => state.commission);

  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
      {/* 今日佣金 */}
      <Box sx={{ flex: 1 }}>
        <Paper 
          elevation={0} 
          sx={{ 
            p: 3, 
            border: 1, 
            borderColor: '#EAEAEA',
            borderRadius: 2,
            height: '100%',
            bgcolor: '#FFF8F6',
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)'
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" color="#666" sx={{ fontSize: '16px' }}>
              {t('commission.today_commission')}
            </Typography>
            <Typography variant="h6" color="#FF7846" fontWeight="bold" sx={{ fontSize: '18px' }}>
              ${todayCommission.toFixed(2)}
            </Typography>
          </Box>
        </Paper>
      </Box>
      
      {/* 总佣金 */}
      <Box sx={{ flex: 1 }}>
        <Paper 
          elevation={0} 
          sx={{ 
            p: 3, 
            border: 1, 
            borderColor: '#EAEAEA',
            borderRadius: 2,
            height: '100%',
            bgcolor: '#FFF8F6',
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)'
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" color="#666" sx={{ fontSize: '16px' }}>
              {t('commission.total_commission')}
            </Typography>
            <Typography variant="h6" color="#FF7846" fontWeight="bold" sx={{ fontSize: '18px' }}>
              ${totalCommission.toFixed(2)}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Stack>
  );
};

export default CommissionStats;