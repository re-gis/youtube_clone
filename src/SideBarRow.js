import React from 'react'
import { Home } from '@mui/icons-material'
import './sideBarRow.css'

const SideBarRow = ({ Icon, title, selected }) => {
  return (
    <div className={`sidebarRow ${selected && 'selected'}`}>
        <Icon className="sidebarRow_icon" />
      <h2 className='sidebarRow_title'>{title}</h2>
    </div>
  )
}

export default SideBarRow
