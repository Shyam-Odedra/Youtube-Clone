import React, { useEffect } from 'react';
import './HomeFeed.css';
import HomeVideoCard from '../../../Components/Videos/HomeVideoCard';
import { ImageConfig } from '../../../Constants/config';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { Skeleton } from '@mui/material';
import { getHomePageVideos } from '../../../Store/reducers/homePageVideos';
import { clearHomeVideos } from '../../../Store/features/youtubeSlice';

export const VideoData = [
    {
        title: 'Image Slider Using HTML, CSS, and JavaScript',
        thumbnail: ImageConfig.THUMBNAIL1,
        channelName: 'Coding Power',
        channelLogo: ImageConfig.ACCOUNT_LOGO,
        videoLength: '7:08',
        views: '28 Views',
        uploadTime: '3 week ago',
    },
    {
        title: 'Netflix Home Page Using HTML and CSS',
        thumbnail: ImageConfig.THUMBNAIL2,
        channelName: 'Coding Power',
        channelLogo: ImageConfig.ACCOUNT_LOGO,
        videoLength: '12:40',
        views: '160 Views',
        uploadTime: '3 week ago',
    },
    {
        title: 'How To Create Login Form In HTML and CSS',
        thumbnail: ImageConfig.THUMBNAIL3,
        channelName: 'Coding Power',
        channelLogo: ImageConfig.ACCOUNT_LOGO,
        videoLength: '8:20',
        views: '33 Views',
        uploadTime: '1 week ago',
    },
    {
        title: 'Drop Down Menu using HTML and CSS',
        thumbnail: ImageConfig.THUMBNAIL4,
        channelName: 'Coding Power',
        channelLogo: ImageConfig.ACCOUNT_LOGO,
        videoLength: '5:40',
        views: '25 Views',
        uploadTime: '2 week ago',
    },
    {
        title: 'Full Screen Video Background Using HTML',
        thumbnail: ImageConfig.THUMBNAIL5,
        channelName: 'Coding Power',
        channelLogo: ImageConfig.ACCOUNT_LOGO,
        videoLength: '9:30',
        views: '10 Views',
        uploadTime: '2 week ago',
    },
    {
        title: 'Pricing Table Using HTML & CSS',
        thumbnail: ImageConfig.THUMBNAIL6,
        channelName: 'Coding Power',
        channelLogo: ImageConfig.ACCOUNT_LOGO,
        videoLength: '10:20',
        views: '15 Views',
        uploadTime: '3 week ago',
    },
    {
        title: 'How to Make Video Gallery Using HTML, CSS',
        thumbnail: ImageConfig.THUMBNAIL7,
        channelName: 'Coding Power',
        channelLogo: ImageConfig.ACCOUNT_LOGO,
        videoLength: '8:08',
        views: '36 Views',
        uploadTime: '3 week ago',
    },
    {
        title: 'Responsive Gallery Using HTML and CSS',
        thumbnail: ImageConfig.THUMBNAIL8,
        channelName: 'Coding Power',
        channelLogo: ImageConfig.ACCOUNT_LOGO,
        videoLength: '6:50',
        views: '22 Views',
        uploadTime: '1 week ago',
    },
    {
        title: 'Image Slider Using HTML, CSS, and JavaScript',
        thumbnail: ImageConfig.THUMBNAIL1,
        channelName: 'Coding Power',
        channelLogo: ImageConfig.ACCOUNT_LOGO,
        videoLength: '7:08',
        views: '28 Views',
        uploadTime: '3 week ago',
    },
    {
        title: 'Netflix Home Page Using HTML and CSS',
        thumbnail: ImageConfig.THUMBNAIL2,
        channelName: 'Coding Power',
        channelLogo: ImageConfig.ACCOUNT_LOGO,
        videoLength: '12:40',
        views: '160 Views',
        uploadTime: '3 week ago',
    },
    {
        title: 'How To Create Login Form In HTML and CSS',
        thumbnail: ImageConfig.THUMBNAIL3,
        channelName: 'Coding Power',
        channelLogo: ImageConfig.ACCOUNT_LOGO,
        videoLength: '8:20',
        views: '33 Views',
        uploadTime: '1 week ago',
    },
    {
        title: 'Drop Down Menu using HTML and CSS',
        thumbnail: ImageConfig.THUMBNAIL4,
        channelName: 'Coding Power',
        channelLogo: ImageConfig.ACCOUNT_LOGO,
        videoLength: '5:40',
        views: '25 Views',
        uploadTime: '2 week ago',
    },
    {
        title: 'Full Screen Video Background Using HTML',
        thumbnail: ImageConfig.THUMBNAIL5,
        channelName: 'Coding Power',
        channelLogo: ImageConfig.ACCOUNT_LOGO,
        videoLength: '9:30',
        views: '10 Views',
        uploadTime: '2 week ago',
    },
    {
        title: 'Pricing Table Using HTML & CSS',
        thumbnail: ImageConfig.THUMBNAIL6,
        channelName: 'Coding Power',
        channelLogo: ImageConfig.ACCOUNT_LOGO,
        videoLength: '10:20',
        views: '15 Views',
        uploadTime: '3 week ago',
    },
    {
        title: 'How to Make Video Gallery Using HTML, CSS',
        thumbnail: ImageConfig.THUMBNAIL7,
        channelName: 'Coding Power',
        channelLogo: ImageConfig.ACCOUNT_LOGO,
        videoLength: '8:08',
        views: '36 Views',
        uploadTime: '3 week ago',
    },
    {
        title: 'Responsive Gallery Using HTML and CSS',
        thumbnail: ImageConfig.THUMBNAIL8,
        channelName: 'Coding Power',
        channelLogo: ImageConfig.ACCOUNT_LOGO,
        videoLength: '6:50',
        views: '22 Views',
        uploadTime: '1 week ago',
    },
    {
        title: 'Image Slider Using HTML, CSS, and JavaScript',
        thumbnail: ImageConfig.THUMBNAIL1,
        channelName: 'Coding Power',
        channelLogo: ImageConfig.ACCOUNT_LOGO,
        videoLength: '7:08',
        views: '28 Views',
        uploadTime: '3 week ago',
    },
    {
        title: 'Netflix Home Page Using HTML and CSS',
        thumbnail: ImageConfig.THUMBNAIL2,
        channelName: 'Coding Power',
        channelLogo: ImageConfig.ACCOUNT_LOGO,
        videoLength: '12:40',
        views: '160 Views',
        uploadTime: '3 week ago',
    },
    {
        title: 'How To Create Login Form In HTML and CSS',
        thumbnail: ImageConfig.THUMBNAIL3,
        channelName: 'Coding Power',
        channelLogo: ImageConfig.ACCOUNT_LOGO,
        videoLength: '8:20',
        views: '33 Views',
        uploadTime: '1 week ago',
    },
    {
        title: 'Drop Down Menu using HTML and CSS',
        thumbnail: ImageConfig.THUMBNAIL4,
        channelName: 'Coding Power',
        channelLogo: ImageConfig.ACCOUNT_LOGO,
        videoLength: '5:40',
        views: '25 Views',
        uploadTime: '2 week ago',
    },
    {
        title: 'Full Screen Video Background Using HTML',
        thumbnail: ImageConfig.THUMBNAIL5,
        channelName: 'Coding Power',
        channelLogo: ImageConfig.ACCOUNT_LOGO,
        videoLength: '9:30',
        views: '10 Views',
        uploadTime: '2 week ago',
    },
    {
        title: 'Pricing Table Using HTML & CSS',
        thumbnail: ImageConfig.THUMBNAIL6,
        channelName: 'Coding Power',
        channelLogo: ImageConfig.ACCOUNT_LOGO,
        videoLength: '10:20',
        views: '15 Views',
        uploadTime: '3 week ago',
    },
    {
        title: 'How to Make Video Gallery Using HTML, CSS',
        thumbnail: ImageConfig.THUMBNAIL7,
        channelName: 'Coding Power',
        channelLogo: ImageConfig.ACCOUNT_LOGO,
        videoLength: '8:08',
        views: '36 Views',
        uploadTime: '3 week ago',
    },
    {
        title: 'Responsive Gallery Using HTML and CSS',
        thumbnail: ImageConfig.THUMBNAIL8,
        channelName: 'Coding Power',
        channelLogo: ImageConfig.ACCOUNT_LOGO,
        videoLength: '6:50',
        views: '22 Views',
        uploadTime: '1 week ago',
    },
]

