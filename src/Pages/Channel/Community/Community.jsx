import React from 'react';
import { Tooltip } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../Constants/constants';

export default function Community({ communityPosts }) {
    const navigate = useNavigate();

    return (
        <div className='w-full'>
            <div className='w-full'>
                <div className="flex mt-4 w-full justify-start items-center">
                    <div className="communityPosts mt-3 flex flex-col w-full max-w-[852px]">
                        {communityPosts.map((post) => (
                            <div key={post?.postId} className="postItem border rounded-xl border-[rgba(255,255,255,0.2)] flex justify-start items-start mb-6">
                                <div className="commentLogo">
                                    <img src={post?.channelImage} alt="" />
                                </div>
                                <div className="flex flex-col ml-4">
                                    <div className="flex justify-start">
                                        <span className='text-[#fff] text-[12px] mr-2'>{post?.channelName} </span>
                                        <span className='text-[12px] text-[#aaa]'>{post?.publishedTime}</span>
                                    </div>
                                    <div className='text-[15px] my-1 line-clamp-4' dangerouslySetInnerHTML={{ __html: (post?.content)?.replace(/\n/g, '<br />') }} />
                                    {post?.attachments ?
                                        <div className='w-full'>
                                            {post?.attachments?.type === "video" ?
                                                <div className='w-full my-2'>
                                                    <div className="flex justify-start">
                                                        <div className="img communityVideo relative mr-4 flex justify-center ">
                                                            <div onClick={() => navigate(`${ROUTES.VIDEO}?id=${post?.attachments?.videoId}`)} className="image-container cursor-pointer w-[210px] flex justify-center items-center overflow-hidden">
                                                                <img className='rounded-xl' src={post?.attachments?.thumbnailUrl} alt={post?.attachments?.title} />
                                                                <span className="minit">{post?.attachments?.videoDuration}</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col items-start text-start align-middle">
                                                            <span onClick={() => navigate(`${ROUTES.VIDEO}?id=${post?.attachments?.videoId}`)} className='text-base cursor-pointer'>{post?.attachments?.title}</span>
                                                            <div className="user text-sm">
                                                            <span className="text-sm views  text-[#aaa]">{post?.attachments?.channelTitle}</span>
                                                                <span className="views text-[#aaa] text-sm">{`${post?.attachments?.videoViews} view`}</span>
                                                                <span className='text-[#aaa] text-sm'>{post?.attachments?.publishedTime}</span>
                                                            </div>
                                                            <span className='text-[12px] mt-2 line-clamp-2 text-[#aaa]'>{post?.attachments?.description}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                : <div className='w-full'>
                                                    <img className='w-9/12 rounded-xl' src={post?.attachments?.imageUrl} alt="" />
                                                </div>
                                            }
                                        </div>
                                        : null
                                    }
                                    <div className="flex items-center my-2">
                                        <Tooltip title="Like" color='white' className=' rounded-full cursor-pointer hover:bg-themeBlack'>
                                            <ThumbUpOutlinedIcon fontSize='small' color='white' />
                                        </Tooltip>
                                        {post?.likeCount ?
                                            <span className='mx-2 mr-3 text-[#aaa] text-sm'>{post?.likeCount}</span>
                                            : <span className='mx-2'></span>
                                        }
                                        <Tooltip title="Dislike" color='white' className='rounded-full mr-5 cursor-pointer hover:bg-themeBlack'>
                                            <ThumbDownAltOutlinedIcon fontSize='small' color='white' />
                                        </Tooltip>
                                        <Tooltip title="Share" color='white' className='rounded-full mr-5 cursor-pointer hover:bg-themeBlack'>
                                            <ShareOutlinedIcon fontSize='small' color='white' className='mr-2' />
                                        </Tooltip>
                                        <Tooltip title="Comments" color='white' className='rounded-full cursor-pointer hover:bg-themeBlack'>
                                            <InsertCommentOutlinedIcon fontSize='small' color='white' className='mr-2' />
                                            {post?.replyCount ?
                                                <span className='ml-1 text-[#aaa] text-sm'>{post?.replyCount}</span>
                                                : <span className='mx-2'></span>
                                            }
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
