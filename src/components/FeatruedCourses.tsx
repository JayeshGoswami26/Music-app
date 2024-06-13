import Link from "next/link"
import  coursesData from '../data/music_courses.json'
function FeatruedCourses() {
  coursesData.courses.filter(course => course.isFeatured)
  return (
    <>
      <div className="w-full bg-[#00ffff22] p-5 text-center mb-96">
        <h3 className="uppercase text-cyan-500"> FEATURED COURSES </h3>
        <h2 className="text-4xl font-bold break-words tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-blue-100 to-blue-100"> Listing To best Music </h2>
        <div className="flex flex-row flex-wrap justify-center items-center mt-20 gap-3">
          <div className="flex flex-col justify-center items-center gap-3">
            <h2 className="text-2xl">Heading Here</h2>
            <p>Some Text Here Whichi no one gives F, one more line coz lorem ipsem is too normal, wont CHAT GPT the shit out of this.</p>
            <Link className=" bg-cyan-500 p-2 rounded-md"  href={'/'}> Some Button </Link>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <h2 className="text-2xl">Heading Here</h2>
            <p>Some Text Here Whichi no one gives F, one more line coz lorem ipsem is too normal, wont CHAT GPT the shit out of this.</p>
            <Link className=" bg-cyan-500 p-2 rounded-md"  href={'/'}> Some Button </Link>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <h2 className="text-2xl">Heading Here</h2>
            <p>Some Text Here Whichi no one gives F, one more line coz lorem ipsem is too normal, wont CHAT GPT the shit out of this.</p>
            <Link className=" bg-cyan-500 p-2 rounded-md"  href={'/'}> Some Button </Link>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <h2 className="text-2xl">Heading Here</h2>
            <p>Some Text Here Whichi no one gives F, one more line coz lorem ipsem is too normal, wont CHAT GPT the shit out of this.</p>
            <Link className=" bg-cyan-500 p-2 rounded-md"  href={'/'}> Some Button </Link>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <h2 className="text-2xl">Heading Here</h2>
            <p>Some Text Here Whichi no one gives F, one more line coz lorem ipsem is too normal, wont CHAT GPT the shit out of this.</p>
            <Link className=" bg-cyan-500 p-2 rounded-md"  href={'/'}> Some Button </Link>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <h2 className="text-2xl">Heading Here</h2>
            <p>Some Text Here Whichi no one gives F, one more line coz lorem ipsem is too normal, wont CHAT GPT the shit out of this.</p>
            <Link className=" bg-cyan-500 p-2 rounded-md"  href={'/'}> Some Button </Link>
          </div>
        </div>
        {/* Secound Grid Box */}

        {/* View All Courses */}
        <div className="mt-20">
          <Link href={'/courses'}> View all courses </Link>
        </div>
      </div>
    </>
  )
}

export default FeatruedCourses