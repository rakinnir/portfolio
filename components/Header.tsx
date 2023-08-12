"use client";
import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 z-20 mx-auto flex max-w-7xl items-start justify-between p-5 xl:items-center">
      <motion.div
        className="flex flex-row items-center"
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* social icons */}
        <SocialIcon url="facebook.com" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="twitter.com" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="linkedin.com" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="github.com" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="google.com" fgColor="gray" bgColor="transparent" />
      </motion.div>

      <motion.div
        className="flex cursor-pointer flex-row items-center text-gray-300"
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
        <p className="hidden text-sm uppercase text-gray-400 md:inline-flex">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
}
