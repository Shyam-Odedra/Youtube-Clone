import React, { useState } from 'react';
import './ChannelDetails.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { useSelector } from 'react-redux';

const channelDetails = {
    channelId: "UCUinnqDgIsNFleLdkZKbP-w",
    channelName: "BnfTV",
    channelImage: "https://yt3.ggpht.com/7oUYOkSQuvixFZonWiR_AC7uKfMyoqRCnSBpmH-V_KUry2QgeSK2zHUDlYoLtG9xfTR-2e_NJA=s240-c-k-c0x00ffffff-no-rj",
    description: "No baat, only bakwaas 🙂 aisa kisi ne bola to paap lagega\n\nIndia me logo ko kya mangta hai?? Entertainment, Entertainment, Entertainment \naur is channel pe tumko milega kuch faltu ka gyan, thoda sa maza aur kuch bach gaya to thoda sa entertainment.\nTo ab tum bologe ki ye dono line to rhyme nahi karte??\nTo mere bhai, koi rule thodi hai is duniya mai sub kuch match kare 😂\n\nFor business enquiry: business.bnftv@gmail.com",
    subscribers: "1.17M",
    username: "@Bnftv",
    videoCount: 950,
    channelBanner: "https://yt3.googleusercontent.com/ZX4FPqyBCJc0ektafXZvV9tShLRUovd3_oUWXzZDC-70BLB6FsVHtzGDsKIed9A596O_dWNrRg",
    videos: [

    ],
    playlists: []
}

export default function ChannelDetails() {
    // const channelDetails = useSelector(state => state.youtube.channelDetails);
    const [activeTab, setActiveTab] = useState('Home');

    return (
        <div className='flex flex-col md:flex-row mt-5 w-full'>
            <Sidebar />
            <div className="channelDetails">
                <div className='flex flex-col flex-1 justify-start'>
                    <div className="channelBanner">
                        <img className='w-full h-[206px] object-cover flex-1 rounded-xl' src={channelDetails?.channelBanner} alt={channelDetails?.channelName} />
                    </div>
                    <div className="channelInfo">

                    </div>
                </div>
            </div>
        </div>
    )
}
