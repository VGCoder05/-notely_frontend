import React from "react";
import NoteCard from "./NoteCard/NoteCard";

const NoteGrid = ({ notes, className = "" }) => {
  console.log("notes: ", notes)
  return (
    <div
      className={`
      grid gap-3
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      ${className}
    `}
    >
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteGrid;
