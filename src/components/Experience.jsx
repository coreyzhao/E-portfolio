import Section from "./Section";
import {
  Gradient,
} from "./design/Services";

import TagLine from "./Brackets";
import { skills1 } from "../constants";
import { skills2 } from "../constants";


const Experience = () => {
  return (
    <Section id="experience">
      
      <div className="container">
        

        

        <div className="relative pb-20 mt-5">
          

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[32rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                
              </div>

              <div className="absolute inset-0 flex flex-col justify-start p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-6 ">Software Developer Intern at Lottus</h4>
                <p className="body-2 mb-[20px] text-n-3 pr-10 font-inter font-medium">
                  Build and maintain critical React components used in Lottus' frontend application. Work closely with backend developement team in order to implement and handle dynamic api requests.
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

            <div className="relative min-h-[32rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                
              </div>

              <div className="absolute inset-0 flex flex-col justify-start p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-6">Software Developer for BlockChain at McGill</h4>
                <p className="body-2 mb-[20px] text-n-3 font-inter font-medium">
                Attended a Solidity Bootcamp where I learned about smart contracts, decentralized applications
	and blockchain architecture. Attended an online bootcamp where I learned the basics of Typescript.
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
                <TagLine>Nov 2024 - Present</TagLine>
              </div>
            </div>

            
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Experience;
