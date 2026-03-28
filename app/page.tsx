import { Header } from "@/app/components/Header";
import Image from "next/image";
import { HomeSection } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import SkillSection from "./components/Skillsection";
import TechStack from "./components/Techstack"
import { Projects } from "./components/Projects";
import { Experience } from "./components/ExpSection";
import { Contact } from "./components/ContactUs";

export default function Home() {
  return (
    <>
    <Header />
    <HomeSection />
    <AboutSection  />
    <SkillSection />
    <TechStack /> 
    <Projects />
    <Experience />
    <Contact />
    </>
  );
}
