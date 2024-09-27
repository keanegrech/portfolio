import Link from "next/link";
import Title from "../components/Title";
import Dock from "../components/Dock";
import ExpandDock from "../components/ExpandDock";
import { CiLocationArrow1 } from "react-icons/ci";
import Skill from "../components/Skill";
import { TbCake } from "react-icons/tb";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { FaPython, FaJava, FaHtml5, FaLinux, FaGitAlt } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import {
  SiTailwindcss,
  SiJavascript,
  SiVisualstudiocode,
} from "react-icons/si";

const skills = [
  {
    title: "Linux",
    icon: FaLinux,
  },
  {
    title: "MySQL",
    icon: GrMysql,
  },
  {
    title: "Git",
    icon: FaGitAlt,
  },
  {
    title: "Python",
    icon: FaPython,
  },
  {
    title: "Java",
    icon: FaJava,
  },
  {
    title: "JavaScript",
    icon: SiJavascript,
  },
  {
    title: "TailwindCSS",
    icon: SiTailwindcss,
  },
  {
    title: "HTML",
    icon: FaHtml5,
  },
  {
    title: "VS Code",
    icon: SiVisualstudiocode,
  },
];

export default function About() {
  return (
    <main className="dark:bg-[#101010] bg-[#e7e7e7] w-screen min-h-screen overflow-x-hidden">
      <div className="relative">
        <div className="p-3 absolute w-full z-10">
          <div className="flex justify-between h-full gap-3">
            <Title />
            <div className="hidden md:block">
              <Dock />
            </div>
            <div className="md:hidden">
              <ExpandDock />
            </div>
          </div>
        </div>

        <div className="grid min-h-screen place-items-center px-3 animate-fade-in-down dark:text-white text-black ">
          <div className="flex flex-col gap-5 md:mt-0 mt-[100px] md:mb-0 mb-10 w-full max-w-screen-lg mx-auto">
            <div className="flex md:flex-row flex-col gap-5">
              <div className=" p-[24px] bg-[#f3f3f3] drop-shadow-lg transition-all dark:bg-[#191919] border dark:border-[#ffffff1a] border-[#fefdfe] rounded-[39px] transition-height duration-500 ease-in-out w-full max-w-md mx-auto">
                <div className="flex justify-between flex-col h-full gap-5">
                  <div className=" flex flex-col gap-2">
                    <div className="font-bold text-xl">Info</div>
                    <div className="flex flex-col gap-5">
                      <div className="flex gap-3">
                        <div className="w-[100px] h-[100px] bg-gradient-to-b from-sky-400 to-sky-200 rounded-[15px]" />
                        <div className="flex flex-col justify-between self-center h-full">
                          <div className="font-bold text-xl">
                            Hey - I&apos;m Keane
                          </div>
                          <div className="font-light opacity-50">
                            Software Developer / Student
                          </div>
                          <div className="flex gap-2">
                            <div className="dark:bg-[#262626] bg-[#e0e0e0] px-3 py-2 rounded-[15px] text-[12px] flex gap-2">
                              <div className="self-center">
                                <TbCake size={15} />
                              </div>
                              18 YRS
                            </div>
                            <div className="dark:bg-[#262626] bg-[#e0e0e0] px-3 py-2 rounded-[15px] text-[12px] flex gap-2">
                              <div className="self-center">
                                <CiLocationArrow1 strokeWidth={1.5} size={15} />
                              </div>
                              MALTA
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="dark:bg-[#262626] bg-[#e0e0e0] w-full rounded-[15px] p-3">
                        <div className="flex flex-col">
                          <div className="font-bold">Currently studying</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-5">
                    {skills.map((skill, index) => (
                      <Skill key={index} title={skill.title} icon={skill.icon} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 w-full">
                <div className=" p-[24px] bg-[#f3f3f3] flex flex-col gap-2 drop-shadow-lg transition-all dark:bg-[#191919] border dark:border-[#ffffff1a] border-[#fefdfe] rounded-[39px] transition-height duration-500 ease-in-out w-full">
                  <div className="font-bold text-xl">Education</div>
                  <div className="dark:bg-[#262626] bg-[#e0e0e0] w-full rounded-[15px] p-3">
                    <div className="flex flex-col gap-2">
                      <div className="font-bold">MCAST</div>
                      <div className="flex flex-col gap-5">
                        <div className="diploma">
                          <div className="">
                            Advanced Diploma in Software Development
                          </div>
                          <div className="font-light text-sm opacity-50">
                            diploma / 2022 - 2024 (done)
                          </div>
                          <Link
                            href="https://mcast.edu.mt/courses/it4-04-21/"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="text-xs py-1 px-2 dark:bg-[#4e4e4e] bg-[#b6b6b6] rounded-[12px] mt-2 inline-flex gap-1"
                          >
                            <div className="self-center">mcast.edu.mt</div>
                            <div className="self-center">
                              <FaSquareArrowUpRight />
                            </div>
                          </Link>
                        </div>
                        <div className="degree">
                          <div className="">
                            Bachelor of Science (Honours) in Software
                            Development
                          </div>
                          <div className="font-light text-sm opacity-50">
                            degree / 2024 - ongoing
                          </div>
                          <Link
                            href="https://mcast.edu.mt/courses/it6-a2-21/"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="text-xs py-1 px-2 dark:bg-[#4e4e4e] bg-[#b6b6b6] rounded-[12px] mt-2 inline-flex gap-1"
                          >
                            <div className="self-center">mcast.edu.mt</div>
                            <div className="self-center">
                              <FaSquareArrowUpRight />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-[24px] bg-[#f3f3f3] flex flex-col gap-2 drop-shadow-lg transition-all dark:bg-[#191919] border dark:border-[#ffffff1a] border-[#fefdfe] rounded-[39px] transition-height duration-500 ease-in-out w-full">
                  <div className="font-bold text-xl">Qualifications</div>
                  <div className="dark:bg-[#262626] bg-[#e0e0e0] w-full rounded-[15px] p-3">
                    <div className="flex flex-col">
                      <div className="font-bold">ECDL Certificate</div>
                      <div className="opacity-50">
                        Understanding of the Microsoft 365 suite
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-row w-full flex-col gap-5">
                  <div className="p-[24px] bg-[#f3f3f3] drop-shadow-lg transition-all dark:bg-[#191919] border dark:border-[#ffffff1a] border-[#fefdfe] rounded-[39px] transition-height duration-500 ease-in-out w-full">
                    <div className="text-xl font-bold">About Me</div>
                    <div className="opacity-50 max-w-[500px] text-justify">
                      I&apos;m a student studying software development at MCAST.
                      I&apos;m actively learning and working on projects to
                      improve my skills. I&apos;m passionate about technology
                      and I&apos;m always looking for new things to learn. I
                      also enjoy gaming and I love to play games in my free
                      time.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
