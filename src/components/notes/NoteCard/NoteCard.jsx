import React from "react";
import { useNoteCard } from "./NoteCard.logic";
import { Star } from "lucide-react";
import Tag from "../../ui/Tag/Tag";

const NoteCard = ({ note }) => {
  const { handleCardClick, handleToggleFavourite, formatDate, getPreviewText } =
    useNoteCard(note);

  return (
    <article
      onClick={handleCardClick}
      className="
        bg-[var(--color-surface-primary)]
        border border-[var(--color-border-primary)]
        rounded-[12px]
        p-4
        min-h-[var(--min-height-card)]
        flex flex-col
        shadow-[var(--shadow-sm)]
        transition-all duration-[0.18s]
        cursor-pointer
        hover:border-[var(--color-primary-300)]
        hover:shadow-[var(--shadow-md)]
        hover:-translate-y-[2px]
      "
    >
      {/* Header */}
      <div className="flex gap-[10px] items-start">
        <h3 className="text-[15px] font-semibold m-0 leading-[1.35] flex-1">
          {note.title || "Untitled"}
        </h3>

        <button
          onClick={handleToggleFavourite}
          className={`
            ml-auto p-1 -m-1
            transition-colors
            ${
              note.isFavourite
                ? "text-[var(--color-warning-600)] fill-current"
                : "text-[var(--color-text-placeholder)] hover:text-[var(--color-warning-600)]"
            }
          `}
          aria-label={
            note.isFavourite ? "Remove from favourites" : "Add to favourites"
          }
        >
          <Star className="w-[18px] h-[18px]" />
        </button>
      </div>

      {/* Preview */}
      <p
        className="
        text-[var(--color-text-secondary)]
        my-[9px] mb-[14px]
        line-clamp-3
      "
      >
        {getPreviewText(note.content)}
      </p>

      {/* Meta */}
      <div className="mt-auto flex items-center gap-[7px] flex-wrap">
        {note.tags && note.tags.length > 0 && (
          <>
            {note.tags.slice(0, 2).map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
            {note.tags.length > 2 && (
              <span className="text-[11px] text-[var(--color-text-muted)]">
                +{note.tags.length - 2}
              </span>
            )}
          </>
        )}

        {note.tags && note.tags.length > 0 && (
          <span
            className="
            w-[3px] h-[3px]
            bg-[var(--color-accent-gray)]
            rounded-full
          "
          />
        )}

        <span className="text-[var(--color-text-muted)] text-[11px]">
          {formatDate(note.updatedAt)}
        </span>
      </div>
    </article>
  );
};

export default NoteCard;
