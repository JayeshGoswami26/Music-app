import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
// import BackgroundGif from "../../public/IMG/Gif/LCPT.gif";
// import Image from "next/image";

function HeroSection() {
  return (
    <div className="h-auto  md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      {/* <Image
        id={`BackgroundGif`}
        src={BackgroundGif}
        width={500}
        height={100}
        className="object-cover opacity-[0.7] top-0 rounded-t-xl absolute "
        alt="Background Gif"
      /> */}
      <div className="p-14 relative z-10 w-full text-center">
        <Spotlight
          className="top-0 left-0 md:left-[25%] md:-top-20"
          fill="#00FFFF"
        />
        <h1 className="mt-20 md:mt-4 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b dark:from-blue-100 dark:to-cyan-200 from-cyan-700 to-cyan-400 ">
          Master the art of music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-gray-700 dark:text-neutral-300  max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you&apos;re beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>
        <div className="mt-4">
          <Link href={"/exploreCourses"}>
            <Button
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
              borderRadius="1.75rem"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
