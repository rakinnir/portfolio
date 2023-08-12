"use client";
import { motion } from "framer-motion";
import Skill from "./Skill";
type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      className="grid  items-start justify-center gap-5 text-center "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="text-2xl uppercase tracking-[20px] text-gray-500">
        Skills
      </h3>

      <h3 className="uppaercase  mb-10 text-sm tracking-[3px] text-gray-500">
        {"Elevating ideas through dynamic web experiences."}
      </h3>

      <div className="mx-auto grid grid-cols-4 gap-5 ">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}

export default Skills;
