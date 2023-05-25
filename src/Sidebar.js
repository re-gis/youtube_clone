import { ExpandMoreOutlined, History, Home, OndemandVideo, Subscriptions, ThumbUp, VideoLibrary, WatchLater } from '@mui/icons-material'
import React from 'react'
import './Sidebar.css'
import SideBarRow from './SideBarRow'
import { Whatshot } from '@mui/icons-material'

function Sidebar() {
  return (
    <div className='sidebar'>
        <SideBarRow selected Icon={Home} title="Home"/>
        <SideBarRow Icon={Whatshot} title="Trending"/>
        <SideBarRow Icon={Subscriptions} title="Subscription"/>
        <hr />
        <SideBarRow Icon={VideoLibrary} title="Library"/>
        <SideBarRow Icon={History} title="History"/>
        <SideBarRow Icon={OndemandVideo} title="Your Videos"/>
        <SideBarRow Icon={WatchLater} title="Watch Later"/>
        <SideBarRow Icon={ThumbUp} title="Linked Videos"/>
        <SideBarRow Icon={ExpandMoreOutlined} title="Show more"/>
    </div>
  )
}

export default Sidebar
