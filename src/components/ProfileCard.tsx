"use client";

import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ProfileCardProps {
  name: string;
  title: string;
  image: string;
  school: string;
  major: string;
  sentence: string;
  url?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  image,
  school,
  major,
  sentence,
  url,
}: ProfileCardProps) => {
  const [descriptionMode, setDescriptionMode] = React.useState(false);

  return (
    <div
      className="
        relative
        w-64 h-80
        sm:w-72 sm:h-[24rem]
        md:w-80 md:h-[26rem]
        lg:w-[22rem] lg:h-[30rem]
        rounded-xl overflow-hidden shadow-lg
        group cursor-pointer
        transition-transform duration-300
        hover:-translate-y-2 hover:shadow-2xl
      "
      onClick={() => setDescriptionMode(!descriptionMode)}
    >
      <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 30vw"
          className={`object-cover transition-all duration-700 ease-out ${
            descriptionMode ? "blur-md" : "blur-0"
          }`}
          priority={false}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div
        className={`absolute inset-0 bg-black transition-opacity duration-400 ${
          descriptionMode ? "opacity-70" : "opacity-0"
        }`}
      />

      <div
        className={`absolute bottom-6 left-6 text-white transition-all duration-700 transform ${
          descriptionMode
            ? "opacity-0 translate-y-4"
            : "opacity-100 translate-y-0"
        }`}
      >
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
          {name}
        </h3>
        <p className="text-base md:text-lg opacity-90">{title}</p>
      </div>

      <div
        className={`absolute bottom-6 left-6 right-6 text-white transition-all duration-700 transform ${
          descriptionMode
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <h3 className="flex flex-row gap-2 items-center text-2xl md:text-3xl font-bold leading-tight drop-shadow-sm">
          {name}{" "}
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-base md:text-lg font-normal ml-2"
              onClick={(e) => e.stopPropagation()}
            >
              <Link className="inline-block h-5 w-5 hover:scale-110 hover:text-blue-300 transition-transform transition-colors duration-200" />
            </a>
          )}
        </h3>

        <p className="mt-1 text-lg md:text-xl font-medium text-gray-100/90">
          {title}
        </p>

        <p className="mt-0.5 text-sm md:text-base text-gray-300/90">
          {school} — {major}
        </p>

        <hr className="my-3 border-white/20 w-4/4" />

        <p className="text-sm md:text-base italic leading-relaxed text-gray-200/80">
          {sentence}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
