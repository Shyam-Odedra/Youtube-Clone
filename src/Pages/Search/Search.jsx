import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './Search.css';
import Context from '../../Context/Context';
import ApiService from '../../Services/ApiService';
import moment from 'moment';

// const searchResult = {
//     "kind": "youtube#searchListResponse",
//     "etag": "Oq8uGhRs8HTl053qOaZf0Iyi4_Q",
//     "nextPageToken": "CBkQAA",
//     "regionCode": "IN",
//     "pageInfo": {
//         "totalResults": 1000000,
//         "resultsPerPage": 25
//     },
//     "items": [
//         {
//             "kind": "youtube#searchResult",
//             "etag": "dRRK3K27P3aoHkwyD2ejmfMgNE4",
//             "id": {
//                 "kind": "youtube#channel",
//                 "channelId": "UCBqFKDipsnzvJdt6UT0lMIg"
//             },
//             "snippet": {
//                 "publishedAt": "2012-02-13T08:05:01Z",
//                 "channelId": "UCBqFKDipsnzvJdt6UT0lMIg",
//                 "title": "Sandeep Maheshwari",
//                 "description": "Sandeep Maheshwari is a name among millions who struggled, failed and surged ahead in search of success, happiness and ...",
//                 "thumbnails": {
//                     "default": {
//                         "url": "https://yt3.ggpht.com/W-LbQKXkf3HJsvau1PC8jnOoryI_7AjdGGORmmpWUO4Bdb3Alem-X4fasmV43aRXRydCy3gyAig=s88-c-k-c0xffffffff-no-rj-mo"
//                     },
//                     "medium": {
//                         "url": "https://yt3.ggpht.com/W-LbQKXkf3HJsvau1PC8jnOoryI_7AjdGGORmmpWUO4Bdb3Alem-X4fasmV43aRXRydCy3gyAig=s240-c-k-c0xffffffff-no-rj-mo"
//                     },
//                     "high": {
//                         "url": "https://yt3.ggpht.com/W-LbQKXkf3HJsvau1PC8jnOoryI_7AjdGGORmmpWUO4Bdb3Alem-X4fasmV43aRXRydCy3gyAig=s800-c-k-c0xffffffff-no-rj-mo"
//                     }
//                 },
//                 "channelTitle": "Sandeep Maheshwari",
//                 "liveBroadcastContent": "none",
//                 "publishTime": "2012-02-13T08:05:01Z"
//             }
//         },
//         {
//             "kind": "youtube#searchResult",
//             "etag": "pLKn17W_21_xu1I4DqrxM7Ka20k",
//             "id": {
//                 "kind": "youtube#video",
//                 "videoId": "AdrlC1L8jj8"
//             },
//             "snippet": {
//                 "publishedAt": "2023-12-23T17:51:06Z",
//                 "channelId": "UCmTM_hPCeckqN3cPWtYZZcg",
//                 "title": "EXPLAINED - Why Sandeep Maheshwari vs Vivek Bindra Face-off Matters for Young India | Akash Banerjee",
//                 "description": "Social Media is blowing up with the Sandeep Maheshwari vs Vive Bindra face-off....but there is a bigger problem waiting for ...",
//                 "thumbnails": {
//                     "default": {
//                         "url": "https://i.ytimg.com/vi/AdrlC1L8jj8/default.jpg",
//                         "width": 120,
//                         "height": 90
//                     },
//                     "medium": {
//                         "url": "https://i.ytimg.com/vi/AdrlC1L8jj8/mqdefault.jpg",
//                         "width": 320,
//                         "height": 180
//                     },
//                     "high": {
//                         "url": "https://i.ytimg.com/vi/AdrlC1L8jj8/hqdefault.jpg",
//                         "width": 480,
//                         "height": 360
//                     }
//                 },
//                 "channelTitle": "The Deshbhakt",
//                 "liveBroadcastContent": "none",
//                 "publishTime": "2023-12-23T17:51:06Z"
//             }
//         },
//         {
//             "kind": "youtube#searchResult",
//             "etag": "7U1pQDEtrdVQZIn-eINxmefl0jw",
//             "id": {
//                 "kind": "youtube#video",
//                 "videoId": "fidPWVLwfs8"
//             },
//             "snippet": {
//                 "publishedAt": "2023-12-20T18:11:10Z",
//                 "channelId": "UCBqFKDipsnzvJdt6UT0lMIg",
//                 "title": "Stop Vivek Bindra #StopVivekBindra | By Sandeep Maheshwari",
//                 "description": "If you want a refund of your money paid to BADA BUSINESS, kindly email our legal team at Legal@sandeepmaheshwari.com ...",
//                 "thumbnails": {
//                     "default": {
//                         "url": "https://i.ytimg.com/vi/fidPWVLwfs8/default.jpg",
//                         "width": 120,
//                         "height": 90
//                     },
//                     "medium": {
//                         "url": "https://i.ytimg.com/vi/fidPWVLwfs8/mqdefault.jpg",
//                         "width": 320,
//                         "height": 180
//                     },
//                     "high": {
//                         "url": "https://i.ytimg.com/vi/fidPWVLwfs8/hqdefault.jpg",
//                         "width": 480,
//                         "height": 360
//                     }
//                 },
//                 "channelTitle": "Sandeep Maheshwari",
//                 "liveBroadcastContent": "none",
//                 "publishTime": "2023-12-20T18:11:10Z"
//             }
//         },
//         {
//             "kind": "youtube#searchResult",
//             "etag": "vyGOI7qhaIDCVufGYcqzm-yo2tg",
//             "id": {
//                 "kind": "youtube#video",
//                 "videoId": "md4faK4gcOo"
//             },
//             "snippet": {
//                 "publishedAt": "2023-12-24T04:30:11Z",
//                 "channelId": "UC5fcjujOsqD-126Chn_BAuA",
//                 "title": "The Most Shocking Climax Ever! | Sunday Show",
//                 "description": "Fuel Us: Be a part of our journey! Support us in our mission to explore the heart of India by contributing, whether it's the cost of a ...",
//                 "thumbnails": {
//                     "default": {
//                         "url": "https://i.ytimg.com/vi/md4faK4gcOo/default.jpg",
//                         "width": 120,
//                         "height": 90
//                     },
//                     "medium": {
//                         "url": "https://i.ytimg.com/vi/md4faK4gcOo/mqdefault.jpg",
//                         "width": 320,
//                         "height": 180
//                     },
//                     "high": {
//                         "url": "https://i.ytimg.com/vi/md4faK4gcOo/hqdefault.jpg",
//                         "width": 480,
//                         "height": 360
//                     }
//                 },
//                 "channelTitle": "Sarthak Goswami",
//                 "liveBroadcastContent": "none",
//                 "publishTime": "2023-12-24T04:30:11Z"
//             }
//         },
//     ]
// }

