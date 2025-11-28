import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Domains from "@/components/Domains/Domains";
import Departments from "@/components/Departments/Departments";
import Leadership from "@/components/Leadership/Leadership";
import Achievements from "@/components/Achievements";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-slate-200 selection:bg-white selection:text-black font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Domains />
        <Departments />
        <Leadership />
        <Achievements />
        <BlogPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
