import Title from "../components/Title";
import Dock from "../components/Dock";
import ExpandDock from "../components/ExpandDock";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "EdVantage",
    icon: "/productImages/edvantagelogo.png",
    description: "Concept landing page of a school managment app.",
    tag: "NextJS",
    tag2: "TailwindCSS",
    github: "https://github.com/keanegrech/edvantage-website",
    website: "https://edvantage-website.vercel.app/",
    image: "/productImages/edvantage.png",
    onWebsite: true,
  }
];

export default function Projects() {
  return (
    <main className="dark:bg-[#101010] bg-[#e7e7e7] w-screen min-h-screen">
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

        <div className="grid min-h-screen place-items-center px-3 animate-fade-in-down dark:text-white text-black">
          <div className="flex flex-col text-center gap-10 md:mt-0 mt-[64px] md:mb-0 mb-10">
            <div className="flex flex-col gap-2"></div>
            <div className="flex md:flex-row flex-col gap-4">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  tag={project.tag}
                  tag2={project.tag2}
                  github={project.github}
                  website={project.website}
                  image={project.image}
                  onWebsite={project.onWebsite}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
