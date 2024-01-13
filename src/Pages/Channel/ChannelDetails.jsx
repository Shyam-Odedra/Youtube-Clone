import React, { useState } from 'react';
import './ChannelDetails.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Tabs, Tab } from './Tabs/Tabs';
import ChannelVideos from './Videos/ChannelVideos';
import Playlists from './Playlists/Playlists';
import Community from './Community/Community';
import About from './About/About';
import ChannelHomePage from './ChannelHomePage/ChannelHomePage';
// import { Tabs } from './Tabs/Tabs';

const channelDetails = {
    channelId: "UCUinnqDgIsNFleLdkZKbP-w",
    channelName: "BnfTV",
    channelImage: "https://yt3.ggpht.com/7oUYOkSQuvixFZonWiR_AC7uKfMyoqRCnSBpmH-V_KUry2QgeSK2zHUDlYoLtG9xfTR-2e_NJA=s240-c-k-c0x00ffffff-no-rj",
    description: "No baat, only bakwaas 🙂 aisa kisi ne bola to paap lagega\n\nIndia me logo ko kya mangta hai?? Entertainment, Entertainment, Entertainment \naur is channel pe tumko milega kuch faltu ka gyan, thoda sa maza aur kuch bach gaya to thoda sa entertainment.\nTo ab tum bologe ki ye dono line to rhyme nahi karte??\nTo mere bhai, koi rule thodi hai is duniya mai sub kuch match kare 😂\n\nFor business enquiry: business.bnftv@gmail.com",
    subscribers: "1.17M",
    username: "@Bnftv",
    videoCount: 950,
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
    communityPosts: [],
    featureChannels: [
        {
            channelId: "UCKZbgzsJ_XsgGevLAKI1DwA",
            channelImage: "https://yt3.ggpht.com/wYx5tWTzgpRIOLEWFIIsTrVqgquAo4O8bVxZIz9q3DmMflMBP2zdRp7jRYDzuCAeYlzENbWTEg=s240-c-k-c0x00ffffff-no-rj",
            title: "Anime Cloud",
            subscribers: "375K"
        },
        {
            channelId: "UC9CROGyC9hgIB1mnBuMpeoQ",
            channelImage: "https://yt3.ggpht.com/N_x8PwnZO6O5Vq0eTl9XEfN9zKmZKqjap4_lz1zNJjTGFgqiBHMw10H9Zx12eoaNqIpPISngmis=s240-c-k-c0x00ffffff-no-rj",
            title: "Men of Culter",
            subscribers: "284K"
        },
        {
            channelId: "UCGpQB0iKl2lQHI1I2Sqp7JA",
            channelImage: "https://yt3.ggpht.com/0GZPKHlGWFIzTRcC0R154-YHTXbr6ypcM2vPgKWPJRtaZw5zbFe7dQsd6KgkWRhMrmLHbAtAXPs=s240-c-k-c0x00ffffff-no-rj",
            title: "Tevar",
            subscribers: "117k"
        },
        {
            channelId: "UCy1meo6FA5KQbePRqPk-Pzg",
            channelImage: "https://yt3.ggpht.com/225rBX_diqm1lJdTwqVETswg8RM9uAQZa73RV-kxB7TrsJ90xBGUB6yQ74Zy-8fdqKWCZs2r=s240-c-k-c0x00ffffff-no-rj",
            title: "Bnftv shorts",
            subscribers: "189k"
        },
        {
            channelId: "UCV7Cb-hykXoqKeWF4mPDS2A",
            channelImage: "https://yt3.ggpht.com/ihmfuRv5EsMAP0fyhzZclpxQmOy8G84Y-xBM2oArVcKjZ8bdcSkD6hFSmWxmYFkfOrpy2NYsBK4=s240-c-k-c0x00ffffff-no-rj",
            title: "Noobgamer69",
            subscribers: "145k"
        }
    ]
}

export default function ChannelDetails() {
    // const channelDetails = useSelector(state => state.youtube.channelDetails);
    const [activeTab, setActiveTab] = useState('Home');
    const [isSubscribe, setIsSubscribe] = useState(false);

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='flex flex-col md:flex-row mt-2 w-full'>
            <Sidebar />
            <div className="channelDetails">
                <div className='mainContent'>
                    <div className="channelBanner">
                        <img className='w-full h-full object-cover flex-1 rounded-xl' src={channelDetails?.channelBanner} alt={channelDetails?.channelName} />
                    </div>
                    <div className="channelInfo mt-5">
                        <div className="flex justify-start" >
                            <div className="profile h-[160px] mr-6">
                                <img className="w-[160px] h-full rounded-full" src={channelDetails?.channelImage} alt="" />
                            </div>
                            <div className="flex flex-col flex-1">
                                <h3 className='text-[2.5rem] font-bold'>{channelDetails?.channelName}</h3>
                                <div className='mt-1'>
                                    <span className="views text-[#aaa] text-sm">{channelDetails?.username}</span>
                                    <span className='text-[#aaa] views text-sm'>{`${channelDetails?.subscribers} subscribers`}</span>
                                    <span className='text-[#aaa] text-sm'>{`${channelDetails?.videoCount} videos`}</span>
                                </div>
                                <span className='text-sm mt-1 mb-2 line-clamp-1 w-2/3 text-[#aaa]'>{channelDetails?.description}</span>
                                <div className="button">
                                    {isSubscribe ?
                                        <button onClick={() => setIsSubscribe(!isSubscribe)} className='bg-[#fff] text-[15px] text-[#111] inline-block rounded-full py-1 px-3'>Subscribe</button>
                                        :
                                        <button onClick={() => setIsSubscribe(!isSubscribe)} className='bg-[rgba(255,255,255,0.1)] text-[15px] text-[white] hover:bg-[#3f3f3f] flex justify-center items-center rounded-full py-1 px-3'><NotificationsActiveIcon fontSize='small' color='white' className='mr-3' /> Subscribed</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full mt-5'>
                        <Tabs>
                            <Tab label="Home">
                                <ChannelHomePage videos={channelDetails?.videos} popularVideos={channelDetails?.popularVideos} featureChannels={channelDetails?.featureChannels}/>
                            </Tab>
                            <Tab label="Videos">
                               <ChannelVideos videos={[...channelDetails?.videos, ...channelDetails?.popularVideos]}/>
                            </Tab>
                            <Tab label="Playlists">
                               <Playlists />
                            </Tab>
                            <Tab label="Community">
                               <Community />
                            </Tab>
                            <Tab label="About">
                               <About />
                            </Tab>
                        </Tabs>

                    </div>
                </div>
            </div>
        </div>
    )
}
