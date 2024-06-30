"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
import { useEffect, useState } from "react";  

function UpcomingWeb() {
  // const handelMore = () => {
  //   featuredWebinars.push(
  //     {
  //       title: "Introduction to Music Theory",
  //       description: "Gain a solid foundation in music theory, essential for every aspiring musician.",
  //       slug: 'music-theory',
  //       isFeatured: true,
  //       link: "/webinars/introduction-music-theory",
  //     },
  //     {
  //       title: "Jazz Improvisation Techniques",
  //       description: "Learn the art of improvisation in jazz music, perfect for musicians looking to expand their repertoire.",
  //       slug: 'jazz-improvisation',
  //       isFeatured: true,
  //       link: "/webinars/jazz-improvisation-techniques",
  //     },
  //     {
  //       title: "Music Production Essentials",
  //       description: "Dive into the basics of music production, from recording to mixing and mastering.",
  //       slug: 'music-production',
  //       isFeatured: true,
  //       link: "/webinars/music-production-essentials",
  //     }
  //   );
  // } 
  const featuredWebinars = [
    {
      title: "Understanding Musical Performance",
      description: "Learn about the different techniques used in musical performance, from basic to advanced.",
      slug: 'music-performance',
      isFeatured: true,
      link: "/webinars/understanding-musical-performance",
    },
    {
      title: "Mastering Piano Techniques",
      description: "Enhance your piano skills with advanced techniques and practices for all skill levels.",
      slug: 'mastering-piano',
      isFeatured: true,
      link: "/webinars/mastering-piano-techniques",
    },
    {
      title: "Vocal Training and Development",
      description: "Develop your vocal abilities with comprehensive training methods for singers.",
      slug: 'vocal-training',
      isFeatured: true,
      link: "/webinars/vocal-training-development",
    },

  ];

  return (
    <>
      <div className="p-12 bg-[#ecfeff] dark:bg-[#000000] bg-dot-black/[0.3]  dark:bg-dot-white/[0.1] " >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center flex flex-col justify-center items-center">
            <h2 className="uppercase text-cyan-950 dark:text-cyan-500 shineText w-fit text-center my-5">
              upcoming webinars
            </h2>
            <h1 className="text-4xl font-bold break-words tracking-wide bg-clip-text text-transparent bg-gradient-to-b dark:from-blue-100 dark:to-cyan-200 from-cyan-700 to-cyan-400">
              Enhance Your Muical Journey
            </h1>
          </div>
          <div className="mt-10">
          <HoverEffect items={featuredWebinars}/>
          </div>
          <div className="mt-10 text-center flex justify-center items-center">
            <div  className="button">
              View All Webinars
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpcomingWeb;
