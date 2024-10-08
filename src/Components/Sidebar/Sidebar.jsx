import React, { useContext, useEffect, useState } from 'react';
// import HomeIcon from '@mui/icons-material/HomeIcons';
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import './Sidebar.css';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { categoryMenuList, loginMenuList, sidebarMenuList } from '../../Constants/sidebarMenuList';
import { useLocation, useNavigate } from 'react-router-dom';
import Context from '../../Context/Context';
import { ROUTES } from '../../Constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory, clearSearchVideos } from '../../Store/features/youtubeSlice';
// import Context from '../../GlobalState/Context';

export default function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation()
    const [activeSidebarMenu, setactiveSidebarMenu] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const { globalState, globalDispatch } = useContext(Context);
    const homeCategoryId = useSelector(state => state.youtube.homeCategoryId);
    const dispatch = useDispatch();

    // const {globalState, globalDispatch} = useContext(Context)

    // useEffect(() => {
    //   console.log('globalState ==>', globalState);
    //   if(globalState){
    //     setIsLogin(globalState.isLogin);
    //   }
    // },[globalState]);

    // console.log('isLogin ==> ', isLogin);

    const handleMenuClick = (menuItem) => {
        globalDispatch({
            sidebarActiveTab: menuItem?.title
        });
        setactiveSidebarMenu(menuItem?.title);
        dispatch(changeCategory('all'))
        dispatch(clearSearchVideos());
        navigate(menuItem?.route);
    }

    const handleExploreMenuClick = (menuItem) => {
        globalDispatch({
            sidebarActiveTab: menuItem?.title,
            homePageCategoryId: menuItem?.apicategory,
            homePageVideosToken: "",
            homePageVideos: []
        });
        dispatch(changeCategory(menuItem?.apicategory))
        dispatch(clearSearchVideos());
        setactiveSidebarMenu(menuItem?.title);
        navigate(menuItem?.route);
    }

    useEffect(() => {
        if (globalState?.sidebarActiveTab) {
            setactiveSidebarMenu(globalState?.sidebarActiveTab);
        }
    }, [globalState?.sidebarActiveTab]);

    useEffect(() => {
        if (location.pathname === ROUTES.HOME) {
            setactiveSidebarMenu('Home');
        }
    }, []);

   

    return (
        <div className="sidebar">
            <div className="menu_1">
                {sidebarMenuList ? <>
                    {sidebarMenuList.map((menuItem, key) =>
                        <div className={'listItem ' + (activeSidebarMenu === menuItem.title ? 'activeMenu' : null)} key={key} onClick={() => handleMenuClick(menuItem)}>
                            <span className='icon'></span>{activeSidebarMenu === menuItem.title ? menuItem.activeIcon : menuItem.icon}
                            <span className='title'>{menuItem.title}</span>
                        </div>
                    )}
                </> : null
                }
            </div>
            {/* {isLogin ?
        <div className="menu_2 menu_1">
          {loginMenuList ? <>
            {loginMenuList.map((menuItem, key) =>
              <div className={'listItem ' + (activeSidebarMenu === menuItem.title ? 'activeMenu' : null)} key={key} onClick={() => setactiveSidebarMenu(menuItem.title)}>
                <span className='icon'></span>{activeSidebarMenu === menuItem.title ? menuItem.activeIcon : menuItem.icon}
                <span className='title'>{menuItem.title}</span>
              </div>
            )}
          </> : null
          }
        </div>
        :
        // null
        <div className='menu_2 menu_1 px-7'>
          <span className='text-sm'>Sign in to like videos, comment, and subscribe.</span>
        <span className='border signInButton rounded-3xl p-2 text-blue-700 flex items-center cursor-pointer w-28 mt-1'> <AccountCircleOutlinedIcon /><span className='ml-2'>SIGN IN</span></span>
        </div>
      } */}
            <div className="subscription links">
                <h4>Explore</h4>
                <div className="menu_1">
                    {categoryMenuList ? <>
                        {categoryMenuList.map((menuItem, key) =>
                            <div className={'listItem ' + (activeSidebarMenu === menuItem.title ? 'activeMenu' : null)} key={key} onClick={() => handleExploreMenuClick(menuItem)}>
                                <span className='icon'></span>{activeSidebarMenu === menuItem.title ? menuItem.activeIcon : menuItem.icon}
                                <span className='title'>{menuItem.title}</span>
                            </div>
                        )}
                    </> : null
                    }
                </div>
            </div>

        </div>
    )
}