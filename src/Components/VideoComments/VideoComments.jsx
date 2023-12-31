import { Tooltip } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';

function VideoComments(props) {
    const commentCount = props?.commentCount;
    const videoComments = useSelector(state => state.youtube.videoComments);
    
    return (
        <div>
            {videoComments?.length ?
                <div className="my-5">
                    <span className='text-lg font-semibold'>{`${commentCount} Comments`}</span>
                    <div className="mt-5 w-full">
                        {videoComments?.map((commentItem) => {
                            return <div key={commentItem?.commentId} className='comment w-full'>
                                <div className="commentInfo flex justify-start items-start mt-5">
                                    <div className="commentLogo">
                                        <img src={commentItem?.authorProfileImage} alt="" />
                                    </div>
                                    <div className="flex flex-col ml-4">
                                        <div className="flex justify-start">
                                            <span className='text-[#fff] text-[12px] mr-2'>{commentItem?.authorUsername} </span>
                                            <span className='text-[12px] text-[#aaa]'>{commentItem?.publishedTime}</span>
                                        </div>
                                        <div className='text-[15px] mt-1' dangerouslySetInnerHTML={{ __html: (commentItem?.commentText)?.replace(/\n/g, '<br />') }} />
                                        <div className="flex mt-2">
                                            <Tooltip title="Like" color='white' className=' rounded-full cursor-pointer hover:bg-themeBlack'>
                                                <ThumbUpOutlinedIcon fontSize='small' color='white' />
                                            </Tooltip>
                                            {commentItem?.likeNumber > 0 ?
                                                <span className='mx-2 mr-3'>{commentItem?.likeNumber}</span>
                                                : <span className='mx-2'></span>
                                            }
                                            <Tooltip title="Dislike" color='white' className='rounded-full cursor-pointer hover:bg-themeBlack'>
                                                <ThumbDownAltOutlinedIcon fontSize='small' color='white' />
                                            </Tooltip>
                                        </div>
                                        {commentItem?.replies?.length ?
                                            <>
                                                {commentItem?.replies?.map((replieItem) => {
                                                    return <div key={replieItem?.replieId}>
                                                        <div className="commentInfo flex justify-start items-start mt-5">
                                                            <div className="commentLogo">
                                                                <img src={replieItem?.authorProfileImage} alt="" />
                                                            </div>
                                                            <div className="flex flex-col ml-4">
                                                                <div className="flex justify-start">
                                                                    <span className='text-[#fff] text-[12px] mr-2'>{replieItem?.authorUsername}</span>
                                                                    <span className='text-[12px] text-[#aaa]'>{replieItem?.publishedTime}</span>
                                                                </div>
                                                                <div className='text-[15px] mt-1' dangerouslySetInnerHTML={{ __html: (replieItem?.commentText)?.replace(/\n/g, '<br />') }} />
                                                                <div className="flex mt-2">
                                                                    <Tooltip title="Like" color='white' className=' rounded-full cursor-pointer hover:bg-themeBlack'>
                                                                        <ThumbUpOutlinedIcon fontSize='small' color='white' />
                                                                    </Tooltip>
                                                                    {replieItem?.likeNumber > 0 ?
                                                                        <span className='mx-2 mr-3'>{replieItem?.likeNumber}</span>
                                                                        : <span className='mx-2'></span>
                                                                    }
                                                                    <Tooltip title="Dislike" color='white' className='rounded-full cursor-pointer hover:bg-themeBlack'>
                                                                        <ThumbDownAltOutlinedIcon fontSize='small' color='white' />
                                                                    </Tooltip>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                })}

                                            </> :
                                            ''
                                        }
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div> : ''
            }
        </div>
    )
}

export default VideoComments
