import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBreadcrumb } from "../../store/slices/uiSlice";
import { setNotes, setLoading, setError } from "../../store/slices/notesSlice";

export const useDashboardView = () => {
  const dispatch = useDispatch();

  const notes = useSelector((state) => state.notes.notes);
  const loading = useSelector((state) => state.notes.loading);
  const error = useSelector((state) => state.notes.error);

  useEffect(() => {
    dispatch(setBreadcrumb("All notes"));
  }, [dispatch]);

  // Simulate loading notes (replace with actual API call)
  useEffect(() => {
    const loadNotes = async () => {
      dispatch(setLoading(true));

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 800));

        // Mock data - replace with actual API
        const mockNotes = JSON.parse(localStorage.getItem("notes") || "[]");
        dispatch(setNotes(mockNotes));
      } catch (err) {
        dispatch(setError(err.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

    if (notes.length === 0) {
      loadNotes();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleRetry = () => {
    window.location.reload();
  };

  return {
    notes,
    loading,
    error,
    handleRetry,
  };
};
