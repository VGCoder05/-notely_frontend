import React, { useEffect } from "react";
import { useNewNoteButton } from "./NewNotebtn.logic";
import { Plus } from "lucide-react";

const NewNoteButton = () => {
  const { handleCreateNote } = useNewNoteButton();

  // Keyboard shortcut: N
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Check if 'N' key is pressed (not in an input/textarea)
      if (
        e.key === "N" &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.altKey &&
        e.shiftKey &&
        !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)
      ) {
        handleCreateNote();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleCreateNote]);

  return (
    <button
      onClick={handleCreateNote}
      className="
        my-[10px] py-[5px] mx-1
        w-[calc(100%-5px)]
        h-[var(--size-new-note-btn)]
        border-0
        rounded-[10px]
        bg-[var(--color-primary-500)]
        text-white
        flex items-center gap-[10px]
        px-[13px]
        font-semibold
        transition-all duration-[0.18s]
        hover:bg-primary-600
        hover:-translate-y-[1px]
        hover:cursor-pointer
        active:translate-y-0
        focus-visible:outline focus-visible:outline-[3px]
        focus-visible:outline-[var(--shadow-focus-outline)]
        focus-visible:outline-offset-2
      "
    >
      <Plus className="w-[18px] h-[18px]" />
      <span>New note</span>
      <kbd
        className="
        ml-auto
        text-[10px]
        border border-accent-blue
        border-b-2
        rounded-[5px]
        px-[4px] py-[2px]
        text-accent-blue
        bg-[rgba(255,255,255,0.12)]
      "
      >
        Shift + N
      </kbd>
    </button>
  );
};

export default NewNoteButton;
