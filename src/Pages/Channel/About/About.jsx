import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import MovingIcon from '@mui/icons-material/Moving';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function About({ channelInfo }) {
    return (
        <div className='w-full'>
            <div className='w-full'>
                <div className="flex mt-4 w-full justify-start items-center">
                    <div className="communityPosts mt-3 flex flex-col w-full max-w-[852px]">
                        <div className="postItem border rounded-xl border-[rgba(255,255,255,0.2)] flex flex-col justify-start items-start mb-6">
                            {channelInfo?.description && <div>
                                <span className='font-semibold text-lg mb-2'>About</span>
                                <div className='text-[15px] w-full'
                                    dangerouslySetInnerHTML={{ __html: (channelInfo?.description)?.replace(/\n/g, '<br />') }} />
                            </div>}
                            <span className='font-semibold text-lg my-2'>Channel details</span>
                            <p className='text-[15px] mb-3'><LanguageIcon className='mr-3 ' /> {`http://www.youtube.com/${channelInfo?.username}`}</p>
                            <p className='text-[15px] mb-3'><RecordVoiceOverIcon className='mr-3' /> {`${channelInfo?.subscribers} subscribers`}</p>
                            <p className='text-[15px] mb-3'><SlideshowIcon className='mr-3' /> {`${channelInfo?.videoCount} videos`}</p>
                            <p className='text-[15px] mb-3'><MovingIcon className='mr-3' /> {`${channelInfo?.totalViews} views`}</p>
                            <p className='text-[15px] mb-3'><InfoOutlinedIcon className='mr-3' /> {`Joined ${channelInfo?.joinedDate}`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
