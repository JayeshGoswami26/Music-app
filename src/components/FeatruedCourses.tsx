"use client";
import Link from "next/link";
import coursesData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}
function FeatruedCourses() {
  const featuredCourses = coursesData.courses.filter(
    (course: Course) => course.isFeatured
  );
  const [showAll, setShowAll] = useState(false);

  const coursesToDisplay = showAll
    ? featuredCourses
    : featuredCourses.slice(0, 3);
  return (
    <>
      <div className="w-full bg-[#00ffff22] dark:bg-[#00ffff22] py-12 p-5 text-center flex justify-center items-center flex-col">
        <h2 className="uppercase text-cyan-500 shineText w-fit text-center my-5 "> FEATURED COURSES  </h2>
        <h1 className="text-4xl font-bold break-words tracking-wide bg-clip-text text-transparent bg-gradient-to-b dark:from-blue-100 dark:to-cyan-200 from-cyan-700 to-cyan-400 ">
          {" "}
          Listing To The Best Music{" "}
        </h1>
        {/* Secound Grid Box Starts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 sm:gap-14 justify-center mt-20">
          {coursesToDisplay.map((course: Course) => (
            <motion.div
              key={course.id}
              className="flex justify-center"
              initial={{ y: -100, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ type: "spring", stiffness: 100, damping: 10 }} 
            >
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <motion.div
                  className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }} 
                  transition={{ type: "spring", stiffness: 100, damping: 20 }} 
                >
                  <Image
                    id={`Img${course.id}`}
                    src={course.image}
                    width={500}
                    height={100}
                    className="object-cover h-full w-full rounded-t-xl "
                    alt="Profile Image"
                  />
                  <h2 className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {" "}
                    {course.title}{" "}
                  </h2>
                  <p className="text-sm sm:text-sm text-neutral-600 py-5 dark:text-neutral-400 flex-grow">
                    {" "}
                    {course.description}{" "}
                  </p>
                  <Link href={`/courses/${course.slug}`} className="">
                    {" "}
                    Learn More{" "}
                  </Link>
                </motion.div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>
        {/* Secound Grid Box Ends */}

        {/* View All Courses */}
        <div className="mt-20 text-center flex justify-center">
          <div
            className="button"
            onClick={() => setShowAll(!showAll)}
          >
                        {!showAll? 'View all courses' :'View fewer courses'}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatruedCourses;
