import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { closeSidebar } from '../../../store/slices/uiSlice';
import { setCurrentNote } from '../../../store/slices/notesSlice';
import useMediaQuery from '../../../hooks/useMediaQuery';

 const useRecentNotesList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const recentNotes = useSelector((state) => state.notes.recentNotes);

  const handleNoteClick = (note) => {
    dispatch(setCurrentNote(note));
    navigate(`/note/${note.id}`);
    
    if (isMobile) {
      dispatch(closeSidebar());
    }
  };

  return {
    recentNotes,
    handleNoteClick,
  };
};

export default useRecentNotesList;