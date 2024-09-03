import moment from 'moment';

export const parseRelatedVideos = async (items) => {
    try {
        const parsedCommentsData = [];
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

        return parsedCommentsData;
    } catch (error) {
        console.log(error);
    }
};