import React from "react";
import useRecentNotesList from "./RecentNotesList.logic";

const RecentNotesList = () => {
  const { recentNotes, handleNoteClick } = useRecentNotesList();

  if (recentNotes.length === 0) {
    return (
      <div className="px-[10px] py-4 text-[var(--color-text-muted)] text-[12px]">
        No recent notes
      </div>
    );
  }

  return (
    <div className="grid gap-[2px] overflow-auto">
      {recentNotes.map((note) => (
        <button
          key={note.id}
          onClick={() => handleNoteClick(note)}
          className="
            block w-full
            px-[10px] py-2
            rounded-lg
            text-[var(--color-text-secondary)]
            text-left
            whitespace-nowrap overflow-hidden text-ellipsis
            hover:bg-[var(--color-surface-soft)]
            transition-colors duration-150.
            cursor-pointer
          "
        >
          {note.title || "Untitled"}
        </button>
      ))}
    </div>
  );
};

export default RecentNotesList;
