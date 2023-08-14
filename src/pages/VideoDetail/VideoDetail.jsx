import React from 'react'
import style from './videodetail.module.css'
import { useParams } from 'react-router'

const VideoDetail = () => {
    const {id} = useParams();
    return (
        <div className={style.videodetail}>
            <div className={style.products_wrapper}>

            </div>
            <div className={style.main}>

            </div>
            <div className={style.comments_wrapper}>
                <div className={style.list_comments}>

                </div>
                <div className={style.input_comment}>

                </div>
            </div>
        </div>
    )
}

export default VideoDetail