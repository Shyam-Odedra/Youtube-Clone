import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { ImageConfig } from '../../Constants/config';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ROUTES } from '../../Constants/constants';
import Context from '../../Context/Context';
import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';
import { clearUserInfo, setSearchQuery, setUserInfo } from '../../Store/features/youtubeSlice';

export default function Navbar() {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("");
    const userInfo = useSelector(state => state.youtube.userInfo);
    const { globalState, globalDispatch } = useContext(Context);
    const [queryParams] = useSearchParams();
    const searchQuery = useSelector(state => state.youtube.searchQuery);
    const dispatch = useDispatch();

    const handleSignIn = async (googleUser) => {

        const idToken = googleUser.getAuthResponse().id_token;
        console.log({ idToken });

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
        if (queryParams.get('query')) {
            setSearchValue(queryParams.get('query'));
            dispatch(setSearchQuery(queryParams.get('query')));
        }
    }, []);


    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: {
                        Authorization: `Bearer ${tokenResponse.access_token}`,
                    },
                });
                if (!userInfoResponse.ok) {
                    throw new Error(`Failed to fetch user info: ${userInfoResponse.status}`);
                }
                const userData = await userInfoResponse.json();
                dispatch(setUserInfo(userData));
                console.log('userInfo => ', userData);
            } catch (error) {
                console.error(error);
            }
        },
        onError: errorResponse => console.log(errorResponse),
    });

    const signOutHandler = () => {
        dispatch(clearUserInfo());
    }


    const handleSearch = () => {
        if (searchValue) {
            // globalDispatch({
            //     searchQuery: searchValue,
            //     sidebarActiveTab: "Search"
            // })
            dispatch(setSearchQuery(searchValue));
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
                {userInfo?.picture ?
                    <div className='navbar_icons'>
                        {/* <VideoCallOutlinedIcon className='appIcon cursor-pointer' />
                        <AppsIcon className='appIcon cursor-pointer' />
                        <Badge badgeContent={4} color="primary" className='appIcon cursor-pointer'>
                            <NotificationsNoneOutlinedIcon color="action" />
                        </Badge> */}
                        <span className='mr-3'>{userInfo?.given_name}</span>
                        <img alt="Remy Sharp" onClick={signOutHandler} src={userInfo && userInfo?.picture ? userInfo?.picture : null} />
                    </div>
                    :
                    <div className='navbar_icons h-full py-1.5'>
                        <MoreVertIcon className='dotIcon cursor-pointer' />
                        <button className='border font-medium rounded-3xl h-full signInButton px-2 text-gray flex items-center cursor-pointer' onClick={() => googleLogin()}> <AccountCircleOutlinedIcon /><span className='ml-2'>Sign In</span></button>
                    </div>
                }
            </div>
        </>
    )
}