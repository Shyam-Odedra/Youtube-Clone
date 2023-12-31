import React from 'react'
import "./HomeVideoCard.css";
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../Constants/constants';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function HomeVideoCard(props) {
    const navigate = useNavigate();
    const { videoId, publishedTime, videoTitle, videoThumbnail, videoDuration, videoViews, channelInfo } = props.video;
    const { channelName, channelLogo } = channelInfo;


    return (
        <div key={videoId} className="video">
            <div className="thumbnail">
                <LazyLoadImage
                  effect="opacity"
                    onClick={() => navigate(`${ROUTES.VIDEO}?id=${videoId}`)}
                    alt={channelName}
                    src={videoThumbnail} />
                {/* <img src={videoThumbnail} alt="" /> */}
                <span className="minit">{videoDuration}</span>
            </div>
            <div className="video-info">
                <div className="user">
                    <LazyLoadImage
                         effect="opacity"
                        alt={channelName}
                        src={channelLogo} />
                    {/* <img src={channelLogo} alt="" /> */}
                </div>
                <div className="text">
                    <span onClick={() => navigate(`${ROUTES.VIDEO}?id=${videoId}`)} className="title line-clamp-2">{videoTitle}</span>
                    <span className='text-[#aaa] hover:text-[#fff] text-sm'>{channelName}</span>
                    <div>
                        <span className="views text-[#aaa] text-sm">{`${videoViews} views`}</span>
                        <span className='text-[#aaa] text-sm'>{publishedTime}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}