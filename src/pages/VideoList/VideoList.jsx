import React, {useState, useEffect} from 'react'
import style from './videolist.module.css';
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import axios from 'axios';

const VideoList = () => {
  // let {data, error} = useFetch('/video?search=');
  const [dataVideo, setDataVideo] = useState([]);
  const [search, setSearch] = useState('');

  const getVideos = async (search) => {
    const response = await axios.get(`/video?search=${search}`);
    setDataVideo(response.data.data);
  }

  const onChangeHandle = (e) => {
    setSearch(e.target.value);
  } 

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(search);
    getVideos(search);
  }

  useEffect(() => {
    getVideos('');
}, []);
  return (
    <div>
      <div className={style.header}>
        <div className={style.left}>
          <h2 className={style.title}>Video List</h2>
          <form onSubmit={handleSearch}>
            <input type="search" placeholder='Cari Video' value={search} onChange={onChangeHandle}/>
          </form>
        </div>
        <div className={style.right}>
          <span>Username</span>
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
        </div>
      </div>
        <div className={style.thumbnail_wrapper}>
        {dataVideo.map((item) => (
          <Thumbnail 
            key = {item._id}
            id = {item._id}
            url = {item.urlImageThumbnail}
            judul = {item.title}
          />
        ))}
        </div>
    </div>
  )
}

export default VideoList