import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Brackets";
import { projects } from "../constants";
import check2  from "../assets/check-02.svg";
import loading1 from "../assets/loading-01.svg";
import { Gradient } from "./design/Roadmap";
import arrow_top_right from "../assets/arrow_top_right_bright.png"

const Projects = () => (
  <Section className="overflow-hidden" id="projects">
    <div className="container md:pb-10">
      <Heading tag="Things I've built in my free time" title="Projects" />

      <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:pb-[7rem]">
        {projects.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";
          const skills = item.technologies;

          const handleClick = () => {
            window.location.href = 'https://www.youtube.com';
          };

          return (
            <div
              className={`md:flex p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              } ${
                item.id == 1 ? "md:translate-y-[7rem]" : ""
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                
                <div className="relative z-1">
                  <div className=" items-center justify-between max-w-[27rem] mb-8 md:mb-12">
                    <Tagline>{item.date}</Tagline>

                    {/* <div className="flex items-center px-4 py-1 mt-3 w-fit bg-n-1 rounded text-n-8">
                      <img
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div> */}
                  </div>

                  <div className="mb-10 my-13mx-15">
                    <img
                      className="w-full"
                      src={item.imageUrl}
                      width={500}
                      height={300}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h5 mb-2 font-semibold">{item.title}</h4>
                  <h5 className="h8 mb-4 font-medium">{item.description}</h5>
                  <p className="body-2 text-n-4 mb-10">{item.text}</p>

                  <div className="flex flex-wrap justify-start gap-5 mb-20">
                    {skills.map((item) => (
                      <div
                        className="block relative py-1 px-3 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl  md:max-w-[24rem]"
                        
                        key={item.id}
                      >
                          <h8 className="text-xs align-middle">{item}</h8>
                      </div>
                    ))}
                  </div>
                  <a className="" href={item.link} target="blank">
                    <div
                      className="inline-flex items-center h-[3.5rem] px-4 bg-n-8/80 rounded-[1.4rem] transition-all duration-300 cursor-pointer hover:bg-n-9/40 hover:backdrop-blur-md"
                    >
                      View Project
                      <img className="w-5 h-5 ml-1" src={arrow_top_right} alt="Loading" />
                    </div>
                  </a>

                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>
      <Section id="" className="flex justify-center items-center">
        <div className="flex justify-center mt-5 md:mt-10 xl:mt-15 max-w-xl text-center">
          <p className="text-n-4">Designed in Figma and coded in Visual Studio Code by me. Built with React.js and styled with Tailwind CSS, deployed with Netlify.</p>
        </div>
      </Section>

      <Section id="email">
        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <a href="mailto:coreyzh2004@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button>Email Me!</Button>
          </a>
        </div>
      </Section>
      

    </div>
  </Section>
);

/*project */
export default Projects;
