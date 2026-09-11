import { useSelector, useDispatch } from 'react-redux';
import { openSidebar, openSearch } from '../../../store/slices/uiSlice';

export const useTopbar = () => {
  const dispatch = useDispatch();
  const breadcrumb = useSelector((state) => state.ui.breadcrumb);

  const handleOpenSidebar = () => {
    dispatch(openSidebar());
  };

  const handleOpenSearch = () => {
    dispatch(openSearch());
  };

  return {
    breadcrumb,
    handleOpenSidebar,
    handleOpenSearch,
  };
};
