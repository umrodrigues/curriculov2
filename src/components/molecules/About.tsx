import Image from "next/image";
import { BsFileEarmarkPdf } from "react-icons/bs";
import ImageABout from "../../assets/perfil.webp";
import Link from "next/link";
import { Section } from "../atoms/Section";
import { SiCss3, SiNodedotjs, SiJavascript, SiPhp, SiPython } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { useState, useEffect } from "react";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [floatingIcons, setFloatingIcons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    const iconTimer = setTimeout(() => setFloatingIcons(true), 1000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(iconTimer);
    };
  }, []);

  const techIcons = [
    { Icon: SiJavascript, color: "bg-[#EAD41C]", position: "hidden sm:block left-2 top-2", delay: "0s" },
    { Icon: SiCss3, color: "bg-primary-blue", position: "hidden lg:block right-2 bottom-20", delay: "0.5s" },
    { Icon: SiNodedotjs, color: "bg-[#279249]", position: "hidden lg:block left-2 bottom-10", delay: "1s" },
    { Icon: FaJava, color: "bg-[#f89820]", position: "hidden lg:block right-2 top-10", delay: "1.5s" },
    { Icon: SiPhp, color: "bg-[#777bb4]", position: "hidden xl:block left-1/2 top-2", delay: "2s" },
    { Icon: SiPython, color: "bg-[#3776ab]", position: "hidden xl:block right-1/4 bottom-2", delay: "2.5s" }
  ];

  return (
    <div id="sobre" className="pt-4 sm:pt-6 px-3 sm:px-4 lg:px-6 bg-neutral-900">
      <Section>
        <div className="text-gray-100 pb-8 sm:pb-12 max-w-6xl mx-auto">
          {/* Título para mobile */}
          <div className="mx-auto pb-3 sm:pb-4 px-2 sm:px-4 lg:px-6 inline-block lg:hidden">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-degrade">Sobre</h2>
              <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                Um pouco sobre mim
              </p>
            </div>
          </div>

          {/* Layout Desktop: Foto à esquerda, conteúdo à direita */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-12 items-center">
            {/* Foto de perfil com ícones flutuantes - Desktop */}
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-[400px] xl:max-w-[450px]">
                <div className={`flex rounded-full border-8 xl:border-12 border-neutral-900 relative z-20 justify-center items-center ring-4 xl:ring-6 ring-primary-orange shadow-xl shadow-orange-800 drop-shadow-2xl transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                  <Image
                    className="rounded-full hover:scale-105 transition-transform duration-300 w-full h-auto"
                    src={ImageABout}
                    alt="Luã Rodrigues foto perfil"
                    priority
                    width={450}
                    height={450}
                  />

                  {techIcons.map((tech, index) => (
                    <div 
                      key={index}
                      className={`absolute ${tech.position} hover:scale-125 transition-all duration-300 ${floatingIcons ? 'animate-bounce' : ''}`}
                      style={{ 
                        animationDelay: tech.delay,
                        animationDuration: '2s',
                        animationIterationCount: 'infinite'
                      }}
                    >
                      <div className={`flex justify-center items-center rounded-full text-lg xl:text-2xl p-2 xl:p-2.5 ${tech.color} bg-opacity-80 border-2 ${tech.color} backdrop-blur-xl hover:scale-125 transition-transform ease-in-out shadow-lg`}>
                        <tech.Icon className="inline text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Conteúdo de texto - Desktop */}
            <div className="flex flex-col justify-center">
              <div className={`text-center lg:text-left transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="text-lg xl:text-xl font-semibold text-degrade mb-2">Sobre</h2>
                <p className="text-3xl xl:text-4xl 2xl:text-5xl font-bold tracking-tight mb-8">
                  Um pouco sobre mim
                </p>
              </div>

              <div className={`flex justify-center lg:justify-start text-base xl:text-lg max-w-xl flex-col space-y-3 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-xl p-5 xl:p-6 border border-zinc-700 hover:border-zinc-600 transition-all duration-300">
                  <p className="text-justify leading-relaxed text-gray-200">
                    <span className="text-2xl xl:text-3xl font-bold text-degrade">Olá!</span>
                    <br /><br />
                    Me chamo <span className="font-semibold text-white">Luã Rodrigues</span>, tenho 28 anos e atualmente resido em <span className="text-primary-orange">Canoas - RS</span>.
                    <br /><br />
                    Iniciei minha carreira na área tech como analista de suporte, sempre tive como ponto forte a <span className="text-cyan-400">curiosidade</span>.
                    Desde que escrevi a minha primeira linha de código foi <span className="text-pink-400">paixão à primeira vista</span>.
                    <br /><br />
                    Atuo como <span className="font-semibold text-green-400">desenvolvedor fullstack</span> desde 2021, especializando-me em <span className="text-blue-400">backend</span>, <span className="text-purple-400">automação</span> e <span className="text-orange-400">soluções inteligentes</span>.
                    <br /><br />
                    <span className="text-lg xl:text-xl font-semibold text-degrade">Você tem um desafio novo para mim?</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Layout Mobile/Tablet: Centralizado */}
          <div className="lg:hidden">
            {/* Foto de perfil com ícones flutuantes - Mobile */}
            <div className="flex justify-center items-center mb-6">
              <div className="relative w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px]">
                <div className={`flex rounded-full border-4 sm:border-6 md:border-8 border-neutral-900 relative z-20 justify-center items-center ring-2 sm:ring-3 md:ring-4 ring-primary-orange shadow-xl shadow-orange-800 drop-shadow-2xl transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                  <Image
                    className="rounded-full hover:scale-105 transition-transform duration-300 w-full h-auto"
                    src={ImageABout}
                    alt="Luã Rodrigues foto perfil"
                    priority
                    width={300}
                    height={300}
                  />

                  {techIcons.map((tech, index) => (
                    <div 
                      key={index}
                      className={`absolute ${tech.position} hover:scale-125 transition-all duration-300 ${floatingIcons ? 'animate-bounce' : ''}`}
                      style={{ 
                        animationDelay: tech.delay,
                        animationDuration: '2s',
                        animationIterationCount: 'infinite'
                      }}
                    >
                      <div className={`flex justify-center items-center rounded-full text-sm sm:text-lg md:text-xl p-1 sm:p-1.5 md:p-2 ${tech.color} bg-opacity-80 border-2 ${tech.color} backdrop-blur-xl hover:scale-125 transition-transform ease-in-out shadow-lg`}>
                        <tech.Icon className="inline text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Conteúdo de texto - Mobile */}
            <div className="mx-2 sm:mx-3 flex justify-center flex-wrap items-center">
              <div className={`flex justify-center text-sm sm:text-base max-w-xl flex-col space-y-3 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-xl p-4 sm:p-5 border border-zinc-700 hover:border-zinc-600 transition-all duration-300">
                  <p className="px-2 sm:px-3 text-justify max-w-xl leading-relaxed text-gray-200">
                    <span className="text-xl sm:text-2xl font-bold text-degrade">Olá!</span>
                    <br /><br />
                    Me chamo <span className="font-semibold text-white">Luã Rodrigues</span>, tenho 28 anos e atualmente resido em <span className="text-primary-orange">Canoas - RS</span>.
                    <br /><br />
                    Iniciei minha carreira na área tech como analista de suporte, sempre tive como ponto forte a <span className="text-cyan-400">curiosidade</span>.
                    Desde que escrevi a minha primeira linha de código foi <span className="text-pink-400">paixão à primeira vista</span>.
                    <br /><br />
                    Atuo como <span className="font-semibold text-green-400">desenvolvedor fullstack</span> desde 2021, especializando-me em <span className="text-blue-400">backend</span>, <span className="text-purple-400">automação</span> e <span className="text-orange-400">soluções inteligentes</span>.
                    <br /><br />
                    <span className="text-base sm:text-lg font-semibold text-degrade">Você tem um desafio novo para mim?</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
