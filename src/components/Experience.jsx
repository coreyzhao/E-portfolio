import Section from "./Section";
import {
  Gradient,
} from "./design/Services";

import TagLine from "./Brackets";

const Experience = () => {
  return (
    <Section id="experience">
      
      <div className="container">
        

        

        <div className="relative pb-20 mt-5">
          

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[25rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                
              </div>

              <div className="absolute inset-0 flex flex-col justify-start p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Software Developer Intern at Lottus</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Build and maintain critical React components used in Lottus' frontend application. Incorperated Context APIs and hooks to produce dynamic elements 
                </p>
              </div>
              <div className="absolute bottom-5 right-7">
                <TagLine>May 2024 - Aug 2024</TagLine>
              </div>
              
              
            </div>

            <div className="relative min-h-[25rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                
              </div>

              <div className="absolute inset-0 flex flex-col justify-start p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Software Developer for BlockChain at McGill</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                Attending a Solidity Bootcamp where I am learning about smart contracts, decentralized applications
	and blockchain architecture
                </p>
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
