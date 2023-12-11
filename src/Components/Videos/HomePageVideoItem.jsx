import React from 'react'
import { ImageConfig } from '../../Constants/config'
import moment from 'moment';

export default function HomePageVideoItem(props) {
    const {thumbnailUrl, videoLength, channelLogo, title, channelTitle, statistics, publishedAt } = props.video;
    
    function convertViewCount(viewCount) {
      // Parse the viewCount string to an integer
      viewCount = parseInt(viewCount);
  
      // Check if the number is in the thousands or millions
      if (viewCount >= 1000000) {
          // If it's in the millions, divide by 1,000,000 and append "M"
          return (viewCount / 1000000).toFixed(2) + 'M';
      } else if (viewCount >= 1000) {
          // If it's in the thousands, divide by 1,000 and append "k"
          return (viewCount / 1000).toFixed(2) + 'k';
      } else {
          // Otherwise, return the original number
          return viewCount.toString();
      }
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
          <div className="video">
              <div className="thumbnail">
                <img src={thumbnailUrl} alt="" />
                <span className="minit">{videoLength}</span>
              </div>
              <div className="video-info">
                <div className="user">
                  <img src={channelLogo} alt="" />
                </div>
                <div className="text">
                  <span className="title line-clamp-2">{title}</span>
                  <span className='text-[#aaa] hover:text-[#fff] text-sm'>{channelTitle}</span>
                  <div>
                    <span className="views text-[#aaa] text-sm">{convertViewCount(statistics?.viewCount)}</span>
                    <span className='text-[#aaa] text-sm'>{moment(publishedAt).fromNow()}</span>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}
