import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Typography,
  Paper,
  Stack,
  Button,
  Tabs,
  Tab,
  Card,
  CardMedia,
  CardContent,
  TextField,
  InputAdornment,
  Avatar,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import ReactApexChart from 'react-apexcharts';

// 模拟数据
const mockVisitData = {
  series: [{
    name: "访问量",
    data: [15, 20, 25, 30, 22, 18, 25]
  }],
  options: {
    chart: {
      type: 'area',
      height: 200,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2,
      colors: ['#FF7846']
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3,
        stops: [0, 90, 100],
        colorStops: [
          {
            offset: 0,
            color: '#FF7846',
            opacity: 0.2
          },
          {
            offset: 100,
            color: '#FF7846',
            opacity: 0
          }
        ]
      }
    },
    markers: {
      size: 4,
      colors: ['#FF7846'],
      strokeColors: '#fff',
      strokeWidth: 2,
      hover: {
        size: 6,
      }
    },
    xaxis: {
      categories: ['12-5', '12-6', '12-7', '12-8', '12-9', '12-10', '12-11'],
      labels: {
        style: {
          colors: '#999'
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
          colors: '#999'
        }
      }
    },
    grid: {
      borderColor: '#f1f1f1',
      strokeDashArray: 4,
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy'
      },
    },
    // 移除 annotations 属性，去掉中间的垂直线
    // annotations: {
    //   xaxis: [{
    //     x: '12-8',
    //     borderColor: '#FF7846',
    //     label: {
    //       borderColor: '#FF7846',
    //       style: {
    //         color: '#fff',
    //         background: '#FF7846'
    //       },
    //       text: '12-8: 32'
    //     }
    //   }]
    // }
  }
};

const mockKeywords = [
  { keyword: 'AJ 11', count: 40 },
  { keyword: 'Really nice, cute and taste good', count: 32 },
  { keyword: 'Air force', count: 22 },
  { keyword: 'Really nice, cute and taste good', count: 17 }
];

const mockProducts = [
  {
    id: 1,
    title: 'Really nice, cute and taste good especially watermelon',
    price: 15.9,
    commission: 1.50,
    image: 'https://via.placeholder.com/150',
    sold: 1096,
    commissionsPaid: 31948.2
  },
  {
    id: 2,
    title: 'Really nice, cute and taste good especially watermelon',
    price: 15.9,
    commission: 1.50,
    image: 'https://via.placeholder.com/150',
    sold: 1096,
    commissionsPaid: 31948.2
  },
  {
    id: 3,
    title: 'Really nice, cute and taste good especially watermelon',
    price: 15.9,
    commission: 1.50,
    image: 'https://via.placeholder.com/150',
    sold: 1096,
    commissionsPaid: 31948.2
  },
  {
    id: 4,
    title: 'Really nice, cute and taste good especially watermelon',
    price: 15.9,
    commission: 1.50,
    image: 'https://via.placeholder.com/150',
    sold: 1096,
    commissionsPaid: 31948.2
  }
];

const mockRankingData = [
  { id: 1, avatar: 'https://via.placeholder.com/40', visits: 1.50 },
  { id: 2, avatar: 'https://via.placeholder.com/40', visits: 1.50 },
  { id: 3, avatar: 'https://via.placeholder.com/40', visits: 1.50 },
  { id: 4, avatar: 'https://via.placeholder.com/40', visits: 1.50 },
  { id: 5, avatar: 'https://via.placeholder.com/40', visits: 1.50 },
  { id: 6, avatar: 'https://via.placeholder.com/40', visits: 1.50 },
  { id: 7, avatar: 'https://via.placeholder.com/40', visits: 1.50 }
];

