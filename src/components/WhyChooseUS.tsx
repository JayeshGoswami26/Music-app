"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import MusicImg from '../../public/IMG/Gif/LCPT.gif'

const content = [
    {
      title: "Discover Your Musical Journey",
      description:
        "Join our music school for expert guidance, personalized lessons, and a supportive community to nurture your passion and talent.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={MusicImg}
            width={300}
            height={300}
            className="h-full w-full object-cover StickyImg1"
            alt="Music Gif"
          />
        </div>
      ),
    },
    {
      title: "Explore Your Musical Potential",
      description:
        "Experience personalized instruction, a nurturing environment, and a community of passionate musicians at our renowned music school.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={MusicImg}
            width={300}
            height={300}
            className="h-full w-full object-cover StickyImg2 "
            alt="Music Gif"
          />
        </div>
      ),
    },
    {
      title: "Embark on Your Musical Adventure",
      description:
        "Enroll in our music school for personalized lessons, expert guidance, and a vibrant community of fellow music enthusiasts.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={MusicImg}
            width={300}
            height={300}
            className="h-full w-full object-cover StickyImg3 "
            alt="Music Gif"
          />
        </div>
      ),
    },
    {
      title: "Start Your Musical Journey With Us",
      description:
        "Begin your musical journey with expert guidance, personalized lessons, and a supportive community at our acclaimed music school.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={MusicImg}
            width={300}
            height={300}
            className="h-full w-full object-cover StickyImg4 "
            alt="Music Gif"
          />
        </div>
      ),
    },
    {
      title: "Master the Art of Performance",
      description:
        "Take your performance skills to the next level with our comprehensive courses designed to refine your technique and stage presence.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={MusicImg}
            width={300}
            height={300}
            className="h-full w-full object-cover StickyImg5"
            alt="Performance Gif"
          />
        </div>
      )
    }
  ];

function WhyChooseUS() {
  return (
    <div className="">
        <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUS