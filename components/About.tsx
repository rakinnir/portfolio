/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
type Props = {};

function About({}: Props) {
  return (
    <motion.div
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-0 text-2xl uppercase tracking-[20px] text-gray-500 ">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="md:w-95 -mb-20 mt-12 h-56 w-56 flex-shrink-0 rounded-full object-cover md:mb-0 md:h-64 md:rounded-lg xl:h-[500px] xl:w-[400px] "
        src="/profile1.jpg"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          little background
        </h4>
        <p className="text-base">
          Hey, I'm Rakin, a frontend developer with a passion for crafting sleek
          web experiences. Proficient in HTML, CSS, and JavaScript, I bring
          designs to life using React and Next.js. Git keeps me organized,while
          Tailwind CSS helps me create stylish interfaces. I'm a perpetual
          learner, staying updated with the latest trends. When I'm not
          coding,I'm exploring nature or enjoying books.Let's collaborate and
          create something awesome together! Connect with me on
          [LinkedIn/GitHub/Your Preferred Platform] – let's chat!
        </p>
      </div>
    </motion.div>
  );
}

export default About;
