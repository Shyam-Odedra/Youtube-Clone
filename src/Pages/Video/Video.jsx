/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './Video.css';
import YouTube from 'react-youtube';
import ApiService from '../../Services/ApiService';
import { useSearchParams } from 'react-router-dom';
import parse from 'html-react-parser';

const videoInfo = {
    "kind": "youtube#videoListResponse",
    "etag": "SMDPq5BATIsAzQQvYWKwurdATOc",
    "items": [
        {
            "kind": "youtube#video",
            "etag": "9JPldK39v7cQ-SpCMMGZJnFvJLA",
            "id": "SO1PEL52H2k",
            "snippet": {
                "publishedAt": "2023-12-24T13:00:18Z",
                "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                "title": "What is Trading Psychology & How To Master It? | How Can I Improve My Psychology in Trading?",
                "description": "What is Trading Psychology & How To Master It? | How Can I Improve My Psychology in Trading?\n\nTwitter Handle - https://twitter.com/TradeWithGroww_\nInstagram Handle - https://www.instagram.com/tradingwithgroww/\n\nFor educational videos on trading, please subscribe to the Trading with Groww channel: https://openinapp.co/youtube/trading-with-groww\n\nWe also have a Kannada, Tamil, Telugu, Malayalam, and a Mutual fund channel\n\n🔔 Groww Kannada -  https://bit.ly/3ekyeKP\n🔔 Groww Tamil - https://bit.ly/3cbhN3Z\n🔔 Groww Telugu - https://bit.ly/39aLpwC\n🔔 Groww Malayalam https://bit.ly/3enG2LV\n🔔 Mutual Funds at Groww - https://bit.ly/3zQpR32\n🔔 Groww Marathi link - https://www.youtube.com/@Groww.Marathi\n\nUseful Links:\nFollow us on:\nFacebook: https://www.facebook.com/growwapp/\nTwitter: https://twitter.com/_groww\nInstagram: https://www.instagram.com/groww_official\nLinkedIn: https://in.linkedin.com/company/groww.in\nTelegram: https://t.me/GrowwHQ\n\nDisclaimer: \nGroww does not advise on individual stocks and firmly believes that viewers should do their own research before investing.\n\nAlso, our viewers should keep in mind that trading in securities and derivatives can be risky and most people may end up losing money in such trades. While we would love to educate you about trading, we don't promote or recommend engaging in such high-risk products.\n\nResearch Analyst disclaimer: https://groww.in/p/sebi-research-analyst-regulations\n\nName of the RA: Aakash Baid\nName of the narrator: Aseem Singhal\nDate: Decemebr 18, 2023\n\n#trading #tradingforbeginners #stockmarket #optionstrading #tradingstrategy #technicalanalysis #riskmanagement #futurestrading #indicators #tradingpsychology",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/SO1PEL52H2k/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/SO1PEL52H2k/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/SO1PEL52H2k/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/SO1PEL52H2k/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/SO1PEL52H2k/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Trading with Groww",
                "tags": [
                    "trading with groww",
                    "trading psychology",
                    "trading psychology hindi",
                    "trading physiology",
                    "trading psychology audiobook",
                    "trading psychology full course",
                    "trading for beginners",
                    "trading",
                    "trading kaise kare in hindi",
                    "trading live",
                    "trading kaise sikhe",
                    "stock market",
                    "stock market for beginners",
                    "stock market live",
                    "stock market india",
                    "stock market kaise sikhe",
                    "stock market kya hai"
                ],
                "categoryId": "27",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "What is Trading Psychology & How To Master It? | How Can I Improve My Psychology in Trading?",
                    "description": "What is Trading Psychology & How To Master It? | How Can I Improve My Psychology in Trading?\n\nTwitter Handle - https://twitter.com/TradeWithGroww_\nInstagram Handle - https://www.instagram.com/tradingwithgroww/\n\nFor educational videos on trading, please subscribe to the Trading with Groww channel: https://openinapp.co/youtube/trading-with-groww\n\nWe also have a Kannada, Tamil, Telugu, Malayalam, and a Mutual fund channel\n\n🔔 Groww Kannada -  https://bit.ly/3ekyeKP\n🔔 Groww Tamil - https://bit.ly/3cbhN3Z\n🔔 Groww Telugu - https://bit.ly/39aLpwC\n🔔 Groww Malayalam https://bit.ly/3enG2LV\n🔔 Mutual Funds at Groww - https://bit.ly/3zQpR32\n🔔 Groww Marathi link - https://www.youtube.com/@Groww.Marathi\n\nUseful Links:\nFollow us on:\nFacebook: https://www.facebook.com/growwapp/\nTwitter: https://twitter.com/_groww\nInstagram: https://www.instagram.com/groww_official\nLinkedIn: https://in.linkedin.com/company/groww.in\nTelegram: https://t.me/GrowwHQ\n\nDisclaimer: \nGroww does not advise on individual stocks and firmly believes that viewers should do their own research before investing.\n\nAlso, our viewers should keep in mind that trading in securities and derivatives can be risky and most people may end up losing money in such trades. While we would love to educate you about trading, we don't promote or recommend engaging in such high-risk products.\n\nResearch Analyst disclaimer: https://groww.in/p/sebi-research-analyst-regulations\n\nName of the RA: Aakash Baid\nName of the narrator: Aseem Singhal\nDate: Decemebr 18, 2023\n\n#trading #tradingforbeginners #stockmarket #optionstrading #tradingstrategy #technicalanalysis #riskmanagement #futurestrading #indicators #tradingpsychology"
                },
                "defaultAudioLanguage": "hi"
            },
            "contentDetails": {
                "duration": "PT8M24S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": false,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "10684",
                "likeCount": "932",
                "favoriteCount": "0",
                "commentCount": "51"
            }
        }
    ],
    "pageInfo": {
        "totalResults": 1,
        "resultsPerPage": 1
    }
}

