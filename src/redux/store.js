import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './messages/messages-reducer';

const store = configureStore({
  reducer: {
    message: messagesReducer
  },
});

export default store;