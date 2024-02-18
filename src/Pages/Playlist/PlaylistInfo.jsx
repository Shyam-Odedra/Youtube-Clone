import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import ApiService from '../../Services/ApiService';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { parsePlaylistItems } from '../../utils/parsePlaylistItems';
import './PlaylistInfo.css';
import { ROUTES } from '../../Constants/constants';

const data = [
    {
        videoId: "AG44ZloBsP8",
        publishedAt: "3 years ago",
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
        videoTitle: "FINAL winners kon?? Bnftv Awards 2023",
        videoThumbnail: "https://i.ytimg.com/vi/CBlqLq_lAF4/maxresdefault.jpg",
        videoDuration: "18:11",
        videoViews: "566.21k",
        channelId: "UCUinnqDgIsNFleLdkZKbP-w",
        channelName: "BnfTV"
    }
];

export default function PlaylistInfo() {
    const navigate = useNavigate();
    const [queryParams] = useSearchParams();
    const ApiServices = new ApiService();
    const [playlistId, setPlaylistId] = useState();
    const [playlistInfo, setPlaylistInfo] = useState();
    const [playlistVideos, setPlaylistVideos] = useState(data);

    useEffect(() => {
        const listId = queryParams.get('id');
        const channelId = queryParams.get('channelId');
        console.log('id', listId);
        console.log('channelId', channelId);
        setPlaylistId(listId);
        getChannelPlaylists(channelId);
        getPlaylistItems(listId);
    }, []);

    const getPlaylistItems = async (playlistId) => {
        try {
            const { items } = await ApiServices.getPlaylistItems(playlistId);
            const playlistItems = await parsePlaylistItems(items);
            console.log("playlistItems", playlistItems);
            setPlaylistVideos(playlistItems);
        } catch (error) {
            console.log("getPlaylistItems Error: ", error);
        }
    };

    const getChannelPlaylists = async (channelId) => {
        try {
            const { items: channelPlaylists } = await ApiServices.getChannelPlaylists(channelId);
            const playlistItem = channelPlaylists.filter((playlist) => playlist?.id === playlistId);
            setPlaylistInfo(playlistItem);
            console.log("playlistItem", playlistItem);
        } catch (error) {

        }
    };

    return (
        <div className='flex flex-col md:flex-row mt-2 w-full'>
            <Sidebar />
            {playlistInfo?.id.length > 0 && playlistVideos?.length > 0 &&
                <div className='playlistInfo flex justify-start'>
                    <div className='flex w-full pr-7'>
                        <div className="flex w-[360px] rounded-xl flex-col h-[calc(100vh- 85px)] relative" style={{ backgroundColor: "linear-gradient(to bottom, rgba(89,67,55,0.800) 0%, rgba(89,67,55,0.298) 33.000001%, rgba(15,15,15,1.000) 100%)" }}>
                            <div style={{ backgroundColor: "#594337" }} className='absolute left-0 right-0 bottom-0 top-0'>
                                <div className="flex-1 w-full h-full mx-auto p-6 rounded-2xl flex relative">
                                    <div className='w-ful'>
                                        <div className="flex flex-col w-full">
                                            <div className="playlistImage w-full">
                                                <img className='w-full rounded-xl' src={'https://i.ytimg.com/vi/AG44ZloBsP8/mqdefault.jpg'} alt="playlistImage" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <h1 className="text-2xl font-bold">Bnfty Awards 2021: Final Winners</h1>
                                <div className="flex items-center">
                                    <p className="text-gray-500 mr-2">7 videos</p>
                                    <p className="text-gray-500">17,730 views</p>
                                    <p className="text-gray-500 ml-2">Last updated on Jan 2, 2024</p>
                                </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex-1 ml-2">
                            {playlistVideos.map((item, index) => {
                                return <div className="flex flex-1 rounded-lg py-2 cursor-pointer hover:bg-[rgba(255,255,255,0.1)] justify-start">
                                    <div className="flex video justify-start items-center">
                                        <span className='w-9 text-base text-[#aaa] text-center'>{index + 1}</span>
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
                        {/* <div className="playlistVideos">
                            <div className="container mx-auto px-4 mt-8">

                                <ul className="video-list">
                                    {playlistData.map((video) => (
                                        <li key={video.id} className="video-item flex items-center mb-4">
                                            <div className="video-thumbnail mr-4">
                                                <img
                                                    src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                                                    alt={video.title}
                                                />
                                            </div>
                                            <div className="video-info">
                                                <h3 className="text-lg font-medium">{video.title}</h3>
                                                <p className="text-gray-500">
                                                    {video.channel} • {video.views} • {video.publishedAt}
                                                </p>
                                                {video.duration && (
                                                    <p className="text-gray-500">{video.duration}</p>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div> */}
                    </div>
                </div>

            }
        </div>

    )
}