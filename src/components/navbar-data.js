import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineMail,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

export const PROFESSIONAL_TITLE = "Senior Frontend / Full Stack Engineer";
export const GITHUB_URL = "https://github.com/79sphelps";

export const ICON_BREAKPOINT_WIDTH = 1010;

export const NAV_LINKS_ARY = [
    {
        to: '/',
        icon: <AiOutlineHome className='nav-item-icon' />,
        text: 'Home',
    },
    {
        to: '/about',
        icon: <AiOutlineUser className='nav-item-icon' />,
        text: 'About',
    },
        {
        to: '/contact',
        icon: <AiOutlineMail className='nav-item-icon' />,
        text: 'Contact',
    },
        {
        to: '/project',
        icon: <AiOutlineFundProjectionScreen className='nav-item-icon' />,
        text: 'Projects',
    },
        {
        to: '/resume',
        icon: <CgFileDocument className='nav-item-icon' />,
        text: 'Resume',
    },
];