import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from '../src/components/AllRoutes';
import './App.css';
import { getAllHistory } from './actions/History';
import { fetchAllChanel } from './actions/chanelUser';
import { getAlllikedVideo } from './actions/likedVideo';
import { getAllVideo } from './actions/video';
import { getAllwatchLater } from './actions/watchLater';
import DrawerSidebar from './components/LeftSideBar/DrawerSideBar';
import Navbar from './components/Navbar/Navbar';
import CreateEditChanel from './pages/Chanel/CreateEditChanel';
import VideoUpload from './pages/VideoUpload/VideoUpload';

function App() {

    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(fetchAllChanel());
      dispatch(getAllVideo());
      dispatch(getAlllikedVideo());
      dispatch(getAllwatchLater());
      dispatch(getAllHistory());
    }, [dispatch]);

  const [vidUploadPage, setVidUploadPage] = useState(false);
    const [EditCreateChanelBtn, setEditCreateChanelBtn] = useState(false);
    const [toggleDrawerSidebar,setToggleDrawerSidebar] = useState({
      display:"none",
    });
    const toggleDrawer = () => {
      if (toggleDrawerSidebar.display === "none") {
        setToggleDrawerSidebar({
          display: "flex",
        });
      } else {
        setToggleDrawerSidebar({
          display: "none",
        });
      }
    };

  return (
    <Router>
      {vidUploadPage && <VideoUpload setVidUploadPage={setVidUploadPage}/>}
      {EditCreateChanelBtn && <CreateEditChanel setEditCreateChanelBtn={setEditCreateChanelBtn}/>}
      <Navbar
      setEditCreateChanelBtn={setEditCreateChanelBtn}
      toggleDrawer={toggleDrawer}
      />
      
      <DrawerSidebar
        toggleDrawer={toggleDrawer}
        toggleDrawerSidebar={toggleDrawerSidebar}
      />
      
      <AllRoutes setEditCreateChanelBtn={setEditCreateChanelBtn} setVidUploadPage={setVidUploadPage}/>
    </Router>
  );
}

export default App;


