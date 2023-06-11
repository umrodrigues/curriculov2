import Image from "next/image";
import { BsFileEarmarkPdf } from "react-icons/bs";
import ImageABout from "../../assets/perfil.webp";
import Link from "next/link";
import { Section } from "../atoms/Section";
import { SiCss3, SiNodedotjs, SiJavascript } from "react-icons/si";


export const About = () => {
  return (
    <div id="sobre" className="pt-10 px-2 sm:px-4 lg:px-6 bg-neutral-900">
      <Section>
        <div className="text-gray-100  pb-20  grid gap-10 lg:grid-cols-4 max-w-5xl ">
          <div className="mx-auto min-w-xl pb-5 px-2  sm:px-4 lg:px-6 inline-block md:hidden">
            <div className="text-center">
              <h2 className="text-lg font-semibold text-primary">Sobre</h2>
              <p className=" text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Um pouco sobre mim
              </p>
            </div>
          </div>
          <div className="flex justify-center text-base  gap-2 flex-col lg:col-span-2">
            <div className="flex justify-center relative flex-col text-lg max-w-sm  px-5 md:px-10">
              <div className="flex rounded-[20rem] border-8 border-neutral-900 relative z-20 justify-center items-end  ring-4 ring-primary-orange shadow-xl shadow-orange-800 drop-shadow-2xl">
                <Image
                  className="rounded-[10rem] "
                  src={ImageABout}
                  alt="Luã Rodrigues foto perfil"
                  priority
                />

                <div className="absolute left-0 top-0  hover:scale-125 transition-transform ease-in ">
                  <div className=" flex justify-center items-center rounded-full text-2xl   bg-[#EAD41C] bg-opacity-80 border-2 border-[#EAD41C] animete-ball backdrop-blur-xl hover:scale-125 transition-transform ease-in-out">
                    <SiJavascript className="inline" />
                  </div>
                </div>

                <div className="absolute right-0 bottom-20  hover:scale-125 transition-transform ease-in ">
                  <div className="flex justify-center items-center rounded-full  bg-primary-blue bg-opacity-80 shadow-2xl border-2 border-secondy-blue animete-ball2 backdrop-blur-xl text-2xl hover:scale-125 transition-transform ease-in-out">
                    <SiCss3 className="inline" />
                  </div>
                </div>

                <div className="absolute left-0 bottom-10 hover:scale-125 transition-transform ease-in ">
                  <div className="flex justify-center items-center rounded-full  bg-[#279249] bg-opacity-80 shadow-2xl border-2 border-[#279249] animete-ball3 backdrop-blur-xl text-2xl hover:scale-125 transition-transform ease-in-out">
                    <SiNodedotjs className="inline" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col lg:col-span-2">
            <div className="mx-auto min-w-xl pb-5 px-2  sm:px-4 lg:px-6 hidden md:inline-block">
              <div className="text-center">
                <h2 className="text-lg font-semibold text-primary-orange">
                  Sobre
                </h2>
                <p className=" text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Um pouco sobre mim
                </p>
              </div>
            </div>
            <div className="mx-3 flex justify-center flex-wrap items-center ">
              <div className="flex justify-center text-sm max-w-xl flex-col space-y-4">
                <p className="px-4 text-justify md:text-justify max-w-xl leading-relaxed">
                  <br />
                  Olá!
                  <br />
                  Me chamo Luã Rodrigues, tenho 26 anos e atualmente resido em Canoas - RS.
                  <br />
                  <br />
                  Iniciei minha carreira na área tech como analista de suporte, sempre tive como ponto forte a curiosidade.
                  Desde que escrevi a minha primeira linha de código foi paixão a primeira vista.
                  <br />
                  Atuo como desenvolvedor desde 2021, sempre buscando conhecimento e aprimorando minhas skills.
                  <br />
                  <br />
                  Você tem um desafio novo para mim?
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
