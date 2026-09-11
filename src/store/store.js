import { configureStore } from '@reduxjs/toolkit';
// import notesReducer from './slices/notesSlice';
// import authReducer from './slices/authSlice';
import uiReducer from './slices/uiSlice';

export default configureStore({
  reducer: {
    // auth: authReducer,
    // notes: notesReducer,
    ui: uiReducer,
  },
});

