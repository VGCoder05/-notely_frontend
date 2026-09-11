import React from 'react'
import useSidebar from '../../../hooks/useSidebar'
import { useNavigate } from 'react-router';


const SidebarLogic = () => {
  const {openSidebar, closeSidebar, toggleSidebar} = useSidebar();
  const navigate =useNavigate()

  // Handle navigation - pass the route 
  const handleNavigation = (path)=>{
    navigate(path)
  }
  
  return {
    openSidebar,
    closeSidebar,
    toggleSidebar,
    handleNavigation
  };
}

export default SidebarLogic