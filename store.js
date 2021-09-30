import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import chatReducer from './src/slices/chatSlice';

const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
