import moment from 'moment';
import ApiService from '../Services/ApiService';

export const parseSearchResults = async (items) => {
    const ApiServices = new ApiService();
    try {
        const videoIds = [];
        const channelIds = [];
        const parseSearchResultsData = [];

        items.forEach((item) => {
            if(item?.id?.videoId){
                videoIds.push(item.id.videoId);
            }
            channelIds.push(item.snippet.channelId);
        });

        items.forEach((item) => {
            const replies = [];
            const comment = {
                commentId: item?.id,
                videoId: item?.snippet?.videoId,
                channelId: item?.snippet?.channelId,
                commentText: item?.snippet?.topLevelComment?.snippet?.textOriginal,
                authorProfileImage: item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl,
                authorUsername: item?.snippet?.topLevelComment?.snippet?.authorDisplayName,
                publishedTime: moment(item?.snippet?.topLevelComment?.snippet?.publishedAt).fromNow(),
                likeNumber: item?.snippet?.topLevelComment?.snippet?.likeCount 
            };

            if (item?.replies?.comments) {
                item.replies.comments.forEach((replie) => {
                    replies.push({
                        replieId: item?.id,
                        videoId: item?.snippet?.videoId,
                        channelId: item?.snippet?.channelId,
                        commentText: replie?.snippet?.textOriginal,
                        authorProfileImage: replie?.snippet?.authorProfileImageUrl,
                        authorUsername: replie?.snippet?.authorDisplayName,
                        publishedTime: moment(replie?.snippet?.publishedAt).fromNow(),
                        likeNumber: replie?.snippet?.likeCount,
                    })
                })
            }
            comment['replies'] = replies;
            parsedCommentsData.push(comment);
        });

        return parseSearchResultsData;
    } catch (error) {
        console.log(error);
    }
};