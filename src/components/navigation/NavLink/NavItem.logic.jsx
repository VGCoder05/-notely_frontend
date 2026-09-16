import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { closeSidebar, openSearch } from '../../../store/slices/uiSlice';
import useMediaQuery from '../../../hooks/useMediaQuery';

export const useNavItem = (to, isButton, onButtonClick) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleClick = (e) => {
    if (isButton) {
      e.preventDefault();
      if (onButtonClick) {
        onButtonClick();
      } else if (to === "/search") {
        dispatch(openSearch());
      }
    } else {
      navigate(to);
      if (isMobile) {
        dispatch(closeSidebar());
      }
    }
  };

  return { handleClick };
};