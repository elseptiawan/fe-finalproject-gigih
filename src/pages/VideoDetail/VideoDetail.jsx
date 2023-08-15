import React, {useState, useEffect} from 'react'
import ReactPlayer from "react-player"
import style from './videodetail.module.css'
import { useParams } from 'react-router'
import useFetch from '../../hooks/useFetch'
import Product from '../../components/Product/Product'
import axios from 'axios'

const VideoDetail = () => {
    const {id} = useParams();
    const dataVideo = useFetch(`/video/${id}`);
    const dataProducts = useFetch(`/product/${id}`);
    const [dataComments, setDataComments] = useState([]);
    const [bodyComment, setBodyComment] = useState({
        username: '',
        comment: '',
    });

    const getComments = async () => {
        const response = await axios.get(`/comment/${id}`);
        setDataComments(response.data.data);
    }

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setBodyComment({...bodyComment, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(`/comment/${id}`, bodyComment);
        setBodyComment({username:'',comment:''})
        getComments();
    }

    useEffect(() => {
        getComments();
    }, []);
    return (
        <div className={style.videodetail}>
            <div className={style.products_wrapper}>
                {dataProducts.data.map((item) => (
                    <a href={item.linkProduct} target="_blank">
                        <Product
                            className={style.products}
                            key={item._id}
                            urlImage={item.urlImage}
                            title={item.title}
                        />
                    </a>
                ))}
            </div>
            <div className={style.main}>
                <div className={style.player}>
                <h2>{dataVideo.data.title}</h2>
                    <ReactPlayer
                        key={dataVideo.data._id}
                        url={dataVideo.data.urlVideo}
                        playing={true}
                    />
                </div>
                <a href="/"><div className={style.back_button}>Back</div></a>
                <div className={style.right}>
                    <span>Username</span>
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                </div>
            </div>
            <div className={style.comments_wrapper}>
                <div className={style.list_comments}>
                    {dataComments.map((item) => (
                        <div className={style.comments}>
                            {/* <div className={style.username}>{item.username}</div> */}
                            <div className={style.comment} key={item._id}><span>{item.username}</span>{item.comment}</div>
                        </div>
                    ))}
                </div>
                <div className={style.input_comment}>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name='username' placeholder='Username' onChange={handleOnChange} value={bodyComment.username}/>
                        <input type="text" name='comment' placeholder='Comment' onChange={handleOnChange} value={bodyComment.comment}/>
                        <input type="submit" value='Post' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default VideoDetail