import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import HomePage from "@/components/sections/Home";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#faf9ff] dark:bg-[#090817]">

        <HomePage />
        <About />

      </main>
      <Hero />
    </>
  );
}