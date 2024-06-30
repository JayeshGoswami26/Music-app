"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!",
    name: "Alex Johnson",
    title: "Guitar Student",
  },
  {
    quote:
      "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
    name: "Samantha Lee",
    title: "Piano Student",
  },
  {
    quote:
      "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
    name: "Michael Chen",
    title: "Vocal Student",
  },
  {
    quote:
      "As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.",
    name: "Emily Taylor",
    title: "Violin Student",
  },
  {
    quote:
      "The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!",
    name: "Chris Morales",
    title: "Music Production Student",
  },
];
function TestimonialCards() {
  return (
    <div className="overflow-hidden">
      <div className="h-[40rem] w-full rounded-md flex flex-col antialiased bg-[#cdfeff] dark:bg-[#00ffff22] bg-grid-cyan-900/[0.2] dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h2 className=" flex justify-center items-center w-full text-center text-2xl md:text-4xl mb-10 font-bold bg-clip-text text-transparent bg-gradient-to-b dark:from-blue-100 dark:to-cyan-200 from-cyan-700 to-cyan-400 "> Achieving Success Through Harmonious Voices </h2>
      <div className="">
        <div className="">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
            className="overflow-hidden"
          />
        </div>
      </div>
    </div>
    </div>
  );
}

export default TestimonialCards;
