import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { GITHUB_URL } from "./navbar-data";
import { HOME_LINKEDIN } from "./Home/home-profile-data";

export const OWNERSHIP_TEXT = "Steve Phelps Portfolio Site";
export const INSTAGRAM_URL = "https://www.instagram.com/stevenlphelps/";

export const FOOTER_LINKS_ARY = [
    {
        url: GITHUB_URL,
        icon: <AiFillGithub />
    },
        {
        url: HOME_LINKEDIN,
        icon: <FaLinkedinIn />
    },
        {
        url: INSTAGRAM_URL,
        icon: <AiFillInstagram />
    },
];