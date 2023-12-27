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
import { ImageConfig } from '../../Constants/config';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { ROUTES } from '../../Constants/constants';
import Context from '../../Context/Context';
// import Context from '../../GlobalState/Context';

export default function Navbar() {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("");
    const { globalState, globalDispatch } = useContext(Context);
    const [queryParams] = useSearchParams();
    //   const [userData, setUserData] = useState([]);
    //   const {globalState, globalDispatch} = useContext(Context)

    const handleSignIn = async () => {
        // const pprovider = new GoogleAuthProvider();
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

    useEffect(() => {
        console.log('object', queryParams.get('query'));
        if(queryParams.get('query')){
            setSearchValue(queryParams.get('query'));
        }
    },[]);

    const handleSearch = () => {
        if (searchValue) {
            globalDispatch({
                searchQuery: searchValue,
                sidebarActiveTab: "Search"
            })
            navigate(`${ROUTES.SEARCH}?query=${encodeURIComponent(searchValue)}`)
        }
    }

    return (
        <>
            <div className='navbar flex items-center justify-between px-5 py-3'>
                <div className='flex items-center navbar_logo'>
                    <MenuOutlinedIcon className='menuIcon cursor-pointer' />
                    <img onClick={() => navigate(ROUTES.HOME)} src={ImageConfig.YOUTUBE_DARK_LOGO} className='cursor-pointer' alt="" />
                </div>
                <div className='navbar_search'>
                    <input type="text" value={searchValue} name="searchWord" placeholder='Search' onChange={(e) => setSearchValue(e.target.value)} required />
                    <button disabled={!searchValue} className="searchbtn bg-slate-100 hover:bg-slate-200 cursor-pointer" onClick={() => handleSearch()}>
                        <SearchOutlinedIcon className='searchIcon cursor-pointer' />
                    </button>
                </div>

                {/* <div className='bg-slate-100 cursor-pointer w-9 h-9 flex justify-center items-center rounded-full'>
            <MicIcon className='micIcon' />
          </div> */}
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
                <div className='navbar_icons h-full py-1.5'>
                    {/* <AppsIcon className='appIcon cursor-pointer' /> */}
                    <MoreVertIcon className='dotIcon cursor-pointer' />
                    <button className='border font-medium rounded-3xl h-full signInButton px-2 text-gray flex items-center cursor-pointer' onClick={handleSignIn}> <AccountCircleOutlinedIcon /><span className='ml-2'>Sign In</span></button>
                </div>
                {/* } */}
            </div>
        </>
    )
}