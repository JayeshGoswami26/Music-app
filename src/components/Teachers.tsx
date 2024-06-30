"use client";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Imgone from "../../public/IMG/Profile/s-7.jpg";
import ImgTwo from "../../public/IMG/Profile/product2.png";
import ImgThree from "../../public/IMG/Profile/trend18.png";
import ImgFour from "../../public/IMG/Profile/product3.png";
import ImgFive from "../../public/IMG/Profile/trend1.png";
import ImgSix from "../../public/IMG/Profile/popular4.png";
import { WavyBackground } from "./ui/wavy-background";
function Teachers() {
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Musicain",
      image: Imgone,
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Musicain Manager",
      image: ImgTwo,
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Musicain",
      image: ImgThree,
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "Musicain",
      image: ImgFour,
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Musicain",
      image: ImgFive,
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image: ImgSix,
    },
  ];
  return (
    <>
      <div className="relative h-[40rem]">
      <WavyBackground className="">
        <p className="text-2xl md:text-4xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b dark:from-blue-100 dark:to-cyan-200 from-cyan-700 to-cyan-400 inter-var text-center">
          Meet Our Teachers
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Discover the world of music with our passionate and dedicated teachers.
        </p>
        <div className="py-10 text-center text-white flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
      </WavyBackground>
      </div>
    </>
  );
}

export default Teachers;
