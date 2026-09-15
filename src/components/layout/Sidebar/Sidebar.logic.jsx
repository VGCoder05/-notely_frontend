import React from 'react'
import useSidebar from '../../../hooks/useSidebar'
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';


const SidebarLogic = () => {
  const {openSidebar, closeSidebar, toggleSidebar} = useSidebar();
  const { sidebarOpen, noteCount } = useSelector((state) => ({
      sidebarOpen: state.ui.sidebarOpen,
      noteCount: state.notes.notes.length,
    }))
  const navigate =useNavigate()

  // Handle navigation - pass the route 
  const handleNavigation = (path)=>{
    navigate(path)
  }
  
  return {
    // Variable
    sidebarOpen,
    noteCount,

    // Dispatch Functions 
    openSidebar,
    closeSidebar,
    toggleSidebar,
    handleNavigation
  };
}

export default SidebarLogic