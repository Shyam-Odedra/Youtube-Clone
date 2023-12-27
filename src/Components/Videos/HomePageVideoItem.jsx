import React, { useEffect, useState } from 'react'
import { ImageConfig } from '../../Constants/config'
import moment from 'moment';
import "./HomePageVideoItem.css";
import ApiService from '../../Services/ApiService';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../Constants/constants';

export default function HomePageVideoItem(props) {
    const navigate = useNavigate();
    const { videoId, channelId, thumbnailUrl, contentDetails,channelInfo,  channelLogo, title, channelTitle, statistics, publishedAt } = props.video;
    const ApiServices = new ApiService();
    // const [videoChannelInfo, setVideoChannelInfo] = useState([]);

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

    function convertDuration(duration) {
        // Use regex to extract hours, minutes, and seconds
        const regex = /PT(\d+H)?(\d+M)?(\d+S)?/;
        const matches = duration?.match(regex);

        // Extract hours, minutes, and seconds from regex matches
        const hours = matches?.[1] ? parseInt(matches?.[1]) : 0;
        const minutes = matches?.[2] ? parseInt(matches?.[2]) : 0;
        const seconds = matches?.[3] ? parseInt(matches?.[3]) : 0;

        // If the duration is less than one hour, only show minutes and seconds
        if (hours === 0) {
            return `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }

        // If the duration is less than one minute, only show seconds
        if (minutes === 0) {
            return `00:${seconds.toString().padStart(2, '0')}`;
        }

        // Convert duration to hours, minutes, and seconds
        const totalSeconds = hours * 3600 + minutes * 60 + seconds;

        // Calculate hours, minutes, and seconds
        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;

        // Format the result as a string
        const formattedResult = `${m}:${s.toString().padStart(2, '0')}`;

        return formattedResult;
    }

    return (
        // <div className='flex flex-col'>
        //     <div className="thumbnail">
        //         <img src={ImageConfig.THUMBNAIL2} alt="" />
        //     </div>
        //     <div className="info flex justify-start items-center">
        //         <div className="user">
        //             <img src={ImageConfig.ACCOUNT_LOGO} alt="" />
        //         </div>
        //         <div className="flex">
        //             <span className="title">How to Create Netflix Home page Clone in HTML and CSS</span>
        //             <span className='channel-name'>Coding Power</span>
        //         </div>
        //     </div>
        // </div>
        <>
            <div key={videoId} className="video">
                <div className="thumbnail">
                    <img onClick={() => navigate(`${ROUTES.VIDEO}?id=${videoId}`)} src={thumbnailUrl} alt="" />
                    <span className="minit">{convertDuration(contentDetails?.duration)}</span>
                </div>
                <div className="video-info">
                    <div className="user">
                        <img src={channelInfo?.items?.[0]?.snippet?.thumbnails?.medium?.url} alt="" />
                    </div>
                    <div className="text">
                        <span className="title line-clamp-2">{title}</span>
                        <span className='text-[#aaa] hover:text-[#fff] text-sm'>{channelTitle}</span>
                        <div>
                            <span className="views text-[#aaa] text-sm">{`${convertViewCount(statistics?.viewCount)} view`}</span>
                            <span className='text-[#aaa] text-sm'>{moment(publishedAt).fromNow()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
