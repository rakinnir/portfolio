type Props = {};

function Project({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="relative mx-auto flex  min-h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row ">
      <h3 className="absolute top-0 text-2xl uppercase tracking-[20px] text-gray-500">
        Projects
      </h3>

      <div className="absolute left-0 top-[30%] min-h-[500px] w-full -skew-y-12 bg-[#f7ab0a]/10"></div>
    </div>
  );
}

export default Project;
