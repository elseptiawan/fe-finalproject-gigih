import React from 'react'
import style from './videolist.module.css';
import Thumbnail from '../../components/Thumbnail/Thumbnail';

const VideoList = () => {
  return (
    <div>
        <h2 className={style.title}>Video List</h2>
        <div className={style.thumbnail_wrapper}>
            <Thumbnail 
                url = "https://img.youtube.com/vi/3rlQ-2gsPC0/hqdefault.jpg"
            />
            <Thumbnail/>
            <Thumbnail/>
            <Thumbnail/>
            <Thumbnail/>
            <Thumbnail/>
        </div>
    </div>
  )
}

export default VideoList