import React, { useEffect, useState } from 'react';
import './HomeFeed.css';
import HomePageVideoItem from '../../../Components/Videos/HomePageVideoItem';
import { ImageConfig } from '../../../Constants/config';
import ApiService from '../../../Services/ApiService';

export const VideoData = [
  {
    title: 'Image Slider Using HTML, CSS, and JavaScript',
    thumbnail: ImageConfig.THUMBNAIL1,
    channelName: 'Coding Power',
    channelLogo: ImageConfig.ACCOUNT_LOGO,
    videoLength: '7:08',
    views: '28 Views',
    uploadTime: '3 week ago',
  },
  {
    title: 'Netflix Home Page Using HTML and CSS',
    thumbnail: ImageConfig.THUMBNAIL2,
    channelName: 'Coding Power',
    channelLogo: ImageConfig.ACCOUNT_LOGO,
    videoLength: '12:40',
    views: '160 Views',
    uploadTime: '3 week ago',
  },
  {
    title: 'How To Create Login Form In HTML and CSS',
    thumbnail: ImageConfig.THUMBNAIL3,
    channelName: 'Coding Power',
    channelLogo: ImageConfig.ACCOUNT_LOGO,
    videoLength: '8:20',
    views: '33 Views',
    uploadTime: '1 week ago',
  },
  {
    title: 'Drop Down Menu using HTML and CSS',
    thumbnail: ImageConfig.THUMBNAIL4,
    channelName: 'Coding Power',
    channelLogo: ImageConfig.ACCOUNT_LOGO,
    videoLength: '5:40',
    views: '25 Views',
    uploadTime: '2 week ago',
  },
  {
    title: 'Full Screen Video Background Using HTML',
    thumbnail: ImageConfig.THUMBNAIL5,
    channelName: 'Coding Power',
    channelLogo: ImageConfig.ACCOUNT_LOGO,
    videoLength: '9:30',
    views: '10 Views',
    uploadTime: '2 week ago',
  },
  {
    title: 'Pricing Table Using HTML & CSS',
    thumbnail: ImageConfig.THUMBNAIL6,
    channelName: 'Coding Power',
    channelLogo: ImageConfig.ACCOUNT_LOGO,
    videoLength: '10:20',
    views: '15 Views',
    uploadTime: '3 week ago',
  },
  {
    title: 'How to Make Video Gallery Using HTML, CSS',
    thumbnail: ImageConfig.THUMBNAIL7,
    channelName: 'Coding Power',
    channelLogo: ImageConfig.ACCOUNT_LOGO,
    videoLength: '8:08',
    views: '36 Views',
    uploadTime: '3 week ago',
  },
  {
    title: 'Responsive Gallery Using HTML and CSS',
    thumbnail: ImageConfig.THUMBNAIL8,
    channelName: 'Coding Power',
    channelLogo: ImageConfig.ACCOUNT_LOGO,
    videoLength: '6:50',
    views: '22 Views',
    uploadTime: '1 week ago',
  },
  {
    title: 'Image Slider Using HTML, CSS, and JavaScript',
    thumbnail: ImageConfig.THUMBNAIL1,
    channelName: 'Coding Power',
    channelLogo: ImageConfig.ACCOUNT_LOGO,
    videoLength: '7:08',
    views: '28 Views',
    uploadTime: '3 week ago',
  },
  {
    title: 'Netflix Home Page Using HTML and CSS',
    thumbnail: ImageConfig.THUMBNAIL2,
    channelName: 'Coding Power',
    channelLogo: ImageConfig.ACCOUNT_LOGO,
    videoLength: '12:40',
    views: '160 Views',
    uploadTime: '3 week ago',
  },
  {
    title: 'How To Create Login Form In HTML and CSS',
    thumbnail: ImageConfig.THUMBNAIL3,
    channelName: 'Coding Power',
    channelLogo: ImageConfig.ACCOUNT_LOGO,
    videoLength: '8:20',
    views: '33 Views',
    uploadTime: '1 week ago',
  },
  {
    title: 'Drop Down Menu using HTML and CSS',
    thumbnail: ImageConfig.THUMBNAIL4,
    channelName: 'Coding Power',
    channelLogo: ImageConfig.ACCOUNT_LOGO,
    videoLength: '5:40',
    views: '25 Views',
    uploadTime: '2 week ago',
  },
  {
    title: 'Full Screen Video Background Using HTML',
    thumbnail: ImageConfig.THUMBNAIL5,
    channelName: 'Coding Power',
    channelLogo: ImageConfig.ACCOUNT_LOGO,
    videoLength: '9:30',
    views: '10 Views',
    uploadTime: '2 week ago',
  },
  {
    title: 'Pricing Table Using HTML & CSS',
    thumbnail: ImageConfig.THUMBNAIL6,
    channelName: 'Coding Power',
    channelLogo: ImageConfig.ACCOUNT_LOGO,
    videoLength: '10:20',
    views: '15 Views',
    uploadTime: '3 week ago',
  },
  {
    title: 'How to Make Video Gallery Using HTML, CSS',
    thumbnail: ImageConfig.THUMBNAIL7,
    channelName: 'Coding Power',
    channelLogo: ImageConfig.ACCOUNT_LOGO,
    videoLength: '8:08',
    views: '36 Views',
    uploadTime: '3 week ago',
  },
  {
    title: 'Responsive Gallery Using HTML and CSS',
    thumbnail: ImageConfig.THUMBNAIL8,
    channelName: 'Coding Power',
    channelLogo: ImageConfig.ACCOUNT_LOGO,
    videoLength: '6:50',
    views: '22 Views',
    uploadTime: '1 week ago',
  },
  {
    title: 'Image Slider Using HTML, CSS, and JavaScript',
    thumbnail: ImageConfig.THUMBNAIL1,
    channelName: 'Coding Power',
    channelLogo: ImageConfig.ACCOUNT_LOGO,
    videoLength: '7:08',
    views: '28 Views',
    uploadTime: '3 week ago',
  },
  {
    title: 'Netflix Home Page Using HTML and CSS',
    thumbnail: ImageConfig.THUMBNAIL2,
    channelName: 'Coding Power',
    channelLogo: ImageConfig.ACCOUNT_LOGO,
    videoLength: '12:40',
    views: '160 Views',
    uploadTime: '3 week ago',
  },
  {
    title: 'How To Create Login Form In HTML and CSS',
    thumbnail: ImageConfig.THUMBNAIL3,
    channelName: 'Coding Power',
    channelLogo: ImageConfig.ACCOUNT_LOGO,
    videoLength: '8:20',
    views: '33 Views',
    uploadTime: '1 week ago',
  },
  {
    title: 'Drop Down Menu using HTML and CSS',
    thumbnail: ImageConfig.THUMBNAIL4,
    channelName: 'Coding Power',
    channelLogo: ImageConfig.ACCOUNT_LOGO,
    videoLength: '5:40',
    views: '25 Views',
    uploadTime: '2 week ago',
  },
  {
    title: 'Full Screen Video Background Using HTML',
    thumbnail: ImageConfig.THUMBNAIL5,
    channelName: 'Coding Power',
    channelLogo: ImageConfig.ACCOUNT_LOGO,
    videoLength: '9:30',
    views: '10 Views',
    uploadTime: '2 week ago',
  },
  {
    title: 'Pricing Table Using HTML & CSS',
    thumbnail: ImageConfig.THUMBNAIL6,
    channelName: 'Coding Power',
    channelLogo: ImageConfig.ACCOUNT_LOGO,
    videoLength: '10:20',
    views: '15 Views',
    uploadTime: '3 week ago',
  },
  {
    title: 'How to Make Video Gallery Using HTML, CSS',
    thumbnail: ImageConfig.THUMBNAIL7,
    channelName: 'Coding Power',
    channelLogo: ImageConfig.ACCOUNT_LOGO,
    videoLength: '8:08',
    views: '36 Views',
    uploadTime: '3 week ago',
  },
  {
    title: 'Responsive Gallery Using HTML and CSS',
    thumbnail: ImageConfig.THUMBNAIL8,
    channelName: 'Coding Power',
    channelLogo: ImageConfig.ACCOUNT_LOGO,
    videoLength: '6:50',
    views: '22 Views',
    uploadTime: '1 week ago',
  },
]

export default function HomeFeed() {
  const [trendingVideos, setTrendingVideos] = useState([]);
  const ApiServices = new ApiService();

  const fetchVideos = async () => {
    try {
      const videos = await ApiServices.getHomeVideos();
        console.log('videos', videos);
        setTrendingVideos(videos);
    } catch (error) {
      console.log('Error => ', error);
    }
  }

  useEffect(() => {
    async function  fetchData(){
      // await fetchVideos();
    }
    fetchData();
  },[]);


  return (
    <div className='homeVideos flex flex-wrap justify-evenly items-center w-full'>
      {trendingVideos ?
        <div className="videos">
             {trendingVideos.map((videoItem, key) => (
               <HomePageVideoItem  video={videoItem}/>
             ))}
        </div> : ''}
    </div>
  )
}
