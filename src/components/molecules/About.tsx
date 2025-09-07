import Image from "next/image";
import { BsFileEarmarkPdf } from "react-icons/bs";
import ImageABout from "../../assets/perfil.webp";
import Link from "next/link";
import { Section } from "../atoms/Section";
import { SiCss3, SiNodedotjs, SiJavascript, SiJava, SiPhp, SiPython } from "react-icons/si";
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
    { Icon: SiJavascript, color: "bg-[#EAD41C]", position: "left-0 top-0", delay: "0s" },
    { Icon: SiCss3, color: "bg-primary-blue", position: "right-0 bottom-20", delay: "0.5s" },
    { Icon: SiNodedotjs, color: "bg-[#279249]", position: "left-0 bottom-10", delay: "1s" },
    { Icon: SiJava, color: "bg-[#f89820]", position: "right-0 top-10", delay: "1.5s" },
    { Icon: SiPhp, color: "bg-[#777bb4]", position: "left-1/2 top-0", delay: "2s" },
    { Icon: SiPython, color: "bg-[#3776ab]", position: "right-1/3 bottom-0", delay: "2.5s" }
  ];

  return (
    <div id="sobre" className="pt-10 px-2 sm:px-4 lg:px-6 bg-neutral-900">
      <Section>
        <div className="text-gray-100 pb-20 grid gap-10 lg:grid-cols-4 max-w-6xl mx-auto">
          {/* Título para mobile */}
          <div className="mx-auto min-w-xl pb-5 px-2 sm:px-4 lg:px-6 inline-block md:hidden">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-lg font-semibold text-degrade">Sobre</h2>
              <p className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Um pouco sobre mim
              </p>
            </div>
          </div>

          {/* Foto de perfil com ícones flutuantes */}
          <div className="flex justify-center text-base gap-2 flex-col lg:col-span-2">
            <div className="flex justify-center relative flex-col text-lg max-w-sm px-5 md:px-10">
              <div className={`flex rounded-[20rem] border-8 border-neutral-900 relative z-20 justify-center items-end ring-4 ring-primary-orange shadow-xl shadow-orange-800 drop-shadow-2xl transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                <Image
                  className="rounded-[10rem] hover:scale-105 transition-transform duration-300"
                  src={ImageABout}
                  alt="Luã Rodrigues foto perfil"
                  priority
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
                    <div className={`flex justify-center items-center rounded-full text-2xl ${tech.color} bg-opacity-80 border-2 ${tech.color} backdrop-blur-xl hover:scale-125 transition-transform ease-in-out shadow-lg`}>
                      <tech.Icon className="inline text-white" />
                </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Conteúdo de texto */}
          <div className="flex justify-center items-center flex-col lg:col-span-2">
            {/* Título para desktop */}
            <div className="mx-auto min-w-xl pb-5 px-2 sm:px-4 lg:px-6 hidden md:inline-block">
              <div className={`text-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="text-lg font-semibold text-degrade">Sobre</h2>
                <p className="text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Um pouco sobre mim
                </p>
              </div>
            </div>

            <div className="mx-3 flex justify-center flex-wrap items-center">
              <div className={`flex justify-center text-sm max-w-xl flex-col space-y-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-xl p-6 border border-zinc-700 hover:border-zinc-600 transition-all duration-300">
                  <p className="px-4 text-justify md:text-justify max-w-xl leading-relaxed text-gray-200">
                    <span className="text-2xl font-bold text-degrade">Olá!</span>
                    <br /><br />
                    Me chamo <span className="font-semibold text-white">Luã Rodrigues</span>, tenho 28 anos e atualmente resido em <span className="text-primary-orange">Canoas - RS</span>.
                    <br /><br />
                    Iniciei minha carreira na área tech como analista de suporte, sempre tive como ponto forte a <span className="text-cyan-400">curiosidade</span>.
                    Desde que escrevi a minha primeira linha de código foi <span className="text-pink-400">paixão à primeira vista</span>.
                    <br /><br />
                    Atuo como <span className="font-semibold text-green-400">desenvolvedor fullstack</span> desde 2021, especializando-me em <span className="text-blue-400">backend</span>, <span className="text-purple-400">automação</span> e <span className="text-orange-400">soluções inteligentes</span>.
                    <br /><br />
                    <span className="text-lg font-semibold text-degrade">Você tem um desafio novo para mim?</span>
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
