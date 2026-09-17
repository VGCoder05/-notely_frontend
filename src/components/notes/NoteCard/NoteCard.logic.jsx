import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  toggleFavourite,
  setCurrentNote,
} from "../../../store/slices/notesSlice";
import { toast } from "react-toastify";

export const useNoteCard = (note) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCardClick = () => {
    dispatch(setCurrentNote(note));
    navigate(`/note/${note._id}`);
  };

  const handleToggleFavourite = (e) => {
    e.stopPropagation();
    dispatch(toggleFavourite(note._id));
    toast.success(
      note.isFavourite ? "Removed from favourites" : "Added to favourites"
    );
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now - date;
    const diffInMins = Math.floor(diffInMs / 60000);
    const diffInHours = Math.floor(diffInMs / 3600000);
    const diffInDays = Math.floor(diffInMs / 86400000);

    if (diffInMins < 1) return "Just now";
    if (diffInMins < 60) return `${diffInMins}m ago`;
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInDays < 7) return `${diffInDays}d ago`;

    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const getPreviewText = (content) => {
    const data = content[0].content[0].text;
    // Strip HTML tags and get plain text
    const text = data.replace(/<[^>]*>/g, "");
    return text.trim() || "No content";
  };

  return {
    handleCardClick,
    handleToggleFavourite,
    formatDate,
    getPreviewText,
  };
};
