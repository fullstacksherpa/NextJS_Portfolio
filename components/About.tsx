import Image from "next/image";
import SectionTitles from "./SectionTitles";
import aboutMe from "../public/assets/aboutMe.jpg";
const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
      <SectionTitles title="About Me" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Versatile and ambitious web developer with
            <span className="text-textGreen font-bold">
              expertise in frontend development
            </span>
            and a growing passion for backend technologies. Skilled in crafting
            visually stunning and user-friendly interfaces with HTML, CSS, and
            JavaScript. Currently expanding knowledge in backend development
            with NodeJS, ExpressJS, and MongoDB.
          </p>

          <p>
            Pursuing a
            <span className="text-textGreen font-bold">BBA in Accounting</span>
            at Acsenda School of Management, combining business acumen with
            technical expertise.
          </p>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={aboutMe}
                alt="profile image"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textLight rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
