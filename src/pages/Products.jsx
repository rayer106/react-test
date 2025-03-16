import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedCategory } from '../store/slices/productSlice';
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
  Link,
  Stack
} from '@mui/material';
import { Search } from '@mui/icons-material';

// 模拟产品数据
const mockProducts = [
  {
    id: 1,
    name: 'Really nice, cute and taste good especially watermelon',
    price: 15.9,
    commission: 1.5,
    category: 'vape',
    image: '/src/assets/product.jpg',
    sold: 1096,
    commissions_paid: 31484.2
  },
  {
    id: 2,
    name: 'Really nice, cute and taste good especially watermelon',
    price: 15.9,
    commission: 1.5,
    category: 'vape',
    image: '/src/assets/product.jpg',
    sold: 1096,
    commissions_paid: 31484.2
  },
  {
    id: 3,
    name: 'Really nice, cute and taste good especially watermelon',
    price: 15.9,
    commission: 1.5,
    category: 'vape',
    image: '/src/assets/product.jpg',
    sold: 1096,
    commissions_paid: 31484.2
  },
  {
    id: 4,
    name: 'Really nice, cute and taste good especially watermelon',
    price: 15.9,
    commission: 1.5,
    category: 'vape',
    image: '/src/assets/product.jpg',
    sold: 1096,
    commissions_paid: 31484.2
  }
];

const Products = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { categories, selectedCategory } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (event, newValue) => {
    dispatch(setSelectedCategory(newValue));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Box>
      {/* 类别选项卡 */}
      <Paper elevation={0} sx={{ mb: 3, borderRadius: 1, border: 1, borderColor: '#EAEAEA', boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)' }}>
        <Tabs
          value={selectedCategory}
          onChange={handleCategoryChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ borderBottom: 1, borderColor: '#EAEAEA' }}
        >
          {categories.map((category) => (
            <Tab 
              key={category} 
              value={category} 
              label={t(`products.categories.${category}`)}
              sx={{ 
                textTransform: 'none',
                fontSize: '14px',
                color: selectedCategory === category ? '#FF7846' : '#666',
                fontWeight: selectedCategory === category ? 'medium' : 'normal',
                '&.Mui-selected': {
                  color: '#FF7846',
                  fontWeight: 'medium'
                }
              }}
            />
          ))}
        </Tabs>

        {/* 搜索框 */}
        <Box sx={{ p: 2 }}>
          <TextField
            fullWidth
            size="small"
            placeholder={t('products.search_placeholder')}
            value={searchTerm}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: '#999' }} />
                </InputAdornment>
              ),
            }}
            sx={{
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
          />
        </Box>
      </Paper>

      {/* 产品列表 */}
      <Stack direction="row" flexWrap="wrap" sx={{ mx: -1.5 }}>
        {mockProducts.map((product) => (
          <Box key={product.id} sx={{ width: { xs: '100%', sm: '50%', md: '25%' }, p: 1.5 }}>
            <Card elevation={0} sx={{ border: 1, borderColor: '#EAEAEA', borderRadius: 2, overflow: 'hidden', boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)' }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{ bgcolor: 'grey.200' }}
              />
              <CardContent sx={{ p: 2 }}>
                <Typography variant="body2" sx={{ mb: 1, height: 40, overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '14px' }}>
                  {product.name}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="h6" fontWeight="bold" sx={{ fontSize: '16px' }}>${product.price}</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body2" color="#666" sx={{ mr: 0.5, fontSize: '12px' }}>Commission:</Typography>
                    <Typography variant="body2" color="#FF7846" fontWeight="medium" sx={{ fontSize: '12px' }}>${product.commission}</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, fontSize: '12px', color: '#999' }}>
                  <Typography variant="caption">Sold: {product.sold}</Typography>
                  <Typography variant="caption">Commissions paid: ${product.commissions_paid}</Typography>
                </Box>
                <Button 
                  variant="contained" 
                  fullWidth 
                  size="small"
                  sx={{ 
                    bgcolor: '#FF7846', 
                    '&:hover': { bgcolor: '#E56A3E' },
                    borderRadius: 1,
                    textTransform: 'none',
                    fontSize: '14px',
                    fontWeight: 'medium',
                    boxShadow: 'none'
                  }}
                >
                  {t('products.add_to_hotlist')}
                </Button>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Stack>

      {/* 底部提示 */}
      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
        <Typography variant="body2" color="#666" sx={{ fontSize: '14px' }}>
          {t('products.need_other_products')}
        </Typography>
        <Link href="#" underline="none" sx={{ fontWeight: 'medium', color: '#FF7846', fontSize: '14px' }}>
          {t('products.join_discord')}
        </Link>
      </Box>
    </Box>
  );
};

export default Products;