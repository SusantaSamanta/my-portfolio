import Navbar from "@/components/layout/Navbar";
import HomePage from "@/components/Pages/HomePage";
// import AboutA from "@/components/sections/AboutA";
// import AboutB from "@/components/sections/AboutB";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Home from "@/components/sections/Home";
// import Home from "@/components/sections/Home";

export default function page() {
  return (
    <>
      <HomePage scrollTo="home" />
    </>
  );
}