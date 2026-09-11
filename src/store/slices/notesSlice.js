import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
  recentNotes: [],
  favourites: [],
  trash: [],
  currentNote: null,
  loading: false,
  error: null,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    addNote: (state, action) => {
      state.notes.unshift(action.payload);
      state.recentNotes.unshift(action.payload);
      if (state.recentNotes.length > 5) {
        state.recentNotes = state.recentNotes.slice(0, 5);
      }
    },
    updateNote: (state, action) => {
      const index = state.notes.findIndex(
        (note) => note.id === action.payload.id
      );
      if (index !== -1) {
        state.notes[index] = action.payload;
      }
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      state.recentNotes = state.recentNotes.filter(
        (note) => note.id !== action.payload
      );
    },
    toggleFavourite: (state, action) => {
      const note = state.notes.find((note) => note.id === action.payload);
      if (note) {
        note.isFavourite = !note.isFavourite;
      }
    },
    setCurrentNote: (state, action) => {
      state.currentNote = action.payload;
    },
    setRecentNotes: (state, action) => {
      state.recentNotes = action.payload.slice(0, 5);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setNotes,
  addNote,
  updateNote,
  deleteNote,
  toggleFavourite,
  setCurrentNote,
  setRecentNotes,
  setLoading,
  setError,
} = notesSlice.actions;

export default notesSlice.reducer;
