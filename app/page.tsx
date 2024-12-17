import Link from "next/link";
import Title from "./components/Title";
import ExpandDock from "./components/ExpandDock";
import Dock from "./components/Dock";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="dark:bg-black bg-white w-screen h-screen overflow-y-hidden">
      <div className="bg-[url('/background.webp')] bg-center bg-cover absolute w-screen h-screen dark:opacity-45" />
      <div className="relative">
        <div className="p-3 absolute w-full">
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

        <div className="grid h-screen place-items-center px-4 animate-fade-in-down dark:text-white text-black">
          <div className="flex flex-col gap-3 px-4">
            <div className="font-light">Hi, my name is</div>

            <div className="sm:text-6xl text-4xl font-bold">Keane Grech.</div>

            <div className="flex flex-col gap-6">
              <div className="sm:text-6xl text-4xl font-bold dark:opacity-50 opacity-70">
                I study software development.
              </div>
              <div className="flex flex-col gap-10">
                <div className="dark:opacity-50 opacity-70 sm:w-[55%] text-justify">
                  I am currently a student at MCAST Paola, studying a degree in Software Development, with deep knowledge in
                  various technologies.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