const YoutubeVideos = [
    {
        "videoId": "8vRCo7Dyw5c",
        "publishedAt": "2023-12-22T11:02:47Z",
        "channelId": "UC-CSyyi47VX1lD9zyeABW3w",
        "title": "Real Story of Dunki | How Indians Cross US Mexico Border? | Donkey Process | Dhruv Rathee",
        "description": "🤖 Join the Master ChatGPT - Full Course : https://academy.dhruvrathee.com/chatgpt\nLearn to harness the power of ChatGPT to transform your life! \nUse coupon code: DUN40 for 40% discount! Offer only valid for the first 400 people. \n\nIn this video by Dhruv Rathee, the focus is on the heart-wrenching story of illegal immigration from India, specifically the tragic journey of a family from the small village of Dingucha, Gujarat. The video delves into the realities of \"donkey flights,\" a term for illegal immigration routes, and the dangerous journeys families undertake for a better life in countries like the USA ,UK and Canada. It also explores the broader context of why people risk everything, including political and economic factors, and the role of misleading agents in this perilous process. Donkey Process of illegal immigration has also inspired the story of the movie \"Dunki\" starring Shah Rukh Khan. Watch as Dhruv Rathee sheds light on this critical issue, blending personal stories with broader social and political insights.\n\nLink to the mentioned video - \nDark Reality of Jawan Film | Shah Rukh Khan | Dhruv Rathee - https://youtu.be/HodJLhRV7gY?si=DTUduLxyP6KfnWv3\n----------------------------------------------------\nJOIN MY COURSE: \n✏️ Time Management and Productivity Course :  https://academy.dhruvrathee.com\nLearn how to manage time and maximize productivity in my specialised online course. \n\nLISTEN TO MY PODCAST: \n🎧 My Spotify exclusive podcast. Learn about how India works, only on Maha Bharat with Dhruv Rathee: https://spoti.fi/3IhBW51\n\nFOLLOW ME ON:\n▶️ Main Channel: http://www.youtube.com/dhruvrathee\n🎦 Vlog Channel: http://www.youtube.com/dhruvratheevlogs\n🩳 Shorts Channel: https://www.youtube.com/channel/UCw4IHIMsDO5wpIiprOSXiEA\n📸 Instagram: http://www.instagram.com/dhruvrathee\n🐦  Twitter: http://www.twitter.com/dhruv_rathee\n\nMY VIDEO TOPICS:\n🗺 Geopolitics: https://youtube.com/playlist?list=PL8828Z-IEhFGkz7F_paNquqsFyd357oYA\n📘 History: https://youtube.com/playlist?list=PL8828Z-IEhFGSI3R-AkaB95EJBO7nBjGS\n🔬 Science: https://youtube.com/playlist?list=PL8828Z-IEhFGrt2Tf1b0qg40g3AFw4YKp\n☠️ Mystery: https://youtube.com/playlist?list=PL8828Z-IEhFGF2LJQrRHRtoEfS7BZHZIK\n💰Finance: https://youtube.com/playlist?list=PL8828Z-IEhFEG47-MiL0G7Mh6J-T8eBoq\n🇮🇳 Indian Current Affairs: https://youtube.com/playlist?list=PL8828Z-IEhFErzy-eKRAiTta0GLrzn6fM\n🌍 International Current Affairs: https://youtube.com/playlist?list=PL8828Z-IEhFFs3hT95-ZnEHDyLduo40FU\n\nDOWNLOAD MY APP: \n📱Android app: https://play.google.com/store/apps/details?id=com.arStudios.dhruvRatheeApp&hl=en&gl=US\n📱iOS App: https://apps.apple.com/ie/app/dhruv-rathee/id1553920898\n----------------------------------------------------",
        "thumbnailUrl": "https://i.ytimg.com/vi/8vRCo7Dyw5c/maxresdefault.jpg",
        "channelTitle": "Dhruv Rathee",
        "categoryId": "27",
        "contentDetails": {
            "duration": "PT22M",
            "dimension": "2d",
            "definition": "hd",
            "caption": "true",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "4858728",
            "likeCount": "224039",
            "favoriteCount": "0",
            "commentCount": "11437"
        }
    },
    {
        "videoId": "1sGfiso14Z0",
        "publishedAt": "2023-12-22T12:30:01Z",
        "channelId": "UC2bNrKQbJLphxNCd6BSnTkA",
        "title": "Tattadash! | Karikku | Comedy",
        "description": "Brand Partner:\nEuro Guard is India's first and largest manufacturer of uPVC rainwater roof gutters. Rectilinear design gives an aesthetic edgy look to the roof. UV stabilized technology gives a life of 25 years. DIY lock to fit accessories are leak proof. \nTo know more, click here\n\nhttps://www.euroguardhysquare.com\nDirected by Binoy John \nhttps://www.instagram.com/binoice/ \n\nStory and Dialogues: KC, Abijith Krishnan\nhttps://www.instagram.com/krishnachandran0/ \nhttps://www.instagram.com/abijith_krishnan_/ \n\nProduced by Nikhil Prasad  \nhttps://www.instagram.com/nikhilprasaad/ \n\nChief Associate Director: KC\nhttps://www.instagram.com/krishnachandran0/ \n\nAssociate Director: Abijith Krishnan \nhttps://www.instagram.com/abijith_krishnan_/ \n\nDirector of Photography: Subin Mathew \nhttps://www.instagram.com/dop_subin_mathew/ \n\nEditor: Anand Mathews, Binoy John\nhttps://www.instagram.com/anandmathews/ \nhttps://www.instagram.com/binoice/\n\nMusic: Jishnu Thilak\nhttps://www.instagram.com/jishnuthilak/\n\nDI : Dawn B Johns \nhttps://www.instagram.com/dawnbjohns/ \n\nVFX: Abijith Krishnan, Binoy John\nhttps://www.instagram.com/abijith_krishnan_/ \nhttps://www.instagram.com/binoice/ \n\nStunt coordination: Aepiens\nhttps://www.instagram.com/aepiens/\n\nAction: Shravan Satya\nhttps://www.instagram.com/shravansatya/\n\nStunt assistants: Sivaganesh, Shikhin, Anandakrishnan\nhttps://www.instagram.com/senagavis/\nhttps://www.instagram.com/movergent/\nhttps://www.instagram.com/a.j_nair/\n\nTitle & Poster: Binoy John\nhttps://www.instagram.com/binoice/ \n\nProduction Manager: Arun Ratan \nhttps://www.instagram.com/arunratan88/\n\nSync Sound & Sound Design: Jishnu Ramanujan\nhttps://www.instagram.com/jishnu_ramanujan/\n\nRe - Recordist: Ayaan K\nhttps://www.instagram.com/___ayaan_k/\n\nArt: Anex Nellickal\nhttps://www.instagram.com/anex_nellickal/\n\nMakeup: Sijo PB, Arshad Varkala\nhttps://www.instagram.com/sijo.pb/\nhttps://www.instagram.com/arshadvarkala_makeup_artist/\n\nStylist: Martin Truco,Vijeesh AP\nhttps://www.instagram.com/martini_trucco/\nhttps://www.instagram.com/the_hair_wizard__/\n\nAssistant Director: Akshay S Kumar\nhttps://www.instagram.com/_akshay_s_kumar._/ \n\nAssociate Cinematographer: Jithin P Balakrishnan,Sha\nhttps://www.instagram.com/jithin_padaledath/ \nhttps://www.instagram.com/storiesofsha/\n\nFocus Pullers: Tony Joseph\nhttps://www.instagram.com/tonyjosephpallithazhe/\n\nProduction Executives: Sirajudheen A, Amal V Ambili\nhttps://www.instagram.com/onlylove_srj/ \nhttps://www.instagram.com/_itz_me_ambili_/ \n\nLighting: Vibhu T, Amal P Mani, Sharath Sivan, Bhuvana Chandran,Vinayan\n\nLight Unit: Before & After Film Productions\nhttps://www.instagram.com/beforeandafterfilm/ \n\nCast:  Sabareesh Sajjin, KC, Unni Mathews, Sruthy Suresh, Anand mathews, Mitun M Das, Najjah Abdulkareem, Riju Rajeev, Arun Ratan, Vishnu, Abhishek, Amal V Ambili, Jishnu Ramanujan, Sirajudheen A, Rahul Chandrababu, Abhishek S Kumar, Akshay S Kumar, Vibhu, Anex Nellickal, Saju joy, Azad, Sreejith Lal, Anu K Aniyan\nhttps://www.instagram.com/sabareeshsajjin/ \nhttps://www.instagram.com/krishnachandran0/ \nhttps://www.instagram.com/unnimathews/ \nhttps://www.instagram.com/anandmathews/ \nhttps://www.instagram.com/arunratan88/ \nhttps://www.instagram.com/riju_rajeev/ \nhttps://www.instagram.com/_sruthy.suresh_/ \nhttps://www.instagram.com/najjahabdulkareem/\nhttps://www.instagram.com/vishnu_vitzz/ \nhttps://www.instagram.com/abhi_shake_._/  \nhttps://www.instagram.com/_itz_me_ambili_/ \nhttps://www.instagram.com/irahulchandrababu/ \nhttps://www.instagram.com/jishnu_ramanujan/ \nhttps://www.instagram.com/onlylove_srj/ \nhttps://www.instagram.com/absk_x/\nhttps://www.instagram.com/_akshay_s_kumar._/\nhttps://www.instagram.com/anex_nellickal/\nhttps://www.instagram.com/_saju_joy_/\nhttps://www.instagram.com/sreejithlaal/\n\nLocation Courtesy: Clinjo Chaykadai\nhttps://www.instagram.com/_clinjo__chaykadai_/\n\nSubtitles : Arjjun Menon \n\nSpecial Thanks: Shanti Garden Association, Meghul Das, Anandhu Radhakrishnan, Akshay Soman, Sivaprasad Menon, Anish fertal, Jithin Clinjo Chayakada, Jerry, Godown Neo kochi, Salsa the Travel Company, Sunish, Chayapeedika, Vasora jewellers",
        "thumbnailUrl": "https://i.ytimg.com/vi/1sGfiso14Z0/maxresdefault.jpg",
        "channelTitle": "Karikku",
        "categoryId": "23",
        "contentDetails": {
            "duration": "PT33M36S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "true",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "2344601",
            "likeCount": "195293",
            "favoriteCount": "0",
            "commentCount": "6963"
        }
    },
    {
        "videoId": "oJbK2v5hQXE",
        "publishedAt": "2023-12-21T21:19:26Z",
        "channelId": "UCmqfX0S3x0I3uwLkPdpX03w",
        "title": "Sanju Samson's 100 & Arshdeep Singh's 4-fer Help India Win ODI Series | SA vs IND 3rd ODI Highlights",
        "description": "#TeamIndia 296/8 (50)\n#SouthAfrica 218/10 (45.5)\n\n#SanjuSamson's ton meant that India set up a formidable target for the hosts, and the bowlers led by #ArshdeepSingh completed the job as 🇮🇳 took the series 2-1 💙\n\nOnto the Tests now 🔥\n\nTune-in to the 1st #SAvIND Test\nTUE, DEC 26, 12:30 PM onwards | Star Sports Network\n#Cricket\n\nSubscribe to Star Sports India ➡️ https://bit.ly/StarSportsYoutube\n\n\nConnect with Star Sports India for more ⬇️\nInstagram 👉🏻 https://bit.ly/StarSportsIG\n \nFacebook 👉🏻  https://bit.ly/StarSportsFB\n \nX 👉🏻  https://bit.ly/StarSportsX\n \nThreads 👉🏻 https://bit.ly/StarSportsThreads\n \n\n#StarSports #Believe",
        "thumbnailUrl": "https://i.ytimg.com/vi/oJbK2v5hQXE/maxresdefault.jpg",
        "channelTitle": "Star Sports",
        "categoryId": "17",
        "contentDetails": {
            "duration": "PT12M57S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "6737315",
            "likeCount": "90255",
            "favoriteCount": "0",
            "commentCount": "2404"
        }
    },
    {
        "videoId": "ENdkAK5nq2M",
        "publishedAt": "2023-12-22T10:12:11Z",
        "channelId": "UCeiAKuJGZrIjYvaq0nMwbJg",
        "title": "Salaar Movie REVIEW | Deeksha Sharma",
        "description": "Salaar Movie Review In Hindi By Deeksha Sharma. Salaar Featuring Prabhas Directed by Prashanth Neel is all set to carry on the Violent Universe but this time with a Touch of Mahabharat & Mixture of KGF Action Vibes- The Rise of a New Super-Villain who will stop at nothing but friendship! Salaar Full Movie Hindi Dubbed Story Outline Explained & Positives Negatives would be shared in this Video. Salaar vs Dunki Shahrukh Khan - Who will end 2023 as the Biggest Winner of this Clash? Do leave your Public Review in the Comments below.\n\n\n➤ Follow Me on Instagram-\n     https://www.instagram.com/thefilmiindian\n\n➤ Follow Me on Twitter-\n     https://twitter.com/thefilmiindian\n\n#Salaar #SalaarReview #SalaarMovie",
        "thumbnailUrl": "https://i.ytimg.com/vi/ENdkAK5nq2M/maxresdefault.jpg",
        "channelTitle": "Filmi Indian",
        "categoryId": "24",
        "contentDetails": {
            "duration": "PT5M21S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "1784367",
            "likeCount": "98011",
            "favoriteCount": "0",
            "commentCount": "7765"
        }
    },
    {
        "videoId": "t8HrZTLRCeU",
        "publishedAt": "2023-12-21T08:48:01Z",
        "channelId": "UC4muYPMCSYigqIwRjVWkQ2Q",
        "title": "Employee No.1 - Standup Comedy by Abhishek Upmanyu | Story",
        "description": "This is the second of the show Jealous of Sabziwala. It's a story. \n\nTo watch me live in your city please check the link below:\n\nhttps://linktr.ee/aupmanyu\n\nInstagram: @aupmanyu",
        "thumbnailUrl": "https://i.ytimg.com/vi/t8HrZTLRCeU/maxresdefault.jpg",
        "channelTitle": "Abhishek Upmanyu",
        "categoryId": "23",
        "contentDetails": {
            "duration": "PT40M15S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "6599500",
            "likeCount": "424522",
            "favoriteCount": "0",
            "commentCount": "13230"
        }
    },
    {
        "videoId": "3l5rB6hFb3k",
        "publishedAt": "2023-12-22T16:00:02Z",
        "channelId": "UCe9JSDmyqNgA_l2BzGHq1Ug",
        "title": "Khumar Episode 09 [Eng Sub] Digitally Presented by Happilac Paints - 22nd December 2023",
        "description": "Thanks for watching Har Pal Geo. Please click here https://bit.ly/3rCBCYN to Subscribe and hit the bell icon to enjoy Top Pakistani Dramas and satisfy all your entertainment needs. Do you know Har Pal Geo is now available in the US? Share the News. Spread the word.\n\nKhumar Episode 09 [Eng Sub] Digitally Presented by Happilac Paints - Feroze Khan - Neelam Muneer - 22nd December 2023 - Har Pal Geo\n\nKhumar Digitally Presented by Happilac Paints\n\nKhumar is a timeless love story that delves into the challenges arising from societal class differences and the negativity that stems from them. Khumar explores the complexities of love in the face of societal expectations and challenges. Faiz and Hareem, two individuals from different backgrounds, find their lives connected by destiny.\n\nFaiz, born into an affluent family, contrasts sharply with Hareem, who hails from a\nlower-middle-class background. Despite their differences, fate weaves their paths together. Hareem, diligently working to make ends meet amid her brother Rufi's educational needs and her mother's medical expenses, faces numerous hurdles. In the midst of her struggles, Faiz, a friend of Rufi's, silently supports them financially and even gets work for Hareem, albeit discreetly.\n\nHareem's family doesn't know that Faiz loves her, leading to a one-sided love affair. Faiz's love for Hareem remains a secret, but his mother disapproves of his association with Hareem's family due to the significant class difference. But fate decides to play its tune, and an unexpected event turns the lives of Faiz and Hareem upside down.\n\nWhat was this surprising turn of events that changed everything for Faiz and Hareem? Will the gap in their social status keep them apart? Can Faiz convince his mother to accept Hareem? If they marry, can they create a happy life together despite their different backgrounds and mindsets?\n\n7th Sky Entertainment Presentation \nProducers: Abdullah Kadwani & Asad Qureshi \nWriter: Maha Malik\nDirector: Ali Faizan\n\nCast:\nFeroze Khan as Faiz\nNeelam Muneer as Hareem\nHina Bayat as Kehkasha Begum\nAsma Abbas as Durdana\nBehroz Sabzwari as Sheikh Furqan\nZainab Qayoom as Dil Araa\nShehryar Zaidi as Taufeeq\nAdnan Samad as Nasir\nSheherzade Peerzada as Hamna  \nMinsa Malik as Laiba \nKinza Malik as Atiya\nMehmood Akhtar as Zaawar  \nAgha Mustafa as Rayyan  \nHamzah Tariq as Rufi\nAyesha Rajpoot as Shagufta\nMizna Waqas as Husna\nSohail Masood as Mirza Sahab\nBirjees Farooqui as Salma\n\n#HappilacPaints \n#ColorsofHappiness\n\n#Khumar\n#FerozeKhan\n#NeelamMuneer",
        "thumbnailUrl": "https://i.ytimg.com/vi/3l5rB6hFb3k/maxresdefault.jpg",
        "channelTitle": "HAR PAL GEO",
        "categoryId": "24",
        "contentDetails": {
            "duration": "PT37M53S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "true",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "3468066",
            "likeCount": "92049",
            "favoriteCount": "0",
            "commentCount": "2587"
        }
    },
    {
        "videoId": "p2-m37D0phk",
        "publishedAt": "2023-12-22T12:30:13Z",
        "channelId": "UCNJcSUSzUeFm8W9P7UUlSeQ",
        "title": "Sapne Vs Everyone | New Web Series | EP3 - Sapne Vs Imaandaari",
        "description": "Get ready for the latest episode of Sapne vs Everyone as Prashant and Jimmy face intense opposition from all sides, putting their resilience to the ultimate test.\n\nAs an arm of the Marwadi Chandarana Group, 1 Finance is reimagining the space of personal finance advisory: https://1finance.onelink.me/5Kxt/tvfytsep3 \nThrough the expertise of our qualified financial advisors, we guide you towards tranquillity by offering hyper-personalised and unbiased advice, empowering you to attain a state of financial well-being.\n\nAmid the chaos, Prashant ends up losing one of the most important things in his life - something that brings him immense happiness. On the other hand, Jimmy strikes a deal with Shishir to seek revenge on his Mamaji. Will Prashant and Jimmy emerge victorious against the odds, or will their dreams shatter? Join us for a riveting episode that explores the complexities of honesty and the sacrifices demanded on the journey to success.\n\nEpisode 04 Releasing On 29th December!\nNew Episode Out Every Friday!\n\nA TVF Original Series\nDirected and Written By: Ambrish Verma\nProduced By: Arunabh Kumar\nExecutive Producer: Vijay Koshy, Vaibhav Bundhoo, Pranav Thakker\nCast: Ambrish Verma, Paramvir Singh Cheema, Naveen Kasturia, Vijayant Kohli, Vaisakh Shankar\n\n#TVF #SapneVsEveryone #Dream \n---\nThis channel is owned, operated, and managed by, Contagious Online Media Network Private Limited.",
        "thumbnailUrl": "https://i.ytimg.com/vi/p2-m37D0phk/maxresdefault.jpg",
        "channelTitle": "The Viral Fever",
        "categoryId": "24",
        "contentDetails": {
            "duration": "PT59M58S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "1153283",
            "likeCount": "70876",
            "favoriteCount": "0",
            "commentCount": "4151"
        }
    },
    {
        "videoId": "PBDxZkIJLNg",
        "publishedAt": "2023-12-22T17:43:19Z",
        "channelId": "UCAYum5hCyfkSH5T3vSD_kwQ",
        "title": "My First Euro Trip | Aakash Gupta | Stand-up Comedy",
        "description": "Watch my Full Special on Insider here : https://bit.ly/3TjN8XI :)\n\nThis video is a part of my 60 mins comedy special which released on 16th Dec 23. Aap abhi k abhi poora show dekh sakte hai. Bahot mehnat aur maze se banaya hai. You can watch it from the comfort of your homes with your friends and family. I hope you all like it. Buy your tickets from the link above. Video end tak dekhoge toh bhoht saare questions answer kiye hai regarding the special :)\n\nAustralia, NZ & Singapore show tickets: https://linktr.ee/theskygupta\nJoin my EMAIL list: https://forms.gle/aYNHP2ZZVNxKJiBs8\n\nWritten & Performed by - Aakash Gupta\nFollow me on Instagram : @theskygupta\n\nCreative Director: Gaurav Bhatt\nEmail : bgaurav474@gmail.com\n\nEdited by : Aakash Gupta & Gaurav Bhatt\n\nTechnical Director: Abhishek Bhutwani \nCreative Consultant : Kreeti Gogia\n\nDOP: Abhishek Shrivastav \nCamera Team:\nAaditi Hirani \nOmkar Malkar \nArushi Garg\nPratham Parihar\nMukesh Kumar Yadav\n\nAssociate editor : Siddharth Prabhakar Pednekar\nGraphics : Rishi sheth\nAnimations : Vaishnav Deepak\nDI - Doozyworks Studios \nColorist - Kshitij Verma\nConformist - Prince K Choubey\nAudio recording mixing & Mastering : Sreejith Menon\nSocial media producer -  Nivaan Prachurya\nSubtitles by Play Pause Studio\nStylist - Amrita saluja\nHair and Makeup - Janak Thapa (JT Makeup Studio)\nLegal - Rachita arya\nLine Production:ClassClown\nProduction Manager: Tushar Poojari \n\nExecutive Producer : Aakash Gupta\nA magarmuchhmore Production\n\nArtist Management team : \nSilverio Souza\nRohit Gaur\nWarren Viegas\nKshitij Pandey\nVishal Singh\nVaibhav Deepak Vilankar\n\nLIVE SHOW produced collaboration with comedy ladder & NCPA \n\nEquipment:\nAccord Equipments Mumbai\n\nVenue : NCPA experimental theater, Mumbai\n\nSpecial Thanks : Shreeja Chaturvedi, Kenny Sebastian, Adesh Nichit and Jeeya sethi\n\n#Standupcomedy #AakashGupta #europetravel",
        "thumbnailUrl": "https://i.ytimg.com/vi/PBDxZkIJLNg/maxresdefault.jpg",
        "channelTitle": "Aakash Gupta",
        "categoryId": "23",
        "contentDetails": {
            "duration": "PT15M47S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "829590",
            "likeCount": "98582",
            "favoriteCount": "0",
            "commentCount": "1597"
        }
    },
    {
        "videoId": "pdwKqLZJy4Q",
        "publishedAt": "2023-12-22T10:13:59Z",
        "channelId": "UC2-793VaYQWuurlHj2rnvRA",
        "title": "🤰🏻 ನನ್ನ ಡೆಲಿವರಿ Vlog, ಯಾವ ಮಗು ಆಯಿತು । ತಾಯಿ ಮಗು ಹೇಗಿದ್ದಾರೆ Chinnima reactions | Delivery Vlog Kannada",
        "description": "#vlog #mayaloka #ad \n\nBuy LuvLap Disposable Baby Underpad Cum Changing Mats, Waterproof Pads for Baby, Breathable Underpads act as 100% Water Proof Bed Protector, Non Slip Back Sheet, Hypoallergenic, 60cmx60cm (10 Pcs)\nProduct link: https://amzn.to/3vgPnRC\n\nMy Village Life  Youtube Channel:\nhttps://www.youtube.com/@MyVillageLifeIndia\n\nInstagram: \nhttps://www.instagram.com/mayalokakannada\n\nMy Amazon Store:\nhttps://www.amazon.in/shop/mayaloka\n\nMy other YouTube Channels: \n\nMaya Loka | Lifestyle Beauty and Fashion Channel:\nLink: https://www.youtube.com/channel/UC2-793VaYQWuurlHj2rnvRA\n\nCakes and Bakes Paakashaale\nLink: https://www.youtube.com/channel/UCUqMOsn-EqogEFM8BU_A2Fg\n\nLaika The pug | Funny Dog videos\nLink: https://www.youtube.com/channel/UCi7PnQepsH50x4o_Ix-9_VQ\n\nMaa inti vantalu | Sharon vantalu Telugu Recipes Channel: \nLink: https://www.youtube.com/channel/UCHuTt-M16W6B2y1qYBrEh7g \n\n\n\nDISCLAIMER:  \nThis video is only intended for an informational purpose. Readers are subjected to use this information on their own risk.This channel doesn’t take any responsibility for any harm, side-effects, illness or any health or skin care problems caused due to the use of our content or anything related to this..\n\nThank you\n@Mayaloka",
        "thumbnailUrl": "https://i.ytimg.com/vi/pdwKqLZJy4Q/maxresdefault.jpg",
        "channelTitle": "Maya Loka",
        "categoryId": "26",
        "contentDetails": {
            "duration": "PT28M35S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "532531",
            "likeCount": "22559",
            "favoriteCount": "0",
            "commentCount": "4549"
        }
    },
    {
        "videoId": "K_1T_t-0Ht8",
        "publishedAt": "2023-12-21T10:07:34Z",
        "channelId": "UCeiAKuJGZrIjYvaq0nMwbJg",
        "title": "Dunki Movie REVIEW | Deeksha Sharma",
        "description": "Dunki Movie Review In Hindi By Deeksha Sharma. Dunki Featuring Shahrukh Khan & Taapsee Pannu is the Super Family Comedy Universe New Addition By Director Rajkumar Hirani who leads the genre with 3 Idiots Pk & Munna Bhai Success. A Friendship Beyond An Impossible Mission one which will test their Love & Turn them against each other- A Story you can never forget! Dunki Full Movie Story Outline Explained & Positives Negatives would be shared in this Video. Dunki vs Salaar - Who is your Winner in this Super Clash? Leave your Public Review in the Comments Section.\n\n\n➤ Follow Me on Instagram-\n     https://www.instagram.com/thefilmiindian\n\n➤ Follow Me on Twitter-\n     https://twitter.com/thefilmiindian\n\n#Dunki #DunkiReview #DunkiMovie",
        "thumbnailUrl": "https://i.ytimg.com/vi/K_1T_t-0Ht8/maxresdefault.jpg",
        "channelTitle": "Filmi Indian",
        "categoryId": "24",
        "contentDetails": {
            "duration": "PT6M40S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "2120970",
            "likeCount": "97852",
            "favoriteCount": "0",
            "commentCount": "5679"
        }
    },
    {
        "videoId": "tQf0EzV_Vmc",
        "publishedAt": "2023-12-22T04:30:14Z",
        "channelId": "UCJsSwonwSeo11Qahg62M_4A",
        "title": "Dream proposal, Finally said yes ❤️",
        "description": "Please Subscribe the channel for your support\nFinally it's here. comment karke zaroor batana kaisa laga !\n\nDon't forget to hit the LIKE button. SHARE the video with your friends and family. Don't forget to share your thoughts/suggestions in the COMMENTS section.\nProposal \nKirti rawat\nKirti Rawat first vlog\nKirti Rawat vlog\nLakhneet\nNeetu Bisht\nNeetu Bisht Rawat\nAgra\nFlower\nRomantic Couple \nKostume County\nNoida\nDelhi\nVlog\nDelhi Vlog\nAgra Vlogger\nRajasthan",
        "thumbnailUrl": "https://i.ytimg.com/vi/tQf0EzV_Vmc/maxresdefault.jpg",
        "channelTitle": "Kirti Rawat",
        "categoryId": "22",
        "contentDetails": {
            "duration": "PT9M38S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "1244538",
            "likeCount": "152397",
            "favoriteCount": "0",
            "commentCount": "11681"
        }
    },
    {
        "videoId": "RA8Jl6FoOD4",
        "publishedAt": "2023-12-22T08:45:23Z",
        "channelId": "UCIihexFQucy1Sm7V7yvL_mA",
        "title": "Salaar Movie Review | Yogi Bolta Hai",
        "description": "Download Probo & Earn Money:- https://probo-in.onelink.me/1kre/YogiBoltaHaiSalaar\nSalaar Part 1 Movie Review by Yogi Bolta Hai\nSalaar Movie review by Yogi Bolta hai\nSalaar Review in Hindi\n#Salaar #SalaarPart1 #SalaarCeaseFire #SalaarReview\n\nSalaar, Salaar part 1, Ceasefire, Prabhas, Prashant Neel, KGF, New Movie, South Movie, Hindi Dubbed, Action, Thriller, Khansaar, New Cinematic Universe, Salaar Part 2, theatres, Salaar Box Office, Dunki vs salaar, Salaar Review, Yogi Bolta Hai, Movie Ratings,\n\nFollow Yogi on Instagram - \nhttps://www.instagram.com/yogirokde\n\nCreated with Max Studios: maxstudios.help@gmail.com\n\nNote: - All Images, Pictures, Music used in the video belongs to the respected owners.\n\nDisclaimer: - This channel DOES NOT promote or encourage any illegal activities. All content provided by this channel is meant for EDUCATIONAL and INFORMATIONAL PURPOSE only. \n\nCopyright Disclaimer: - Under section 107 of the copyright Act 1976, allowance is made for FAIR USE for purpose such as criticism, comment, news reporting, teaching, scholarship and research. Fair use is a use permitted by copyright statues that might otherwise be infringing. Non- Profit, educational or personal use tips the balance in favor of FAIR USE.\n\nChannel Disclaimer – Yogi Bolta Hai is the FILM REVIIEW channel dedicated to Review Films, Web Series, Songs, and Trailers. Yogi Bolta Hai channel sometimes use Film Clips, TV series Clips, Web Series Clips, Animation Series Clips to explain about the Film, Web Series, Trailers and Songs, but all under section 107 of the copyright Act 1976, allowance is made for FAIR USE for purpose such as criticism, comment, news reporting, teaching, scholarship and research.",
        "thumbnailUrl": "https://i.ytimg.com/vi/RA8Jl6FoOD4/maxresdefault.jpg",
        "channelTitle": "YOGI BOLTA HAI",
        "categoryId": "24",
        "contentDetails": {
            "duration": "PT4M27S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "1157889",
            "likeCount": "54516",
            "favoriteCount": "0",
            "commentCount": "2548"
        }
    },
    {
        "videoId": "-p_v-rRS37Q",
        "publishedAt": "2023-12-22T10:26:45Z",
        "channelId": "UCZVcQLqXTn1DN-UcDwrc1gQ",
        "title": "salaar review by prashanth",
        "description": "Review about recently released telugu movie salaar!",
        "thumbnailUrl": "https://i.ytimg.com/vi/-p_v-rRS37Q/mqdefault.jpg",
        "channelTitle": "tamilcinemareview",
        "categoryId": "1",
        "contentDetails": {
            "duration": "PT7M31S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "222973",
            "likeCount": "6671",
            "favoriteCount": "0",
            "commentCount": "558"
        }
    },
    {
        "videoId": "w9SFsCeRS18",
        "publishedAt": "2023-12-22T05:40:57Z",
        "channelId": "UC4U5j8zZxVT9xYfXSDKN7aQ",
        "title": "Our 14th Anniversary Celebration In GOA 🎉 🥳 | Suhana | Basheer Bashi | Mashura",
        "description": "1) BB BORNA SKIN BRIGHTENING CREAM\n\nShop now 👇\n\nhttps://wa.me/p/6386882754662211/918089680298\n\n2) BB BORNA BEARD OIL\n\nShop now 👇\n\nhttps://wa.me/p/5226451670793499/918089680298\n\n3) BB1988 HAIR & BEARD CARE OIL\n\nShop now 👇\n\nhttps://wa.me/p/9129124410446895/918089680298\n\n4) BB1988 HANDCRAFTED ORGANIC SOAP\n\nShop now 👇\n\nOrder Now  - 8089680298\n\nBB1988 Cosmetics Instagram - https://instagram.com/bb1988_cosmetics\n\nFacebook  - https://www.facebook.com/bb1988cosmetics",
        "thumbnailUrl": "https://i.ytimg.com/vi/w9SFsCeRS18/maxresdefault.jpg",
        "channelTitle": "Suhana Basheer",
        "categoryId": "22",
        "contentDetails": {
            "duration": "PT14M53S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "403750",
            "likeCount": "10324",
            "favoriteCount": "0",
            "commentCount": "398"
        }
    },
    {
        "videoId": "Fn4OyekZpRI",
        "publishedAt": "2023-12-21T08:09:24Z",
        "channelId": "UCebC4x5l2-PQxg46Ucv9CsA",
        "title": "Last To Leave My Jail Wins ₹1,00,000 😱 | कौनसा कैदी जीतेगा एक लाख?",
        "description": "Hello guys, is video me humne Last to leave jail challenge kiya hai. \n\nOur Unboxing Channel- https://www.youtube.com/channel/UCIcKN-VXhkZNpf5DRdHp9JA\nOur Shorts Channel- https://www.youtube.com/channel/UC7bZ8U3-WqDzHiyz6Hc6TmA\nFollow Me on Instagram- https://www.instagram.com/amit.yt/\nFollow Us On Facebook- https://www.facebook.com/CrazyXYZfb/",
        "thumbnailUrl": "https://i.ytimg.com/vi/Fn4OyekZpRI/maxresdefault.jpg",
        "channelTitle": "Crazy XYZ",
        "categoryId": "28",
        "contentDetails": {
            "duration": "PT23M49S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "3884516",
            "likeCount": "270456",
            "favoriteCount": "0",
            "commentCount": "14887"
        }
    },
    {
        "videoId": "EuN0k8hYwwI",
        "publishedAt": "2023-12-22T10:57:32Z",
        "channelId": "UCNhaliLwhGH9wX3pe9bFTbA",
        "title": "Salaar: Part 1 – Ceasefire | My Opinion | Prabhas | Prashant Neel | Rajuettan",
        "description": "കണ്ണിന് റെസ്റ്റ് കാതിന് ഗിഫ്റ്റ് 📚🎧\nDownload India's No1 audiobook platform:https://kukufm.page.link/noXe8DbyBKS4XFpUA\n Get 60 % off  🎁 Coupon Code : MALAYALAM 60",
        "thumbnailUrl": "https://i.ytimg.com/vi/EuN0k8hYwwI/maxresdefault.jpg",
        "channelTitle": "LifeofShazzam",
        "categoryId": "22",
        "contentDetails": {
            "duration": "PT7M29S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "609271",
            "likeCount": "40537",
            "favoriteCount": "0",
            "commentCount": "1762"
        }
    },
    {
        "videoId": "EG5Vbqo3m70",
        "publishedAt": "2023-12-21T07:36:41Z",
        "channelId": "UCUinnqDgIsNFleLdkZKbP-w",
        "title": "Dunki movie review",
        "description": "Dunki movie review by badal yadav bnftv. Shahrukh khan SRK DUNKI.\n\nJoin this channel to get access to perks:\nhttps://www.youtube.com/channel/UCUinnqDgIsNFleLdkZKbP-w/join\n\nInstagram\nhttps://www.instagram.com/badal_bnftv\n\nJoin our official telegram group - https://t.me/bnftv\n\nBNFTV - Entertainment, Fun, Gyaan\n\nFacebook\nhttps://www.facebook.com/bnftv/?ref=br_rs\n\nTwitter\nhttps://twitter.com/badal_bnftv\n\nSupport us by Subscribing to our channel\nhttps://www.youtube.com/channel/UCUinnqDgIsNFleLdkZKbP-w/featured?disable_polymer=1",
        "thumbnailUrl": "https://i.ytimg.com/vi/EG5Vbqo3m70/maxresdefault.jpg",
        "channelTitle": "BnfTV",
        "categoryId": "24",
        "contentDetails": {
            "duration": "PT5M22S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "1399501",
            "likeCount": "76364",
            "favoriteCount": "0",
            "commentCount": "3135"
        }
    },
    {
        "videoId": "dOoVFyKNynY",
        "publishedAt": "2023-12-22T04:30:08Z",
        "channelId": "UCFX8go5jeQ_9_Pk9WFl5tmA",
        "title": "DIVINE - 4.10 | Official Music Video",
        "description": "Download & Stream: https://lnk.to/4.10\n\nCrafted against the evocative backdrop of a sampled melody from the legendary Punjabi singer Laal Chand Yamla Jatt, this musical masterpiece vividly depicts DIVINE's innermost thoughts and emotions. Produced by the duo Zzorawar and Arsh Heer, the beats resonate with the hauntingly beautiful verses of Yamla Jatt's classic, 'Tere Ni Karara Mainu Puteya,Das Main Ki Pyar Wichon Kuhteya' which translates to 'Your promises cost me dearly, tell me what did I gain from love.' This sample threads through the rhythm, infusing the track with an emotional depth that perfectly aligns with DIVINE's lyrical narrative.\n\nAudio Credits:\n\nWritten and Performed by: DIVINE, Lal Chand Yamla Jatt\nProduced by: ZZORAWAR, Arsh Heer\nMixed & Mastered by: Hanish Taneja\n\nVideo Credits:\n\nDirected & Edited by Joel D'souza (JD) \nShot by - Navkaran Brar & Joel D'souza (JD)\nColorist - Tapasvi Asija\n\nClick to Subscribe - https://www.youtube.com/@viviandivine\nInstagram - https://www.instagram.com/vivianakadivine\nTwitter - https://twitter.com/viviandivine\nFacebook - https://www.facebook.com/viviandivineindia\n\n#DIVINE #GullyGang",
        "thumbnailUrl": "https://i.ytimg.com/vi/dOoVFyKNynY/maxresdefault.jpg",
        "channelTitle": "DIVINE",
        "categoryId": "10",
        "contentDetails": {
            "duration": "PT2M50S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "true",
            "licensedContent": false,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "877213",
            "likeCount": "157996",
            "favoriteCount": "0",
            "commentCount": "6952"
        }
    },
    {
        "videoId": "YForOtD33xk",
        "publishedAt": "2023-12-22T16:00:32Z",
        "channelId": "UC2kBDwkqiy7zgH1-M4UtUXQ",
        "title": "Finally Itne dino baad vlog🙈| My boy is 6 months| His fav hobby| Home decor items mangvaaye",
        "description": "Music: Hill of Hope\nMusician: EnjoyMusic\nSite: https://enjoymusic.ai",
        "thumbnailUrl": "https://i.ytimg.com/vi/YForOtD33xk/maxresdefault.jpg",
        "channelTitle": "Dipika Ki Duniya",
        "categoryId": "22",
        "contentDetails": {
            "duration": "PT15M33S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "603436",
            "likeCount": "38956",
            "favoriteCount": "0",
            "commentCount": "1275"
        }
    },
    {
        "videoId": "_wcK7uHBHiQ",
        "publishedAt": "2023-12-22T11:55:24Z",
        "channelId": "UCepBxbSrGZkgjgGJuY04c-Q",
        "title": "Modi vs Biden: Security Comparison in 5-Mins (3D Animation)",
        "description": "Modi vs Biden: Security Comparison in 5-Mins (3D Animation)\n\nAir_Force: https://sketchfab.com/davidre\nAir_India_A321(Exteriors + Interiors ): https://sketchfab.com/harshpriyanshu22\nConstruction : https://sketchfab.com/db4\nMercedes_Benz: https://sketchfab.com/mpgs.studio\nCadillac_One(Beast_car):https://3dexport.com/sanskrin\nP90(Gun): https://sketchfab.com/havoctheXIII",
        "thumbnailUrl": "https://i.ytimg.com/vi/_wcK7uHBHiQ/maxresdefault.jpg",
        "channelTitle": "Professor Of How",
        "categoryId": "1",
        "contentDetails": {
            "duration": "PT5M",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "430108",
            "likeCount": "29082",
            "favoriteCount": "0",
            "commentCount": "2144"
        }
    }
]

