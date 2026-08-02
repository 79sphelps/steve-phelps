import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import { GITHUB_URL } from "./navbar-data";
import { HOME_LINKEDIN } from "./home-profile-data";

export const FOOTER_NAME = "Steve Phelps";

export const FOOTER_TITLE =
  "Frontend Engineer • React • TypeScript • AI SaaS Development";

export const FOOTER_DESCRIPTION =
  "I build polished, scalable web applications focused on exceptional user experiences, thoughtful architecture, accessibility, and AI-powered products for modern businesses.";

export const OWNERSHIP_TEXT = `© ${new Date().getFullYear()} Steve Phelps. All rights reserved.`;

export const FOOTER_LINKS_ARY = [
  {
    url: GITHUB_URL,
    icon: <AiFillGithub />,
  },
  {
    url: HOME_LINKEDIN,
    icon: <FaLinkedinIn />,
  },
];
