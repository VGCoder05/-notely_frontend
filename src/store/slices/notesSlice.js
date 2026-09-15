import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   notes: [],
//   recentNotes: [ ],
//   favourites: [],
//   trash: [],
//   currentNote: null,
//   loading: false,
//   error: null,
// };

// Dummy data 
const initialState = {
  notes: [
    {
      _id: "note001",
      title: "Learn React",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Learn React hooks, Redux, and component design.",
            },
          ],
        },
      ],
      owner: "user001",
      linkedNotes: ["note002"],
      tags: ["react", "javascript", "frontend"],
      isFavourite: true,
      isTrashed: false,
      trashedAt: null,
      createdAt: "2026-09-01T10:30:00.000Z",
      updatedAt: "2026-09-10T15:20:00.000Z",
    },

    {
      _id: "note002",
      title: "Node.js Backend",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Build REST APIs using Node.js, Express and MongoDB.",
            },
          ],
        },
      ],
      owner: "user001",
      linkedNotes: ["note001", "note003"],
      tags: ["nodejs", "express", "backend"],
      isFavourite: false,
      isTrashed: false,
      trashedAt: null,
      createdAt: "2026-09-03T08:15:00.000Z",
      updatedAt: "2026-09-09T12:40:00.000Z",
    },

    {
      _id: "note003",
      title: "JavaScript Concepts",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Closures, promises, async/await, event loop and callbacks.",
            },
          ],
        },
      ],
      owner: "user001",
      linkedNotes: [],
      tags: ["javascript", "learning"],
      isFavourite: true,
      isTrashed: false,
      trashedAt: null,
      createdAt: "2026-09-05T14:00:00.000Z",
      updatedAt: "2026-09-08T09:30:00.000Z",
    },

    {
      _id: "note004",
      title: "Shopping List",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Milk, eggs, bread, fruits and vegetables.",
            },
          ],
        },
      ],
      owner: "user001",
      linkedNotes: [],
      tags: ["personal", "shopping"],
      isFavourite: false,
      isTrashed: false,
      trashedAt: null,
      createdAt: "2026-09-07T11:20:00.000Z",
      updatedAt: "2026-09-07T11:20:00.000Z",
    },

    {
      _id: "note005",
      title: "Old Project Ideas",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Some old project ideas that I may build later.",
            },
          ],
        },
      ],
      owner: "user001",
      linkedNotes: [],
      tags: ["ideas", "projects"],
      isFavourite: false,
      isTrashed: true,
      trashedAt: "2026-09-09T18:30:00.000Z",
      createdAt: "2026-08-20T10:00:00.000Z",
      updatedAt: "2026-09-09T18:30:00.000Z",
    },
  ],

  recentNotes: [
    {
      _id: "note001",
      title: "Learn React",
      content: [],
      owner: "user001",
      linkedNotes: ["note002"],
      tags: ["react", "javascript", "frontend"],
      isFavourite: true,
      isTrashed: false,
      trashedAt: null,
      createdAt: "2026-09-01T10:30:00.000Z",
      updatedAt: "2026-09-10T15:20:00.000Z",
    },

    {
      _id: "note003",
      title: "JavaScript Concepts",
      content: [],
      owner: "user001",
      linkedNotes: [],
      tags: ["javascript", "learning"],
      isFavourite: true,
      isTrashed: false,
      trashedAt: null,
      createdAt: "2026-09-05T14:00:00.000Z",
      updatedAt: "2026-09-08T09:30:00.000Z",
    },
  ],

  favourites: [
    {
      _id: "note001",
      title: "Learn React",
      content: [],
      owner: "user001",
      linkedNotes: ["note002"],
      tags: ["react", "javascript", "frontend"],
      isFavourite: true,
      isTrashed: false,
      trashedAt: null,
      createdAt: "2026-09-01T10:30:00.000Z",
      updatedAt: "2026-09-10T15:20:00.000Z",
    },

    {
      _id: "note003",
      title: "JavaScript Concepts",
      content: [],
      owner: "user001",
      linkedNotes: [],
      tags: ["javascript", "learning"],
      isFavourite: true,
      isTrashed: false,
      trashedAt: null,
      createdAt: "2026-09-05T14:00:00.000Z",
      updatedAt: "2026-09-08T09:30:00.000Z",
    },
  ],

  trash: [
    {
      _id: "note005",
      title: "Old Project Ideas",
      content: [],
      owner: "user001",
      linkedNotes: [],
      tags: ["ideas", "projects"],
      isFavourite: false,
      isTrashed: true,
      trashedAt: "2026-09-09T18:30:00.000Z",
      createdAt: "2026-08-20T10:00:00.000Z",
      updatedAt: "2026-09-09T18:30:00.000Z",
    },
  ],

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
