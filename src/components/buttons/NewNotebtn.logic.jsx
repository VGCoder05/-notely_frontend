import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addNote } from '../../store/slices/notesSlice';
import { closeSidebar } from '../../store/slices/uiSlice';
import useMediaQuery from "../../hooks/useMediaQuery";
import { toast } from 'react-toastify';

export const useNewNoteButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleCreateNote = () => {
    const newNote = {
      id: Date.now().toString(),
      title: '',
      content: '',
      tags: [],
      isFavourite: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    dispatch(addNote(newNote));
    navigate(`/note/${newNote.id}`);
    
    if (isMobile) {
      dispatch(closeSidebar());
    }

    toast.success('New note created');
  };

  return {
    handleCreateNote,
  };
};