const Dashboard = () => {
  const { t } = useTranslation();
  const [tabValue, setTabValue] = useState(0);
  
  // 安全的数字格式化函数
  const formatNumber = (num) => {
    return num ? num.toLocaleString() : '0';
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', margin: '0 auto', p: 2 }}>
      {/* 欢迎信息 */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, color: '#000' }}>
          Hi, Welcome back 👋
        </Typography>
      </Box>
      
      {/* 访问量和搜索趋势 */}
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ mb: 3 }}>
        <Box sx={{ flex: 1 }}>
          <Paper elevation={0} sx={{ p: 2, borderRadius: 2, boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '14px' }}>
                Daily visits
              </Typography>
              <Typography variant="h5" color="#FF7846" fontWeight="bold" sx={{ fontSize: '20px' }}>
                10000
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontSize: '12px' }}>
              Recent 7-day visit trends
            </Typography>
            <ReactApexChart 
              options={mockVisitData.options} 
              series={mockVisitData.series} 
              type="area" 
              height={200} 
            />
          </Paper>
        </Box>
        
        <Box sx={{ flex: 1 }}>
          <Paper elevation={0} sx={{ p: 2, borderRadius: 2, boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)', height: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '14px' }}>
                Recent 7-day search trends
              </Typography>
              <Typography variant="h5" color="#FF7846" fontWeight="bold" sx={{ fontSize: '20px' }}>
                2242
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontSize: '12px' }}>
              Keywords:
            </Typography>
            <List sx={{ '& .MuiListItem-root': { py: 0.3 } }}>
              {mockKeywords.map((item, index) => (
                <ListItem 
                  key={index}
                  secondaryAction={
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '12px' }}>
                      {item.count}
                    </Typography>
                  }
                  sx={{ py: 0.5 }}
                >
                  <ListItemText 
                    primary={item.keyword} 
                    primaryTypographyProps={{ 
                      variant: 'body2',
                      color: 'text.primary',
                      fontSize: '13px'
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>
      </Stack>
      
      {/* Influencer ID */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary" sx={{ mr: 1, fontSize: '12px' }}>
            Influencer ID:
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '12px' }}>
            123213KOL ID1312131
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary" sx={{ mr: 1, fontSize: '12px' }}>
            If you need any help, just contact us
          </Typography>
          {/* 社交媒体图标 */}
          <Stack direction="row" spacing={1}>
            {['#', '#', '#', '#'].map((_, index) => (
              <Avatar key={index} sx={{ width: 20, height: 20, bgcolor: index === 0 ? '#1877F2' : index === 1 ? '#25D366' : index === 2 ? '#1DA1F2' : '#0A66C2' }}>
                {index}
              </Avatar>
            ))}
          </Stack>
        </Box>
      </Box>
      
      {/* 佣金信息 */}
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ mb: 3 }}>
        <Box sx={{ flex: 1 }}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: 2, 
              borderRadius: 2, 
              bgcolor: '#FFF8F6',
              border: '1px solid #FFE9E4',
              boxShadow: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar sx={{ bgcolor: '#FFEEE9', color: '#FF7846', mr: 2, width: 32, height: 32, fontSize: '14px' }}>T</Avatar>
              <Typography variant="body1" sx={{ fontSize: '14px' }}>
                Today commission
              </Typography>
            </Box>
            <Typography variant="h5" color="#FF7846" fontWeight="bold" sx={{ fontSize: '18px' }}>
              $12.56
            </Typography>
          </Paper>
        </Box>
        
        <Box sx={{ flex: 1 }}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: 2, 
              borderRadius: 2, 
              bgcolor: '#FFF8F6',
              border: '1px solid #FFE9E4',
              boxShadow: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar sx={{ bgcolor: '#FFEEE9', color: '#FF7846', mr: 2, width: 32, height: 32, fontSize: '14px' }}>T</Avatar>
              <Typography variant="body1" sx={{ fontSize: '14px' }}>
                Total commission
              </Typography>
            </Box>
            <Typography variant="h5" color="#FF7846" fontWeight="bold" sx={{ fontSize: '18px' }}>
              $1.20
            </Typography>
          </Paper>
        </Box>
      </Stack>
      
      {/* 佣金排名和产品列表 */}
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
        <Box sx={{ width: { xs: '100%', md: '25%' } }}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: 2, 
              borderRadius: 2, 
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
              height: '100%'
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="body1" fontWeight="medium" sx={{ fontSize: '14px' }}>
                Commission Ranking Top 10
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontSize: '12px' }}>
              Recent 7 days
            </Typography>
            <List sx={{ '& .MuiListItem-root': { py: 0.3 } }}>
              {mockRankingData.map((item, index) => (
                <ListItem 
                  key={index}
                  secondaryAction={
                    <Typography variant="body2" fontWeight="medium" sx={{ fontSize: '13px' }}>
                      ${item.visits}
                    </Typography>
                  }
                  sx={{ py: 0.5 }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body2" color="text.secondary" sx={{ mr: 1, width: 16, fontSize: '12px' }}>
                      {index + 1}
                    </Typography>
                    <Avatar src={item.avatar} sx={{ width: 24, height: 24, mr: 1 }} />
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '12px' }}>
                      Daily visits
                    </Typography>
                  </Box>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>
        
        <Box sx={{ width: { xs: '100%', md: '75%' } }}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: 2, 
              borderRadius: 2,
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)'
            }}
          >
            <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Tabs 
                value={tabValue} 
                onChange={handleTabChange}
                sx={{
                  '& .MuiTabs-indicator': {
                    backgroundColor: '#FF7846',
                    height: '2px'
                  },
                  '& .MuiTab-root': {
                    textTransform: 'none',
                    minWidth: 80,
                    fontWeight: 'medium',
                    fontSize: '14px',
                    color: '#666',
                    '&.Mui-selected': {
                      color: '#FF7846',
                    },
                    padding: '8px 16px'
                  }
                }}
              >
                <Tab label="Vape" />
                <Tab label="Cloth" />
                <Tab label="Sneake" />
                <Tab label="Digital" />
              </Tabs>
              
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                  placeholder="Find keywords..."
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon fontSize="small" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ 
                    width: 200,
                    mr: 2,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      fontSize: '13px'
                    }
                  }}
                />
                <Typography variant="body2" color="text.secondary" sx={{ mr: 1, fontSize: '12px' }}>
                  Need other products?
                </Typography>
                <Button 
                  variant="contained" 
                  size="small"
                  sx={{ 
                    bgcolor: '#FF7846', 
                    borderRadius: 1,
                    textTransform: 'none',
                    fontSize: '12px',
                    py: 0.5,
                    '&:hover': {
                      bgcolor: '#E56A3E'
                    }
                  }}
                >
                  Join dighotlist Discord
                </Button>
              </Box>
            </Box>
            
            <Stack direction="row" flexWrap="wrap" sx={{ mx: -1 }}>
              {mockProducts.map((product) => (
                <Box key={product.id} sx={{ width: { xs: '100%', sm: '50%', md: '25%' }, p: 1 }}>
                  <Card 
                    elevation={0}
                    sx={{ 
                      borderRadius: 2,
                      overflow: 'hidden',
                      border: '1px solid #EAEAEA',
                      '&:hover': {
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)'
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={product.image}
                      alt={product.title}
                    />
                    <CardContent sx={{ p: 1.5 }}>
                      <Typography variant="body2" sx={{ mb: 1, height: 40, overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '13px' }}>
                        {product.title}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Typography variant="h6" color="#FF7846" fontWeight="bold" sx={{ fontSize: '15px' }}>
                          ${product.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '12px' }}>
                          Commission: <Typography component="span" color="#FF7846" fontWeight="medium" sx={{ fontSize: '12px' }}>${product.commission}</Typography>
                        </Typography>
                      </Box>
                      
                      <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 1, fontSize: '11px' }}>
                        Sold {product.sold}, ${product.commissionsPaid.toLocaleString()} commissions paid
                      </Typography>
                      
                      <Button
                        variant="contained"
                        fullWidth
                        startIcon={<AddIcon sx={{ fontSize: 16 }} />}
                        sx={{ 
                          bgcolor: '#FF7846', 
                          color: 'white',
                          borderRadius: 1,
                          textTransform: 'none',
                          fontSize: '12px',
                          py: 0.5,
                          '&:hover': {
                            bgcolor: '#E56A3E'
                          }
                        }}
                      >
                        Add to my hotlist
                      </Button>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Stack>
          </Paper>
        </Box>
      </Stack>
    </Box>
  );
};

export default Dashboard;