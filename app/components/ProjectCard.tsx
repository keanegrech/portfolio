"use client";
import React, { useState, FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";

export interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  tag: string;
  tag2: string;
  website: string;
  github: string;
  onWebsite: boolean;
}

export default function ProjectCard({
  title,
  image,
  description,
  tag,
  tag2,
  website,
  github,
  onWebsite,
}: ProjectCardProps) {
  return (
    <div
      className={`project-card p-[12px] bg-[#f3f3f3] transition-all dark:bg-[#191919] drop-shadow-xl border dark:border-[#ffffff1a] border-[#fefdfe] rounded-[32px] transition-height duration-500 ease-in-out flex flex-col`}
    >
      <div className="flex flex-col gap-3 flex-grow">
        <Image
          src={image}
          width={500}
          height={500}
          alt={title}
          className="rounded-[20px] drop-shadow-lg"
        />
        <div className="project-details flex justify-between">
          <div className="flex flex-col p-3 gap-3">
            <div className="flex gap-4">
              <div className="font-bold text-left text-xl drop-shadow-lg">
                {title}
              </div>
              <div className="flex gap-2">
                <div className="dark:bg-[#222122]/70 bg-[#f8f8f8d6]/70 dark:border-[#ffffff1a] border-[#dededf] border rounded-full font-mono uppercase self-center sm:px-4 px-2">
                  {tag}
                </div>
                <div className="dark:bg-[#222122]/70 bg-[#f8f8f8d6]/70 dark:border-[#ffffff1a] border-[#dededf] border rounded-full font-mono uppercase self-center sm:px-4 px-2">
                  {tag2}
                </div>
              </div>
            </div>
            <div className="text-left">
              {description}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-2 mt-auto">
        <Link
          href={github}
          rel="noopener noreferrer"
          target="_blank"
          className="w-full dark:bg-white bg-black hover:dark:bg-white/80 hover:bg-black/80 flex justify-center gap-2 dark:text-black text-white rounded-full py-2 drop-shadow-lg"
        >
          <div className="self-center"><FaGithub size={23} /></div>
          <div className="self-center">Source Code</div>
        </Link>
        {onWebsite ? (
          <Link
            href={website}
            rel="noopener noreferrer"
            target="_blank"
            className="w-full dark:bg-white bg-black hover:dark:bg-white/80 hover:bg-black/80 flex justify-center gap-2 dark:text-black text-white rounded-full py-2 drop-shadow-lg"
          >
            <div className="self-center"><BiWorld size={23} /></div>
            <div className="self-center">Visit Website</div>
          </Link>
        ) : null}
      </div>
    </div>
  );
}