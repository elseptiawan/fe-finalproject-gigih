import React from 'react'
import style from './thumbnail.module.css'
import { Link } from 'react-router-dom'

const Thumbnail = ({url = "https://videopromotion.club/assets/images/default-video-thumbnail.jpg", judul = "Judul Video", id}) => {
  return (
    <Link to={{ pathname: `/video-detail/${id}` }}>
        <div className={style.thumbnail}>
            <img src={url}/>
            <div className={style.judul}>
                <p>{judul}</p>
            </div>
        </div>
    </Link>
  )
}

export default Thumbnail