import { configureStore } from '@reduxjs/toolkit';
import searchCriteriaReducer from './reducer/search-criteria';

// const rootReducer = combineReducers({
//     searchCriteria: searchCriteriaReducer,
//   })

// const store = configureStore({ reducer: rootReducer });

export default configureStore({
    reducer: {
        searchCriteria: searchCriteriaReducer
    }
});