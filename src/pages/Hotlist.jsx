import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Chip,
  Pagination,
  Button
} from '@mui/material';
import {
  Search,
  Edit,
  Delete,
  ContentCopy,
  LocalFireDepartment,
  Share,
  FileUpload
} from '@mui/icons-material';

// 模拟热门列表数据
const mockHotlistItems = [
  {
    id: 1,
    image: '/src/assets/product.jpg',
    title: 'White Shoes Women\'s Shoes 2023 Autumn New All-match Casual',
    qcPhotos: '/src/assets/product.jpg',
    yourTitle: '',
    yourRemarks: '',
    category: 'My hotlist',
    price: 1.50,
    commission: 1.50,
    hot: true,
    status: 'Delist'
  },
  {
    id: 2,
    image: '/src/assets/product.jpg',
    title: 'White Shoes Women\'s Shoes 2023 Autumn New All-match Casual',
    qcPhotos: '/src/assets/product.jpg',
    yourTitle: '',
    yourRemarks: '',
    category: 'My hotlist',
    price: 1.50,
    commission: 1.50,
    hot: false,
    status: 'listing'
  },
  {
    id: 3,
    image: '/src/assets/product.jpg',
    title: 'White Shoes Women\'s Shoes 2023 Autumn New All-match Casual',
    qcPhotos: '/src/assets/product.jpg',
    yourTitle: '',
    yourRemarks: '',
    category: 'My hotlist',
    price: 1.50,
    commission: 1.50,
    hot: false,
    status: 'Delist'
  },
  {
    id: 4,
    image: '/src/assets/product.jpg',
    title: 'White Shoes Women\'s Shoes 2023 Autumn New All-match Casual',
    qcPhotos: '/src/assets/product.jpg',
    yourTitle: '',
    yourRemarks: '',
    category: 'My hotlist',
    price: 1.50,
    commission: 1.50,
    hot: false,
    status: 'Delist'
  },
  {
    id: 5,
    image: '/src/assets/product.jpg',
    title: 'White Shoes Women\'s Shoes 2023 Autumn New All-match Casual',
    qcPhotos: '/src/assets/product.jpg',
    yourTitle: '',
    yourRemarks: '',
    category: 'My hotlist',
    price: 1.50,
    commission: 1.50,
    hot: true,
    status: 'Delist'
  },
  {
    id: 6,
    image: '/src/assets/product.jpg',
    title: 'White Shoes Women\'s Shoes 2023 Autumn New All-match Casual',
    qcPhotos: '/src/assets/product.jpg',
    yourTitle: '',
    yourRemarks: '',
    category: 'My hotlist',
    price: 1.50,
    commission: 1.50,
    hot: false,
    status: 'Delist'
  },
  {
    id: 7,
    image: '/src/assets/product.jpg',
    title: 'White Shoes Women\'s Shoes 2023 Autumn New All-match Casual',
    qcPhotos: '/src/assets/product.jpg',
    yourTitle: '',
    yourRemarks: '',
    category: 'My hotlist',
    price: 1.50,
    commission: 1.50,
    hot: false,
    status: 'Delist'
  },
  {
    id: 8,
    image: '/src/assets/product.jpg',
    title: 'White Shoes Women\'s Shoes 2023 Autumn New All-match Casual',
    qcPhotos: '/src/assets/product.jpg',
    yourTitle: '',
    yourRemarks: '',
    category: 'My hotlist',
    price: 1.50,
    commission: 1.50,
    hot: false,
    status: 'Delist'
  }
];

