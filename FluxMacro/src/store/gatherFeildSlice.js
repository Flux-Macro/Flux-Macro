import { createSlice } from '@reduxjs/toolkit';

export const gatherFeildSlice=createSlice({
  name: 'gatherFeild',
  initialState: {
    value:{
      feild:null,
      pattern:null,
      time:null,
      width:null,
      pack:null,
      startlocation:null,
      distance:null,
    },
  },
  reducers: {
    setGatherFeild: (state,action) => {
      state.value=action.payload
    },
  },
});

export const {  } = gatherFeildSlice.actions;
export const selectGatherFeild=(state)=>state.gatherFeild.value;
export default gatherFeildSlice.reducer;