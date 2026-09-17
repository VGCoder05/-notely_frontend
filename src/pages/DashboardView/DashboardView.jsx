import React from "react";
import { useDashboardView } from "./DashboardView.logic";
import { useNavigate } from "react-router";
import NoteGrid from "../../components/notes/NoteGrid";
// import EmptyState from '../../components/ui/EmptyState/EmptyState';
// import ErrorState from '../../components/ui/ErrorState/ErrorState';
// import SkeletonCard from '../../components/ui/SkeletonCard/SkeletonCard';
import Btn from "../../components/buttons/Btn";
import SearchBox from "../../components/forms/SearchBox/SearchBox";
import { Plus, FileText, SlidersHorizontal } from "lucide-react";
import { useSearchBox } from "../../components/forms/SearchBox/SearchBox.logic";

const DashboardView = () => {
  const navigate = useNavigate();
  const { notes, loading, error, handleRetry } = useDashboardView();
  const{result} = useSearchBox(notes);

  const handleNewNote = () => {
    navigate("/note/new");
  };

  return (
    <div>
      {/* Page Header */}
      <header className="flex items-end justify-between gap-4 mb-6 max-md:flex-col max-md:items-start">
        <div>
          <div
            className="
            text-[12px] text-[var(--color-text-muted)]
            font-semibold uppercase tracking-[0.08em]
          "
          >
            Workspace
          </div>
          <h1
            className="
            text-[28px] md:text-[30px]
            leading-tight tracking-[-0.025em]
            font-bold
            my-1
          "
          >
            All notes
          </h1>
          <p className="text-[var(--color-text-secondary)] mt-[6px] mb-0">
            {notes.length} {notes.length === 1 ? "note" : "notes"} in your
            workspace
          </p>
        </div>

        <div className="flex gap-2 max-md:w-full">
          <Btn
            variant="ghost"
            icon={SlidersHorizontal}
            className="max-md:flex-1"
          >
            Filter
          </Btn>
          <Btn
            variant="primary"
            icon={Plus}
            onClick={handleNewNote}
            className="max-md:flex-1"
          >
            New note
          </Btn>
        </div>
      </header>

      {/* Toolbar */}
      <div className="flex gap-2 mb-4">
        <SearchBox
          data={notes}
          placeholder="Search notes..."
          className="flex-1"
        />
      </div>

      {/* Content */}
      {/* {error ? (
        <ErrorState
          title="Failed to load notes"
          message={error}
          onRetry={handleRetry}
        />
      ) : loading ? (
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : notes.length === 0 ? (
        <EmptyState
          icon={FileText}
          title="No notes yet"
          description="Create your first note to get started. Notes can include text, links, and tags."
          actionLabel="Create note"
          onAction={handleNewNote}
        />
      ) : (
        <NoteGrid notes={notes} />
    )} */}
      {/* <NoteGrid notes={filterans} /> */}
      <NoteGrid notes={result} />
    </div>
  );
};

export default DashboardView;