export default function HomeFeed() {
    const loading = useSelector(state => state.youtube.loading);
    const videos = useSelector(state => state.youtube.homeVideos);
    const homeCategoryId = useSelector(state => state.youtube.homeCategoryId);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log('videos', videos);
    //     console.log('loading', loading);
    //     console.log('videos.length', videos.length);
    // }, [videos])

    useEffect(() => {
        dispatch(getHomePageVideos())
    }, []);

    useEffect(() => {
        console.log('homeCategoryId', homeCategoryId);
        dispatch(clearHomeVideos())
        if(homeCategoryId !== ''){
            dispatch(getHomePageVideos())
        }
    }, [homeCategoryId]);

    const homePageSkeleton = () => {
        return <div className='w-full h-full mb-3'>
            <Skeleton variant="rectangular" className='w-full rounded-xl' animation='wave' sx={{ bgcolor: 'grey.900', width: '100%', height: '180px' }} />
            <div className="flex w-full flex-1">
                <Skeleton variant="circular" className='mt-2.5 w-10 mr-3' width={40} height={40} animation='wave' sx={{ bgcolor: 'grey.900' }} />
                <div className="flex flex-col mt-1 flex-1">
                    <Skeleton variant="text" sx={{ flex: 1, fontSize: '18px', bgcolor: 'grey.900' }} animation='wave' />
                    <Skeleton variant="text" sx={{ fontSize: '18px', bgcolor: 'grey.900' }} animation='wave' />
                </div>
            </div>
        </div>
    }

    return (
        <div className='homeVideos flex flex-wrap justify-evenly items-center w-full'>

            <InfiniteScroll
                dataLength={videos.length} //This is important field to render the next data
                next={() => dispatch(getHomePageVideos())}
                style={{ width: '100%', height: '100%' }}
                hasMore={true}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {videos.length > 0 ?
                    <div className="videos grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
                        {videos.map((videoItem) => (
                            <HomeVideoCard key={videoItem?.videoId} video={videoItem} />
                        ))}
                    </div>
                    :
                    <div className="videos grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]" >
                        {Array.from(new Array(20)).map((item) => (
                            homePageSkeleton()
                        ))}
                    </div>
                }
            </InfiniteScroll >
        </div >
    )
}
