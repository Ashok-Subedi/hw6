import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CardState {
  index: number
}

const initialState: CardState = {
  index: 0,
}

export const cardSlice = createSlice({
  name: 'index',
  initialState,
  reducers: {
    updateCurrentCardIndex: (state, action: PayloadAction<number>) => {
        state.index = action.payload;
    }
  },
})

export const { updateCurrentCardIndex } = cardSlice.actions
export default cardSlice.reducer