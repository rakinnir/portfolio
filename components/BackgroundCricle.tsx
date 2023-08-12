import { motion } from "framer-motion";
type Props = {};

function BackgroundCricle({}: Props) {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50", "80", "20%"],
      }}
      transition={{ duration: 2.5 }}
    >
      <div className="absolute mt-52 h-[150px] w-[150px] animate-ping rounded-full border border-[#333333]" />
      <div className="absolute mt-52 h-[250px] w-[250px] rounded-full border border-[#333333] " />
      <div className="absolute mt-52 h-[400px] w-[400px] rounded-full border border-[#333333]" />
      <div className="absolute mt-52 h-[500px] w-[500px] animate-pulse rounded-full border border-[#f7ab0a] opacity-20" />
      <div />
      <div className="absolute mt-52 h-[650px]  w-[650px] rounded-full border border-[#333333]" />
      <div />
    </motion.div>
  );
}

export default BackgroundCricle;
