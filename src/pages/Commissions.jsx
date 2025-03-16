import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  Box,
  Typography,
  Paper,
  Stack,
  Button,
  Pagination,
  Link
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// 模拟佣金订单数据
const mockCommissionOrders = [
  {
    id: '13100008929',
    title: 'White Shoes Women\'s Shoes 2023 Autumn New All-match Casual Sports...',
    userPaidTime: '2024-12-01 21:03',
    price: 1.50,
    commission: 1.50,
    status: 'Pending',
    estimatedPaidTime: '2024-12-01 21:03'
  },
  {
    id: '13100008930',  // 修改为唯一ID
    title: 'White Shoes Women\'s Shoes 2023 Autumn New All-match Casual Sports...',
    userPaidTime: '2024-12-01 21:03',
    price: 1.50,
    commission: 1.50,
    status: 'Pending',
    estimatedPaidTime: '2024-12-01 21:03'
  },
  {
    id: '13100008931',  // 修改为唯一ID
    title: 'White Shoes Women\'s Shoes 2023 Autumn New All-match Casual Sports...',
    userPaidTime: '2024-12-01 21:03',
    price: 1.50,
    commission: 1.50,
    status: 'Pending',
    estimatedPaidTime: '2024-12-01 21:03'
  },
  {
    id: '13100008932',  // 修改为唯一ID
    title: 'White Shoes Women\'s Shoes 2023 Autumn New All-match Casual Sports...',
    userPaidTime: '2024-12-01 21:03',
    price: 1.50,
    commission: 1.50,
    status: 'Pending',
    estimatedPaidTime: '2024-12-01 21:03'
  },
  {
    id: '13100008933',  // 修改为唯一ID
    title: 'White Shoes Women\'s Shoes 2023 Autumn New All-match Casual Sports...',
    userPaidTime: '2024-12-01 21:03',
    price: 1.50,
    commission: 1.50,
    status: 'Pending',
    estimatedPaidTime: '2024-12-01 21:03'
  },
  {
    id: '13100008934',  // 修改为唯一ID
    title: 'White Shoes Women\'s Shoes 2023 Autumn New All-match Casual Sports...',
    userPaidTime: '2024-12-01 21:03',
    price: 1.50,
    commission: 1.50,
    status: 'Pending',
    estimatedPaidTime: '2024-12-01 21:03'
  },
  {
    id: '13100008935',  // 修改为唯一ID
    title: 'White Shoes Women\'s Shoes 2023 Autumn New All-match Casual Sports...',
    userPaidTime: '2024-12-01 21:03',
    price: 1.50,
    commission: 1.50,
    status: 'Pending',
    estimatedPaidTime: '2024-12-01 21:03'
  }
];

