import { ParallaxText } from "../atoms/ParallaxText";

export const SkillsSection = () => {
  return (
    <div className="glass w-full flex flex-col overflow-hidden">
      <div className="pb-10 w-full lg:pb-32 bg-neutral-900 flex gap-10 flex-col">
        <div className="text-center w-full">
          <h2 className="text-lg font-semibold  text-primary-orange">Sobre</h2>
          <p className=" text-2xl font-bold text-zinc-50 tracking-tight sm:text-4xl lg:text-5xl">
            Skills
          </p>
        </div>
      </div>
      <div className="relative top-0 w-full">
        <div className="custom-shape-divider-top-1678559770">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0   1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="relative  w-full inset-0 h-[28rem] -rotate-[10deg] md:-rotate-[5deg] pt-32  flex  flex-col items-center justify-center ">
        {/* <ParallaxText baseVelocity={3} className= "top-24"/>
        <ParallaxText baseVelocity={-3} className= "bottom-0 lg:-bottom-5" reverse/> */}
      </div>
      <div className="custom-shape-divider-bottom-1678425506">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};
