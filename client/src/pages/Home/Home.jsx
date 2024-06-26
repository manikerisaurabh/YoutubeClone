import React from 'react';
import { useSelector } from 'react-redux';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid';
import "./Home.css";

const Home = () => {

    const vids=useSelector(state=>state.videoReducer)?.data?.filter(q=>q).reverse();
    // const vids = [
    //     {
    //         _id: 1,
    //         video_src: vid,
    //         Chanel: "62bafe6752cea35a6c30685f",
    //         title: "video 1",
    //         Uploder: "abc",
    //         description: "description of  video 1",
    //         },
    //         {
    //         _id: 2,
    //         video_src: vid,
    //         Chanel: "cdd",
    //         title: "video 2",
    //         Uploder: "abc",
    //         description: "description of  video 2",
    //         },
    //         {
    //         _id: 3,
    //         video_src: vid,
    //         Chanel: "add",
    //         title: "video 3",
    //         Uploder: "abc",
    //         description: "description of  video 3",
    //         },
    //         {
    //         _id: 4,
    //         video_src: vid,
    //         Chanel: "add",
    //         title: "video 3",
    //         Uploder: "abc",
    //         description: "description of  video 3",
    //         },
    // ];

    const NavList = [
        "All",
        "Python",
        "Java",
        "C++",
        "Movies",
        "Science",
        "Animation",
        "Gaming",
        "Comedy",
        "Movies",
        "Science",
        "Animation",
        "Gaming",
        "Comedy",
        "Web DEV"
    ];

    return (
        <div className="container_Pages_App">
            <LeftSideBar/>
            <div className="container2_Pages_App">
                <div className="navigation_Home">
                    {NavList.map((m) => {
                        return (
                        <p key={m} className="btn_nav_home">
                            {m}
                        </p>
                        );
                    })}
                </div>
                <ShowVideoGrid vids={vids}/>
            </div>
        </div>
    )
}

export default Home