const Commissions = () => {
  const { t } = useTranslation();
  // 添加默认值，防止 undefined 错误
  const { todayCommission = 0, totalCommission = 0 } = useSelector((state) => state.commission || {});
  const [page, setPage] = useState(1);
  const [withdrawalAccount, setWithdrawalAccount] = useState('21212Davidadb');
  
  // 添加一个安全的 toFixed 函数
  const safeToFixed = (value, digits = 2) => {
    if (value === undefined || value === null) return (0).toFixed(digits);
    return Number(value).toFixed(digits);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{ width: '100%', margin: '0 auto' }}>
      {/* 合作伙伴信息 */}
      <Paper elevation={0} sx={{ p: 3, mb: 3, border: 1, borderColor: '#EAEAEA', borderRadius: 2, boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)' }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, fontSize: '18px' }}>
          Dear Partners: Your commission rights have been opened, and your shared Duoloy store name is Great store
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 2 }}>
          <Box>
            <Typography variant="body2" color="#666" component="span" sx={{ fontSize: '14px' }}>
              Login link: 
            </Typography>
            <Link href="http://www.Dighotlist.com" underline="hover" sx={{ ml: 1, color: '#FF7846', fontSize: '14px' }}>
              www.Dighotlist.com
            </Link>
          </Box>
          
          <Box>
            <Typography variant="body2" color="#666" component="span" sx={{ fontSize: '14px' }}>
              Account number: 
            </Typography>
            <Typography variant="body2" component="span" sx={{ ml: 1, fontSize: '14px' }}>
              Dighotlist153
            </Typography>
          </Box>
          
          <Box>
            <Typography variant="body2" color="#666" component="span" sx={{ fontSize: '14px' }}>
              Cipher: 
            </Typography>
            <Typography variant="body2" component="span" sx={{ ml: 1, fontSize: '14px' }}>
              21212Davidadb
            </Typography>
          </Box>
          
          <Typography variant="body2" color="#666" sx={{ fontSize: '14px' }}>
            You can calculate your commission by viewing your order.
          </Typography>
        </Box>
        
        <Box sx={{ bgcolor: '#F8F9FA', p: 1, borderRadius: 1, mb: 2 }}>
          <Typography variant="body2" fontWeight="medium" align="center" sx={{ fontSize: '14px' }}>
            [ Open, Transparent, Cooperation gives you peace of mind ]
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="body2" color="#666" component="span" sx={{ fontSize: '14px' }}>
            Your withdrawal account information : 
          </Typography>
          <Typography variant="body2" component="span" sx={{ mx: 1, fontSize: '14px' }}>
            {withdrawalAccount}
          </Typography>
          <Typography variant="body2" color="#FF7846" component="span" sx={{ fontSize: '14px' }}>
            *If you need to update, please go to Settings→Bank Info for commissions
          </Typography>
        </Box>
      </Paper>
      
      {/* 佣金统计 */}
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ mb: 3 }}>
        {/* 今日佣金 */}
        <Box sx={{ flex: 1 }}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: 3, 
              border: 1, 
              borderColor: '#EAEAEA',
              borderRadius: 2,
              bgcolor: '#FFF8F6',
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)'
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" color="#666" sx={{ fontSize: '16px' }}>
                Today commission
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
              bgcolor: '#FFF8F6',
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)'
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" color="#666" sx={{ fontSize: '16px' }}>
                Total commission
              </Typography>
              <Typography variant="h6" color="#FF7846" fontWeight="bold" sx={{ fontSize: '18px' }}>
                ${totalCommission.toFixed(2)}
              </Typography>
            </Box>
          </Paper>
        </Box>
        
        {/* 待处理佣金 */}
        <Box sx={{ flex: 1 }}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: 3, 
              border: 1, 
              borderColor: '#EAEAEA',
              borderRadius: 2,
              bgcolor: '#FFF8F6',
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)'
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography variant="h6" color="#666" sx={{ fontSize: '16px' }}>
                  Pending commission
                </Typography>
                <Typography variant="caption" color="#999" sx={{ fontSize: '12px' }}>
                  Commission is settled 15 days after order payment
                </Typography>
              </Box>
              <Typography variant="h6" color="#FF7846" fontWeight="bold" sx={{ fontSize: '18px' }}>
                ${todayCommission.toFixed(2)}
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Stack>
      
      {/* 佣金操作 */}
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ mb: 3 }}>
        {/* 佣金提现 */}
        <Box sx={{ flex: 1 }}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: 3, 
              border: 1, 
              borderColor: '#EAEAEA',
              borderRadius: 2,
              bgcolor: '#FFF8F6',
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)'
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" color="#666" sx={{ fontSize: '16px' }}>
                Commission Withdrawal
              </Typography>
              <Typography variant="h6" color="#FF7846" fontWeight="bold" sx={{ fontSize: '18px' }}>
                ${todayCommission.toFixed(2)}
              </Typography>
            </Box>
          </Paper>
        </Box>
        
        {/* 佣金余额 */}
        <Box sx={{ flex: 1 }}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: 3, 
              border: 1, 
              borderColor: '#EAEAEA',
              borderRadius: 2,
              bgcolor: '#FFF8F6',
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)'
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" color="#666" sx={{ fontSize: '16px' }}>
                Commission Balance
              </Typography>
              <Typography variant="h6" color="#FF7846" fontWeight="bold" sx={{ fontSize: '18px' }}>
                ${safeToFixed(totalCommission)}
              </Typography>
            </Box>
          </Paper>
        </Box>
        
        {/* 提现按钮 */}
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: 'flex', gap: 2, height: '100%' }}>
            <Button 
              variant="contained" 
              fullWidth
              sx={{ 
                bgcolor: '#FF7846', 
                color: 'white',
                '&:hover': { bgcolor: '#E56A3E' },
                height: '100%',
                borderRadius: 2,
                fontWeight: 'medium',
                fontSize: '14px',
                textTransform: 'none',
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)'
              }}
            >
              Withdraw
            </Button>
            <Button 
              variant="contained" 
              fullWidth
              sx={{ 
                bgcolor: '#FFF8F6', 
                color: '#FF7846',
                '&:hover': { bgcolor: '#FFE9E4' },
                height: '100%',
                borderRadius: 2,
                fontWeight: 'medium',
                fontSize: '14px',
                textTransform: 'none',
                border: '1px solid #FF7846',
                boxShadow: 'none'
              }}
            >
              Withdrawal record
            </Button>
          </Box>
        </Box>
      </Stack>
      
      {/* 佣金订单列表 */}
      <Box sx={{ height: 400, mt: 3 }}>
        <DataGrid
          rows={mockCommissionOrders}
          columns={[
            { field: 'id', headerName: 'Order ID', width: 130, headerAlign: 'center', align: 'center' },
            { field: 'title', headerName: 'Product Title', width: 300, headerAlign: 'center', align: 'left' },
            { field: 'userPaidTime', headerName: 'User Paid Time', width: 180, headerAlign: 'center', align: 'center' },
            { 
              field: 'price', 
              headerName: 'Price', 
              width: 100,
              headerAlign: 'center',
              align: 'center',
              valueFormatter: (params) => `$${params.value ? params.value.toFixed(2) : '0.00'}`
            },
            { 
              field: 'commission', 
              headerName: 'Commission', 
              width: 100,
              headerAlign: 'center',
              align: 'center',
              valueFormatter: (params) => `$${params.value ? params.value.toFixed(2) : '0.00'}`
            },
            { 
              field: 'status', 
              headerName: 'Status', 
              width: 100,
              headerAlign: 'center',
              align: 'center',
              renderCell: (params) => (
                <Typography
                  variant="body2"
                  sx={{
                    color: params.value === 'Pending' ? '#FF7846' : '#666',
                    fontSize: '14px'
                  }}
                >
                  {params.value}
                </Typography>
              )
            },
            { field: 'estimatedPaidTime', headerName: 'Estimated Paid Time', width: 180, headerAlign: 'center', align: 'center' }
          ]}
          autoHeight
          pagination
          paginationMode="client"
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          disableSelectionOnClick
          sx={{
            border: 1,
            borderColor: '#EAEAEA',
            borderRadius: 2,
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
            '& .MuiDataGrid-root': {
              border: 'none'
            },
            '& .MuiDataGrid-cell': {
              borderColor: '#EAEAEA',
              fontSize: '14px',
              py: 2
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#F8F9FA',
              borderColor: '#EAEAEA',
              minHeight: '48px !important',
              '& .MuiDataGrid-columnHeader': {
                padding: '0 16px',
                '& .MuiDataGrid-columnHeaderTitle': {
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#666'
                }
              }
            },
            '& .MuiDataGrid-row': {
              '&:hover': {
                backgroundColor: '#FFF8F6'
              }
            },
            '& .MuiDataGrid-footerContainer': {
              borderTop: '1px solid #EAEAEA',
              backgroundColor: '#FFF'
            }
          }}
        />
      </Box>
    </Box>
  );
};

export default Commissions;