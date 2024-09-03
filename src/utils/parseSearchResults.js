import moment from 'moment';
import ApiService from '../Services/ApiService';
import { convertDuration, convertViewCount, formatYouTubeSubscribers } from './index';

export const parseSearchResults = async (items) => {
    const ApiServices = new ApiService();
    try {
        const videoIds = [];
        const channelIds = [];
        const parseSearchResultsData = [];

        items.forEach((item) => {
            if(item?.id?.videoId){
                videoIds.push(item?.id?.videoId);
            }
            channelIds.push(item?.snippet?.channelId);
        });

        const { items: channelsData } = await ApiServices.getVideoChannelInfo(channelIds.join(","));
        const { items: searchVideosData } = await ApiServices.getVideoDetails(videoIds.join(","));

        items.forEach((item) => {

            let videoData, channelData;
            if(item?.id?.videoId){
                videoData = searchVideosData.find((videoItem) => videoItem?.id === item?.id?.videoId);
            }
            channelData = channelsData.find((channelItem) => channelItem?.id === item?.snippet?.channelId);

            parseSearchResultsData.push({
                type: item?.id?.videoId ? "video" : "channel",
                videoId: item?.id?.videoId,
                publishedAt: moment(item?.snippet?.publishedAt).fromNow(),
                channelId: item?.snippet?.channelId,
                videoTitle: item?.snippet?.title,
                videoDescription: item?.snippet?.description,
                thumbnailUrl: videoData?.snippet?.thumbnails?.maxres?.url || videoData?.snippet?.thumbnails?.medium?.url,
                categoryId: videoData?.snippet?.categoryId,
                videoDuration: convertDuration(videoData?.contentDetails?.duration),
                videoViews: convertViewCount(videoData?.statistics?.viewCount),
                channelTitle: item?.snippet?.channelTitle,
                channelDescription: item?.snippet?.description,
                channelSubscribers: formatYouTubeSubscribers(channelData?.statistics?.subscriberCount),
                channelImage: channelData?.snippet?.thumbnails?.medium?.url,
                username: channelData?.snippet?.customUrl,
            })

        });
        console.log('parseSearchResultsData',parseSearchResultsData);

        return parseSearchResultsData;
    } catch (error) {
        console.log(error);
    }
};