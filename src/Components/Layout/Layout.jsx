import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
export default function Layout() {
    //    const testMenuItems = [
    //        {
    //            href: '/',
    //            title: 'Home',
    //        },
    //        {
    //            href: 'search',
    //            title: 'Search',
    //        },
    //        {
    //            href: 'video',
    //            title: 'Video',
    //        }
    //    ];
    return (
        <div className='min-h-screen h-full flex-col'>
            <Navbar />
            <div className="absolute w-full top-[60px] h-[calc(100%-60px)]">
                <main className="w-full">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}