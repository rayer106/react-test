import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todayCommission: 12.56,
  totalCommission: 1.20,
  commissionRanking: [],
  loading: false,
  error: null,
};

const commissionSlice = createSlice({
  name: 'commission',
  initialState,
  reducers: {
    fetchCommissionStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCommissionSuccess: (state, action) => {
      state.todayCommission = action.payload.todayCommission;
      state.totalCommission = action.payload.totalCommission;
      state.commissionRanking = action.payload.commissionRanking;
      state.loading = false;
    },
    fetchCommissionFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { 
  fetchCommissionStart, 
  fetchCommissionSuccess, 
  fetchCommissionFailure 
} = commissionSlice.actions;

export default commissionSlice.reducer;