export default function Search() {
    const [searchResultsData, setSearchResultsData] = useState([]);
    const ApiServices = new ApiService();
    const { globalState, globalDispatch } = useContext(Context);

    useEffect(() => {
        async function fetchData() {
            // setTrendingVideos(YoutubeVideos);
            await fetchSearchResults();
        }
        fetchData();
    }, []);

    const fetchSearchResults = async () => {
        try {
            const searchResults = await ApiServices.getSearchResults(globalState?.searchQuery, globalState?.searchVideosToken);
            if (searchResults?.nextPageToken) {
                // globalDispatch({
                //     searchVideosToken: searchResults?.nextPageToken
                // })
            }
            const finalData = extractSearchData(searchResults);
            console.log('finalData', finalData);
            const videosWithChannelInfo = await Promise.all(
                finalData.map(async (searchItems) => {
                    if (searchItems?.videoId) {
                        const videoInfo = await ApiServices.getVideoDetails(searchItems?.videoId);
                        const channelInfo = await getChannelInfo(searchItems?.channelId);
                        console.log('videoInfo', videoInfo);
                        return {
                            ...searchItems,
                            thumbnailUrl: videoInfo?.items?.[0]?.snippet?.thumbnails?.maxres?.url || videoInfo?.items?.[0]?.snippet?.thumbnails?.medium?.url,
                            categoryId: videoInfo?.items?.[0]?.snippet?.categoryId,
                            contentDetails: videoInfo?.items?.[0]?.contentDetails,
                            statistics: videoInfo?.items?.[0]?.statistics,
                            channelImage: channelInfo?.items?.[0]?.snippet?.thumbnails?.medium?.url
                        };
                    } else {
                        const channelInfo = await getChannelInfo(searchItems?.channelId);
                        console.log('channelInfo', channelInfo);
                        return {
                            ...searchItems,
                            username: channelInfo?.items?.[0]?.snippet?.customUrl,
                            contentDetails: channelInfo?.items?.[0]?.contentDetails,
                            statistics: channelInfo?.items?.[0]?.statistics,
                            channelImage: channelInfo?.items?.[0]?.snippet?.thumbnails?.medium?.url
                        };
                    }

                })
            );
            setSearchResultsData((prevVideos) => [...prevVideos, ...videosWithChannelInfo]);
            console.log('searchResultsData ==>', searchResultsData);

        } catch (error) {
            console.log('Error => ', error);
        }
    }

    const extractSearchData = (videos) => {
        console.log('videos ==>', videos);
        const videoData = videos?.items?.map(item => {
            return {
                videoId: item?.id?.videoId,
                publishedAt: item?.snippet?.publishTime,
                channelId: item?.snippet?.channelId,
                title: item?.snippet?.title,
                description: item?.snippet?.description,
                channelTitle: item?.snippet?.channelTitle,
            };
        });

        return videoData;
    }

    const getChannelInfo = async (channelId) => {
        try {
            return await ApiServices.getVideoChannelInfo(channelId);
        } catch (error) {
            console.log('getChannelInfo : Error => ', error);
        }
    }

    function convertViewCount(viewCount) {
        viewCount = parseInt(viewCount);

        if (viewCount >= 1000000) {
            return (viewCount / 1000000).toFixed(2) + 'M';
        } else if (viewCount >= 1000) {
            return (viewCount / 1000).toFixed(2) + 'k';
        } else {
            return viewCount.toString();
        }
    }

    const showSearchItems = (item) => {
        if (item?.videoId) {
            return <div className='searchResultVideo mt-4'>
                <div className="flex justify-start">
                    <div className="img w-[360px] mr-4 flex justify-center ">
                        <div className="image-container w-full flex justify-center items-center overflow-hidden">
                            <img className='rounded-xl w-full' src={item?.thumbnailUrl} alt="" />
                        </div>
                    </div>
                    <div className="flex max-w-[720px] flex-col items-start text-start align-middle">
                        <span className='text-base'>{item?.title}</span>
                        <div className="user">
                            <span className="views text-[#aaa] text-sm">{`${convertViewCount(item?.statistics?.viewCount)} view`}</span>
                            <span className='text-[#aaa] text-sm'>{moment(item?.publishedAt).fromNow()}</span>
                        </div>
                        <div className="user mt-2">
                            <img src={item?.channelImage} alt="" />
                            <span className="text-sm ml-2 text-[#aaa]">{item?.channelTitle}</span>
                        </div>
                        <span className='text-sm mt-2 text-[#aaa]'>{item?.description}</span>
                    </div>
                </div>
            </div>
        }
        else {
            return <div className='searchResultChannel mt-2'>
                <div className="flex justify-start">
                    <div className="img w-[360px] mr-4 flex justify-center ">
                        <div className="image-container w-[246px] flex justify-center items-center overflow-hidden">
                            <img className='h-[136px] rounded-full' src={item?.channelImage} alt="" />
                        </div>
                    </div>
                    <div className="flex max-w-[720px] flex-col justify-start items-start text-start">
                        <span className='text-base'>{item?.title}</span>
                        <div className='mt-1'>
                            <span className="views text-[#aaa] text-sm">{item?.username}</span>
                            <span className='text-[#aaa] text-sm'>{`${formatYouTubeSubscribers(item?.statistics?.subscriberCount)} subscribers`}</span>
                        </div>
                        <span className='text-sm mt-1 text-[#aaa]'>{item?.description}</span>
                    </div>
                </div>
            </div>
        }
    }

    const  formatYouTubeSubscribers = (subscribers) => {
        if (subscribers >= 1000000) {
          return (subscribers / 1000000).toFixed(1) + "M";
        } else if (subscribers >= 1000) {
          return (subscribers / 1000).toFixed(1) + "K";
        } else {
          return subscribers.toString();
        }
      }

    return (
        <div className='flex flex-col md:flex-row mt-5 w-full'>
            <Sidebar />
            <div className="searchpage">
                <div className="text-center">
                    {searchResultsData?.length && <div className='flex flex-col justify-start mt-3'>
                        {searchResultsData.map((searchItem) => showSearchItems(searchItem))}
                    </div>}
                </div>
            </div>
        </div>
    )
}
