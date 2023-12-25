import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MovieIcon from '@mui/icons-material/Movie';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { ROUTES } from './constants';

export const sidebarMenuList = [
  {  
    icon: <HomeOutlinedIcon />,
    activeIcon: <HomeIcon />,
    title: 'Home',
    route: ROUTES.HOME
  },
  {  
    icon: <WhatshotOutlinedIcon />,
    activeIcon: <WhatshotIcon />,
    title: 'Trending',
    route: ROUTES.HOME
  },
  // {  
  //   icon: <ExploreOutlinedIcon />,
  //   activeIcon: <ExploreIcon />,
  //   title: 'Explore',
  // },
  // {  
  //   icon: <SubscriptionsOutlinedIcon />,
  //   activeIcon: <SubscriptionsIcon />,
  //   title: 'Subscriptions',
  // },

];

export const loginMenuList = [
  {  
    icon: <VideoLibraryOutlinedIcon />,
    activeIcon: <VideoLibraryIcon />,
    title: 'Library',
  },
  {  
    icon: <HistoryOutlinedIcon />,
    activeIcon: <HistoryIcon />,
    title: 'History',
  },
  {  
    icon: <WatchLaterOutlinedIcon />,
    activeIcon: <WatchLaterIcon />,
    title: 'Watch Later',
  },
  {  
    icon: <ThumbUpAltOutlinedIcon />,
    activeIcon: <ThumbUpAltIcon />,
    title: 'Liked videos',
  },
];

export const categoryMenuList = [
  {  
    icon: <LibraryMusicIcon />,
    activeIcon: <LibraryMusicIcon />,
    title: 'Music',
  },
  {  
    icon: <SportsCricketIcon />,
    activeIcon: <SportsCricketIcon />,
    title: 'Sports',
  },
  {  
    icon: <SportsEsportsIcon />,
    activeIcon: <SportsEsportsIcon />,
    title: 'Gaming',
  },
  {  
    icon: <MovieIcon />,
    activeIcon: <MovieIcon />,
    title: 'Movies',
  },
  {  
    icon: <NewspaperIcon />,
    activeIcon: <NewspaperIcon />,
    title: 'News',
  },
  {  
    icon: <LightbulbIcon />,
    activeIcon: <LightbulbIcon />,
    title: 'Learning',
  },
];