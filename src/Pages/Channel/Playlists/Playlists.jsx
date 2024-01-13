import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../Constants/constants';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';

export default function Playlists() {
    const playlists = [
        {
            playlistId: "PLeYKN6CIJaMq7GpCJ1KnnUv4hl-Nd1H6i",
            title: "she hulk",
            thumbnailUrl: "https://i.ytimg.com/vi/536kl5DUomE/mqdefault.jpg",
            videosCount: 4
        },
        {
            playlistId: "PLeYKN6CIJaMq7GpCJ1KnnUv4hl-Nd1H6i",
            title: "Bnftv Box office analysis",
            thumbnailUrl: "https://i.ytimg.com/vi/Tv4WWjvh5OI/mqdefault.jpg",
            videosCount: 27
        },
        {
            playlistId: "PLeYKN6CIJaMq7GpCJ1KnnUv4hl-Nd1H6i",
            title: "Bnftv shorts",
            thumbnailUrl: "https://i.ytimg.com/vi/1ghALJ1wAH4/mqdefault.jpg",
            videosCount: 10
        },
        {
            playlistId: "PLeYKN6CIJaMq7GpCJ1KnnUv4hl-Nd1H6i",
            title: "Spoiler talk",
            thumbnailUrl: "https://i.ytimg.com/vi/Zxg1gGryrvA/mqdefault.jpg",
            videosCount: 3
        },
        {
            playlistId: "PLeYKN6CIJaMq7GpCJ1KnnUv4hl-Nd1H6i",
            title: "Obsessed BNFTV",
            thumbnailUrl: "https://i.ytimg.com/vi/tSqqygm_JyA/mqdefault.jpg",
            videosCount: 4
        },
        {
            playlistId: "PLeYKN6CIJaMq7GpCJ1KnnUv4hl-Nd1H6i",
            title: "she hulk",
            thumbnailUrl: "https://i.ytimg.com/vi/536kl5DUomE/mqdefault.jpg",
            videosCount: 4
        },
        {
            playlistId: "PLeYKN6CIJaMq7GpCJ1KnnUv4hl-Nd1H6i",
            title: "Bnftv Box office analysis",
            thumbnailUrl: "https://i.ytimg.com/vi/Tv4WWjvh5OI/mqdefault.jpg",
            videosCount: 27
        },
        {
            playlistId: "PLeYKN6CIJaMq7GpCJ1KnnUv4hl-Nd1H6i",
            title: "Bnftv shorts",
            thumbnailUrl: "https://i.ytimg.com/vi/1ghALJ1wAH4/mqdefault.jpg",
            videosCount: 10
        },
        {
            playlistId: "PLeYKN6CIJaMq7GpCJ1KnnUv4hl-Nd1H6i",
            title: "Spoiler talk",
            thumbnailUrl: "https://i.ytimg.com/vi/Zxg1gGryrvA/mqdefault.jpg",
            videosCount: 3
        },
        {
            playlistId: "PLeYKN6CIJaMq7GpCJ1KnnUv4hl-Nd1H6i",
            title: "Obsessed BNFTV",
            thumbnailUrl: "https://i.ytimg.com/vi/tSqqygm_JyA/mqdefault.jpg",
            videosCount: 4
        },
        {
            playlistId: "PLeYKN6CIJaMq7GpCJ1KnnUv4hl-Nd1H6i",
            title: "she hulk",
            thumbnailUrl: "https://i.ytimg.com/vi/536kl5DUomE/mqdefault.jpg",
            videosCount: 4
        },
        {
            playlistId: "PLeYKN6CIJaMq7GpCJ1KnnUv4hl-Nd1H6i",
            title: "Bnftv Box office analysis",
            thumbnailUrl: "https://i.ytimg.com/vi/Tv4WWjvh5OI/mqdefault.jpg",
            videosCount: 27
        },
        {
            playlistId: "PLeYKN6CIJaMq7GpCJ1KnnUv4hl-Nd1H6i",
            title: "Bnftv shorts",
            thumbnailUrl: "https://i.ytimg.com/vi/1ghALJ1wAH4/mqdefault.jpg",
            videosCount: 10
        },
        {
            playlistId: "PLeYKN6CIJaMq7GpCJ1KnnUv4hl-Nd1H6i",
            title: "Spoiler talk",
            thumbnailUrl: "https://i.ytimg.com/vi/Zxg1gGryrvA/mqdefault.jpg",
            videosCount: 3
        },
        {
            playlistId: "PLeYKN6CIJaMq7GpCJ1KnnUv4hl-Nd1H6i",
            title: "Obsessed BNFTV",
            thumbnailUrl: "https://i.ytimg.com/vi/tSqqygm_JyA/mqdefault.jpg",
            videosCount: 4
        }
    ];
    const navigate = useNavigate();
    return (
        <div className='w-full'>
            <div className='w-full'>
                <h3 className='text-[20px] font-medium'>Created playlist</h3>
                <div className="flex mt-4 w-full justify-start items-center">
                    <div className="videoslist w-full grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))]">
                        {playlists.map((playlist) => (
                            <div key={playlist?.playlistId} className="channelVideo">
                                <div className="thumbnail cursor-pointer">
                                    <LazyLoadImage
                                        effect="opacity"
                                        onClick={() => navigate(`${ROUTES.VIDEO}?id=${playlist?.playlistId}`)}
                                        alt={playlist?.title}
                                        src={playlist?.thumbnailUrl} />
                                    <span className="playlistCount flex items-center"><PlaylistPlayIcon /><span>{`${playlist?.videosCount} videos`}</span></span>
                                </div>
                                <div className="mt-0 text-[15px]">
                                    <div className="text">
                                        <span className="title line-clamp-2 font-semibold">{playlist?.title}</span>
                                        <span onClick={() => navigate(`${ROUTES.PLAYLIST}?id=${playlist?.playlistId}`)} className='text-[#aaa] cursor-pointer text-sm'>view full playlist</span>
                                        {/* <div>
                                            <span className="views text-[#aaa] text-sm">{`${videoItem?.videoViews} views`}</span>
                                            <span className='text-[#aaa] text-sm'>{videoItem?.publishedTime}</span>
                                        </div> */}
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
