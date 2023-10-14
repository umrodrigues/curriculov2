import { useContext, useEffect, useState } from "react";
import Typed from "react-typed";
import UseAnimations from "react-useanimations";
import arrowDown from "react-useanimations/lib/arrowDown";

import { SiNextdotjs, SiReact, SiTypescript } from "react-icons/si";
import AppContext from "../../services/context";
import { FooterNavigation } from "../organisms/mocks/footer.mock";
import Link from "next/link";

export const Home = () => {
  const context = useContext(AppContext);
  const [mesagem, setMesagem] = useState("");
  useEffect(() => {
    setMesagem(context.MsDeboasVindas ? context.MsDeboasVindas : "Bem vindo");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="w-full h-[90vh] lg:h-screen relative flex justify-center items-center overflow-hidden ">
      <div className="absolute bottom-10">
        <UseAnimations
          animation={arrowDown}
          size={44}
          fillColor="#fafafa"
          strokeColor="#fafafa"
        />
      </div>
      <div className="max-w-5xl w-full pt-20 md:pt-0  px-4 lg:px-6 relative ">
        <div className="flex justify-center items-center">
          <div className="flex w- flex-col  justify-center items-center">
            <div className="text-2xl text-center lg:text-5xl  gap-2 text-gray-100 font-semibold leading-snug  flex flex-col">
              <p>{mesagem}, me chamo</p>
              <h1 className=" text-4xl lg:text-6xl">
                <b className="text-degrade">Luã Rodrigues</b>
              </h1>
              <p>
                <Typed
                  strings={[
                    "Front-end Developer",
                    "Back-end Developer",
                    "Full-stack Developer",
                  ]}
                  typeSpeed={160}
                  backSpeed={90}
                  loop
                />
              </p>
            </div>

            <div className="flex justify-center md:justify-start gap-10 items-center pt-5 md:pt-10">
              {FooterNavigation.social.map((item, index) => (
                <div key={index}>
                  <div className="bg-gray-900 bg-opacity-20   hover:scale-110 rounded-full group shadow-xlflex justify-center flex-col max-w-xs text-gray-100 border border-gray-500 border-opacity-30  hover:border-primary-orange hover:shadow-primary-orange transition-all duration-300 cursor-pointer glass p-3">
                    <Link
                      href={item.href}
                      className="group-hover:text-primary-orange"
                      target="_blank"
                      title={`Botão ${item.name}`}
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon
                        className="h-6 w-6 md:h-8 md:w-8"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute left-[5%] -top-20  hover:scale-125 transition-transform ease-in ">
            <div className="   text-zinc-50 flex justify-center items-center rounded-full text-3xl xl:text-4xl xl:p-2.5 bg-[#65d3f3] bg-opacity-80 border-2 border-cyan-500 animete-ball backdrop-blur-xl">
              <SiReact className="inline" />
            </div>
          </div>

          <div className="absolute right-[5%]  top-0 hover:scale-125 transition-transform ease-in ">
            <div className=" text-zinc-50 flex justify-center items-center rounded-full  bg-primary-blue bg-opacity-80 shadow-2xl border-2 border-secondy-blue animete-ball2 backdrop-blur-xl text-3xl xl:text-4xl xl:p-2.5  ">
              <SiTypescript className="inline" />
            </div>
          </div>
          <div className="absolute left-[10%] -bottom-32 lg:-bottom-16 hover:scale-125 transition-transform ease-in ">
            <div className=" flex text-zinc-50 justify-center items-center rounded-full  bg-gray-500 bg-opacity-80 shadow-2xl border-2 border-gray-600 animete-ball3 backdrop-blur-xl text-3xl xl:text-4xl xl:p-2.5 ">
              <SiNextdotjs className="inline" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
