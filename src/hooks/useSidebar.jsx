/*
Control sidebar 
- open, close, toogle

*/

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  openSidebar,
  closeSidebar,
  toggleSidebar,
} from "../store/slices/uiSlice";
import useMediaQuery from "./useMediaQuery";

const useSidebar = () => {
  const dispatch = useDispatch();
  // const [sidebarState, setSidebarState] = useState(false);
  const sidebarState = useSelector((state) => state.ui.sidebarOpen);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleOpen = () => {
    dispatch(openSidebar);
  };
  const handleClose = () => {
    dispatch(closeSidebar);
  };
  const handleToggle = () => {
    dispatch(toggleSidebar);
  };

  // close the sidebar when the route in url is changed
  useEffect(() => {
    if (isMobile && sidebarState) {
      dispatch(closeSidebar);
    }
  }, [window.location.hash]);

  return {
    sidebarState,
    isMobile,

    // Change the name of function
    openSidebar: handleOpen,
    closeSidebar: handleClose,
    toggleSidebar: handleToggle,
  };
};

export default useSidebar;
