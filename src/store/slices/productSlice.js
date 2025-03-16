import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  filteredProducts: [],
  categories: ['vape', 'cloth', 'sneake', 'digital'],
  selectedCategory: 'vape',
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload.filter(
        (product) => product.category === state.selectedCategory
      );
      state.loading = false;
    },
    fetchProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.filteredProducts = state.products.filter(
        (product) => product.category === action.payload
      );
    },
    searchProducts: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredProducts = state.products.filter(
        (product) => 
          product.category === state.selectedCategory && 
          product.name.toLowerCase().includes(searchTerm)
      );
    },
  },
});

export const { 
  fetchProductsStart, 
  fetchProductsSuccess, 
  fetchProductsFailure,
  setSelectedCategory,
  searchProducts
} = productSlice.actions;

export default productSlice.reducer;