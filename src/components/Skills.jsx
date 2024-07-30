import { skills } from "../constants";
import Heading from "./Heading";
import Section from "./Section";


const Skills = () => {
  return (
    <Section id="skills">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Technical Skills"
        />

        <div className="flex flex-wrap justify-center gap-5 mb-20 mx-3">
          {skills.map((item) => (
            <div
              className="block relative py-2 px-10 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl  md:max-w-[24rem]"
              
              key={item.id}
            >
                <h7 className="h7 align-middle">{item.title}</h7>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
