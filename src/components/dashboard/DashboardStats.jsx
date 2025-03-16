import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Paper, Typography, Grid, Chip, Stack } from '@mui/material';
import Chart from 'react-apexcharts';

const DashboardStats = () => {
  const { t } = useTranslation();
  
  // 模拟数据
  const xLabels = ['12-5', '12-6', '12-7', '12-8', '12-9', '12-10', '12-11'];
  const visitValues = [15, 20, 18, 25, 22, 20, 25];
  
  // 搜索关键词数据
  const searchKeywords = [
    { keyword: 'AJ 11', count: 40 },
    { keyword: 'Really nice, cute and taste good', count: 32 },
    { keyword: 'Air force', count: 22 },
    { keyword: 'Really nice, cute and taste good', count: 17 },
  ];

  return (
    <Box>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
        {/* 访问量统计 */}
        <Box sx={{ flex: 1 }}>
          <Paper elevation={0} sx={{ p: 3, border: 1, borderColor: '#EAEAEA', borderRadius: 2, height: '100%', boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6" color="#666" sx={{ fontSize: '16px' }}>
                {t('dashboard.daily_visits')}
              </Typography>
              <Typography variant="h6" color="#FF7846" fontWeight="bold" sx={{ fontSize: '18px' }}>
                10000
              </Typography>
            </Box>
            <Typography variant="subtitle2" color="#666" sx={{ mb: 2, fontSize: '14px' }}>
              {t('dashboard.visit_trends')}
            </Typography>
            <Box sx={{ height: 200 }}>
              <Chart
                options={{
                  chart: {
                    id: 'daily-visits',
                    toolbar: {
                      show: false
                    },
                    fontFamily: 'inherit',
                    type: 'area'
                  },
                  colors: ['#FF7846'],
                  stroke: {
                    curve: 'smooth',
                    width: 2
                  },
                  fill: {
                    type: 'gradient',
                    gradient: {
                      shadeIntensity: 1,
                      opacityFrom: 0.2,
                      opacityTo: 0.1,
                      stops: [0, 90, 100]
                    }
                  },
                  dataLabels: {
                    enabled: false
                  },
                  xaxis: {
                    categories: xLabels,
                    labels: {
                      style: {
                        fontSize: '12px'
                      }
                    },
                    axisBorder: {
                      show: false
                    },
                    axisTicks: {
                      show: false
                    }
                  },
                  yaxis: {
                    labels: {
                      style: {
                        fontSize: '12px'
                      }
                    }
                  },
                  grid: {
                    borderColor: 'rgba(0, 0, 0, 0.05)',
                    strokeDashArray: 4
                  },
                  markers: {
                    size: 4,
                    colors: ['#fff'],
                    strokeColors: '#FF7846',
                    strokeWidth: 2,
                    hover: {
                      size: 6
                    }
                  },
                  tooltip: {
                    theme: 'light'
                  },
                  legend: {
                    show: false
                  }
                }}
                series={[{
                  name: t('dashboard.daily_visits'),
                  data: visitValues
                }]}
                type="area"
                height={200}
              />
            </Box>
          </Paper>
        </Box>
        
        {/* 搜索趋势 */}
        <Box sx={{ flex: 1 }}>
          <Paper elevation={0} sx={{ p: 3, border: 1, borderColor: '#EAEAEA', borderRadius: 2, height: '100%', boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6" color="#666" sx={{ fontSize: '16px' }}>
                {t('dashboard.search_trends')}
              </Typography>
              <Typography variant="h6" color="#FF7846" fontWeight="bold" sx={{ fontSize: '18px' }}>
                2242
              </Typography>
            </Box>
            <Typography variant="subtitle2" color="#666" sx={{ mb: 2, fontSize: '14px' }}>
              {t('dashboard.keywords')}
            </Typography>
            <Stack spacing={2}>
              {searchKeywords.map((item, index) => (
                <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" noWrap sx={{ maxWidth: '70%', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '14px' }}>
                    {item.keyword}
                  </Typography>
                  <Chip 
                    label={item.count} 
                    size="small" 
                    sx={{ 
                      bgcolor: '#FFF8F6',
                      color: '#FF7846',
                      fontWeight: 'medium',
                      fontSize: '12px',
                      border: '1px solid #FFE9E4'
                    }} 
                  />
                </Box>
              ))}
            </Stack>
          </Paper>
        </Box>
      </Stack>
    </Box>
  );
};

export default DashboardStats;