import React, { useState } from 'react';
import { BsMicFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import './SearchBar.css';
import SearchList from './SearchList';
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

function SearchBar() {

    const [searchQuery, setSearchQuery] = useState("");
    const [seachListA, setSeachList] = useState(false);
    // const TitleArray = useSelector(s=>s?.videoReducer)?.data?.filter(q=> q?.videoTitle.toUpperCase().includes(searchQuery?.toUpperCase())).map(m=>m?.videoTitle)
    const TitleArray=["video1","Video2","Animation video","Movies"].filter(q=>q.toUpperCase().includes(searchQuery.toUpperCase()));

    return (
    <>
        <div className="SearchBar_Container">
            <div className="SearchBar_Container2">
                <div className="search_div">
                    <input type="text" className="iBox_SearchBar" placeholder="Search" 
                    onChange={e=>setSearchQuery(e.target.value)}
                    value={searchQuery}
                    onClick={e=>setSeachList(true)}
                    />
                    <FaSearch className="searchIcon_SearchBar"/>
                    <BsMicFill className="Mic_SearchBar" />
                    {searchQuery && seachListA &&
                        <SearchList TitleArray={TitleArray} setSearchQuery={setSearchQuery}/>
                    }
                </div>
            </div>
        </div>
        {/* //      <div className="SearchBar_Container">
        //         <div className="SearchBar_Container2">
        //           <div className="search_div">
        //             <input type="text" className="iBox_SearchBar" placeholder="Search" 
        //               onChange={e=>setSearchQuery(e.target.value)}
        //               value={searchQuery}
        //               onClick={e=>setSeachList(true)}
        //             />
        //             <Link to={`/seacrh/${searchQuery}`}>
        //               <FaSearch className="searchIcon_SearchBar" 
        //               onClick={e=>setSeachList(false)}
        //             />
        //             </Link>
        //             <BsMicFill className="Mic_SearchBar" />
        //             {searchQuery&& seachListA &&
        //               <SearchList
        //               setSearchQuery={setSearchQuery}
        //               TitleArray={TitleArray}
        //               />
        //             }
        //           </div>
        //         </div>
        //       </div> */}
    </>
    )
}

export default SearchBar;
