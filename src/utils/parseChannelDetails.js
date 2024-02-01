import moment from 'moment';
import ApiService from '../Services/ApiService';
import { formatYouTubeSubscribers } from '.';

export const parseChannelDetails = async (channelInfo) => {
    const ApiServices = new ApiService();
    try {
        const channelData = channelInfo?.[0];
        const featureChannels = [];

        const { items: channelSections } = await ApiServices.getFeatureChannels(channelData?.id);
        const multipleChannels = findMultipleChannels(channelSections);
        const { items: multipleChannelsData } = await ApiServices.getVideoChannelInfo(multipleChannels.join(","));
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



        const parsedChannelDetails = {
            channelId: channelData?.id,
            channelName: channelData?.snippet?.title,
            channelImage: channelData?.snippet?.thumbnails?.medium?.url || channelData?.snippet?.thumbnails?.high?.url,
            description: channelData?.snippet?.description,
            subscribers: formatYouTubeSubscribers(channelData?.statistics?.subscriberCount),
            username: channelData?.snippet?.customUrl,
            totalViews: channelData?.statistics?.viewCount,
            videoCount: channelData?.statistics?.videoCount,
            joinedDate: 'Oct 28, 2016',
            channelBanner: "https://yt3.googleusercontent.com/ZX4FPqyBCJc0ektafXZvV9tShLRUovd3_oUWXzZDC-70BLB6FsVHtzGDsKIed9A596O_dWNrRg=w2276-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
            videos: [
                {
                    videoId: "Tv4WWjvh5OI",
                    title: "Bollywood - Maut ko Takk se chuu ke wapas aa gaye",
                    thumbnailUrl: "https://i.ytimg.com/vi/Tv4WWjvh5OI/mqdefault.jpg",
                    videoViews: "251k",
                    publishedTime: "1 day ago",
                    videoDuration: "8:06"
                },
                {
                    videoId: "dkh6EaaT8Fs",
                    title: "God Level Trailers - Good, Bad aur Ghatiya",
                    thumbnailUrl: "https://i.ytimg.com/vi/dkh6EaaT8Fs/mqdefault.jpg",
                    videoViews: "400k",
                    publishedTime: "3 days ago",
                    videoDuration: "6:49"
                },
                {
                    videoId: "x7LYlVv13AM",
                    title: "100 Movies You have to watch before you DIE",
                    thumbnailUrl: "https://i.ytimg.com/vi/x7LYlVv13AM/mqdefault.jpg",
                    videoViews: "328k",
                    publishedTime: "8 days ago",
                    videoDuration: "7:03"
                },
                {
                    videoId: "CBlqLq_lAF4",
                    title: "FINAL winners kon?? Bnftv Awards 2023",
                    thumbnailUrl: "https://i.ytimg.com/vi/CBlqLq_lAF4/mqdefault.jpg",
                    videoViews: "542k",
                    publishedTime: "10 days ago",
                    videoDuration: "18:11"
                },
                {
                    videoId: "sndgQdL9fwU",
                    title: "9 Best Hollywood Movies of 2023 🥵",
                    thumbnailUrl: "https://i.ytimg.com/vi/sndgQdL9fwU/mqdefault.jpg",
                    videoViews: "295k",
                    publishedTime: "12 days ago",
                    videoDuration: "6:49"
                }
            ],
            popularVideos: [
                {
                    videoId: "eXMyAvA0654",
                    title: "17 - WTF moments in Adipurush",
                    thumbnailUrl: "https://i.ytimg.com/vi/eXMyAvA0654/mqdefault.jpg",
                    videoViews: "1.5M",
                    publishedTime: "6 months ago",
                    videoDuration: "8:06"
                },
                {
                    videoId: "k4VrKX8KBIw",
                    title: "ADIPURUSH movie Review",
                    thumbnailUrl: "https://i.ytimg.com/vi/k4VrKX8KBIw/mqdefault.jpg",
                    videoViews: "1.1M",
                    publishedTime: "3 months ago",
                    videoDuration: "6:49"
                },
                {
                    videoId: "EG5Vbqo3m70",
                    title: "Dunki movie review",
                    thumbnailUrl: "https://i.ytimg.com/vi/EG5Vbqo3m70/mqdefault.jpg",
                    videoViews: "828k",
                    publishedTime: "10 days ago",
                    videoDuration: "7:03"
                },
                {
                    videoId: "d3-YjWrVLB8",
                    title: "Brahmastra Movie Review",
                    thumbnailUrl: "https://i.ytimg.com/vi/d3-YjWrVLB8/mqdefault.jpg",
                    videoViews: "542k",
                    publishedTime: "20 days ago",
                    videoDuration: "18:11"
                },
                {
                    videoId: "CBlqLq_lAF4",
                    title: "FINAL winners kon?? Bnftv Awards 2023",
                    thumbnailUrl: "https://i.ytimg.com/vi/CBlqLq_lAF4/mqdefault.jpg",
                    videoViews: "542k",
                    publishedTime: "10 days ago",
                    videoDuration: "18:11"
                },
            ],
            communityPosts: [
                {
                    postId: "Ugkx4EUga78J1IXkPjuRUq6eda9MVmsdBfkn",
                    channelName: "BnfTV",
                    channelImage: "https://yt3.googleusercontent.com/7oUYOkSQuvixFZonWiR_AC7uKfMyoqRCnSBpmH-V_KUry2QgeSK2zHUDlYoLtG9xfTR-2e_NJA=s76-c-k-c0x00ffffff-no-rj-mo",
                    content: "New videos thoda delay honge. Merry Christmas, Hanuman, captain Miller ke..... Not feeling well",
                    publishedTime: "23 hours ago",
                    likeCount: "9.1k",
                    replyCount: 212,
                    attachments: []
                },
                {
                    postId: "Ugkx4EUga78J1IXkPjuRUq6eda9MVmsdBfkn",
                    channelName: "BnfTV",
                    channelImage: "https://yt3.googleusercontent.com/7oUYOkSQuvixFZonWiR_AC7uKfMyoqRCnSBpmH-V_KUry2QgeSK2zHUDlYoLtG9xfTR-2e_NJA=s76-c-k-c0x00ffffff-no-rj-mo",
                    content: "Popcorn ke saath ready rehna... aaj around 8 PM.",
                    publishedTime: "10 days ago",
                    likeCount: "17k",
                    replyCount: 377,
                    attachments: []
                },
                {
                    postId: "Ugkx4EUga78J1IXkPjuRUq6eda9MVmsdBfkn",
                    channelName: "BnfTV",
                    channelImage: "https://yt3.googleusercontent.com/7oUYOkSQuvixFZonWiR_AC7uKfMyoqRCnSBpmH-V_KUry2QgeSK2zHUDlYoLtG9xfTR-2e_NJA=s76-c-k-c0x00ffffff-no-rj-mo",
                    content: "FINAL Voting is LIVE NOW 🔥🔥 BNFTV AWARDS 2023.\njaao apne man ki iccha puri karlo...\nbus ek choti si request POPULARITY ke basis pe nahi Quality ke basis pe vote dena & friends ke saath share karna\n\nFinal voting link - https://forms.gle/aUfv3whw98LLKo3E6",
                    publishedTime: "13 days ago",
                    likeCount: "9.8k",
                    replyCount: 600,
                    attachments: []
                },
                {
                    postId: "Ugkx4EUga78J1IXkPjuRUq6eda9MVmsdBfkn",
                    channelName: "BnfTV",
                    channelImage: "https://yt3.googleusercontent.com/7oUYOkSQuvixFZonWiR_AC7uKfMyoqRCnSBpmH-V_KUry2QgeSK2zHUDlYoLtG9xfTR-2e_NJA=s76-c-k-c0x00ffffff-no-rj-mo",
                    content: "BNFTV AWARDS 2023 is here!! (with a Brand new category ahm.! \"Most toxic Fandom\")\nNominations are LIVE until ❌ 29 December 3 PM ❌\nOnly One response per person.\nRead the rules clearly.\nNominations Link 👇👇\nhttps://forms.gle/KRJLyZbcmJNPfxW7A",
                    publishedTime: "2 weeks ago",
                    likeCount: "9.8k",
                    replyCount: 612,
                    attachments: []
                },
                {
                    postId: "Ugkx4EUga78J1IXkPjuRUq6eda9MVmsdBfkn",
                    channelName: "BnfTV",
                    channelImage: "https://yt3.googleusercontent.com/7oUYOkSQuvixFZonWiR_AC7uKfMyoqRCnSBpmH-V_KUry2QgeSK2zHUDlYoLtG9xfTR-2e_NJA=s76-c-k-c0x00ffffff-no-rj-mo",
                    content: "LATEST video with NETFLIX is live Now…. MAST Watch Web series wo bhi Hindi me 👇👇",
                    publishedTime: "1 month ago",
                    likeCount: "2k",
                    replyCount: 60,
                    attachments: {
                        type: "video",
                        videoId: "jKWabQZHyuw",
                        title: "@BnfTV Top  7 HINDI DUBBED Web Series On Netflix | Netflix India",
                        description: "BnFTV recommends 7 hindi dubbed web series that give you an edge-of-the-seat watching experience!\n\nOne Piece: https://www.netflix.com/watch/80218003\nOzark: https://www.netflix.com/watch/80117807...",
                        channelTitle: "Netflix India",
                        thumbnailUrl: "https://i.ytimg.com/vi/jKWabQZHyuw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjWBxd0NYPKWm25fhlzdcMPkWkxQ",
                        channelId: "UCZSNzBgFub_WWil6TOTYwAg",
                        videoViews: "322k",
                        videoDuration: "7:57",
                        publishedTime: "1 month ago"
                    }
                },
                {
                    postId: "Ugkx4EUga78J1IXkPjuRUq6eda9MVmsdBfkn",
                    channelName: "BnfTV",
                    channelImage: "https://yt3.googleusercontent.com/7oUYOkSQuvixFZonWiR_AC7uKfMyoqRCnSBpmH-V_KUry2QgeSK2zHUDlYoLtG9xfTR-2e_NJA=s76-c-k-c0x00ffffff-no-rj-mo",
                    content: "On a scale of 1 to 10 how excited are you for #Animal ?",
                    publishedTime: "1 month ago",
                    likeCount: "24k",
                    replyCount: "2.6k",
                    attachments: []
                },
                {
                    postId: "Ugkx4EUga78J1IXkPjuRUq6eda9MVmsdBfkn",
                    channelName: "BnfTV",
                    channelImage: "https://yt3.googleusercontent.com/7oUYOkSQuvixFZonWiR_AC7uKfMyoqRCnSBpmH-V_KUry2QgeSK2zHUDlYoLtG9xfTR-2e_NJA=s76-c-k-c0x00ffffff-no-rj-mo",
                    content: "10 mazedar mystery thriller ki list… cult classics se leke underrated & some MUST watch 👇👇 check out mast watch on Netflix India",
                    publishedTime: "2 month ago",
                    likeCount: "1.6k",
                    replyCount: "55",
                    attachments: {
                        type: "video",
                        videoId: "JGFdcZCMdlU",
                        title: "@BnfTV  Top 10 BEST MYSTERY THRILLERS On Netflix",
                        description: "Which ones have you seen? Let us know in the comments. All the films are streaming on Netflix. @BnfTV \n\nJaane Jaan: https://www.netflix.com/watch/81586376\n\nGone Girl: https://www.netflix.com/watch/..",
                        channelTitle: "Netflix India",
                        thumbnailUrl: "https://i.ytimg.com/vi/JGFdcZCMdlU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAnOliwWqeKWVWx2eOp_kiB--rMcA",
                        channelId: "UCZSNzBgFub_WWil6TOTYwAg",
                        videoViews: "430k",
                        videoDuration: "6:5",
                        publishedTime: "2 month ago"
                    }
                },
                {
                    postId: "Ugkx4EUga78J1IXkPjuRUq6eda9MVmsdBfkn",
                    channelName: "BnfTV",
                    channelImage: "https://yt3.googleusercontent.com/7oUYOkSQuvixFZonWiR_AC7uKfMyoqRCnSBpmH-V_KUry2QgeSK2zHUDlYoLtG9xfTR-2e_NJA=s76-c-k-c0x00ffffff-no-rj-mo",
                    content: "5 years ago we started this journey. 900 videos banaye (sirf is channel pe!!). senti nahi hona chahta but isne meri aur MERE FAMILY ki zindagi kaise badal ke rakh di.. believe nahi hota. jo bhi hai.. tumhare karan hai... so THANK YOU for everything 🫶🏻",
                    publishedTime: "3 month ago",
                    likeCount: "37k",
                    replyCount: "1.3k",
                    attachments: {
                        type: "image",
                        imageUrl: "https://yt3.ggpht.com/gOOz287MkZGbEXfIwekUQT3eRkXAwwP7BwxY-V7FTJ9BNqf-xaajwSZSs4wvj1X-CnJonvZDikvozpA=s640-c-fcrop64=1,00000000ffffffff-nd-v1"

                    }
                },
                {
                    postId: "Ugkx4EUga78J1IXkPjuRUq6eda9MVmsdBfkn",
                    channelName: "BnfTV",
                    channelImage: "https://yt3.googleusercontent.com/7oUYOkSQuvixFZonWiR_AC7uKfMyoqRCnSBpmH-V_KUry2QgeSK2zHUDlYoLtG9xfTR-2e_NJA=s76-c-k-c0x00ffffff-no-rj-mo",
                    content: "Raksha Bandhan ka Gift meri taraf se - ONLY AVAILABLE UNTIL - 31st August 2023. Code use karo RAKHI40 and get FLAT 40% off. Lifetime me jitne baar chaiye utni baar course dekh sakte ho (jab tak tum raho ya Brand rahe😉) badi mushkil se Platform ko manaya hai Discount ke liye - taki mummy se jhoot bol ke paise na lene pade - HURRY now 👉 https://bnftv.graphy.com/single-check...",
                    publishedTime: "4 month ago",
                    likeCount: "6.8k",
                    replyCount: "458",
                    attachments: {
                        type: "image",
                        imageUrl: "https://yt3.ggpht.com/gVqlficIEKMhPFc_Ad7S57aBxIumcYu8Fnw0URrptidAwx_V7y2KZVBazjiziFm5z0SDCSDeQSdw=s640-c-fcrop64=1,0eab0000f154ffff-nd-v1"

                    }
                },
            ],
            featureChannels
        }


        return parsedChannelDetails;
    } catch (error) {
        console.log(error);
    }
};

function findMultipleChannels(items) {
    for (const item of items) {
        if (item?.kind === "youtube#channelSection" && item?.snippet?.type === "multiplechannels") {
            return item?.contentDetails;
        }
    }
    // Return null if no "multiplechannels" type is found
    return null;
}