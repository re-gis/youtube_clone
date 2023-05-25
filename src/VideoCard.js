import React from 'react'
import { Avatar } from '@mui/material'
import "./VideoCard.css";

const VideoCard = ({image, title, channel, views, time, channelImage}) => {
  return (
    <div className='videoCard'>
      <img src={image} alt="" className='videoCard_thumbnail' />
      <div className="videoCard_info">
        <Avatar className='videoCard_avatar' src={channel} alt={channel} />
        <div className="video_Text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>{views} . {time}</p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
