/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import './Video.css';
import YouTube from 'react-youtube';
import ApiService from '../../Services/ApiService';
import { useSearchParams } from 'react-router-dom';
import moment from 'moment';
import Context from '../../Context/Context';

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



export default function Video() {
    const ApiServices = new ApiService();
    const [queryParams] = useSearchParams();
    const [videoId, setVideoId] = useState();
    const [showMore, setShowMore] = useState(false);
    const { globalState, globalDispatch } = useContext(Context);
    const [relatedVideosData, setRelatedVideosData] = useState([]);
    const [videoDetails, setVideoDetails] = useState([]);
    const [channelDetails, setChannelDetails] = useState([]);
    const [commentsList, setCommentsList] = useState([]);
    // const [videoDetails, setVideoDetails] = useState(videoInfo?.items?.[0]);
    // const [channelDetails, setChannelDetails] = useState(channelInfo?.items?.[0]);
    // const [commentsList, setCommentsList] = useState(commentsData?.items);


    useEffect(() => {
        async function fetchData() {
            console.log('videoId', queryParams.get('id'));
            if (queryParams.get('id')) {
                setVideoId(queryParams.get('id'));
                await getVideoInformation(queryParams.get('id'));
                await getCommentsData(queryParams.get('id'));
            }
        }
        fetchData();
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

    const getCommentsData = async (videoId) => {
        try {
            const commentsInfo = await ApiServices.getVideoComments(videoId);
            if (commentsInfo) {
                setCommentsList(commentsInfo?.items);
            }
        } catch (error) {
            console.log('getChannelInfo : Error => ', error);
        }
    }


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

    const fetchSearchResults = async () => {
        try {
            const searchResults = await ApiServices.getSearchResults(globalState?.searchQuery, globalState?.searchVideosToken);
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
            return <div className='searchResultVideo mt-4'>
                <div className="flex justify-start">
                    <div className="img w-[360px] mr-4 flex justify-center ">
                        <div className="image-container w-full flex justify-center items-center overflow-hidden">
                            <img className='rounded-xl w-full' src={item?.thumbnailUrl} alt="" />
                        </div>
                    </div>
                    <div className="flex max-w-[720px] flex-col items-start text-start align-middle">
                        <span className='text-base'>{item?.title}</span>
                        <div className="user">
                            <span className="views text-[#aaa] text-sm">{`${convertViewCount(item?.statistics?.viewCount)} view`}</span>
                            <span className='text-[#aaa] text-sm'>{moment(item?.publishedAt).fromNow()}</span>
                        </div>
                        <div className="user mt-2">
                            <img src={item?.channelImage} alt="" />
                            <span className="text-sm ml-2 text-[#aaa]">{item?.channelTitle}</span>
                        </div>
                        <span className='text-sm mt-2 text-[#aaa]'>{item?.description}</span>
                    </div>
                </div>
            </div>
        }
    }

    const TradingComponent = (tradingInfoString) => {

        // Convert newlines to HTML line breaks
        const lines = tradingInfoString.split('\n');

        const renderLine = (line, index) => {
            // Regular expression to match URLs
            const urlRegex = /(https?:\/\/[^\s]+)/g;

            // Split the line into parts separated by URLs
            const parts = line.split(urlRegex);

            return (
                <div key={index}>
                    {parts.map((part, i) => {
                        if (part.match(urlRegex)) {
                            // If the part is a URL, apply the styling
                            return (
                                <a
                                    key={i}
                                    href={part}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: 'blue', textDecoration: 'underline' }}
                                >
                                    {part}
                                </a>
                            );
                        } else {
                            // Otherwise, render the plain text
                            return <span className='text-sm' key={i}>{part}</span>;
                        }
                    })}
                </div>
            );
        };

        // return <div style={{ whiteSpace: 'pre-line' }}>{lines.map(renderLine)}</div>;
        return <div>{lines.map((line, index) => renderLine(line, index))}</div>;
    };

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
                                    {videoDetails?.snippet?.description?.length ? 
                                    <div className={'text-[15px] ' + (showMore ? 'line-clamp-none' : 'line-clamp-4')}
                                    dangerouslySetInnerHTML={{ __html: (videoDetails?.snippet?.description)?.replace(/\n/g, '<br />') }} />
                                : ""}
                                    {/* {TradingComponent(videoDetails?.snippet?.description)} */}
                                    <span className='text-[15px] mt-1 cursor-pointer' onClick={() => setShowMore(!showMore)}>{showMore ? 'Show less' : 'Show more'}</span>
                                </div>
                            </div> : ''
                        }
                        {commentsList?.length ?
                            <div className="my-5">
                                <span className='text-lg font-semibold'>{`${videoDetails?.statistics?.commentCount} Comments`}</span>
                                <div className="mt-5 w-full">
                                    {commentsList?.map((item) => {
                                        return <div className='comment w-full'>
                                            <div className="commentInfo flex justify-start items-start mt-5">
                                                <div className="commentLogo">
                                                    <img src={item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} alt="" />
                                                </div>
                                                <div className="flex flex-col ml-4">
                                                    <span className='text-[#fff] text-[12px]'>{item?.snippet?.topLevelComment?.snippet?.authorDisplayName}</span>
                                                    <div className='text-[15px] mt-1' dangerouslySetInnerHTML={{ __html: (item?.snippet?.topLevelComment?.snippet?.textOriginal)?.replace(/\n/g, '<br />') }} />
                                                </div>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div> : ''
                        }
                    </div>
                </div>
                <div className="relatedVideosSection">
                    {showRelatedVideoItems()}
                </div>
            </div>
        </div>
    )
}
