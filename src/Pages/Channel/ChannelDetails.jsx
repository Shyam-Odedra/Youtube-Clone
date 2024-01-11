import React, { useState } from 'react';
import './ChannelDetails.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Tabs, Tab } from './Tabs/Tabs';
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

    ],
    playlists: []
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
                                <div>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0xIAJciTxzjZZM-viJfHk_Ezlv0nn8fft3ORQ9UkoP2mPd5pm" />
                                    <p>Tab 1 content</p>
                                </div>
                            </Tab>
                            <Tab label="Videos">
                                <div>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2E3SrDqYWF9J_TDWNzjZkwJOAGxkLJVZPvUly7SqUL9WqLqEw" />
                                    <p>Tab 2 content</p>
                                </div>
                            </Tab>
                            <Tab label="Playlists">
                                <div>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB7Y713wstirF-PvKJa6OioS83ozc-BeFAzjjyndv58ZnfyaZK0g" />
                                    <p>Tab 3 content</p>
                                </div>
                            </Tab>
                            <Tab label="Community">
                                <div>
                                    <img src="http://choseneye.org/image/cache/catalog/SERVICES4-600x600.png" />

                                    <p>Tab 4 content</p>
                                </div>
                            </Tab>
                            <Tab label="About">
                                <div>
                                    <img src="https://iconcept.com.my/wp-content/uploads/2018/10/iStock-956508212-600x600.jpg" />
                                    <p>Tab 5 content</p>
                                </div>
                            </Tab>
                        </Tabs>

                    </div>
                </div>
            </div>
        </div>
    )
}
