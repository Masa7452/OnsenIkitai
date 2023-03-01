import { createSlice } from "@reduxjs/toolkit"

export const criteriaSlice = createSlice({
  name: `criteria`,
  initialState: {
    areas      : [],
    features   : [],
    keyWord    : ``,
  },
  reducers: {
    addArea: ( state, action ) => {
      console.log('addArea');
      state.areas.push( action.payload );
    },
    removeArea: ( state, action ) => {
      console.log('removeArea');
      const index = state.areas.indexOf( action.payload );
      state.areas.splice( index, 1 );
    },
    addFeature: ( state, action ) => {
      console.log('addFeature');
    },
    removeFeature: ( state, action ) => {
      console.log('removeFeature');
    },
    updateKeyword: ( state, action ) => {
      console.log('keepKeyword');
      state.keyWord = action.payload ;
    },
  }
})

export const { addArea, removeArea, addFeature, removeFeature, updateKeyword } = criteriaSlice.actions

export default criteriaSlice.reducer