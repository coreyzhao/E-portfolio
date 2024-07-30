
import mtl from "../assets/mtl.jpeg"
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import HomeImage from "./HomeImage";
import GlassTabs from "./GlassTabs";
import Heading from "./Heading";
import { GradientLight, GradientLightLeft } from "./design/Hero";

const Home = () => {
  const parallaxRef = useRef(null);

  return (
    <>
      
      <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="home"
    >
      <GradientLight />

      <GradientLightLeft />
      <Heading
          title="Corey Zhao"
          text="Hi there, I'm Corey! I'm an undergraduate of McGill's Class of 2026 and my passion is Computer Science. My interests include software design, cloud technologies and web development."
      />
      
      

      <div className="container relative" ref={parallaxRef}>
        
        
        
        <div className="relative max-w-[25rem] xl:mx-auto lg:mx-20 md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient2">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1rem] bg-n-10 rounded-t-[0.9rem]" />
              

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1980/850]">
                <img
                  src={mtl}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1920}
                  height={1080}
                  alt="mtl"
                />

                <HomeImage className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned speed={10}>
                  <ul className="hidden absolute -left-[5.5rem] top-[5rem] px-5 py-3 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl lg:flex">
                    <p>Downtown Area</p>
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned speed={20}>
                  <GlassTabs
                    className="hidden absolute -right-[5.5rem] bottom-[6rem] w-[12rem] lg:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>
            

            <Gradient />
          </div>
        </div>
      </div>

      <BottomLine />
    </Section>
  
    </>
  );
};

export default Home;
