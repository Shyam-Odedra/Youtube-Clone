import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MicIcon from '@mui/icons-material/Mic';
import AppsIcon from '@mui/icons-material/Apps';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import { authentication } from '../../Firebase/firebase';
// import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut  } from "firebase/auth";
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import Badge from '@mui/material/Badge';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { config } from '../../Constants/config';
// import Context from '../../GlobalState/Context';

export default function Navbar() {
//   const [userData, setUserData] = useState([]);
//   const {globalState, globalDispatch} = useContext(Context)

  const handleSignIn = async () => {
    // const provider = new GoogleAuthProvider();
    // signInWithPopup(authentication, provider)
    //   .then((response) => {
    //     const userInfo =
    //       {
    //         userName: response.user.displayName,
    //         userEmail: response.user.email,
    //         profileImage: response.user.photoURL
    //       };
    //       globalDispatch({
    //         userData: userInfo,
    //         isLogin: true,
    //       })
    //       localStorage.setItem('userInfo', JSON.stringify(userInfo));
    //       setUserData(userInfo);
    //     })
    //   .catch((error) => {
    //     console.log('Error ==> ', error);
    //   })
  };

//   const signOutHandler = () => {
//     signOut(authentication).then(() => {
//       console.log('Sign-out successful');
//       globalDispatch({
//         userData: {},
//         isLogin: false,
//       })
//       localStorage.removeItem('userInfo');
//       setUserData('');
//     }).catch((error) => {
//       console.log('Error');
//     });
//   };
//   useEffect(() => {
//     const userInfo = JSON.parse(localStorage.getItem('userInfo'));
//     if(userInfo){
//       globalDispatch({
//         userData: userInfo,
//         isLogin: true,
//       })
//     }
//       console.log(userInfo);
//     setUserData(userInfo);
//   }, []);

//   console.log('userData ==> ', userData);
  return (
    <>
      <div className='navbar flex items-center justify-between px-5 py-3'>
        <div className='flex items-center navbar_logo'>
          <MenuOutlinedIcon className='menuIcon cursor-pointer' />
          <img src={config.YOUTUBE_DARK_LOGO} className='cursor-pointer' alt="" />
        </div>
        <div className='navbar_search'>
          <input type="text" name="searchWord" placeholder='Search' />
          <div className="searchbtn bg-slate-100 hover:bg-slate-200 cursor-pointer">
            <SearchOutlinedIcon className='searchIcon cursor-pointer' />
          </div>
          <div className='bg-slate-100 cursor-pointer w-9 h-9 flex justify-center items-center rounded-full'>
            <MicIcon className='micIcon' />
          </div>
        </div>
        {/* {userData ?
          <div className='navbar_icons'>
            <VideoCallOutlinedIcon className='appIcon cursor-pointer' />
            <AppsIcon className='appIcon cursor-pointer' />
            <Badge badgeContent={4} color="primary" className='appIcon cursor-pointer'>
              <NotificationsNoneOutlinedIcon color="action" />
              </Badge>
            <img alt="Remy Sharp" onClick={signOutHandler} src={userData && userData.profileImage ? userData.profileImage : null} />
          </div>
          : */}
          <div className='navbar_icons'>
            {/* <AppsIcon className='appIcon cursor-pointer' /> */}
            <MoreVertIcon className='dotIcon cursor-pointer' />
            <span className='border rounded-3xl signInButton p-2 text-gray flex items-center cursor-pointer' onClick={handleSignIn}> <AccountCircleOutlinedIcon /><span className='ml-2'>SIGN IN</span></span>
          </div>
        {/* } */}
      </div>
    </>
  )
}