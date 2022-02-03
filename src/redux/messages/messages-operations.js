import { createAsyncThunk } from '@reduxjs/toolkit'; // при использовании createAsyncThunk
import axios from 'axios';
axios.defaults.baseURL = 'https://mess-test-api.herokuapp.com/api';

/*================при использовании createAsyncThunk================*/

export const addMessage = createAsyncThunk(
  'inputsForm/addMessage',
  async ({name, email, message}, { rejectWithValue }) => {
    try {
      const response = await axios.post('/messages', {name, email, message});
      // console.log('data: ', response.data.data)
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/*на будущее. Можно еще прописать fetchMessages - get для одного, а также - put  */

// export const delMessage = createAsyncThunk(
//   'messageData/delMessage',
//   async (messageId, { rejectWithValue }) => {
//     try {
//       const response = await axios.delete(`/messages/${messageId}`);
//       // console.log('id: ', response.data)
//       return response.data.id
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// export const fetchMessages = createAsyncThunk(
//   'messagesList/fetchMessages',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get('/messages');
//       return response.data
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );


