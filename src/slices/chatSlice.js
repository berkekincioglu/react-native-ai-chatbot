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

export const selectReceiverMessage = (state) => state.chat.receiveMessage;
export const selectAiBotMessage = (state) => state.chat.aiBotMessage;
export const selectIsTyping = (state) => state.chat.isTyping;
export const selectIsReceiver = (state) => state.chat.isReceiever;

export default chatSlice.reducer;
