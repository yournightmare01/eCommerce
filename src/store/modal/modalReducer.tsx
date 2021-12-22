import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../';

interface ModalState {
  isOpen: boolean;
}

const initialState: ModalState = {
  isOpen: false,
};

export const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggle } = modal.actions;

export const isModalOpen = (state: RootState) => state.modal.isOpen;

export default modal.reducer;
