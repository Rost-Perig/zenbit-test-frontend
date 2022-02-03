
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addMessage } from './messages-operations'; // c createAsyncThunk

const items = createReducer([], {
      //===== c createAsyncThunk =====//
    [addMessage.fulfilled]: (state, action) => [...state, action.payload], 
  
});

const loadingSpinner = createReducer(false, {
    //===== c createAsyncThunk =====//
  [addMessage.pending]: () => true,
  [addMessage.fulfilled]: () => false,
  [addMessage.rejected]: () => false, 
});

export default combineReducers({
    items,
    loadingSpinner
});



