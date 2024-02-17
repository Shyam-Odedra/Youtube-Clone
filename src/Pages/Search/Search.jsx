import React, { useEffect } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './Search.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ROUTES } from '../../Constants/constants';
import { getSearchResults } from '../../Store/reducers/getSearchResults';
import { clearSearchVideos } from '../../Store/features/youtubeSlice';

export default function Search() {
    const searchResultsData = useSelector(state => state.youtube.searchResults);
    const searchQuery = useSelector(state => state.youtube.searchQuery);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [queryParams] = useSearchParams();

    useEffect(() => {
        console.log('object', queryParams.get('query'));
        if (!searchResultsData.length) {
            // dispatch(clearSearchVideos());
            dispatch(getSearchResults())
        }
    }, []);

    const showSearchItems = (item) => {
        if (item?.type === 'channel') {
            return <div className='searchResultChannel my-5'>
                <div className="flex justify-start">
                    <div className="img w-[360px] mr-4 flex justify-center ">
                        <div onClick={() => navigate(`${ROUTES.CHANNEL}?id=${item?.channelId}`)} className="image-container cursor-pointer w-[246px] flex justify-center items-center overflow-hidden">
                            <img className='h-[136px] w-[136px] rounded-full' src={item?.channelImage} alt={item?.channelTitle} />
                        </div>
                    </div>
                    <div className="flex max-w-[720px] flex-col justify-start items-start text-start">
                        <span className='text-base cursor-pointer' onClick={() => navigate(`${ROUTES.CHANNEL}?id=${item?.channelId}`)}>{item?.channelTitle}</span>
                        <div className='mt-1'>
                            <span className="views text-[#aaa] text-sm">{item?.username}</span>
                            <span className='text-[#aaa] text-sm'>{`${item?.channelSubscribers} subscribers`}</span>
                        </div>
                        <span className='text-sm mt-1 text-[#aaa]'>{item?.channelDescription}</span>
                    </div>
                </div>
            </div>
        }
        else {
            return <div className='searchResultVideo mt-4'>
                <div className="flex justify-start">
                    <div className="img w-[360px] relative mr-4 flex justify-center ">
                        <div onClick={() => navigate(`${ROUTES.VIDEO}?id=${item?.videoId}`)} className="image-container cursor-pointer w-full flex justify-center items-center overflow-hidden">
                            <img className='rounded-xl w-full' src={item?.thumbnailUrl} alt={item?.videoTitle} />
                            <span className="minit">{item?.videoDuration}</span>
                        </div>
                    </div>
                    <div className="flex max-w-[720px] flex-col items-start text-start align-middle">
                        <span onClick={() => navigate(`${ROUTES.VIDEO}?id=${item?.videoId}`)} className='text-base cursor-pointer'>{item?.videoTitle}</span>
                        <div className="user">
                            <span className="views text-[#aaa] text-sm">{`${item?.videoViews} view`}</span>
                            <span className='text-[#aaa] text-sm'>{item?.publishedAt}</span>
                        </div>
                        <div className="user mt-2">
                            <img src={item?.channelImage} alt={item?.channelTitle} onClick={() => navigate(`${ROUTES.CHANNEL}?id=${item?.channelId}`)} />
                            <span className="text-sm ml-2 cursor-pointer text-[#aaa]" onClick={() => navigate(`${ROUTES.CHANNEL}?id=${item?.channelId}`)}>{item?.channelTitle}</span>
                        </div>
                        <span className='text-sm mt-2 text-[#aaa]'>{item?.videoDescription}</span>
                    </div>
                </div>
            </div>
        }
    }

    // const SearchSkeleton = (item) => {
    //     return <div key={item} className='w-full flex justify-start items-start h-full mb-3'>
    //         <Skeleton variant="rectangular" className='w-[360px] rounded-xl' animation='wave' sx={{ bgcolor: 'grey.900', width: '100%', height: '180px' }} />
    //         <div className="flex w-full flex-1">
    //             <Skeleton variant="circular" className='mt-2.5 w-10 mr-3' width={40} height={40} animation='wave' sx={{ bgcolor: 'grey.900' }} />
    //             <div className="flex flex-col mt-1 flex-1">
    //                 <Skeleton variant="text" sx={{ flex: 1, fontSize: '18px', bgcolor: 'grey.900' }} animation='wave' />
    //                 <Skeleton variant="text" sx={{ fontSize: '18px', bgcolor: 'grey.900' }} animation='wave' />
    //             </div>
    //         </div>
    //     </div>
    // }

    return (
        <div className='flex flex-col md:flex-row mt-5 w-full'>
            <Sidebar />
            <div className="searchpage">
                <div className="text-center">
                    {searchResultsData?.length ? <div className='flex flex-col justify-start mt-3'>
                        {searchResultsData.map((searchItem) => showSearchItems(searchItem))}
                    </div> :
                        ''
                        // <div className="flex w-full flex-col justify-start mt-3" >
                        //     {Array.from(new Array(5)).map((item) => (
                        //         SearchSkeleton(item)
                        //     ))}
                        // </div>
                    }
                </div>
            </div>
        </div>
    )
}
