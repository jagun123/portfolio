import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
          These are the technologies I've worked with
          </p>
        </motion.div>

        {/* <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div> */}
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
              Programing Languages
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue rounded-2xl absolute right-0 top-0 z-[-1]" />
          </div>
          <div className="w-full flex gap-2 flex-wrap mt-5">
          <span class="bg-gradient-rainblue cursor-pointer  text-deep-blue rounded-lg px-3 py-1 font-semibold hover:bg-blue hover:text-white transition duration-500">HTML</span>
          <span class="bg-gradient-rainblue cursor-pointer  text-deep-blue rounded-lg px-3 py-1 font-semibold hover:bg-blue hover:text-white transition duration-500">CSS</span>
          <span class="bg-gradient-rainblue cursor-pointer  text-deep-blue rounded-lg px-3 py-1 font-semibold hover:bg-blue hover:text-white transition duration-500">JAVASCRIPT</span>
          <span class="bg-gradient-rainblue cursor-pointer  text-deep-blue rounded-lg px-3 py-1 font-semibold hover:bg-blue hover:text-white transition duration-500">Node JS</span>
          <span class="bg-gradient-rainblue cursor-pointer  text-deep-blue rounded-lg px-3 py-1 font-semibold hover:bg-blue hover:text-white transition duration-500">Solidity</span>
          <span class="bg-gradient-rainblue cursor-pointer  text-deep-blue rounded-lg px-3 py-1 font-semibold hover:bg-blue hover:text-white transition duration-500">Ethereum</span>
         </div>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
              Libraries and Frameworks
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red rounded-2xl  absolute right-0 top-0 z-[-1]" />
          </div>
          <div className="w-full flex gap-2 flex-wrap mt-5">
          <span class="bg-gradient-rainblue cursor-pointer  text-deep-blue rounded-lg px-3 py-1 font-semibold hover:bg-blue hover:text-white transition duration-500">REACT</span>
          <span class="bg-gradient-rainblue cursor-pointer  text-deep-blue rounded-lg px-3 py-1 font-semibold hover:bg-blue hover:text-white transition duration-500">NEXT JS</span>
          <span class="bg-gradient-rainblue cursor-pointer  text-deep-blue rounded-lg px-3 py-1 font-semibold hover:bg-blue hover:text-white transition duration-500">React Native</span>
          <span class="bg-gradient-rainblue cursor-pointer  text-deep-blue rounded-lg px-3 py-1 font-semibold hover:bg-blue hover:text-white transition duration-500">Redux</span>
          <span class="bg-gradient-rainblue cursor-pointer  text-deep-blue rounded-lg px-3 py-1 font-semibold hover:bg-blue hover:text-white transition duration-500">Monogo Db</span>
          <span class="bg-gradient-rainblue cursor-pointer  text-deep-blue rounded-lg px-3 py-1 font-semibold hover:bg-blue hover:text-white transition duration-500">Tailwind Css</span>
          <span class="bg-gradient-rainblue cursor-pointer  text-deep-blue rounded-lg px-3 py-1 font-semibold hover:bg-blue hover:text-white transition duration-500">Material UI</span>
         </div>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair  font-semibold text-3xl mt-3">
              Tools and Platforms
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow rounded-2xl absolute right-0 top-0 z-[-1]" />
          </div>
          <div className="w-full flex gap-2 flex-wrap mt-5">
          <span class="bg-gradient-rainblue cursor-pointer  text-deep-blue rounded-lg px-3 py-1 font-semibold hover:bg-blue hover:text-white transition duration-500">React Router</span>
          <span class="bg-gradient-rainblue cursor-pointer  text-deep-blue rounded-lg px-3 py-1 font-semibold hover:bg-blue hover:text-white transition duration-500">Git</span>
          <span class="bg-gradient-rainblue cursor-pointer  text-deep-blue rounded-lg px-3 py-1 font-semibold hover:bg-blue hover:text-white transition duration-500">Firebase</span>
          <span class="bg-gradient-rainblue cursor-pointer  text-deep-blue rounded-lg px-3 py-1 font-semibold hover:bg-blue hover:text-white transition duration-500">Netlify</span>
          <span class="bg-gradient-rainblue cursor-pointer  text-deep-blue rounded-lg px-3 py-1 font-semibold hover:bg-blue hover:text-white transition duration-500">Vercel</span>
         
         </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
