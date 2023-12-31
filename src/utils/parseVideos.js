import { convertDuration, convertViewCount } from './index';
import moment from 'moment';
import ApiService from '../Services/ApiService';

export const parseVideos = async (items) => {
    const ApiServices = new ApiService();
    try {
        const videoIds = [];
        const channelIds = [];
        const parsedData = [];
        const parsedChannelsData = [];

        items.forEach((item) => {
            channelIds.push(item.snippet.channelId);
            videoIds.push(item.id.videoId);
        });

        const { items: channelsData } = await ApiServices.getVideoChannelInfo(channelIds.join(","));
       
        channelsData.forEach((channel) =>
            parsedChannelsData.push({
                id: channel?.id,
                image: channel?.snippet?.thumbnails?.medium?.url
            })
        );

        items.forEach((item) => {
            const { image: channelImage } = parsedChannelsData.find((data) => data?.id === item?.snippet?.channelId) || {};

            if (item) {
                parsedData.push({
                    videoId: item?.id,
                    publishedTime: moment(item?.snippet?.publishedAt).fromNow(),
                    videoTitle: item?.snippet?.title,
                    videoDescription: item?.snippet?.description,
                    videoThumbnail: item?.snippet?.thumbnails?.maxres?.url || item?.snippet?.thumbnails?.medium?.url,
                    videoDuration: convertDuration(item?.contentDetails?.duration),
                    videoViews: convertViewCount(item?.statistics?.viewCount),
                    channelInfo: {
                        channelId: item?.snippet?.channelId,
                        channelLogo: channelImage,
                        channelName: item?.snippet?.channelTitle,
                    }
                });
            }
        });

        return parsedData;
    } catch (error) {
        console.log(error);
    }
};
