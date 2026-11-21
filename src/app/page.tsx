import Navbar from "@/components/layout/Navbar";
// import AboutA from "@/components/sections/AboutA";
// import AboutB from "@/components/sections/AboutB";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import HomePage from "@/components/sections/Home";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#faf9ff] dark:bg-[#090817]">

        <HomePage />
        {/* <AboutA /> */}
        {/* <AboutB /> */}
        <About />

      </main>
      <Hero />
    </>
  );
}