/*
Control sidebar 
- open, close, toogle

Control Serach modal
- open, close, toogle

Control Breadcrumb

*/

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarOpen: false,
  searchOpen: false,
  breadcrumb: "All notes",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    // Sidebar functions
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    openSidebar: (state) => {
    state.sidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.sidebarOpen = false;
    },

    // Search functions
    toggleSearch: (state) => {
      state.searchOpen = !state.searchOpen;
    },
    openSearch: (state) => {
      state.searchOpen = true;
    },
    closeSearch: (state) => {
      state.searchOpen = false;
    },

    // Breadcrumbs functions
    setBreadcrumb: (state, action) => {
      state.breadcrumb = action.payload;
    },
  },
});

export const {
  toggleSidebar,
  openSidebar,
  closeSidebar,
  setActiveModal,
  closeModal,
  toggleSearch,
  openSearch,
  closeSearch,
  setBreadcrumb,
} = uiSlice.actions;

export default uiSlice.reducer;
