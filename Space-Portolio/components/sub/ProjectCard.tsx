import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link:string;
}

const ProjectCard = ({ src, title, description , link }: Props) => {
  return (
    <a className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]" href={link} target="_blank">
      <div>
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="object-cover w-full h-[250px]"
      />
      </div>

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