const channelInfo = {
    "kind": "youtube#channelListResponse",
    "etag": "9EJ2KfQ0OWzs5ENNRfe5dpTXsQ8",
    "pageInfo": {
        "totalResults": 1,
        "resultsPerPage": 5
    },
    "items": [
        {
            "kind": "youtube#channel",
            "etag": "1GbQKdESaq5VumjjuVw28h0642c",
            "id": "UC9o1F_8M5B1hZ00posMaY0g",
            "snippet": {
                "title": "Trading with Groww",
                "description": "It is not easy to find a learner-friendly, reliable and trustworthy source of information on trading. We understand that it is imperative for you to have the right information in order to avoid falling into the traps. That’s why we are here to help. On Trading with Groww, you will find everything you need to know about trading and how you can start from wherever you are at this moment. Whether you’re an absolute beginner or someone with intermediate knowledge of the subject, we have something for everyone.\n\nGroww does not advise on individual stocks and firmly believes that viewers should do their own research before investing.\n\nAlso, our viewers should keep in mind that trading in securities and derivatives can be risky and most people may end up losing money in such trades. While we would love to educate you about trading, we don't promote or recommend engaging in such high-risk products.\n\nRA disclaimer: https://groww.in/p/sebi-research-analyst-regulations\n",
                "customUrl": "@tradingwithgroww",
                "publishedAt": "2021-09-28T18:44:35.90022Z",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/MFASu7XQQItpaGao1bU5pw2Fp4G-Jif3k_NTalp4XdkjYJBW6tXu2FqmkuImAjASo-6IIOXe=s88-c-k-c0x00ffffff-no-rj",
                        "width": 88,
                        "height": 88
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/MFASu7XQQItpaGao1bU5pw2Fp4G-Jif3k_NTalp4XdkjYJBW6tXu2FqmkuImAjASo-6IIOXe=s240-c-k-c0x00ffffff-no-rj",
                        "width": 240,
                        "height": 240
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/MFASu7XQQItpaGao1bU5pw2Fp4G-Jif3k_NTalp4XdkjYJBW6tXu2FqmkuImAjASo-6IIOXe=s800-c-k-c0x00ffffff-no-rj",
                        "width": 800,
                        "height": 800
                    }
                },
                "localized": {
                    "title": "Trading with Groww",
                    "description": "It is not easy to find a learner-friendly, reliable and trustworthy source of information on trading. We understand that it is imperative for you to have the right information in order to avoid falling into the traps. That’s why we are here to help. On Trading with Groww, you will find everything you need to know about trading and how you can start from wherever you are at this moment. Whether you’re an absolute beginner or someone with intermediate knowledge of the subject, we have something for everyone.\n\nGroww does not advise on individual stocks and firmly believes that viewers should do their own research before investing.\n\nAlso, our viewers should keep in mind that trading in securities and derivatives can be risky and most people may end up losing money in such trades. While we would love to educate you about trading, we don't promote or recommend engaging in such high-risk products.\n\nRA disclaimer: https://groww.in/p/sebi-research-analyst-regulations\n"
                },
                "country": "IN"
            },
            "contentDetails": {
                "relatedPlaylists": {
                    "likes": "",
                    "uploads": "UU9o1F_8M5B1hZ00posMaY0g"
                }
            },
            "statistics": {
                "viewCount": "13848171",
                "subscriberCount": "277000",
                "hiddenSubscriberCount": false,
                "videoCount": "1001"
            }
        }
    ]
}


