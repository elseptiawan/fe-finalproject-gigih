import {BrowserRouter, Routes, Route, useParams} from "react-router-dom";
import VideoList from './pages/VideoList/VideoList';
import VideoDetail from './pages/VideoDetail/VideoDetail';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VideoList/>}/>
        <Route path="video-detail/:id" element={<VideoDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
