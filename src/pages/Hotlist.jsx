import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  Paper,
  IconButton,
  Chip,
  Pagination,
  Button
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import {
  Search,
  Edit,
  Delete,
  ContentCopy,
  LocalFireDepartment,
  Share,
  FileUpload,
  Add,
  CloudUpload
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

  // 定义DataGrid的列
  const columns = [
    { 
      field: 'image', 
      headerName: 'Image', 
      width: 80,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) => (
        <Box sx={{ position: 'relative' }}>
          <Box
            component="img"
            src="https://via.placeholder.com/150/0000FF/FFFFFF"
            alt={params.row.title}
            sx={{ width: 50, height: 50, objectFit: 'cover', borderRadius: 1 }}
          />
          {(params.row.id === 1 || params.row.id === 5) && (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                bgcolor: '#FF7846',
                color: 'white',
                width: 16,
                height: 16,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
                fontWeight: 'bold'
              }}
            >
              1
            </Box>
          )}
        </Box>
      )
    },
    { 
      field: 'title', 
      headerName: 'Title', 
      width: 200,
      renderCell: (params) => (
        <Typography sx={{ fontSize: '13px', color: '#333', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {params.value}
        </Typography>
      )
    },
    { 
      field: 'qcPhotos', 
      headerName: 'QC photos', 
      width: 80,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) => (
        <Box
          component="img"
          src="https://via.placeholder.com/150/0000FF/FFFFFF"
          alt="QC"
          sx={{ width: 50, height: 50, objectFit: 'cover', borderRadius: 1 }}
        />
      )
    },
    { 
      field: 'yourTitle', 
      headerName: 'Your title', 
      width: 120,
      renderCell: (params) => (
        <Typography sx={{ fontSize: '13px', color: '#666' }}>
          {params.value || '—'}
        </Typography>
      )
    },
    { 
      field: 'yourRemarks', 
      headerName: 'Your remarks', 
      width: 120,
      renderCell: (params) => (
        <Typography sx={{ fontSize: '13px', color: '#666' }}>
          {params.value || '—'}
        </Typography>
      )
    },
    { 
      field: 'category', 
      headerName: 'Category', 
      width: 100,
      renderCell: (params) => (
        <Typography sx={{ fontSize: '13px', color: '#666' }}>
          {params.value}
        </Typography>
      )
    },
    { 
      field: 'price', 
      headerName: 'ONFans Price', 
      width: 100,
      align: 'right',
      headerAlign: 'right',
      renderCell: (params) => (
        <Typography sx={{ fontSize: '13px', color: '#666' }}>
          ${params.value.toFixed(2)}
        </Typography>
      )
    },
    { 
      field: 'commission', 
      headerName: 'Commission', 
      width: 100,
      align: 'right',
      headerAlign: 'right',
      renderCell: (params) => (
        <Typography sx={{ fontSize: '13px', color: '#FF7846', fontWeight: 500 }}>
          ${params.value.toFixed(2)}
        </Typography>
      )
    },
    { 
      field: 'hot', 
      headerName: 'Hot', 
      width: 60,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) => (
        <LocalFireDepartment sx={{ color: params.value ? '#FF7846' : '#EAEAEA', fontSize: '20px' }} />
      )
    },
    { 
      field: 'status', 
      headerName: 'Status', 
      width: 80,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) => (
        <Chip
          label={params.value}
          size="small"
          sx={{
            bgcolor: params.value === 'listing' ? '#FFF8F6' : 'transparent',
            border: 1,
            borderColor: params.value === 'listing' ? '#EAEAEA' : '#FF7846',
            color: params.value === 'listing' ? '#666' : '#FF7846',
            fontSize: '12px',
            height: '24px'
          }}
        />
      )
    },
    { 
      field: 'actions', 
      headerName: 'Action', 
      width: 120,
      align: 'center',
      headerAlign: 'center',
      sortable: false,
      renderCell: () => (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.5 }}>
          <IconButton size="small" sx={{ color: '#666', padding: '4px' }}>
            <Edit fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: '#666', padding: '4px' }}>
            <ContentCopy fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: '#666', padding: '4px' }}>
            <Share fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: '#666', padding: '4px' }}>
            <FileUpload fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: '#666', padding: '4px' }}>
            <Delete fontSize="small" />
          </IconButton>
        </Box>
      )
    }
  ];

  return (
    <Box>
      {/* 类别选项卡 */}
      <Paper elevation={0} sx={{ mb: 3, marginBottom:0, borderRadius: 1, border: 1, borderColor: '#EAEAEA', boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: 1, borderColor: '#EAEAEA' }}>
          <Tabs
            value={category}
            onChange={handleCategoryChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ flex: 1 }}
          >
            <Tab value="My hotlist" label="My hotlist" sx={{ textTransform: 'none', fontSize: '14px', color: category === 'My hotlist' ? '#FF7846' : '#666', fontWeight: category === 'My hotlist' ? 'medium' : 'normal' }} />
            <Tab value="Cloth" label="Cloth" sx={{ textTransform: 'none', fontSize: '14px', color: category === 'Cloth' ? '#FF7846' : '#666', fontWeight: category === 'Cloth' ? 'medium' : 'normal' }} />
            <Tab value="Sneaker" label="Sneaker" sx={{ textTransform: 'none', fontSize: '14px', color: category === 'Sneaker' ? '#FF7846' : '#666', fontWeight: category === 'Sneaker' ? 'medium' : 'normal' }} />
            <Tab value="Digital" label="Digital" sx={{ textTransform: 'none', fontSize: '14px', color: category === 'Digital' ? '#FF7846' : '#666', fontWeight: category === 'Digital' ? 'medium' : 'normal' }} />
          </Tabs>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pr: 2 }}>
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
            
            <TextField
              size="small"
              placeholder="Input keywords"
              value={searchTerm}
              onChange={handleSearchChange}
              sx={{ 
                width: 200,
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
            
            <Button
              size="small"
              variant="outlined"
              startIcon={<Add />}
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
              Add Products
            </Button>
            
            <Button
              size="small"
              variant="outlined"
              startIcon={<CloudUpload />}
              sx={{ 
                borderRadius: '4px', 
                borderColor: '#EAEAEA', 
                color: '#666',
                '&:hover': {
                  borderColor: '#CCCCCC',
                  backgroundColor: '#F8F9FA'
                },
                textTransform: 'none',
                fontSize: '14px',
                padding: '4px 12px',
                height: '32px'
              }}
            >
              Import spreadsheet
            </Button>
            
            <Button
              size="small"
              variant="outlined"
              startIcon={<Share />}
              sx={{ 
                borderRadius: '4px', 
                borderColor: '#EAEAEA', 
                color: '#666',
                '&:hover': {
                  borderColor: '#CCCCCC',
                  backgroundColor: '#F8F9FA'
                },
                textTransform: 'none',
                fontSize: '14px',
                padding: '4px 12px',
                height: '32px'
              }}
            >
              Share myhotlist page
            </Button>
          </Box>
        </Box>
      </Paper>

      {/* 使用DataGrid替换Table */}
      <Paper 
        elevation={0} 
        sx={{ 
          border: 1, 
          borderColor: '#EAEAEA', 
          borderRadius: 2, 
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
          mb: 3,
          height: 650 // 设置一个固定高度
        }}
      >
        <DataGrid
          rows={mockHotlistItems}
          columns={columns}
          disableRowSelectionOnClick
          disableColumnMenu
          hideFooter
          sx={{
            border: 'none',
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#F8F9FA',
              fontSize: '12px',
              color: '#666',
              fontWeight: 500
            },
            '& .MuiDataGrid-cell': {
              py: 1.5,
              borderBottom: '1px solid #EAEAEA'
            },
            '& .MuiDataGrid-row:hover': {
              backgroundColor: '#F8F9FA'
            },
            '& .MuiDataGrid-columnHeaderTitle': {
              fontSize: '12px',
              color: '#666',
              fontWeight: 500
            }
          }}
        />
      </Paper>

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