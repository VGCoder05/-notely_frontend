import React from 'react'
import {Routes, Route} from "react-router"
import DashboardView from '../pages/DashboardView/DashboardView'

const RoutesProvider = () => {
  return (
    <Routes>
        <Route path='/dashboard' element={<DashboardView/>}/>
        {/* <Route path='/search' element={}/> */}
        {/* <Route path='/favourites' element={}/> */}
        {/* <Route path='/trash' element={}/> */}
        {/* <Route path='/settings' element={}/> */}
        {/* <Route path='/notes/:id' element={}/> */}
    </Routes>
  )
}

export default RoutesProvider;