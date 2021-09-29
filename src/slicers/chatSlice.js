import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  receiverMessage: '',
  aiBotMessage: '',
  isTyping: false,
  isReceiever: false,
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setReceiverMessage: (state, action) => {
      state.receiverMessage = action.payload;
    },
    setAiBotMessage: (state, action) => {
      state.aiBotMessage = action.payload;
    },
    setIsTyping: (state, action) => {
      state.isTyping = action.payload;
    },
    setIsReceiever: (state, action) => {
      state.isReceiever = action.payload;
    },
  },
});

export const {
  setReceiverMessage,
  setAiBotMessage,
  setIsTyping,
  setIsReceiever,
} = chatSlice.actions;

// Selectors

export const selectReceiverMessage = createSelect;
