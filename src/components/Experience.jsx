import Section from "./Section";
import {
  Gradient,
} from "./design/Services";

import TagLine from "./Brackets";
import { skills1 } from "../constants";
import { skills2 } from "../constants";
import Heading from "./Heading";


const Experience = () => {
  return (
    <Section id="experience">
      
      <div className="container">
        <Heading tag="technical background" title="Experience" />

        

        <div className="relative pb-20 mt-10">
          

          <div className="relative z-1 grid gap-5 lg:grid-cols-1">
            <div className="relative min-h-[49rem] md:min-h-[35rem] xl:min-h-[27rem] border border-n-1/10 rounded-3xl overflow-hidden">
              

              <div className="absolute inset-0 flex flex-col justify-start p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-0 text-2xl md:text-3xl">Software Developer Intern</h4>
                <h8 className="h8 mb-6 ">Financial Technical Startup - Lottus</h8>
                <p className="body-2 mb-[10px] text-n-3 pr-10 font-inter font-medium">
                  - Developed and maintained 20+ components in React 18 for a SaaS web application driving enhanced functionality and user experience
                </p> 
                <p className="body-2 mb-[10px] text-n-3 pr-10 font-inter font-medium">
                  - Collaborated with a team of 3 developers and company executives to integrate and maintain 5 RESTful API endpoints, enabling over 10 new user-centric features
                </p> 
                <p className="body-2 mb-[20px] text-n-3 pr-10 font-inter font-medium">
                  - Engineered over 20 technical solutions, resulting in a 25% reduction in bug-prone features, significantly enhancing product stability and user experience
                </p> 
                <div className="flex flex-wrap justify-start gap-2 mb-5 pr-10">
                {skills1.map((item) => (
                  <div
                    className="block relative py-1 px-3 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl  md:max-w-[24rem]"
                    
                    key={item.id}
                  >
                    <h7 className="text-xs align-middle font-inter font-medium">{item.title}</h7>
                  </div>
                ))}
                </div>
              </div>
              
              <div className="absolute bottom-5 right-7">
                <TagLine>May 2024 - Aug 2024</TagLine>
              </div>
              
              
            </div>

            {/* <div className="relative md:min-h-[37rem] xl:min-h-[30rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                
              </div>

              <div className="absolute inset-0 flex flex-col justify-start p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-0">Software Developer</h4>
                <h8 className="h8 mb-6 ">McGill Activities & Societies - Blockchain at McGill</h8>
                <p className="body-2 mb-[20px] text-n-3 font-inter font-medium">
                Attended a Solidity Bootcamp where I learned about smart contracts, decentralized applications
	and blockchain architecture. Attended an online bootcamp where I attended 4+ courses to learn the basics of Typescript.
                </p>
                <div className="flex flex-wrap justify-start gap-2 mb-5 pr-10">
                {skills2.map((item) => (
                  <div
                    className="block relative py-1 px-3 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl  md:max-w-[24rem]"
                    
                    key={item.id}
                  >
                    <h7 className="text-xs align-middle font-inter font-medium">{item.title}</h7>
                  </div>
                ))}
                </div>
              </div>
              <div className="absolute bottom-5 right-7">
                <TagLine>Nov 2023 - May 2024</TagLine>
              </div>
            </div> */}

            
          </div>

          <Gradient />
        </div>
        
      </div>
      
    </Section>
  );
};

export default Experience;
