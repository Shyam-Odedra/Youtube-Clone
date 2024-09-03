import { convertDuration, convertViewCount } from './index';
import moment from 'moment';
import ApiService from '../Services/ApiService';

export const parsePlaylistItems = async (playlistItems) => {
    try {
        const ApiServices = new ApiService();
        const videoIds = [];
        const playlistVideos = [];

        playlistItems.forEach((item) => {
            videoIds.push(item?.contentDetails?.videoId);
        });

        const { items: playlistVideosData } = await ApiServices.getVideoDetails(videoIds.join(","));

        playlistItems.forEach((playlistItem) => {
            const videoData = playlistVideosData.find((videoItem) => videoItem?.id === playlistItem?.contentDetails?.videoId);

            if (playlistItem) {
                playlistVideos.push({
                    videoId: videoData?.id,
                    publishedAt: moment(videoData?.snippet?.publishedAt).fromNow(),
                    publishedTime: videoData?.snippet?.publishedAt,
                    videoTitle: videoData?.snippet?.title,
                    videoThumbnail: videoData?.snippet?.thumbnails?.maxres?.url || videoData?.snippet?.thumbnails?.medium?.url,
                    videoDuration: convertDuration(videoData?.contentDetails?.duration),
                    videoViews: convertViewCount(videoData?.statistics?.viewCount),
                    channelId: videoData?.snippet?.channelId,
                    channelName: videoData?.snippet?.channelTitle,
                });
            }
        });

        return playlistVideos;
    } catch (error) {
        console.log(error);
    }
};
