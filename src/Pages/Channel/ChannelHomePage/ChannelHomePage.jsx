import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../Constants/constants';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

export default function ChannelHomePage({ videos, popularVideos, featureChannels }) {
    const navigate = useNavigate();
    const [subscribeStatus, setSubscribeStatus] = useState(Array(featureChannels.length).fill(false));

    const handleSubscribeToggle = (index) => {
        const newSubscribeStatus = [...subscribeStatus];
        newSubscribeStatus[index] = !newSubscribeStatus[index];
        setSubscribeStatus(newSubscribeStatus);
    };

    return (
        <div className='w-full'>
            <div className='w-full'>
                <h3 className='text-[20px] font-medium'>Popular Videos</h3>
                <div className="flex mt-4 w-full justify-start items-center">
                    <div className="videoslist w-full grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))]">
                        {popularVideos.map((videoItem) => (
                            <div key={videoItem?.videoId} className="channelVideo">
                                <div className="thumbnail cursor-pointer">
                                    <LazyLoadImage
                                        effect="opacity"
                                        onClick={() => navigate(`${ROUTES.VIDEO}?id=${videoItem?.videoId}`)}
                                        alt={videoItem?.title}
                                        src={videoItem?.thumbnailUrl} />
                                    <span className="minit">{videoItem?.videoDuration}</span>
                                </div>
                                <div className="video-info">
                                    <div className="text">
                                        <span onClick={() => navigate(`${ROUTES.VIDEO}?id=${videoItem?.videoId}`)} className="title line-clamp-2 cursor-pointer">{videoItem?.title}</span>
                                        <div>
                                            <span className="views text-[#aaa] text-sm">{`${videoItem?.videoViews} views`}</span>
                                            <span className='text-[#aaa] text-sm'>{videoItem?.publishedTime}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <hr className='text-[#aaaaaa71] my-4' />
            <div className='w-full mt-4'>
                <h3 className='text-[20px] font-medium'>Latest Videos</h3>
                <div className="flex mt-4 w-full justify-start items-center">
                    <div className="videoslist w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
                        {videos.map((videoItem) => (
                            <div key={videoItem?.videoId} className="channelVideo">
                                <div className="thumbnail cursor-pointer">
                                    <LazyLoadImage
                                        effect="opacity"
                                        onClick={() => navigate(`${ROUTES.VIDEO}?id=${videoItem?.videoId}`)}
                                        alt={videoItem?.title}
                                        src={videoItem?.thumbnailUrl} />
                                    <span className="minit">{videoItem?.videoDuration}</span>
                                </div>
                                <div className="video-info">
                                    <div className="text">
                                        <span onClick={() => navigate(`${ROUTES.VIDEO}?id=${videoItem?.videoId}`)} className="title line-clamp-2 cursor-pointer">{videoItem?.title}</span>
                                        <div>
                                            <span className="views text-[#aaa] text-sm">{`${videoItem?.videoViews} views`}</span>
                                            <span className='text-[#aaa] text-sm'>{videoItem?.publishedTime}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {featureChannels?.length ?
                <>
                    <hr className='text-[#aaaaaa71] my-4' />
                    <div className='w-full mt-4 mb-8'>
                        <h3 className='text-[20px] font-medium'>Featured</h3>
                        <div className="flex mt-5 w-full justify-start items-center">
                            <div className="channelList w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
                                {featureChannels.map((channelItem, index) => (
                                    <div key={channelItem?.channelId} className="channelItem">
                                        <div className="flex justify-center items-center w-[210px]">
                                            <div className="info flex flex-col items-center justify-center w-full">
                                                <div className="image w-[105px] h-[105px]">
                                                    <LazyLoadImage
                                                        effect="opacity"
                                                        className='rounded-full'
                                                        onClick={() => navigate(`${ROUTES.CHANNEL}?id=${channelItem?.channelId}`)}
                                                        alt={channelItem?.channelId}
                                                        src={channelItem?.channelImage} />
                                                </div>
                                                <div className='mt-2 text-center'>
                                                    <span className="block text-sm">{channelItem?.title}</span>
                                                    <span className='text-[#aaa] text-sm'>{`${channelItem?.subscribers} subscribers`}</span>
                                                </div>
                                                <div className="button mt-2">
                                                    {!subscribeStatus[index] ? (
                                                        <button onClick={() => handleSubscribeToggle(index)} className='bg-[#fff] text-[15px] text-[#111] inline-block rounded-full py-1 px-3'>Subscribe</button>
                                                    ) : (
                                                        <button onClick={() => handleSubscribeToggle(index)} className='bg-[rgba(255,255,255,0.1)] text-[15px] text-[white] hover:bg-[#3f3f3f] flex justify-center items-center rounded-full py-1 px-3'>
                                                            <NotificationsActiveIcon fontSize='small' color='white' className='mr-3' />
                                                            Subscribed
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </> : null}
        </div>
    )
}
