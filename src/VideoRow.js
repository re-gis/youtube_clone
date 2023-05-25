import React from 'react'
import './VideoRow.css'

const VideoRow = ({ views, desc, subs, time, channel, image, title }) => {
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRow_text">
        <h3>{title}</h3>
        <p className="videoRow_headline">
          {channel} .{" "}
          <span className='videoRow_'>
            <span className="videoRow_subsNumber">{subs}</span> Subscribers
          </span>{" "}
          . {views} views . {time}
        </p>
        <p className="videoRow_desc">{desc}</p>
      </div>
    </div>
  );
}

export default VideoRow
