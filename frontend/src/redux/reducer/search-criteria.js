import { createSlice } from "@reduxjs/toolkit"

export const criteriaSlice = createSlice({
  name: `criteria`,
  initialState: {
    prefectures: [],
    features   : [],
    keyWord    : ``,
  },
  reducers: {
    addPrefecture: ( state, action ) => {
      console.log('addPrefecture');
      state.prefectures.push( action.payload );
    },
    removePrefecture: ( state, action ) => {
      console.log('removePrefecture');
      const index = state.prefectures.indexOf( action.payload );
      state.prefectures.splice( index, 1 );
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

export const { addPrefecture, removePrefecture, addFeature, removeFeature, updateKeyword } = criteriaSlice.actions

export default criteriaSlice.reducer