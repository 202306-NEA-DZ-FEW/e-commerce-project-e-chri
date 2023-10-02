import Image from "next/image"
import { BsGithub } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"

export default function Item({ name, githubLink, linkedinLink, image }) {
  return (
    <div className="bg-DarkWhite dark:bg-OxfordBlue shadow-inner hover:shadow-EnglishViolet transform hover:scale-105 rounded-lg p-4 text-center ">
      <div className=" text-lg font-semibold text-center">
        <Image
          src={image}
          alt="name"
          style={{ objectFit: "cover" }}
          className=" w-20 h-20 mx-auto rounded-full mb-2"
        />
      </div>
      <h2 className="text-l dark:text-white font-base my-4 font-Poppins">
        {name}
      </h2>
      <div className=" mt-2 text-center">
        <a href={githubLink} target="_blank">
          <span
            className="p-2 cursor-pointer inline-flex items-center
            bg-gray-400 dark:bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-RedPoppy
    duration-300 rounded-full h-8 w-8 flex items-center justify-center"
          >
            <BsGithub />
          </span>
        </a>
        <a href={linkedinLink} target="_blank">
          <span
            className="p-2 cursor-pointer inline-flex items-center
            bg-gray-400 dark:bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-RedPoppy
    duration-300 rounded-full h-8 w-8 flex items-center justify-center"
          >
            <BsLinkedin />
          </span>
        </a>
      </div>
    </div>
  )
}