export default function Video() {
    const ApiServices = new ApiService();
    const [queryParams] = useSearchParams();
    const [videoId, setVideoId] = useState();
    const [videoDetails, setVideoDetails] = useState(videoInfo?.items?.[0]);
    const [channelDetails, setChannelDetails] = useState(channelInfo?.items?.[0]);

    useEffect(() => {
        async function fetchData() {
            console.log('videoId', queryParams.get('id'));
            if (queryParams.get('id')) {
                setVideoId(queryParams.get('id'));
                await getVideoInformation(queryParams.get('id'));
            }
        }
        // fetchData();
    }, []);

    const getVideoInformation = async (videoId) => {
        try {
            const videoData = await ApiServices.getVideoDetails(videoId);
            if (videoData) {
                setVideoDetails(videoData?.items?.[0]);
                if (videoData?.items?.[0]?.snippet?.channelId) {
                    const channelData = await ApiServices.getVideoChannelInfo(videoData?.items?.[0]?.snippet?.channelId);
                    setChannelDetails(channelData?.items?.[0]);
                }
            }
        } catch (error) {

        }
    };

    const formatYouTubeSubscribers = (subscribers) => {
        if (subscribers >= 1000000) {
            return (subscribers / 1000000).toFixed(1) + "M";
        } else if (subscribers >= 1000) {
            return (subscribers / 1000).toFixed(1) + "K";
        } else {
            return subscribers.toString();
        }
    }

    const videoPlayerOptions = {
        height: '675px',
        width: '1200px',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    }
    return (
        <div className='videoPage'>
            <div className="flex justify-start flex-1 items-start w-full">
                <div className="videoPartSection">
                    <div className="flex flex-col">
                        <div className="player">
                            <YouTube
                                opts={videoPlayerOptions}
                                videoId={'SO1PEL52H2k'}
                                className={'videoPlayer'}
                                iframeClassName={'videoPlayerIframe'}
                                loading={'Loading'}
                            />
                        </div>
                        <div className="title mt-5">
                            <p className='text-xl font-medium'>{videoDetails?.snippet?.title}</p>
                        </div>
                        <div className="channelInfo flex justify-start items-center mt-3">
                            <div className="channelLogo">
                                <img src={channelDetails?.snippet?.thumbnails?.medium?.url} alt="" />
                            </div>
                            <div className="flex flex-col ml-3">
                                <span className='text-[#fff] text-base'>{channelDetails?.snippet?.title}</span>
                                <span className='text-[#aaa] text-sm'>{`${formatYouTubeSubscribers(channelDetails?.statistics?.subscriberCount)} subscribers`}</span>
                            </div>
                        </div>
                        <div className="mt-3 w-full p-3 bg-[#282829] rounded-xl">
                            {parse(videoDetails?.snippet?.description)}
                        </div>
                    </div>
                </div>
                <div className="relatedVideosSection">
                    relatedVideosSection
                </div>
            </div>
        </div>
    )
}
