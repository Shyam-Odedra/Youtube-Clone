import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../Constants/constants';

export default function ChannelVideos({ videos }) {
    const navigate = useNavigate();
    return (
        <div className='w-full'>
            <div className='w-full'>
                <h3 className='text-[20px] font-medium'>Latest Videos</h3>
                <div className="flex mt-4 w-full justify-start items-center">
                    <div className="videoslist w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
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
        </div>
    )
}