const Hotlist = () => {
  const { t } = useTranslation();
  const [category, setCategory] = useState('My hotlist');
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  const handleCategoryChange = (event, newValue) => {
    setCategory(newValue);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box>
      {/* 类别选项卡 */}
      <Paper elevation={0} sx={{ mb: 3, borderRadius: 1, border: 1, borderColor: '#EAEAEA', boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)' }}>
        <Tabs
          value={category}
          onChange={handleCategoryChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ borderBottom: 1, borderColor: '#EAEAEA' }}
        >
          <Tab value="My hotlist" label="My hotlist" sx={{ textTransform: 'none', fontSize: '14px', color: category === 'My hotlist' ? '#FF7846' : '#666', fontWeight: category === 'My hotlist' ? 'medium' : 'normal' }} />
          <Tab value="Cloth" label="Cloth" sx={{ textTransform: 'none', fontSize: '14px', color: category === 'Cloth' ? '#FF7846' : '#666', fontWeight: category === 'Cloth' ? 'medium' : 'normal' }} />
          <Tab value="Sneaker" label="Sneaker" sx={{ textTransform: 'none', fontSize: '14px', color: category === 'Sneaker' ? '#FF7846' : '#666', fontWeight: category === 'Sneaker' ? 'medium' : 'normal' }} />
          <Tab value="Digital" label="Digital" sx={{ textTransform: 'none', fontSize: '14px', color: category === 'Digital' ? '#FF7846' : '#666', fontWeight: category === 'Digital' ? 'medium' : 'normal' }} />
        </Tabs>

        {/* 搜索和操作栏 */}
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button
              size="small"
              variant="outlined"
              startIcon={<Edit />}
              sx={{ 
                borderRadius: '4px', 
                borderColor: '#FF7846', 
                color: '#FF7846',
                '&:hover': {
                  borderColor: '#E56A3E',
                  backgroundColor: 'rgba(255, 120, 70, 0.04)'
                },
                textTransform: 'none',
                fontSize: '14px',
                padding: '4px 12px',
                height: '32px'
              }}
            >
              Edit Category
            </Button>
          </Box>
          <TextField
            size="small"
            placeholder="Input keywords"
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{ 
              width: 300,
              '& .MuiOutlinedInput-root': {
                borderRadius: 1,
                '& fieldset': {
                  borderColor: '#EAEAEA'
                },
                '&:hover fieldset': {
                  borderColor: '#EAEAEA'
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FF7846'
                }
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: '#999' }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Paper>

      {/* 产品表格 */}
      <TableContainer 
        component={Paper} 
        elevation={0} 
        sx={{ 
          border: 1, 
          borderColor: '#EAEAEA', 
          borderRadius: 2, 
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
          overflowX: 'auto', // 添加横向滚动
          mb: 3
        }}
      >
        <Table sx={{ minWidth: 1100 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ width: 80 }}>Image</TableCell>
              <TableCell sx={{ width: 200 }}>Title</TableCell>
              <TableCell align="center" sx={{ width: 80 }}>QC photos</TableCell>
              <TableCell sx={{ width: 120 }}>Your title</TableCell>
              <TableCell sx={{ width: 120 }}>Your remarks</TableCell>
              <TableCell sx={{ width: 100 }}>Category</TableCell>
              <TableCell align="right" sx={{ width: 100 }}>ONFans Price</TableCell>
              <TableCell align="right" sx={{ width: 100 }}>Commission</TableCell>
              <TableCell align="center" sx={{ width: 60 }}>Hot</TableCell>
              <TableCell align="center" sx={{ width: 80 }}>Status</TableCell>
              <TableCell align="center" sx={{ width: 120 }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockHotlistItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell align="center" sx={{ py: 1.5 }}>
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{ width: 50, height: 50, objectFit: 'cover', borderRadius: 1 }}
                  />
                </TableCell>
                <TableCell sx={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: '14px', py: 1.5 }}>
                  {item.title}
                </TableCell>
                <TableCell align="center" sx={{ py: 1.5 }}>
                  <Box
                    component="img"
                    src={item.qcPhotos}
                    alt="QC"
                    sx={{ width: 50, height: 50, objectFit: 'cover', borderRadius: 1 }}
                  />
                </TableCell>
                <TableCell sx={{ fontSize: '14px', py: 1.5 }}>{item.yourTitle || '—'}</TableCell>
                <TableCell sx={{ fontSize: '14px', py: 1.5 }}>{item.yourRemarks || '—'}</TableCell>
                <TableCell sx={{ fontSize: '14px', py: 1.5 }}>{item.category}</TableCell>
                <TableCell align="right" sx={{ fontSize: '14px', py: 1.5 }}>${item.price.toFixed(2)}</TableCell>
                <TableCell align="right" sx={{ fontSize: '14px', py: 1.5, color: '#FF7846', fontWeight: 500 }}>${item.commission.toFixed(2)}</TableCell>
                <TableCell align="center" sx={{ py: 1.5 }}>
                  {item.hot ? (
                    <LocalFireDepartment sx={{ color: '#FF7846', fontSize: '20px' }} />
                  ) : (
                    <LocalFireDepartment sx={{ color: '#EAEAEA', fontSize: '20px' }} />
                  )}
                </TableCell>
                <TableCell align="center" sx={{ py: 1.5 }}>
                  <Chip
                    label={item.status}
                    size="small"
                    sx={{
                      bgcolor: item.status === 'listing' ? '#FFF8F6' : 'transparent',
                      border: 1,
                      borderColor: item.status === 'listing' ? '#EAEAEA' : '#FF7846',
                      color: item.status === 'listing' ? '#666' : '#FF7846',
                      fontSize: '12px',
                      height: '24px'
                    }}
                  />
                </TableCell>
                <TableCell align="center" sx={{ py: 1.5 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                    <IconButton size="small" sx={{ color: '#666', padding: '4px' }}>
                      <Edit fontSize="small" />
                    </IconButton>
                    <IconButton size="small" sx={{ color: '#666', padding: '4px' }}>
                      <Delete fontSize="small" />
                    </IconButton>
                    <IconButton size="small" sx={{ color: '#666', padding: '4px' }}>
                      <ContentCopy fontSize="small" />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 分页 */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 4 }}>
        <Pagination 
          count={10} 
          page={page} 
          onChange={handlePageChange} 
          color="primary" 
          shape="rounded"
          sx={{
            '& .MuiPaginationItem-root': {
              fontSize: '14px',
              minWidth: '32px',
              height: '32px',
              borderRadius: '4px',
            },
            '& .Mui-selected': {
              backgroundColor: '#FF7846 !important',
              color: 'white !important',
            },
            '& .MuiPaginationItem-root:hover': {
              backgroundColor: 'rgba(255, 120, 70, 0.04)',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Hotlist;