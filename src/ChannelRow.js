import { CheckCircleOutlineOutlined } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import './ChannelRow.css'

const ChannelRow = ({ image, channel, verified, subs, novideos, desc }) => {
  return (
    <div className='channelRow'>
      <Avatar className='channelRow_logo' alt={channel} src={image} />
      <div className="channelRow_text">
        <h4>{channel} {verified && <CheckCircleOutlineOutlined /> }</h4>
        <p>{subs} subscribers . {novideos} videos</p>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default ChannelRow
