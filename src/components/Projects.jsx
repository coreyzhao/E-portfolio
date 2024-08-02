import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Brackets";
import { projects } from "../constants";
import check2  from "../assets/check-02.svg";
import loading1 from "../assets/loading-01.svg";
import { Gradient } from "./design/Roadmap";

const Projects = () => (
  <Section className="overflow-hidden" id="projects">
    <div className="container md:pb-10">
      <Heading tag="Things I've built in my free time" title="Projects" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {projects.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";
          const skills = item.technologies;

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <Tagline>{item.date}</Tagline>

                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                      <img
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <div className="mb-10 my-13mx-15">
                    <img
                      className="w-full"
                      src={item.imageUrl}
                      width={600}
                      height={400}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4 font-inter font-medium">{item.title}</h4>
                  <p className="body-2 text-n-4 mb-10">{item.text}</p>

                  <div className="flex flex-wrap justify-start gap-5 mb-20">
                    {skills.map((item) => (
                      <div
                        className="block relative py-1.5 px-4 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl  md:max-w-[24rem]"
                        
                        key={item.id}
                      >
                          <h7 className="text-sm align-middle">{item}</h7>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/roadmap">Email Me!</Button>
      </div>
    </div>
  </Section>
);

export default Projects;
