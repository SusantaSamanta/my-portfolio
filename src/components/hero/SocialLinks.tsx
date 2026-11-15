
"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/SusantaSamanta",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "YOUR_LINKEDIN_URL",
    icon: FaLinkedinIn,
  },
  {
    name: "X",
    href: "YOUR_X_URL",
    icon: FaXTwitter,
  },
  {
    name: "YouTube",
    href: "YOUR_YOUTUBE_URL",
    icon: FaYoutube,
  },
];

export default function SocialLinks() {
  return (
    <div className="mt-7 flex items-center gap-7">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;

        return (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            title={social.name}
            initial={{ opacity: 0, y: 12, filter: "blur(2px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.6 + index * 0.1 }}
            // whileHover={{ y: -5, scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-500 transition-colors duration-300 hover:text-violet-500 dark:text-gray-400 dark:hover:text-violet-400"
          >
            <Icon size={22} />
          </motion.a>
        );
      })}
    </div>
  );
}
