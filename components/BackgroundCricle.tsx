import { motion } from "framer-motion"
type Props = {}

function BackgroundCricle({}: Props) {
  return (
    <div className="relative flex justify-center items-center">
      <div className="border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping absolute" />
      <div className="border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 absolute " />
      <div className="border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 absolute" />
      <div />
      <div />
    </div>
  )
}

export default BackgroundCricle
