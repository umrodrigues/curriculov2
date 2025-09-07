import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Typed = dynamic(() => import("react-typed"), { ssr: false });
const UseAnimations = dynamic(() => import("react-useanimations"), { ssr: false });
import arrowDown from "react-useanimations/lib/arrowDown";

import { SiNextdotjs, SiReact, SiTypescript, SiPhp, SiPython, SiNodedotjs } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { useAppContext } from "../../services/context";
import { FooterNavigation } from "../organisms/mocks/footer.mock";
import { DownloadPDFButton } from "../atoms/DownloadPDFButton";
import Link from "next/link";

export const Home = () => {
  const context = useAppContext();
  const [mesagem, setMesagem] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [floatingIcons, setFloatingIcons] = useState(false);

  useEffect(() => {
    setMesagem(context.MsDeboasVindas || "Bem vindo");
    const timer = setTimeout(() => setIsVisible(true), 500);
    const iconTimer = setTimeout(() => setFloatingIcons(true), 1500);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(iconTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const floatingTechIcons = [
    { Icon: SiReact, color: "bg-[#65d3f3]", border: "border-cyan-500", position: "left-[5%] -top-20", delay: "0s" },
    { Icon: SiTypescript, color: "bg-primary-blue", border: "border-secondy-blue", position: "right-[5%] top-0", delay: "0.5s" },
    { Icon: SiNextdotjs, color: "bg-gray-500", border: "border-gray-600", position: "left-[10%] -bottom-32 lg:-bottom-16", delay: "1s" },
    { Icon: FaJava, color: "bg-[#f89820]", border: "border-[#f89820]", position: "right-[10%] -bottom-20", delay: "1.5s" },
    { Icon: SiPhp, color: "bg-[#777bb4]", border: "border-[#777bb4]", position: "left-[15%] top-1/2", delay: "2s" },
    { Icon: SiPython, color: "bg-[#3776ab]", border: "border-[#3776ab]", position: "right-[15%] top-1/3", delay: "2.5s" },
    { Icon: SiNodedotjs, color: "bg-[#279249]", border: "border-[#279249]", position: "left-[20%] -top-10", delay: "3s" }
  ];

  return (
    <header className="w-full h-[90vh] lg:h-screen relative flex justify-center items-center overflow-hidden">
      {/* Fundo de Galáxia */}
      <div className="absolute inset-0 galaxy-background">
        <div className="nebula"></div>
        <div className="particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </div>
      <div className="absolute bottom-10 z-20">
        <UseAnimations
          animation={arrowDown}
          size={44}
          fillColor="#fafafa"
          strokeColor="#fafafa"
        />
      </div>
      
      <div className="max-w-6xl w-full pt-20 md:pt-0 px-4 lg:px-6 relative z-10">
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center text-center">
            <div className={`text-2xl lg:text-5xl gap-2 text-white font-semibold leading-snug flex flex-col transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-xl lg:text-2xl mb-2 text-gray-200 drop-shadow-lg">{mesagem}, me chamo</p>
              <h1 className="text-4xl lg:text-7xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse drop-shadow-2xl">
                  Luã Rodrigues
                </span>
              </h1>
              <div className="text-lg lg:text-2xl min-h-[2rem] flex items-center justify-center">
                <Typed
                  strings={[
                    "Desenvolvedor Fullstack",
                    "Especialista em Backend",
                    "Especialista em Automação",
                    "Desenvolvedor Java & Spring Boot",
                    "Desenvolvedor Node.js & PHP",
                    "Especialista em IA & n8n",
                  ]}
                  typeSpeed={80}
                  backSpeed={50}
                  loop
                  className="text-degrade"
                />
              </div>
            </div>

            <div className={`flex justify-center gap-6 items-center pt-8 md:pt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {FooterNavigation.social.map((item, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 hover:from-zinc-700 hover:to-zinc-800 rounded-full group shadow-xl flex justify-center flex-col text-gray-100 border border-zinc-600 hover:border-primary-orange hover:shadow-primary-orange hover:shadow-lg transition-all duration-300 cursor-pointer p-4 hover:scale-110">
                    <Link
                      href={item.href}
                      className="group-hover:text-primary-orange transition-colors duration-300"
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

            <div className={`mt-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-cyan-500/30 max-w-2xl shadow-2xl shadow-cyan-500/20">
                <p className="text-gray-200 text-sm lg:text-base leading-relaxed mb-6 text-center">
                  <span className="text-cyan-400 font-semibold">Desenvolvedor Fullstack</span> com mais de 5 anos de experiência, 
                  especializado em <span className="text-blue-400">backend</span>, <span className="text-purple-400">automação</span> e 
                  <span className="text-pink-400"> soluções inteligentes</span>. 
                  Apaixonado por criar sistemas robustos e eficientes.
                </p>
                <div className="flex justify-center">
                  <DownloadPDFButton />
                </div>
              </div>
            </div>
          </div>

          {/* Ícones flutuantes de tecnologias */}
          {floatingTechIcons.map((tech, index) => (
            <div 
              key={index}
              className={`absolute ${tech.position} hover:scale-125 transition-all duration-300 ${floatingIcons ? 'animate-bounce' : ''}`}
              style={{ 
                animationDelay: tech.delay,
                animationDuration: '3s',
                animationIterationCount: 'infinite'
              }}
            >
              <div className={`text-white flex justify-center items-center rounded-full text-2xl xl:text-3xl xl:p-2.5 ${tech.color} bg-opacity-90 border-2 ${tech.border} backdrop-blur-xl shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300`}>
                <tech.Icon className="inline" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};
