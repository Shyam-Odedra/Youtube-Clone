import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import ApiService from '../../Services/ApiService';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { parsePlaylistItems } from '../../utils/parsePlaylistItems';
import './PlaylistInfo.css';
import { ROUTES } from '../../Constants/constants';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { Tooltip } from '@mui/material';

const data = [
    {
        videoId: "AG44ZloBsP8",
        publishedAt: "3 years ago",
        publishedTime: "2021-01-01T17:24:01Z",
        videoTitle: "Bnftv Awards FINAL Winners: kon jeeta?? 🤔",
        videoThumbnail: "https://i.ytimg.com/vi/AG44ZloBsP8/maxresdefault.jpg",
        videoDuration: "20:22",
        videoViews: "341.29k",
        channelId: "UCUinnqDgIsNFleLdkZKbP-w",
        channelName: "BnfTV"
    },
    {
        videoId: "ILjjbKc9w_k",
        publishedAt: "2 years ago",
        publishedTime: "2021-12-20T14:58:05Z",
        videoTitle: "Bnftv Awards 2021: Announcement (its finally here 😍)",
        videoThumbnail: "https://i.ytimg.com/vi/ILjjbKc9w_k/maxresdefault.jpg",
        videoDuration: "05:15",
        videoViews: "260.67k",
        channelId: "UCUinnqDgIsNFleLdkZKbP-w",
        channelName: "BnfTV"
    },
    {
        videoId: "hzVGMuqVDB4",
        publishedAt: "2 years ago",
        publishedTime: "2021-12-30T15:36:10Z",
        videoTitle: "Bnftv Awards 2021: Final Winners 😍🔥",
        videoThumbnail: "https://i.ytimg.com/vi/hzVGMuqVDB4/maxresdefault.jpg",
        videoDuration: "13:01",
        videoViews: "424.22k",
        channelId: "UCUinnqDgIsNFleLdkZKbP-w",
        channelName: "BnfTV"
    },
    {
        videoId: "XkClWp2l8YE",
        publishedAt: "2 years ago",
        publishedTime: "2022-01-01T16:23:09Z",
        videoTitle: "Roasting my own Award show 😫🔥😢",
        videoThumbnail: "https://i.ytimg.com/vi/XkClWp2l8YE/maxresdefault.jpg",
        videoDuration: "10:09",
        videoViews: "277.13k",
        channelId: "UCUinnqDgIsNFleLdkZKbP-w",
        channelName: "BnfTV"
    },
    {
        videoId: "dPPEUNLirwg",
        publishedAt: "a year ago",
        publishedTime: "2021-01-01T17:24:01Z",
        videoTitle: "Bnftv Awards 2022 Announcement",
        videoThumbnail: "https://i.ytimg.com/vi/dPPEUNLirwg/maxresdefault.jpg",
        videoDuration: "03:08",
        videoViews: "238.02k",
        channelId: "UCUinnqDgIsNFleLdkZKbP-w",
        channelName: "BnfTV"
    },
    {
        videoId: "WGgrqS8hYtg",
        publishedAt: "a year ago",
        publishedTime: "2021-01-01T17:24:01Z",
        videoTitle: "Final winner kon?? 🤔 BNFTV awards 2022 Results",
        videoThumbnail: "https://i.ytimg.com/vi/WGgrqS8hYtg/maxresdefault.jpg",
        videoDuration: "16:02",
        videoViews: "480.31k",
        channelId: "UCUinnqDgIsNFleLdkZKbP-w",
        channelName: "BnfTV"
    },
    {
        videoId: "CBlqLq_lAF4",
        publishedAt: "2 months ago",
        publishedTime: "2024-01-02T15:48:07Z",
        videoTitle: "FINAL winners kon?? Bnftv Awards 2023",
        videoThumbnail: "https://i.ytimg.com/vi/CBlqLq_lAF4/maxresdefault.jpg",
        videoDuration: "18:11",
        videoViews: "566.21k",
        channelId: "UCUinnqDgIsNFleLdkZKbP-w",
        channelName: "BnfTV"
    }
];
const info = {
    id: "PLeYKN6CIJaMqg9Rq7_slx8KxyCx0M8sdq",
    snippet: {
        publishedAt: "2021-01-01T17:23:53Z",
        channelId: "UCUinnqDgIsNFleLdkZKbP-w",
        title: "Bnftv Awards",
        thumbnails: {
            medium: {
                url: "https://i.ytimg.com/vi/AG44ZloBsP8/mqdefault.jpg",
                width: 320,
                height: 180
            },
        },
        channelTitle: "BnfTV",
    },
    contentDetails: {
        itemCount: 7
    }
}
export default function PlaylistInfo() {
    const navigate = useNavigate();
    const [queryParams] = useSearchParams();
    const ApiServices = new ApiService();
    const [playlistInfo, setPlaylistInfo] = useState();
    const [playlistVideos, setPlaylistVideos] = useState();
    const [lastUpdatedDate, setLastUpdatedDate] = useState("Jan 2, 2024");

    useEffect(() => {
        const playlistId = queryParams.get('id');
        const channelId = queryParams.get('channelId');
        getChannelPlaylists(channelId, playlistId);
        getPlaylistItems(playlistId);
    }, []);

    const getPlaylistItems = async (playlistId) => {
        try {
            let latestPublishedTime = "";
            const { items } = await ApiServices.getPlaylistItems(playlistId);
            const playlistItems = await parsePlaylistItems(items);
            console.log("playlistItems", playlistItems);
            setPlaylistVideos(playlistItems);
            playlistItems.forEach(video => {
                if (video?.publishedTime > latestPublishedTime) {
                    latestPublishedTime = video?.publishedTime;
                }
            });

            const formattedLatestTime = new Date(latestPublishedTime).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit'
            });
            setLastUpdatedDate(formattedLatestTime);
        } catch (error) {
            console.log("getPlaylistItems Error: ", error);
        }
    };

    const getChannelPlaylists = async (channelId, playlistId) => {
        try {
            const { items: channelPlaylists } = await ApiServices.getChannelPlaylists(channelId);
            const playlistItem = channelPlaylists.find((playlist) => playlist?.id === playlistId);
            setPlaylistInfo(playlistItem);
            console.log("playlistItem", playlistItem);
        } catch (error) {

        }
    };

    return (
        <div className='flex flex-col md:flex-row mt-2 w-full'>
            <Sidebar />
            {playlistVideos?.length > 0 &&
                <div className='playlistInfo flex justify-start'>
                    <div className='flex w-full pr-7 relative'>
                        <div className="relative w-[360px] max-h-[100vh] overflow-hidden rounded-2xl" >
                            <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden bg-[#594337]"style={{ background: "linear-gradient(to bottom, rgba(89,67,55,0.800) 0%, rgba(89,67,55,0.298) 70%, rgba(15,15,15,1.000) 100%)" }} >
                                <div className="shadowImage">
                                    <img className='w-full rounded-xl' src={playlistInfo?.snippet?.thumbnails?.medium?.url} alt="playlistImage" />
                                </div>
                            </div>
                            <div hidden className="flex w-full rounded-xl flex-col h-[calc(100vh- 85px)] relative">
                                <div style={{ backgroundColor: "#594337" }} className='absolute left-0 right-0 bottom-0 top-0'>
                                    <div className="flex-1 w-full h-full mx-auto p-6 rounded-2xl flex flex-col relative">
                                        <div className='w-full'>
                                            <div className="flex flex-col w-full">
                                                <div className="playlistImage w-full">
                                                    <img className='w-full rounded-xl' src={playlistInfo?.snippet?.thumbnails?.medium?.url} alt="playlistImage" />
                                                </div>
                                            </div>
                                        </div>
                                        <h1 className="text-2xl mt-5 font-bold">{playlistInfo?.snippet?.title}</h1>
                                        <span className='text-sm font-medium mt-3 text-[#fff]' onClick={() => navigate(`${ROUTES.CHANNEL}?id=${playlistInfo?.snippet?.channelId}`)}>{playlistInfo?.snippet?.channelTitle}</span>
                                        <div className="flex items-center mt-1 text-[#aaa] text-sm">
                                            <p className="text-gray-500 mr-2">{playlistInfo?.contentDetails?.itemCount} videos</p>
                                            <p className="text-gray-500">Last updated on {lastUpdatedDate}</p>
                                        </div>
                                        <div className="flex items-center text-[#aaa] text-sm mt-3">
                                            <Tooltip placement='top' title="Save Playlist" color='white' className='rounded-full cursor-pointer hover:bg-themeBlack'>
                                                <button className='bg-[rgba(255,255,255,0.1)] w-11 h-11 hover:bg-[rgba(255,255,255,0.2)] text-[15px] text-[white] flex justify-center items-center rounded-full mr-2'> <PlaylistAddIcon fontSize='small' color='white' /></button>
                                            </Tooltip>
                                            <Tooltip placement='top' title="Share" color='white' className='rounded-full cursor-pointer hover:bg-themeBlack'>
                                                <button className='bg-[rgba(255,255,255,0.1)] w-11 h-11 hover:bg-[rgba(255,255,255,0.2)] text-[15px] text-[white] flex justify-center items-center rounded-full mr-2'> <ShareOutlinedIcon fontSize='small' color='white' /></button>
                                            </Tooltip>
                                            <Tooltip placement='top' title="Download" color='white' className='rounded-full cursor-pointer hover:bg-themeBlack'>
                                                <button className='bg-[rgba(255,255,255,0.1)] w-11 h-11 hover:bg-[rgba(255,255,255,0.2)] text-[15px] text-[white] flex justify-center items-center rounded-full p-2 mr-2'> <DownloadOutlinedIcon fontSize='small' color='white' /></button>
                                            </Tooltip>
                                            <Tooltip placement='top' title="More" color='white' className='rounded-full cursor-pointer hover:bg-themeBlack'>
                                                <button className='bg-[rgba(255,255,255,0.1)] w-11 h-11 hover:bg-[rgba(255,255,255,0.2)] text-[15px] text-[white] flex justify-center items-center rounded-full p-2'> <MoreVertIcon fontSize='small' color='white' /></button>
                                            </Tooltip>
                                        </div>
                                        <div className="mt-3 w-full flex gap-2">
                                            <button className='bg-[#fff] text-[15px] text-[#111] rounded-full flex flex-1 justify-center items-center py-2 px-3 leading-6'><PlayArrowIcon fontSize='medium' color='white' className='mr-1.5' /> Play Video</button>
                                            <button className='bg-[rgba(255,255,255,0.1)] text-[15px] text-[#fff] rounded-full flex flex-1 justify-center items-center py-2 px-3 leading-6'><ShuffleIcon fontSize='medium' color='white' className='mr-1.5' /> Shuffle</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex-1 ml-2 mb-7">
                            {playlistVideos.map((item, index) => {
                                return <div className="flex flex-1 rounded-lg py-2 cursor-pointer hover:bg-[rgba(255,255,255,0.1)] justify-start">
                                    <div className="flex video justify-start items-center">
                                        <span className='w-11 text-base text-[#aaa] text-center'>{index + 1}</span>
                                        <div className="img  w-[160px] relative mr-4 flex justify-center ">
                                            <div onClick={() => navigate(`${ROUTES.VIDEO}?id=${item?.videoId}`)} className="image-container cursor-pointer w-full flex justify-center items-center overflow-hidden">
                                                <img className='rounded-lg w-full' src={item?.videoThumbnail} alt={item?.videoTitle} />
                                                <span className="minit">{item?.videoDuration}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-start text-start align-middle">
                                            <span onClick={() => navigate(`${ROUTES.VIDEO}?id=${item?.videoId}`)} className='text-base cursor-pointer'>{item?.videoTitle}</span>
                                            <div className="user">
                                                <span className="text-sm channelName hover:text-[#fff] cursor-pointer text-[#aaa]" onClick={() => navigate(`${ROUTES.CHANNEL}?id=${item?.channelId}`)}>{item?.channelName}</span>
                                                <span className="views text-[#aaa] text-sm">{`${item?.videoViews} view`}</span>
                                                <span className='text-[#aaa] text-sm'>{item?.publishedAt}</span>
                                            </div>
                                            <div className="user mt-2">
                                            </div>
                                            <span className='text-sm mt-2 text-[#aaa]'>{item?.videoDescription}</span>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            }
        </div>

    )
}