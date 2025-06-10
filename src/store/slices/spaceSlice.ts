import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { ISpace } from "@/interfaces/Space";

const initialState: Record<string, ISpace[]> = {
  spaces: [],
};

export const spaceSlice = createSlice({
  name: "spaces",
  initialState,
  reducers: {
    setSpace: (state, action: PayloadAction<ISpace[]>) => {
      state.spaces = action.payload;
    },
  },
});

export const { setSpace } = spaceSlice.actions;
export const getSpaces = (state: RootState) => state.spaces;
export default spaceSlice.reducer;
