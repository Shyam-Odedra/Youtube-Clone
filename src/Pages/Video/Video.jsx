/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import './Video.css';
import YouTube from 'react-youtube';
import ApiService from '../../Services/ApiService';
import { useNavigate, useSearchParams } from 'react-router-dom';
import moment from 'moment';
import Context from '../../Context/Context';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Tooltip } from '@mui/material';
import { ROUTES } from '../../Constants/constants';
import VideoComments from '../../Components/VideoComments/VideoComments';
import RelatedVideos from '../../Components/RelatedVideos/RelatedVideos';
import { useDispatch } from 'react-redux';
import { getVideoComments } from '../../Store/reducers/getVideoComments';
import { clearVideoComments } from '../../Store/features/youtubeSlice';

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

const commentsData = {
    "kind": "youtube#commentThreadListResponse",
    "etag": "QBkrSSlTbCcww5rU0PnePJXsSGk",
    "nextPageToken": "Z2V0X25ld2VzdF9maXJzdC0tQ2dnSWdBUVZGN2ZST0JJRkNJa2dHQUFTQlFpZUlCZ0FFZ1VJaUNBWUFCSUZDSjBnR0FFU0JRaUhJQmdBR0FBaURRb0xDSXFzb2F3R0VMamJ3MjA=",
    "pageInfo": {
        "totalResults": 20,
        "resultsPerPage": 20
    },
    "items": [
        {
            "kind": "youtube#commentThread",
            "etag": "g2QO6gyCRThRjtQ7xBhVpn3vE8o",
            "id": "UgzdanaEXcsph6RBtxB4AaABAg",
            "snippet": {
                "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                "videoId": "SO1PEL52H2k",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "5Zi2cGsQF5U8gJ3BSeM0QtEclcg",
                    "id": "UgzdanaEXcsph6RBtxB4AaABAg",
                    "snippet": {
                        "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                        "videoId": "SO1PEL52H2k",
                        "textDisplay": "Holy grail",
                        "textOriginal": "Holy grail",
                        "authorDisplayName": "@kewlvivek",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIf8zZTBK80ayatHfeIro2HsyIyXCBNfiWk8KUijBihrCA=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/channel/UCNKBHmFUj_FNuciesB_TfAg",
                        "authorChannelId": {
                            "value": "UCNKBHmFUj_FNuciesB_TfAg"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2023-12-26T18:05:13Z",
                        "updatedAt": "2023-12-26T18:05:13Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "NpDS89X4y3Bd4X71n3y3MSrSXT8",
            "id": "UgxUClylTgjWusBOKOB4AaABAg",
            "snippet": {
                "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                "videoId": "SO1PEL52H2k",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "o8UjlBPiVu1f5_LIu17G_c8q4aE",
                    "id": "UgxUClylTgjWusBOKOB4AaABAg",
                    "snippet": {
                        "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                        "videoId": "SO1PEL52H2k",
                        "textDisplay": "Simply explained......very well Sir..",
                        "textOriginal": "Simply explained......very well Sir..",
                        "authorDisplayName": "@Nishant-Valvi",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/EpQjincks59CJ-L5P1Ih0OOgLDLQ6ib-recp3bHuJRr7PuxkR7LgayKyJPjhuisGZ8DsaP2xmw=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/channel/UClqMkmRswX4TQWTh-J3lD1Q",
                        "authorChannelId": {
                            "value": "UClqMkmRswX4TQWTh-J3lD1Q"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2023-12-26T17:19:38Z",
                        "updatedAt": "2023-12-26T17:19:38Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "IYrfuksH2TL2BfxC9NGNmLjeo_o",
            "id": "UgyZCguWid1gyPbGI-V4AaABAg",
            "snippet": {
                "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                "videoId": "SO1PEL52H2k",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "OJUixacQJooNKrxdcaJU75XZRK4",
                    "id": "UgyZCguWid1gyPbGI-V4AaABAg",
                    "snippet": {
                        "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                        "videoId": "SO1PEL52H2k",
                        "textDisplay": "Sir\u003cbr\u003eकुछ नही ये तो बहुत कुछ है",
                        "textOriginal": "Sir\nकुछ नही ये तो बहुत कुछ है",
                        "authorDisplayName": "@ShakirKhan-yz1eh",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIf8zZRmCtLrnCnXhhGspfg8D9syWGN4wWPICqylow=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/channel/UC2RaKaagszTtM1R3We43WQQ",
                        "authorChannelId": {
                            "value": "UC2RaKaagszTtM1R3We43WQQ"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2023-12-26T12:39:26Z",
                        "updatedAt": "2023-12-26T12:39:26Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "WGMAQiDTyz6oPHhTxpNsv_aNJh8",
            "id": "UgxCsGamXwTwX9ZLYGt4AaABAg",
            "snippet": {
                "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                "videoId": "SO1PEL52H2k",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "08ig-8YABhIYqZWhhFkWfFJhigw",
                    "id": "UgxCsGamXwTwX9ZLYGt4AaABAg",
                    "snippet": {
                        "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                        "videoId": "SO1PEL52H2k",
                        "textDisplay": "Thanks sir 🙏 \u003cbr\u003eNice one",
                        "textOriginal": "Thanks sir 🙏 \nNice one",
                        "authorDisplayName": "@ayanbandyopadhyay1559",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIf8zZTdmVrcrjd72yUYD09mc-6vSB2zEvk2qE08og=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/channel/UCiD49KFaTmHSiAMSK1Wwhmg",
                        "authorChannelId": {
                            "value": "UCiD49KFaTmHSiAMSK1Wwhmg"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2023-12-25T10:01:09Z",
                        "updatedAt": "2023-12-25T10:01:09Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "bU2qNDoeJGdwQEp67ktLaHCxmB0",
            "id": "Ugzssmii0myZAxlz1yR4AaABAg",
            "snippet": {
                "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                "videoId": "SO1PEL52H2k",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "7BDg6Jkb-3J90bwWfsBgb78pDE4",
                    "id": "Ugzssmii0myZAxlz1yR4AaABAg",
                    "snippet": {
                        "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                        "videoId": "SO1PEL52H2k",
                        "textDisplay": "Kewal nifty 50 me trade krna ho to aur vo bhi buying\u003cbr\u003eI want to 1000 only",
                        "textOriginal": "Kewal nifty 50 me trade krna ho to aur vo bhi buying\nI want to 1000 only",
                        "authorDisplayName": "@erenny6.g",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/3F5uRBE5OjRKn92XG9jfMIz8FXKtjRlW01FEmaVit-Ok1fic-EzHKBSxPSd-1SObN_w-yaHQCA=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/channel/UCtSgjKV0jfaUPQshRbsa5TQ",
                        "authorChannelId": {
                            "value": "UCtSgjKV0jfaUPQshRbsa5TQ"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2023-12-25T09:43:23Z",
                        "updatedAt": "2023-12-25T09:43:23Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "gT-QVcgKWBLjca_CdhU_V15lALc",
            "id": "UgwTBwKhu5lvLU8wePF4AaABAg",
            "snippet": {
                "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                "videoId": "SO1PEL52H2k",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "Is66lIRu1ZswQT-BJ_4rhztCJBM",
                    "id": "UgwTBwKhu5lvLU8wePF4AaABAg",
                    "snippet": {
                        "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                        "videoId": "SO1PEL52H2k",
                        "textDisplay": "TRADING PSYCHOLOGY\r\u003cbr\u003e\r\u003cbr\u003e1) SELF AWARENESS\r\u003cbr\u003e2) HAVE A TRADING PLAN\r\u003cbr\u003e3) RISK MANAGEMENT \r\u003cbr\u003e4) DISCLIPINE\r\u003cbr\u003e5) CONTROL OVER EMOTIONS\r\u003cbr\u003e6) EGO TRADING\r\u003cbr\u003e7) CONTINUOUS LEARNING\r\u003cbr\u003e8) MAINTAIN A TRADING JOURNAL\r\u003cbr\u003e9) ACCEPT THE LOSS AS A PART OF TRADING\r\u003cbr\u003e10) TAKING A BREAK IF REQUIRED",
                        "textOriginal": "TRADING PSYCHOLOGY\r\n\r\n1) SELF AWARENESS\r\n2) HAVE A TRADING PLAN\r\n3) RISK MANAGEMENT \r\n4) DISCLIPINE\r\n5) CONTROL OVER EMOTIONS\r\n6) EGO TRADING\r\n7) CONTINUOUS LEARNING\r\n8) MAINTAIN A TRADING JOURNAL\r\n9) ACCEPT THE LOSS AS A PART OF TRADING\r\n10) TAKING A BREAK IF REQUIRED",
                        "authorDisplayName": "@merabharatmahan9621",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIf8zZSlGomzkFPRUgSlT-bqn3L9EUOAzNR40nCEBQ=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/channel/UCZFXRrVzCiofzzOgxJ_xcdQ",
                        "authorChannelId": {
                            "value": "UCZFXRrVzCiofzzOgxJ_xcdQ"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2023-12-25T08:57:23Z",
                        "updatedAt": "2023-12-25T08:57:23Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "byC0hK1KoevCNqNc6COzJoVQltk",
            "id": "UgxviX2nSoRFLjq7iEN4AaABAg",
            "snippet": {
                "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                "videoId": "SO1PEL52H2k",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "ao4WGPm8q83nkY0aEIUVTk9ARwI",
                    "id": "UgxviX2nSoRFLjq7iEN4AaABAg",
                    "snippet": {
                        "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                        "videoId": "SO1PEL52H2k",
                        "textDisplay": "Friday morning me 6 k profit me tha.....and market close hone tak -27000 loose 😢",
                        "textOriginal": "Friday morning me 6 k profit me tha.....and market close hone tak -27000 loose 😢",
                        "authorDisplayName": "@Niraj.....",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIf8zZSyV91c-FHxqJSD-a81S4HFgJHhe3QHU_9SNzbqCVE=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/channel/UCT5Pme-Oq6iUiPVYGe5V5IA",
                        "authorChannelId": {
                            "value": "UCT5Pme-Oq6iUiPVYGe5V5IA"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2023-12-25T05:52:37Z",
                        "updatedAt": "2023-12-25T05:53:53Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "FEib2xpi0KD_jrdHP1UrlyKFgF8",
            "id": "UgyCZY9U0KJHR1wWCgB4AaABAg",
            "snippet": {
                "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                "videoId": "SO1PEL52H2k",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "bQIyz24BqFpcax7L81tgwDDEhac",
                    "id": "UgyCZY9U0KJHR1wWCgB4AaABAg",
                    "snippet": {
                        "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                        "videoId": "SO1PEL52H2k",
                        "textDisplay": "Sir stock f&amp;o video",
                        "textOriginal": "Sir stock f&o video",
                        "authorDisplayName": "@selfmadetraders0409",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/zIDMctHfrrHLvnkeukbloKew3JjYHisyZvUtybx0jZW4h9wnvk0nuPCu_XR9v-2-GSIsvdU=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/channel/UCb62M742txzeXhTkSoVyQLw",
                        "authorChannelId": {
                            "value": "UCb62M742txzeXhTkSoVyQLw"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2023-12-25T05:50:35Z",
                        "updatedAt": "2023-12-25T05:50:35Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "mWVbh43nhSOvgTnxWtr8H5QKQ18",
            "id": "UgwEN9uGLp1Q0hgYZqV4AaABAg",
            "snippet": {
                "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                "videoId": "SO1PEL52H2k",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "r_g8GlBtWVNcrs2_Q_KLvgnrXzw",
                    "id": "UgwEN9uGLp1Q0hgYZqV4AaABAg",
                    "snippet": {
                        "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                        "videoId": "SO1PEL52H2k",
                        "textDisplay": "M beginner hu abhi abhi",
                        "textOriginal": "M beginner hu abhi abhi",
                        "authorDisplayName": "@Vikashsinghtrader",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/9GzEuohe6U5YPi41E925d-05jPxtAt_rQzk5pmHNRR_4nSYMMaT7R10mGiwPfzhLFtKyta38=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/channel/UCDQFD_1D3AeQnPVZbT9LlhA",
                        "authorChannelId": {
                            "value": "UCDQFD_1D3AeQnPVZbT9LlhA"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2023-12-25T03:22:02Z",
                        "updatedAt": "2023-12-25T03:22:02Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "Gu-G5tFzzMPcpKe_oNToQ9jRkFY",
            "id": "UgzH1fih2jiMedPrN1F4AaABAg",
            "snippet": {
                "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                "videoId": "SO1PEL52H2k",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "7QeG4dKTnOn_ty-Z21ycVFhwETI",
                    "id": "UgzH1fih2jiMedPrN1F4AaABAg",
                    "snippet": {
                        "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                        "videoId": "SO1PEL52H2k",
                        "textDisplay": "Sir plz mujhe aapse baat krni h",
                        "textOriginal": "Sir plz mujhe aapse baat krni h",
                        "authorDisplayName": "@Vikashsinghtrader",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/9GzEuohe6U5YPi41E925d-05jPxtAt_rQzk5pmHNRR_4nSYMMaT7R10mGiwPfzhLFtKyta38=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/channel/UCDQFD_1D3AeQnPVZbT9LlhA",
                        "authorChannelId": {
                            "value": "UCDQFD_1D3AeQnPVZbT9LlhA"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2023-12-25T03:21:49Z",
                        "updatedAt": "2023-12-25T03:21:49Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "5ftTxva4H2lNExS9MHIzpyEyOCY",
            "id": "Ugw-fpjyP8x5fgHBN8t4AaABAg",
            "snippet": {
                "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                "videoId": "SO1PEL52H2k",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "E0kaJ8-ksGe-f0e8mZYzVpg8T8o",
                    "id": "Ugw-fpjyP8x5fgHBN8t4AaABAg",
                    "snippet": {
                        "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                        "videoId": "SO1PEL52H2k",
                        "textDisplay": "Sir plz thoda time nikaal ke plz",
                        "textOriginal": "Sir plz thoda time nikaal ke plz",
                        "authorDisplayName": "@Vikashsinghtrader",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/9GzEuohe6U5YPi41E925d-05jPxtAt_rQzk5pmHNRR_4nSYMMaT7R10mGiwPfzhLFtKyta38=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/channel/UCDQFD_1D3AeQnPVZbT9LlhA",
                        "authorChannelId": {
                            "value": "UCDQFD_1D3AeQnPVZbT9LlhA"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2023-12-25T03:16:57Z",
                        "updatedAt": "2023-12-25T03:16:57Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "e5SFYH4jdzhycj_OtourmV9BCS8",
            "id": "UgxKLsQoF_jxvSZ7bJh4AaABAg",
            "snippet": {
                "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                "videoId": "SO1PEL52H2k",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "o8yr5qhtwIPas2EprOaZHq_Kopc",
                    "id": "UgxKLsQoF_jxvSZ7bJh4AaABAg",
                    "snippet": {
                        "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                        "videoId": "SO1PEL52H2k",
                        "textDisplay": "Sir plz intraday or option trading pr or episode banayaye . \u003cbr\u003eJase aapne beginners k liye wo 6 episode banaye h same vase hi conversation ke sath. \u003cbr\u003ePlz 🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏",
                        "textOriginal": "Sir plz intraday or option trading pr or episode banayaye . \nJase aapne beginners k liye wo 6 episode banaye h same vase hi conversation ke sath. \nPlz 🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏",
                        "authorDisplayName": "@Vikashsinghtrader",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/9GzEuohe6U5YPi41E925d-05jPxtAt_rQzk5pmHNRR_4nSYMMaT7R10mGiwPfzhLFtKyta38=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/channel/UCDQFD_1D3AeQnPVZbT9LlhA",
                        "authorChannelId": {
                            "value": "UCDQFD_1D3AeQnPVZbT9LlhA"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 1,
                        "publishedAt": "2023-12-25T03:16:20Z",
                        "updatedAt": "2023-12-25T03:16:20Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "PDaigQSdWi56OMXOFlyeqBYAzXY",
            "id": "UgzvrT2FW-xgPMDcsr54AaABAg",
            "snippet": {
                "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                "videoId": "SO1PEL52H2k",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "xxrl0Epgg9s8ZAVvO-x5cyYFzH4",
                    "id": "UgzvrT2FW-xgPMDcsr54AaABAg",
                    "snippet": {
                        "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                        "videoId": "SO1PEL52H2k",
                        "textDisplay": "Sir, You are a Great.  Your YouTube video Also Positive. Great advice",
                        "textOriginal": "Sir, You are a Great.  Your YouTube video Also Positive. Great advice",
                        "authorDisplayName": "@nirmalmodak5047",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIf8zZTPgKFjvHWIhaAO24Kdp6wPgml-AL4T-n_cILkBYw=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/channel/UCygqKrXs96l1XnNU1Q80p1g",
                        "authorChannelId": {
                            "value": "UCygqKrXs96l1XnNU1Q80p1g"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2023-12-24T19:31:35Z",
                        "updatedAt": "2023-12-24T19:31:35Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "tkzmVhCTob2SiDiMrci5cFb0Aow",
            "id": "UgyyWsb-UrF29EWUIlN4AaABAg",
            "snippet": {
                "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                "videoId": "SO1PEL52H2k",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "e8jIf6yeR1gJ5wSm5UoR5HLzyX8",
                    "id": "UgyyWsb-UrF29EWUIlN4AaABAg",
                    "snippet": {
                        "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                        "videoId": "SO1PEL52H2k",
                        "textDisplay": "Nice analysis sir ji 🙏",
                        "textOriginal": "Nice analysis sir ji 🙏",
                        "authorDisplayName": "@ManishKumar-eb5xt",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIf8zZTw3aclxKp1zN6QQeBdskOL20S1QvC3bY-hZA=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/channel/UCnmOD2hL2RBLsyUGlFtMZjA",
                        "authorChannelId": {
                            "value": "UCnmOD2hL2RBLsyUGlFtMZjA"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2023-12-24T19:29:12Z",
                        "updatedAt": "2023-12-24T19:29:12Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "4eWy-ES8OSQ2OVIjh7qa1ZPQegw",
            "id": "UgwYsTE9BTnTmUFW_gB4AaABAg",
            "snippet": {
                "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                "videoId": "SO1PEL52H2k",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "WuP89PbIgliqjK_7g1nbdVKQ2s8",
                    "id": "UgwYsTE9BTnTmUFW_gB4AaABAg",
                    "snippet": {
                        "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                        "videoId": "SO1PEL52H2k",
                        "textDisplay": "Video is good for beginners traders.thank you so much sir 🙏",
                        "textOriginal": "Video is good for beginners traders.thank you so much sir 🙏",
                        "authorDisplayName": "@ravigupta4329",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIf8zZSSaQpXOtj5_r4FN83XI5NUP9fLu3ToQspyFhoGfA=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/channel/UC1epfV-zjalErZP499cuK6Q",
                        "authorChannelId": {
                            "value": "UC1epfV-zjalErZP499cuK6Q"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2023-12-24T17:36:59Z",
                        "updatedAt": "2023-12-24T17:36:59Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "hygpnS7tzGcfd1C-WuN2WBTgFdo",
            "id": "UgwQhEuV8YgPEXu73AB4AaABAg",
            "snippet": {
                "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                "videoId": "SO1PEL52H2k",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "Qma4LVtVxqAOZJY9iIBp-DQe6oc",
                    "id": "UgwQhEuV8YgPEXu73AB4AaABAg",
                    "snippet": {
                        "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                        "videoId": "SO1PEL52H2k",
                        "textDisplay": "thanx for all advice",
                        "textOriginal": "thanx for all advice",
                        "authorDisplayName": "@FerozSk4u",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/5NMoeoUaQfqi5ld-w3QK2AYlKaCncQ9ZwXQKftEu8MPhhplPQfqrANw5Hl9xnuCzyuFE3Ami3g=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/channel/UCpWU37_-6msUIHnYd99CCRg",
                        "authorChannelId": {
                            "value": "UCpWU37_-6msUIHnYd99CCRg"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 1,
                        "publishedAt": "2023-12-24T17:18:32Z",
                        "updatedAt": "2023-12-24T17:18:32Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "kYLdwjslOZU2DN6EHGjlpzjc3vs",
            "id": "Ugw-l4H28tcxx8uEBbd4AaABAg",
            "snippet": {
                "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                "videoId": "SO1PEL52H2k",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "U4dwqXo0bUTI9DdR-hJ2EMBhZ6w",
                    "id": "Ugw-l4H28tcxx8uEBbd4AaABAg",
                    "snippet": {
                        "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                        "videoId": "SO1PEL52H2k",
                        "textDisplay": "सर कभी कभी stoploss ही बड़ा होता है, जो टोटल कैपिटल का 2%होता है",
                        "textOriginal": "सर कभी कभी stoploss ही बड़ा होता है, जो टोटल कैपिटल का 2%होता है",
                        "authorDisplayName": "@arunsalve3721",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIf8zZTnEcdVzNSfRsSJOZP9a-HZ3EPMIguyyr2_Twap4VY=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/channel/UCM3kPpXb1gOLesZPIT36Cug",
                        "authorChannelId": {
                            "value": "UCM3kPpXb1gOLesZPIT36Cug"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2023-12-24T17:12:01Z",
                        "updatedAt": "2023-12-24T17:12:01Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "ciYI-MRvPe03rzkivpyPn4ZA5eo",
            "id": "UgzrmcuIWEf3TB4z8KV4AaABAg",
            "snippet": {
                "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                "videoId": "SO1PEL52H2k",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "l3SXOMzn124SyO1a1kpkZuUb450",
                    "id": "UgzrmcuIWEf3TB4z8KV4AaABAg",
                    "snippet": {
                        "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                        "videoId": "SO1PEL52H2k",
                        "textDisplay": "Nice sir",
                        "textOriginal": "Nice sir",
                        "authorDisplayName": "@lavkushyadav8340",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/zy_0GmGQ1362OGqj3YmfwXFBIEOu40ZGcL2j1THg_828b_yslu7S8gVGslOOKyyuuXq78iv9KA=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/channel/UC6hf684vqyoYHE4mvaMyU0w",
                        "authorChannelId": {
                            "value": "UC6hf684vqyoYHE4mvaMyU0w"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 1,
                        "publishedAt": "2023-12-24T16:38:58Z",
                        "updatedAt": "2023-12-24T16:38:58Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "er7THXcXHJ_CWYZb_T6RbPF6WwU",
            "id": "UgwhLMtuJ1VAz7y8fTp4AaABAg",
            "snippet": {
                "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                "videoId": "SO1PEL52H2k",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "4RlYO1zDadjEieF1aPs8HCRO7CA",
                    "id": "UgwhLMtuJ1VAz7y8fTp4AaABAg",
                    "snippet": {
                        "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                        "videoId": "SO1PEL52H2k",
                        "textDisplay": "This video has no voice",
                        "textOriginal": "This video has no voice",
                        "authorDisplayName": "@amirqayoom326",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIf8zZS1NATjT0QIO0xAoUNYdADPL94Wmu2DkHMKnQ=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/channel/UCeuoS3p_neL8blO8DLbGG5w",
                        "authorChannelId": {
                            "value": "UCeuoS3p_neL8blO8DLbGG5w"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2023-12-24T16:14:53Z",
                        "updatedAt": "2023-12-24T16:14:53Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "sikmu1l_BXgUElb-szGixzzva0E",
            "id": "UgzoQVUwDeGW1IS5_uR4AaABAg",
            "snippet": {
                "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                "videoId": "SO1PEL52H2k",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "sQSghGz5GLm6KBGW74lsEofvYiE",
                    "id": "UgzoQVUwDeGW1IS5_uR4AaABAg",
                    "snippet": {
                        "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                        "videoId": "SO1PEL52H2k",
                        "textDisplay": "Ye mera bohat bara problem he subhe fayede me sham ko los los 😂😂😂😂 hasi v ati he khud pe... Lalach ajata he trading ke time pe ajiv tipe ka jald waji hoti he... Phle se sudhar he dekhte hain❤groww",
                        "textOriginal": "Ye mera bohat bara problem he subhe fayede me sham ko los los 😂😂😂😂 hasi v ati he khud pe... Lalach ajata he trading ke time pe ajiv tipe ka jald waji hoti he... Phle se sudhar he dekhte hain❤groww",
                        "authorDisplayName": "@immallick7398",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIf8zZTOMAG9525WvIQvr5tbmEN3dZbZXklNmtvVjnq4GA=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/channel/UCZOxU38lIG6vHc3-gz8J6zQ",
                        "authorChannelId": {
                            "value": "UCZOxU38lIG6vHc3-gz8J6zQ"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 5,
                        "publishedAt": "2023-12-24T16:02:18Z",
                        "updatedAt": "2023-12-24T16:02:18Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 1,
                "isPublic": true
            },
            "replies": {
                "comments": [
                    {
                        "kind": "youtube#comment",
                        "etag": "DrCWIEdBbUVGfyonWKExE4QOOdo",
                        "id": "UgzoQVUwDeGW1IS5_uR4AaABAg.9yhz7-apDiG9yjhI39vMgL",
                        "snippet": {
                            "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                            "videoId": "SO1PEL52H2k",
                            "textDisplay": "Haha same!!",
                            "textOriginal": "Haha same!!",
                            "parentId": "UgzoQVUwDeGW1IS5_uR4AaABAg",
                            "authorDisplayName": "@stevendsouza7891",
                            "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIf8zZQFJ6DS1UtRNIRXsHtos6InD2EWU6ZSlfxj75GC=s48-c-k-c0x00ffffff-no-rj",
                            "authorChannelUrl": "http://www.youtube.com/channel/UCVAfC_KlYd6wuQX72rM1juw",
                            "authorChannelId": {
                                "value": "UCVAfC_KlYd6wuQX72rM1juw"
                            },
                            "canRate": true,
                            "viewerRating": "none",
                            "likeCount": 0,
                            "publishedAt": "2023-12-25T08:05:00Z",
                            "updatedAt": "2023-12-25T08:05:00Z"
                        }
                    }
                ]
            }
        }
    ]
}


const relatedVideoInfo = {
    "kind": "youtube#searchListResponse",
    "etag": "V2hMbKAUF0Q7B8cw5PbXxh33l7o",
    "nextPageToken": "CBkQAA",
    "regionCode": "IN",
    "pageInfo": {
        "totalResults": 1000000,
        "resultsPerPage": 25
    },
    "items": [
        {
            "kind": "youtube#searchResult",
            "etag": "3ZC863ENn4xGSYQIOn65DRgOXiM",
            "id": {
                "kind": "youtube#video",
                "videoId": "FEUa_Xz8W6c"
            },
            "snippet": {
                "publishedAt": "2023-06-16T12:44:11Z",
                "channelId": "UC2sIhf108S02F0Qlb2a88eQ",
                "title": "New Trader Psychology vs Rich Trader Psychology || Anish Singh Thakur || Booming Bulls",
                "description": "OPEN YOUR DEMAT ACCOUNT IN ZERODHA:* https://bit.ly/3gyhIWN and send your ID to demat@boomingbulls.com Website: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/FEUa_Xz8W6c/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/FEUa_Xz8W6c/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/FEUa_Xz8W6c/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Booming Bulls",
                "liveBroadcastContent": "none",
                "publishTime": "2023-06-16T12:44:11Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "gVcEx49AXa9b-fRihjs3eizBYoQ",
            "id": {
                "kind": "youtube#video",
                "videoId": "whe0B7hJJJ0"
            },
            "snippet": {
                "publishedAt": "2022-11-06T04:00:07Z",
                "channelId": "UCEAAzv2OBqxsSczKJ2QZyGQ",
                "title": "Trade with Psychology | Risk Management in Share Market",
                "description": "Start Investing in Share Market Open a Free Demat Account on Angel Broking: https://bit.ly/AngelOneAcc ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/whe0B7hJJJ0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/whe0B7hJJJ0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/whe0B7hJJJ0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Pushkar Raj Thakur : Business Coach",
                "liveBroadcastContent": "none",
                "publishTime": "2022-11-06T04:00:07Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "rHM-a87nQ4yTqIiDBDo4O0JlaLo",
            "id": {
                "kind": "youtube#video",
                "videoId": "YfhHuqUMz3U"
            },
            "snippet": {
                "publishedAt": "2021-03-25T14:00:09Z",
                "channelId": "UCYFQzaZyTUzY-Tiytyv3HhA",
                "title": "Trading Psychology and the 5 Rules to follow",
                "description": "The most common problem with any day trader is having the proper trading psychology. Trading psychology, meaning that a day ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/YfhHuqUMz3U/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/YfhHuqUMz3U/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/YfhHuqUMz3U/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "The Moving Average",
                "liveBroadcastContent": "none",
                "publishTime": "2021-03-25T14:00:09Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "VteKwkrwGLOR09YUYoMjmq11Wgw",
            "id": {
                "kind": "youtube#video",
                "videoId": "QgybpHTlfQ0"
            },
            "snippet": {
                "publishedAt": "2023-11-18T11:35:00Z",
                "channelId": "UCE5wDMNEZElnuRDk6TDPOYg",
                "title": "Trading Psychology | Decode Trading By Power Of Stocks | EP-1 | English Subtitle |",
                "description": "SEBI Report ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/QgybpHTlfQ0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/QgybpHTlfQ0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/QgybpHTlfQ0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "POWER OF STOCKS",
                "liveBroadcastContent": "none",
                "publishTime": "2023-11-18T11:35:00Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "UHNliBITL_tLzR-QSOx8lEL8tEo",
            "id": {
                "kind": "youtube#video",
                "videoId": "bkP-pNCY7Fc"
            },
            "snippet": {
                "publishedAt": "2023-11-04T11:30:15Z",
                "channelId": "UC6VsKH_O59Kdc_yYATRGc_A",
                "title": "Trading Psychology Full Course | Master Trading Psychology in 30 Days Challenge",
                "description": "Important Videos To Watch - 1- 9.30 Am Strategy - https://youtu.be/pmlZl2pUOPE 2- 3 Pm Trading Strategy ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/bkP-pNCY7Fc/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/bkP-pNCY7Fc/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/bkP-pNCY7Fc/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Trading Techstreet",
                "liveBroadcastContent": "none",
                "publishTime": "2023-11-04T11:30:15Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "2ZWa--xCkfg0KbqfzZUyaRGLVfU",
            "id": {
                "kind": "youtube#video",
                "videoId": "iTaSZyikwKk"
            },
            "snippet": {
                "publishedAt": "2022-02-28T15:02:37Z",
                "channelId": "UCE5wDMNEZElnuRDk6TDPOYg",
                "title": "Trading Psychology",
                "description": "Power Of Stock learning App:- https://play.google.com/store/apps/details?id=com.powerofstock Shop official POS Merch:- ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/iTaSZyikwKk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/iTaSZyikwKk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/iTaSZyikwKk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "POWER OF STOCKS",
                "liveBroadcastContent": "none",
                "publishTime": "2022-02-28T15:02:37Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "n-nwZkR5aTVQflfH3Kh2Ms9Qqog",
            "id": {
                "kind": "youtube#video",
                "videoId": "jqqv4Z3_fY8"
            },
            "snippet": {
                "publishedAt": "2023-11-12T22:41:30Z",
                "channelId": "UClmk43er-fKtpocnEOcsKUA",
                "title": "Master Your Trading Psychology In 5 Steps",
                "description": "How To Master Your Trading Psychology In 5 Steps Get free updates on more ways to learn with Me & My team: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/jqqv4Z3_fY8/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/jqqv4Z3_fY8/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/jqqv4Z3_fY8/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Jdun Trades",
                "liveBroadcastContent": "none",
                "publishTime": "2023-11-12T22:41:30Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "evOkneQC29laLEXlhxdl72TLnCU",
            "id": {
                "kind": "youtube#video",
                "videoId": "7qn-D9VJ4io"
            },
            "snippet": {
                "publishedAt": "2023-10-26T10:00:10Z",
                "channelId": "UCcanCrgSWVYW7ZFNKQZso0g",
                "title": "Trading SECRETS by Trading LEGEND - Trading Psychology",
                "description": "Open an account to get access to FREE session https://upstox.com/open-account/?f=8J9Y https://invite.dhan.co/?join=ABAR89 ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/7qn-D9VJ4io/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/7qn-D9VJ4io/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/7qn-D9VJ4io/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Abhishek Kar",
                "liveBroadcastContent": "none",
                "publishTime": "2023-10-26T10:00:10Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "BUuxZ6jzcjwWlpFUHSDoChvxVFI",
            "id": {
                "kind": "youtube#video",
                "videoId": "GJ-qqpyJ3Ms"
            },
            "snippet": {
                "publishedAt": "2023-12-27T15:15:01Z",
                "channelId": "UC2W0sM54z8X0VRaVV6bkEnw",
                "title": "Scalping trading psychology | Scalping Strategy | Position sizing in option buying | Trader Swami",
                "description": "Scalping trading psychology | Scalping Strategy | Position sizing in option buying | Trader Swami Disclaimer: THE INFORMATION ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/GJ-qqpyJ3Ms/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/GJ-qqpyJ3Ms/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/GJ-qqpyJ3Ms/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Trader Swami",
                "liveBroadcastContent": "none",
                "publishTime": "2023-12-27T15:15:01Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "l56jsWLn3wHuK5ZM6PfEA981YGY",
            "id": {
                "kind": "youtube#video",
                "videoId": "s8aPvdf7xjk"
            },
            "snippet": {
                "publishedAt": "2021-08-21T04:30:17Z",
                "channelId": "UCEAAzv2OBqxsSczKJ2QZyGQ",
                "title": "Human Psychology in Share Market | 100% Proven Mental Tricks to Make Money &amp; Avoid Loses",
                "description": "In this video you will learn 3 Proven Phenomenon of Human Psychology which People Use Against themselves and Book Loses ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/s8aPvdf7xjk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/s8aPvdf7xjk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/s8aPvdf7xjk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Pushkar Raj Thakur : Business Coach",
                "liveBroadcastContent": "none",
                "publishTime": "2021-08-21T04:30:17Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "WTUk6IYdwj20K8OA_c6eWkWbO9k",
            "id": {
                "kind": "youtube#video",
                "videoId": "82fIoomXdYs"
            },
            "snippet": {
                "publishedAt": "2023-01-07T11:26:45Z",
                "channelId": "UCUMAP6ENB2EIq04ZKMw4EqA",
                "title": "Trading Psychology!",
                "description": "Telegram - https://telegram.dog/tradesparadise Paradise Courses - https://zefvcm.courses.store/courses Download our App for ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/82fIoomXdYs/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/82fIoomXdYs/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/82fIoomXdYs/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Traders Paradise Live",
                "liveBroadcastContent": "none",
                "publishTime": "2023-01-07T11:26:45Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "Qj5dJZoJE_6ZpKMhGY_UM5M17o8",
            "id": {
                "kind": "youtube#video",
                "videoId": "z1xV3x-_69M"
            },
            "snippet": {
                "publishedAt": "2022-03-27T14:30:17Z",
                "channelId": "UCfYHvYyFICHwHVO9lHwmiig",
                "title": "Trading Psychology for beginners | Top 10 Trading Psychology Rules | Control emotions in Trading",
                "description": "Trading Psychology for beginners | Top 10 Trading Psychology Rules | How to Control emotions in Trading Buy Our ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/z1xV3x-_69M/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/z1xV3x-_69M/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/z1xV3x-_69M/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Neeraj joshi",
                "liveBroadcastContent": "none",
                "publishTime": "2022-03-27T14:30:17Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "1uj5T5RKkFMpAOUKMrmPVbkyHdg",
            "id": {
                "kind": "youtube#video",
                "videoId": "eLa57T2zVic"
            },
            "snippet": {
                "publishedAt": "2021-03-25T12:29:45Z",
                "channelId": "UC2sIhf108S02F0Qlb2a88eQ",
                "title": "Psychology in Trading?",
                "description": "OPEN YOUR DEMAT ACCOUNT IN ZERODHA: https://bit.ly/3gyhIWN OPEN YOUR DEMAT ACCOUNT IN UPSTOX: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/eLa57T2zVic/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/eLa57T2zVic/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/eLa57T2zVic/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Booming Bulls",
                "liveBroadcastContent": "none",
                "publishTime": "2021-03-25T12:29:45Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "LtxQGEzFdg7bYhLvNic4yei6H8o",
            "id": {
                "kind": "youtube#video",
                "videoId": "5JMkl6Z31ao"
            },
            "snippet": {
                "publishedAt": "2023-12-22T11:42:48Z",
                "channelId": "UCE5wDMNEZElnuRDk6TDPOYg",
                "title": "Trading Psychology | Decode Trading By Power Of Stocks | EP-3 | English Subtitle |",
                "description": "POS Traders Club:- Website - https://powerofstockspro.com/ iOS - https://apps.apple.com/app/power-of-stocks-pro/id6450297635 ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/5JMkl6Z31ao/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/5JMkl6Z31ao/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/5JMkl6Z31ao/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "POWER OF STOCKS",
                "liveBroadcastContent": "none",
                "publishTime": "2023-12-22T11:42:48Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "riXMqzCiyHBH1M1Xsj0GSoxGoVo",
            "id": {
                "kind": "youtube#video",
                "videoId": "WuDqnwsOtk4"
            },
            "snippet": {
                "publishedAt": "2020-02-12T11:30:02Z",
                "channelId": "UCN3DuDf9Abnksfkh8aXyLcw",
                "title": "7 Key Points Build Your Trading Psychology ! Beginner To Professional Trader Part-1!Trading Mindset",
                "description": "DISCLAIMER- The video is only and only for educational purpose . We analyze and try to learn information related to ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/WuDqnwsOtk4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/WuDqnwsOtk4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/WuDqnwsOtk4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Art of Option Learning",
                "liveBroadcastContent": "none",
                "publishTime": "2020-02-12T11:30:02Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "03jGJR_1p2sfiwJVXr91eVCZFH4",
            "id": {
                "kind": "youtube#video",
                "videoId": "cacJQmsoVTs"
            },
            "snippet": {
                "publishedAt": "2023-02-08T14:30:08Z",
                "channelId": "UCcanCrgSWVYW7ZFNKQZso0g",
                "title": "Complete Trading Psychology | Trading is NOT gambling",
                "description": "Complete Trading Psychology | Trading is NOT gambling OPEN account in Dhan via this link (ONLY)   ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/cacJQmsoVTs/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/cacJQmsoVTs/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/cacJQmsoVTs/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Abhishek Kar",
                "liveBroadcastContent": "none",
                "publishTime": "2023-02-08T14:30:08Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "L_CkTRJYxrnLXN4581ILR2Gqkjo",
            "id": {
                "kind": "youtube#video",
                "videoId": "SO1PEL52H2k"
            },
            "snippet": {
                "publishedAt": "2023-12-24T13:00:18Z",
                "channelId": "UC9o1F_8M5B1hZ00posMaY0g",
                "title": "What is Trading Psychology &amp; How To Master It? | How Can I Improve My Psychology in Trading?",
                "description": "What is Trading Psychology & How To Master It? | How Can I Improve My Psychology in Trading? Twitter Handle ...",
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
                    }
                },
                "channelTitle": "Trading with Groww",
                "liveBroadcastContent": "none",
                "publishTime": "2023-12-24T13:00:18Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "muz95WjiXiQfQS8k5GrFWS5c1-k",
            "id": {
                "kind": "youtube#video",
                "videoId": "F26pk10Y6Hw"
            },
            "snippet": {
                "publishedAt": "2023-06-14T17:26:57Z",
                "channelId": "UC0ep2A36j7gTFdqW2Yvngbg",
                "title": "Trading Psychology : Consistency",
                "description": "My Only REAL Social Accounts: IG: https://www.instagram.com/tori.trades/ FB: https://www.facebook.com/tori.trades Twitter: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/F26pk10Y6Hw/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/F26pk10Y6Hw/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/F26pk10Y6Hw/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Tori Trades",
                "liveBroadcastContent": "none",
                "publishTime": "2023-06-14T17:26:57Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "02AiCmpj_7JLO9e2UBbtHZ1QC9g",
            "id": {
                "kind": "youtube#video",
                "videoId": "lrruSTQ32Ms"
            },
            "snippet": {
                "publishedAt": "2022-09-17T04:38:31Z",
                "channelId": "UCebKD61pQspkOedEtFjUxSw",
                "title": "Trading psychology that changed everything for me #forextips",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/lrruSTQ32Ms/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/lrruSTQ32Ms/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/lrruSTQ32Ms/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Raja Banks",
                "liveBroadcastContent": "none",
                "publishTime": "2022-09-17T04:38:31Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "OjAPjyiWDqrSv4X94N0liwbEaWE",
            "id": {
                "kind": "youtube#video",
                "videoId": "r0b2UwdebjI"
            },
            "snippet": {
                "publishedAt": "2023-06-12T14:30:13Z",
                "channelId": "UC8tnMSzCEcVn_9YGCF4V68w",
                "title": "TRADING PSYCHOLOGY MASTERCLASS",
                "description": "In this video you will learn What is Trading psychology How to Improve Trading Psychology FOR PARTICIPATING IN COURSE ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/r0b2UwdebjI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/r0b2UwdebjI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/r0b2UwdebjI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Young Trader Viraj",
                "liveBroadcastContent": "none",
                "publishTime": "2023-06-12T14:30:13Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "Zr3EKCUXdV45vJDUWvOjKo94g5c",
            "id": {
                "kind": "youtube#video",
                "videoId": "6sJ0z5uLgwQ"
            },
            "snippet": {
                "publishedAt": "2021-04-22T10:24:14Z",
                "channelId": "UC2sIhf108S02F0Qlb2a88eQ",
                "title": "PSYCHOLOGY IN TRADING || EPISODE - 01 || ANISH SINGH THAKUR || BOOMING BULLS",
                "description": "BOOKS I RECOMMEND: https://boomingbulls.com/resources/ OPEN YOUR DEMAT ACCOUNT IN ZERODHA: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/6sJ0z5uLgwQ/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/6sJ0z5uLgwQ/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/6sJ0z5uLgwQ/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Booming Bulls",
                "liveBroadcastContent": "none",
                "publishTime": "2021-04-22T10:24:14Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "92evw7xzRv9N2gM2gjhuh6-bJJg",
            "id": {
                "kind": "youtube#video",
                "videoId": "xoGOZD7-3gY"
            },
            "snippet": {
                "publishedAt": "2020-01-17T13:24:40Z",
                "channelId": "UCENW0ZwwrW6NG52OJnRxNLg",
                "title": "Trading Psychology | Why Normal Doesn’t Make Money | Part 1",
                "description": "Opto brings you the first instalment from our trading psychology series, \"Normal doesn't make money\". Expert stock market trader, ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/xoGOZD7-3gY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/xoGOZD7-3gY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/xoGOZD7-3gY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "OPTO",
                "liveBroadcastContent": "none",
                "publishTime": "2020-01-17T13:24:40Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "WACw8OpZUdpLS-cb4iM-tC31zoA",
            "id": {
                "kind": "youtube#video",
                "videoId": "aGcR2E7Vr4Q"
            },
            "snippet": {
                "publishedAt": "2022-10-25T12:17:00Z",
                "channelId": "UCcanCrgSWVYW7ZFNKQZso0g",
                "title": "Mindset for trading | Trading Psychology",
                "description": "Mindset for trading | Trading Psychology Kuku Diwali code DIWALI50 (19th-25th Oct)-50% of on annual plan & gifts worth 10 Lakh ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/aGcR2E7Vr4Q/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/aGcR2E7Vr4Q/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/aGcR2E7Vr4Q/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Abhishek Kar",
                "liveBroadcastContent": "none",
                "publishTime": "2022-10-25T12:17:00Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "e-oWL_vrA5Fffg4Xy6p7N6-KtlE",
            "id": {
                "kind": "youtube#video",
                "videoId": "5kPl8b-I-gk"
            },
            "snippet": {
                "publishedAt": "2023-04-22T13:48:53Z",
                "channelId": "UCE5wDMNEZElnuRDk6TDPOYg",
                "title": "Intraday Trading Psychology",
                "description": "POS Traders Club:- Website - https://powerofstockspro.com/ iOS - https://apps.apple.com/app/power-of-stocks-pro/id6450297635 ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/5kPl8b-I-gk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/5kPl8b-I-gk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/5kPl8b-I-gk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "POWER OF STOCKS",
                "liveBroadcastContent": "none",
                "publishTime": "2023-04-22T13:48:53Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "H_mK-__p-8dUsAnbsEFm1C4nOHQ",
            "id": {
                "kind": "youtube#video",
                "videoId": "mMFRlxhblSc"
            },
            "snippet": {
                "publishedAt": "2023-11-27T14:00:29Z",
                "channelId": "UCfYHvYyFICHwHVO9lHwmiig",
                "title": "Turn LOSS into PROFITS: Trading Psychology Masterclass | Trading in Share Market",
                "description": "Trading Psychology Masterclass: Turn Loss into Profits | Trading in Share Market This video covers the in-depth exploration of ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/mMFRlxhblSc/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/mMFRlxhblSc/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/mMFRlxhblSc/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Neeraj joshi",
                "liveBroadcastContent": "none",
                "publishTime": "2023-11-27T14:00:29Z"
            }
        }
    ]
}



export default function Video() {
    const navigate = useNavigate();
    const ApiServices = new ApiService();
    const [queryParams] = useSearchParams();
    const [videoId, setVideoId] = useState();
    const [showMore, setShowMore] = useState(false);
    const { globalState, globalDispatch } = useContext(Context);
    const [relatedVideosData, setRelatedVideosData] = useState([]);
    const [isSubscribe, setIsSubscribe] = useState(false);
    const [videoDetails, setVideoDetails] = useState([]);
    const [channelDetails, setChannelDetails] = useState([]);
    const [commentsList, setCommentsList] = useState([]);
    const dispatch = useDispatch();

    // const [videoDetails, setVideoDetails] = useState(videoInfo?.items?.[0]);
    // const [channelDetails, setChannelDetails] = useState(channelInfo?.items?.[0]);
    // const [commentsList, setCommentsList] = useState(commentsData?.items);


    useEffect(() => {
        async function fetchData() {
            console.log('videoId', queryParams.get('id'));
            if (queryParams.get('id')) {
                setVideoId(queryParams.get('id'));
                await getVideoInformation(queryParams.get('id'));
                dispatch(clearVideoComments())
                dispatch(getVideoComments(queryParams.get('id')))
            }   
        }
        fetchData();
    }, []);

    const getVideoInformation = async (videoId) => {
        try {
            const videoData = await ApiServices.getVideoDetails(videoId);
            if (videoData) {
                setVideoDetails(videoData?.items?.[0]);
                await fetchSearchResults(videoData?.items?.[0]?.snippet?.title);
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
            return (subscribers / 1000000)?.toFixed(1) + "M";
        } else if (subscribers >= 1000) {
            return (subscribers / 1000)?.toFixed(1) + "K";
        } else {
            return subscribers?.toString();
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

    const fetchSearchResults = async (query) => {
        try {
            const searchResults = await ApiServices.getSearchResults(query, globalState?.searchVideosToken);
            if (searchResults?.nextPageToken) {
                // globalDispatch({
                //     searchVideosToken: searchResults?.nextPageToken
                // })
            }
            const finalData = extractSearchData(searchResults);
            console.log('finalData', finalData);
            const videosWithChannelInfo = await Promise.all(
                finalData.map(async (searchItems) => {
                    if (searchItems?.videoId) {
                        const videoInfo = await ApiServices.getVideoDetails(searchItems?.videoId);
                        console.log('videoInfo', videoInfo);
                        return {
                            ...searchItems,
                            thumbnailUrl: videoInfo?.items?.[0]?.snippet?.thumbnails?.maxres?.url || videoInfo?.items?.[0]?.snippet?.thumbnails?.medium?.url,
                            categoryId: videoInfo?.items?.[0]?.snippet?.categoryId,
                            contentDetails: videoInfo?.items?.[0]?.contentDetails,
                            statistics: videoInfo?.items?.[0]?.statistics,
                            channelImage: channelInfo?.items?.[0]?.snippet?.thumbnails?.medium?.url
                        };
                    }
                })
            );
            setRelatedVideosData((prevVideos) => [...prevVideos, ...videosWithChannelInfo]);
        } catch (error) {
            console.log('Error => ', error);
        }
    }

    const extractSearchData = (videos) => {
        const videoData = videos?.items?.map(item => {
            return {
                videoId: item?.id?.videoId,
                publishedAt: item?.snippet?.publishTime,
                channelId: item?.snippet?.channelId,
                title: item?.snippet?.title,
                description: item?.snippet?.description,
                channelTitle: item?.snippet?.channelTitle,
            };
        });

        return videoData;
    }

    function convertViewCount(viewCount) {
        viewCount = parseInt(viewCount);

        if (viewCount >= 1000000) {
            return (viewCount / 1000000).toFixed(2) + 'M';
        } else if (viewCount >= 1000) {
            return (viewCount / 1000).toFixed(2) + 'k';
        } else {
            return viewCount.toString();
        }
    }

    const showRelatedVideoItems = (item) => {
        if (item?.videoId) {
            return <div className='mb-3'>
                <div className="flex justify-start">
                    <div onClick={() => navigate(`${ROUTES.VIDEO}?id=${videoId}`)} className="img w-[170px] flex-1 cursor-pointer max-w-[170px] mr-2 flex justify-center ">
                        <div className="image-container w-full flex justify-center items-center overflow-hidden">
                            <img className='rounded-xl w-full' src={item?.thumbnailUrl} alt="" />
                        </div>
                    </div>
                    <div className="flex max-w-[210px] flex-col items-start text-start align-middle">
                        <span onClick={() => navigate(`${ROUTES.VIDEO}?id=${videoId}`)} className='text-sm cursor-pointer line-clamp-2'>{item?.title}</span>
                        <div className="user">
                            <span className="text-[12px] text-[#aaa]" onClick={() => navigate(`${ROUTES.CHANNEL}?id=${item?.channelId}`)}>{item?.channelTitle}</span>
                        </div>
                        <div className="user">
                            <span className="views text-[#aaa] text-[12px]">{`${convertViewCount(item?.statistics?.viewCount)} view`}</span>
                            <span className='text-[#aaa] text-[12px]'>{moment(item?.publishedAt).fromNow()}</span>
                        </div>
                    </div>
                </div>
            </div>
        }
    }

    return (
        <div className='videoPage '>
            <div className="flex justify-start flex-1 items-start w-full">
                <div className="videoPartSection">
                    <div className="flex flex-col mb-10">
                        <div className="player">
                            <YouTube
                                opts={videoPlayerOptions}
                                videoId={videoId}
                                className={'videoPlayer'}
                                iframeClassName={'videoPlayerIframe'}
                                loading={'Loading'}
                            />
                        </div>
                        {videoDetails && channelDetails ?
                            <div>
                                <div className="title mt-5">
                                    <p className='text-xl font-medium'>{videoDetails?.snippet?.title}</p>
                                </div>
                                <div className="channelInfo flex justify-between items-center mt-3">
                                    <div className="flex justify-start items-center">
                                        <div className="channelLogo" onClick={() => navigate(`${ROUTES.CHANNEL}?id=${channelDetails?.id}`)}>
                                            <img src={channelDetails?.snippet?.thumbnails?.medium?.url} alt="" />
                                        </div>
                                        <div className="flex flex-col ml-3">
                                            <span className='text-[#fff] text-base cursor-pointer' onClick={() => navigate(`${ROUTES.CHANNEL}?id=${channelDetails?.id}`)}>{channelDetails?.snippet?.title}</span>
                                            <span className='text-[#aaa] text-sm'>{`${formatYouTubeSubscribers(channelDetails?.statistics?.subscriberCount)} subscribers`}</span>
                                        </div>
                                        <div className='ml-8'>
                                            {isSubscribe ?
                                                <button onClick={() => setIsSubscribe(!isSubscribe)} className='bg-[#fff] text-[15px] text-[#111] rounded-full py-2 px-3'>Subscribe</button>
                                                :
                                                <button onClick={() => setIsSubscribe(!isSubscribe)} className='bg-[rgba(255,255,255,0.1)] text-[15px] text-[white] hover:bg-[#3f3f3f] flex justify-center items-center rounded-full py-2 px-3'><NotificationsActiveIcon fontSize='small' color='white' className='mr-3' /> Subscribed</button>
                                            }
                                        </div>
                                    </div>
                                    <div className="flex justify-start items-center">
                                        <button className='bg-[rgba(255,255,255,0.1)] hover:bg-[#3f3f3f] text-[15px] text-[white] flex justify-center items-center rounded-full py-2 px-4 mr-2'> <ThumbUpOutlinedIcon fontSize='small' color='white' />  <span className='mx-3 mr-4'>{videoDetails?.statistics?.likeCount}</span><ThumbDownAltOutlinedIcon fontSize='small' color='white' /></button>
                                        <button className='bg-[rgba(255,255,255,0.1)]  hover:bg-[#3f3f3f] text-[15px] text-[white] flex justify-center items-center rounded-full py-2 px-4 mr-2'> <ShareOutlinedIcon fontSize='small' color='white' className='mr-2' />Share</button>
                                        <button className='bg-[rgba(255,255,255,0.1)]  hover:bg-[#3f3f3f] text-[15px] text-[white] flex justify-center items-center rounded-full py-2 px-4 mr-2'> <DownloadOutlinedIcon fontSize='small' color='white' className='mr-2' />Download</button>
                                        <button className='bg-[rgba(255,255,255,0.1)]  hover:bg-[#3f3f3f] text-[15px] text-[white] flex justify-center items-center rounded-full py-2 px-4'> <ContentCutOutlinedIcon fontSize='small' color='white' className='mr-2' />Clip</button>

                                    </div>
                                </div>
                                <div className="mt-3 w-full p-3 bg-[#282829] rounded-xl">
                                    <span className="mr-2 text-sm">{`${convertViewCount(videoDetails?.statistics?.viewCount)} views`}</span>
                                    <span className='text-sm'>{moment(videoDetails?.snippet?.publishedAt).fromNow()}</span>
                                    {videoDetails?.snippet?.description?.length ?
                                        <div className={'text-[15px] w-full ' + (showMore ? 'line-clamp-none' : 'line-clamp-4')}
                                            dangerouslySetInnerHTML={{ __html: (videoDetails?.snippet?.description)?.replace(/\n/g, '<br />') }} />
                                        : ""}
                                    <span className='text-[15px] mt-1 cursor-pointer' onClick={() => setShowMore(!showMore)}>{showMore ? 'Show less' : 'Show more'}</span>
                                </div>
                            </div> : ''
                        }
                        <VideoComments  commentCount={videoDetails?.statistics?.commentCount}/>
                    </div>
                </div>
                <div className="relatedVideosSection ml-5">
                    <RelatedVideos />
                    {relatedVideosData?.map((videoItem) => showRelatedVideoItems(videoItem))}
                </div>
            </div>
        </div>
    )
}
