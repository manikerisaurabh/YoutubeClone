// import { gapi } from "gapi-script";
// import React, { useEffect, useState } from "react";
// import { GoogleLogin } from "react-google-login";
// import { BiUserCircle } from "react-icons/bi";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { RiVideoAddLine } from "react-icons/ri";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import Auth from "../../Pages/Auth/Auth";
// import { login } from "../../actions/auth";
// import "./Navbar.css";
// import SearchBar from "./SearchBar/SearchBar";
// import logo from "./logo.ico";

// function Navbar({ toggleDrawer,setEditCreateChanelBtn }) {

//     const [AuthBtn, setAuthBtn] = useState(false)
//     const CurrentUser=useSelector(state=>state.currentUserReducer)

//     console.log(CurrentUser)
//     useEffect(() => {
//         function start() {
//         gapi.client.init({
//             clientId:
//             "565866976001-kogc3n05n90ug8i92r0t40tl8co0fhse.apps.googleusercontent.com",
//             scope: "email",
//         });
//         }
//         gapi.load("client:auth2", start);
//     }, []);

//     const dispatch = useDispatch();
//     // const logTmp=()=>{
//     //   dispatch(login({ email:"abzxy50312@gmail.com" }));
//     // }
//     const onSuccess = (response) => {
//         const Email = response?.profileObj.email;
//         console.log(Email);
//         dispatch(login({ email: Email }));
//     };

//     const onFailure = (response) => {
//         console.log("Failed", response);
//     };
//     return (
//         <>
//         <div className="Container_Navbar">
//         <div className="Burger_Logo_Navbar">
//             <div className="burger" onClick={() => toggleDrawer()}>
//             <p></p>
//             <p></p>
//             <p></p>
//             </div>

//             <Link to={"/"} className="logo_div_Navbar">
//             <img src={logo} alt="" />
//             <p className="logo_title_navbar">YouTube</p>
//             </Link>
//         </div>
//         <SearchBar />
//         <RiVideoAddLine size={22} className={"vid_bell_Navbar"} />
//         <div className="apps_Box">
            // <p className="appBox"></p>
            // <p className="appBox"></p>
            // <p className="appBox"></p>
            // <p className="appBox"></p>
            // <p className="appBox"></p>
            // <p className="appBox"></p>
            // <p className="appBox"></p>
            // <p className="appBox"></p>
            // <p className="appBox"></p>
//         </div>
//         <IoMdNotificationsOutline size={22} className="vid_bell_Navbar" />
//         <div className="Auth_cont_Navbar">
//             {CurrentUser ? (
//             <>
//                 <div className="Chanel_logo_App" onClick={()=>setAuthBtn(true)}>
//                 <p className="fstChar_logo_App">
//                     {CurrentUser?.result.name ? (
//                     <>{CurrentUser?.result.name.charAt(0).toUpperCase()}</>
//                     ) : (
//                     <>{CurrentUser?.result.email.charAt(0).toUpperCase()}</>
//                     )}
//                 </p>
//                 </div>
//             </>
//             ) : (
//             <>
//                 <GoogleLogin
//                 clientId={
//                     "565866976001-kogc3n05n90ug8i92r0t40tl8co0fhse.apps.googleusercontent.com"
//                 }
//                 onSuccess={onSuccess}
//                 onFailure={onFailure}
//                 render={(renderProps) => (
//                     <p onClick={renderProps.onClick} className="Auth_Btn">
//                     {/* <p onClick={logTmp} className="Auth_Btn"> */}
//                     <BiUserCircle size={22} />
//                     <b>Sign in</b>
//                     </p>
//                 )}
//                 />
//             </>
//             )}
//         </div>
//         </div>
//         {
//         AuthBtn &&
//         <Auth
//         setEditCreateChanelBtn={setEditCreateChanelBtn}
//         setAuthBtn={setAuthBtn}
//         User={CurrentUser}
//         />
//         }
//         </>
//     );
// }

// export default Navbar;



import { BiUserCircle } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import "./Navbar.css";
import SearchBar from "./SearchBar/SearchBar";
import logo from "./logo.ico";

function Navbar() {
    const CurrentUser = null;
    return (
        <>
        <div className="Container_Navbar">
        <div className="Burger_Logo_Navbar">
            <div className="burger">
            <p></p>
            <p></p>
            <p></p>
            </div>

            <div className="logo_div_Navbar">
            <img src={logo} alt="" />
            <p className="logo_title_navbar">YouTube</p>
            </div>
        </div>
        <SearchBar/>
        <RiVideoAddLine size={22} className={"vid_bell_Navbar"} />
        <div className="apps_Box">
            <p className="appBox"></p>
            <p className="appBox"></p>
            <p className="appBox"></p>
            <p className="appBox"></p>
            <p className="appBox"></p>
            <p className="appBox"></p>
            <p className="appBox"></p>
            <p className="appBox"></p>
            <p className="appBox"></p>
        </div>
        <IoMdNotificationsOutline size={22} className="vid_bell_Navbar" />
        <div className="Auth_cont_Navbar">
            {/* <p className="Auth_Btn">
                <BiUserCircle size={22} />
                <b>Sign in</b>
            </p> */}
            {CurrentUser ? (
            <>
                <div className="Chanel_logo_App">
                <p className="fstChar_logo_App">
                    {CurrentUser?.result.name ? (
                    <>{CurrentUser?.result.name.charAt(0).toUpperCase()}</>
                    ) : (
                    <>{CurrentUser?.result.email.charAt(0).toUpperCase()}</>
                    )}
                </p>
                </div>
            </>
            ) : (
            <>
                <p className="Auth_Btn">
                    <BiUserCircle size={22} />
                    <b>Sign in</b>
                </p>
            </>
            )}
        </div>
        </div>
        </>
    );
}

export default Navbar;