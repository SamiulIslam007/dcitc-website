import Hero from "@/components/Hero";
import About from "@/components/About";
import Domains from "@/components/Domains/Domains";
import Departments from "@/components/Departments/Departments";
import Leadership from "@/components/Leadership/Leadership";
import Achievements from "@/components/Achievements";
import BlogPreview from "@/components/BlogPreview";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Domains />
      <Departments />
      <Leadership />
      <Achievements />
      <BlogPreview />
      <CTASection />
    </>
  );
}
