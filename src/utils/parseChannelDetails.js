import moment from 'moment';
import ApiService from '../Services/ApiService';
import { convertDuration, convertViewCount, formatYouTubeSubscribers } from '.';

const ApiServices = new ApiService();
export const parseChannelDetails = async (channelInfo) => {
    try {
        const channelData = channelInfo?.[0];
        const channelId = channelData?.id;
        const featureChannels = [];
        const communityPosts = [];

        const { items: channelSections } = await ApiServices.getFeatureChannels(channelId);
        const multipleChannels = findMultipleChannels(channelSections);
        const { items: multipleChannelsData } = await ApiServices.getVideoChannelInfo(multipleChannels?.channels?.join(","));
        if (multipleChannelsData) {
            multipleChannelsData.forEach((channelItem) => {
                featureChannels.push({
                    channelId: channelItem?.id,
                    channelImage: channelItem?.snippet?.thumbnails?.medium?.url || channelItem?.snippet?.thumbnails?.high?.url,
                    title: channelItem?.snippet?.title,
                    subscribers: formatYouTubeSubscribers(channelItem?.statistics?.subscriberCount)
                })
            });
        }
        console.log("featureChannels", featureChannels);

        const detailedChannelInfo = await ApiServices.getChannelInfoWithCommunityPosts(channelId);
        const filterBanner = detailedChannelInfo?.meta?.banner.find((banner) => banner?.width === 2276);
        console.log("detailedChannelInfo", detailedChannelInfo);
        console.log("detailedChannelInfo data", filterBanner);

        detailedChannelInfo?.data.forEach((communityPost) => {
            console.log("communityPost", communityPost);
            communityPosts.push({
                postId: communityPost?.postId,
                channelName: communityPost?.authorText,
                channelImage: channelData?.snippet?.thumbnails?.medium?.url || channelData?.snippet?.thumbnails?.high?.url,
                content: communityPost?.contentText,
                publishedTime: communityPost?.publishedTimeText,
                likeCount: communityPost?.voteCountText,
                replyCount: communityPost?.replyCount,
                ...(communityPost?.attachment ? {
                    attachments: communityPost?.attachment?.type === 'video' ? {
                        type: communityPost?.attachment?.type,
                        videoId: communityPost?.attachment?.videoId,
                        title: communityPost?.attachment?.title,
                        description: communityPost?.attachment?.description,
                        channelTitle: communityPost?.attachment?.channelTitle,
                        thumbnailUrl: communityPost?.attachment?.thumbnail.find((thubnail) => thubnail?.width === 360)?.url,
                        channelId: communityPost?.attachment?.channelId,
                        videoViews: convertViewCount(communityPost?.attachment?.viewCount),
                        videoDuration: communityPost?.attachment?.lengthText,
                        publishedTime: communityPost?.attachment?.publishedTimeText,
                    } : {
                        attachments: communityPost?.attachment?.type === 'image' && {
                            type: communityPost?.attachment?.type,
                            imageUrl: communityPost?.attachment?.image.find((image) => image.width === 640)?.url
                        }
                    }
                } : { attachments: [] })
            })

        })

        console.log("communityPosts", communityPosts);

        const popularVideos = await parseVideosInfo(channelId, 'popular');
        const latestVideos = await parseVideosInfo(channelId, 'latest');

        console.log("popularVideos", popularVideos);
        console.log("latestVideos", latestVideos);


        const parsedChannelDetails = {
            channelId: channelId,
            channelName: channelData?.snippet?.title,
            channelImage: channelData?.snippet?.thumbnails?.medium?.url || channelData?.snippet?.thumbnails?.high?.url,
            description: channelData?.snippet?.description,
            subscribers: detailedChannelInfo?.meta?.subscriberCountText,
            username: channelData?.snippet?.customUrl,
            totalViews: channelData?.statistics?.viewCount,
            videoCount: channelData?.statistics?.videoCount,
            joinedDate: new Date(channelData?.snippet?.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
            channelBanner: filterBanner?.url,
            videos: latestVideos,
            popularVideos: popularVideos,
            communityPosts,
            featureChannels
        }
        console.log("parsedChannelDetails => ", parsedChannelDetails);
        return parsedChannelDetails;
    } catch (error) {
        console.log(error);
    }
};

const findMultipleChannels = (items) => {
    for (const item of items) {
        if (item?.kind === "youtube#channelSection" && item?.snippet?.type === "multiplechannels") {
            return item?.contentDetails;
        }
    }
    return null;
}

const parseVideosInfo = async (channelId, type) => {
    try {
        const videosInfo = [];
        const videoIds = [];
        const { items: videoItems } = await ApiServices.getChannelVideos(channelId, type);

        videoItems.forEach((item) => {
            if (item?.id?.videoId) {
                videoIds.push(item?.id?.videoId);
            }
        });

        const { items: searchVideosData } = await ApiServices.getVideoDetails(videoIds.join(","));
        videoItems.forEach((item) => {
            let videoData;
            if (item?.id?.videoId) {
                videoData = searchVideosData.find((videoItem) => videoItem?.id === item?.id?.videoId);
            }

            videosInfo.push({
                videoId: item?.id?.videoId,
                title: item?.snippet?.title,
                thumbnailUrl: videoData?.snippet?.thumbnails?.maxres?.url || videoData?.snippet?.thumbnails?.medium?.url,
                videoViews: convertViewCount(videoData?.statistics?.viewCount),
                publishedTime: moment(item?.snippet?.publishedAt).fromNow(),
                videoDuration: convertDuration(videoData?.contentDetails?.duration),
            })
            console.log(convertDuration(videoData?.contentDetails?.duration))
        });

        const filterVideos = videosInfo.filter(item => {
            const durationComponents = item?.videoDuration.split(":");
            if (durationComponents.length === 2) {
                // Less than 1 hour
                const minutes = parseInt(durationComponents[0]);
                const seconds = parseInt(durationComponents[1]);
                const totalSeconds = minutes * 60 + seconds;
                return totalSeconds > 60;
            } else if (durationComponents.length === 3) {
                // More than 1 hour
                const minutes = parseInt(durationComponents[1]);
                const seconds = parseInt(durationComponents[2]);
                const totalSeconds = minutes * 60 + seconds;
                return totalSeconds > 60;
            } else {
                // Invalid duration format
                return false;
            }
        });

        return filterVideos;
    } catch (error) {

    }
}