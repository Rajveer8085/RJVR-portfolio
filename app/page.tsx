import { Header } from "@/app/components/Header";
import Image from "next/image";
import { HomeSection } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import SkillSection from "./components/Skillsection";

export default function Home() {
  return (
    <>
    <Header />
    <HomeSection />
    <AboutSection  />
    <SkillSection />
    </>
  );
}
