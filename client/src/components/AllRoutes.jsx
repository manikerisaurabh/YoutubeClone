import React from "react";
import { Route, Routes } from "react-router-dom";
import Chanel from "../pages/Chanel/Chanel";
import Home from "../pages/Home/Home";
import Library from "../pages/Library/Library";
import LikedVideo from "../pages/LikedVideo/LikedVideo";
import Search from "../pages/Search/search";
import VideoPage from "../pages/VideoPage/VideoPage";
import WatchHistory from "../pages/WatchHistory/WatchHistory";
import WatchLater from "../pages/WatchLater/WatchLater";
import YourVideo from "../pages/YourVideo/YourVideo";

function AllRoutes({ setEditCreateChanelBtn,setVidUploadPage }) {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/history" element={<WatchHistory />} />
            <Route path="/watchlater" element={<WatchLater />} />
            <Route path="/likedvideo" element={<LikedVideo />} />
            <Route path="/yourvideos" element={<YourVideo />} />
            <Route path="/videopage/:vid" element={<VideoPage />} />
            <Route path="/chanel/:Cid" element={<Chanel setVidUploadPage={setVidUploadPage} setEditCreateChanelBtn={setEditCreateChanelBtn}/>}/>
            <Route path="/seacrh/:searchQuery" element={<Search />} />
        </Routes>
    );
}

export default AllRoutes;
