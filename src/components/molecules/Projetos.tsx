import { Section } from "@/atoms/Section";
import Banner4 from "../../assets/imgPortifolio/construcao.avif";
import canoasguitar from '../../assets/imgPortifolio/canoasgtshop.png';
import vipleiloes from '../../assets/imgPortifolio/vipleiloes.png';
import Banner5 from "../../assets/imgPortifolio/whats.png";
import { BsBehance, BsEyeFill, BsGithub } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { FaCss3, FaHtml5, FaPhp, FaJava, FaRobot, FaSpider } from "react-icons/fa";
import { SiJavascript, SiSass, SiReact, SiNextdotjs, SiLaravel, SiPython, SiMysql } from "react-icons/si";
import { useState, useEffect } from "react";

const ArrayPortifolio1a3 = [
  {
    title: "Sistema de Automação com IA",
    description: "Desenvolvimento de sistema inteligente utilizando n8n, PHP e Laravel para automação de processos empresariais. Implementação de web scraping e integração com APIs para coleta e processamento de dados em tempo real.",
    img: Banner4,
    projectSkill1: "PHP",
    projectSkill2: "Laravel",
    projectSkill3: "n8n",
    link: "",
    git: "",
    linkLocal: "",
  },
  {
    title: "E-commerce Renner",
    description: "Desenvolvimento fullstack do novo e-commerce das Lojas Renner utilizando Java, Spring Boot, React e TypeScript. Implementação de hooks customizados, testes unitários com Jest (85% coverage) e documentação com Storybook.",
    img: Banner4,
    projectSkill1: "Java",
    projectSkill2: "React",
    projectSkill3: "TypeScript",
    link: "",
    git: "",
    linkLocal: "",
  },
  {
    title: "Sistema de Monitoramento",
    description: "Desenvolvimento de sistema de monitoramento e alertas utilizando Java, Spring Boot, RabbitMQ e Grafana. Implementação de filas de mensagens e dashboards em tempo real para acompanhamento de sistemas críticos.",
    img: Banner4,
    projectSkill1: "Java",
    projectSkill2: "RabbitMQ",
    projectSkill3: "Grafana",
    link: "",
    git: "",
    linkLocal: "",
  },
  {
    title: "Canoas Guitar Shop",
    description: "Desenvolvimento completo de e-commerce com PHP, incluindo layout customizado, integração de pagamentos, sistema de envio e ferramentas de marketing. Assessoria completa em estratégias de vendas online.",
    img: canoasguitar,
    projectSkill1: "PHP",
    projectSkill2: "CSS",
    projectSkill3: "JavaScript",
    link: "https://www.canoasguitarshop.com.br/",
    git: "",
    linkLocal: "https://www.canoasguitarshop.com.br/",
  },
  {
    title: "Gerador de Links WhatsApp",
    description: "Ferramenta web para geração automática de links do WhatsApp com personalização de mensagens. Desenvolvido com HTML5, CSS3 e JavaScript vanilla, otimizado para performance e usabilidade.",
    img: Banner5,
    projectSkill1: "HTML",
    projectSkill2: "CSS",
    projectSkill3: "JavaScript",
    link: "",
    git: "https://github.com/umrodrigues/gerar-link-whatsapp",
    linkLocal: "https://umrodrigues.github.io/gerar-link-whatsapp/",
  },
  {
    title: "Blog Vip Leilões",
    description: "Manutenção e otimização de blog WordPress com foco em SEO e performance. Correção de problemas de tagueamento, implementação de ferramentas de busca e otimização de carregamento.",
    img: vipleiloes,
    projectSkill1: "PHP",
    projectSkill2: "WordPress",
    projectSkill3: "SEO",
    link: "",
    git: "",
    linkLocal: "https://blog.vipleiloes.com.br/",
  },
];

export const ProjetoSection = () => {
  function handleIconProjeto(Skill: string) {
    switch (Skill) {
      case "HTML":
        return <FaHtml5 className="inline bg-[#f06529] p-1 rounded-full" />;
      case "CSS":
        return <FaCss3 className="inline bg-[#2965f1] p-1 rounded-full" />;
      case "JavaScript":
        return <SiJavascript className="inline bg-[#efd81d] p-1 rounded-full" />;
      case "SASS":
        return <SiSass className="inline bg-[#c76494] p-1 rounded-full" />;
      case "PHP":
        return <FaPhp className="inline bg-[#777bb4] p-1 rounded-full" />;
      case "React":
        return <SiReact className="inline bg-[#61dafb] p-1 rounded-full" />;
      case "Next":
        return <SiNextdotjs className="inline bg-[#000000] p-1 rounded-full" />;
      case "n8n":
        return <FaRobot className="inline bg-[#ff6b35] p-1 rounded-full" />;
      default:
        return <BsEyeFill />;
    }
  }
  return (
    <div id="Projetos" className="bg-neutral-900">
      <Section>
        <div className="text-white flex flex-col justify-center items-center max-w-7xl mx-auto px-3 sm:px-5 lg:px-8">
          <div className="mx-auto max-w-7xl py-6 sm:py-8 pb-8 sm:pb-10 px-3 sm:px-4 text-center">
            <h3 className="mt-1 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-degrade pb-3 sm:pb-4 font-bold tracking-tight">
              Projetos
            </h3>
            <p className="text-zinc-100 max-w-md text-sm sm:text-base">
              Abaixo, você pode conferir alguns dos meus projetos, que incluem
              tanto projetos de estudo quanto projetos de trabalho
            </p>
          </div>
          <div className="flex w-full justify-center items-center flex-col border-b border-zinc-700 pb-16 sm:pb-20">
            <div className="flex w-full justify-center sm:justify-around flex-wrap gap-6 sm:gap-8 lg:gap-10">
              {ArrayPortifolio1a3.map((item, index) => (
                <div
                  key={index}
                  className="p-2 sm:p-3 flex-initial cursor-default w-full sm:w-1/2 lg:w-1/3 shadow-xl shadow-zinc-600"
                >
                  <div className="flex h-full flex-col justify-between items-center md:max-w-sm xl:max-w-xs p-1 sm:p-2 rounded-lg shadow-lg vidro bg-neutral-700 hover:scale-105 transition-all duration-300">
                    <div className="flex flex-col justify-center items-center ">
                      <Image
                        src={item.img}
                        alt={`Imagen ${item.title}`}
                        className="rounded-lg"
                      />
                    </div>
                    <h2 className="mt-2 font-semibold text-gray-200">
                      {item.title}
                    </h2>
                    <div className="flex my-2 justify-center space-x-4 items-center w-full px-5 text-3xl">
                      <div className="hover:scale-125 transition-all duration-300">
                        {handleIconProjeto(item.projectSkill2)}
                      </div>
                      <div className="text-[2.5rem] hover:scale-110 transition-all duration-300">
                        {handleIconProjeto(item.projectSkill1)}
                      </div>
                      <div className="hover:scale-125 transition-all duration-300">
                        {handleIconProjeto(item.projectSkill3)}
                      </div>
                    </div>
                    <p className="text-neutral-100 text-sm text-center py-2 px-4">
                      {item.description}
                    </p>
                    <div className="flex justify-around pt-3 mt-3 border-t border-zinc-800 pb-4 items-center w-full">
                      <Link href={item.linkLocal} className="text-2xl bg-gray-100 hover:bg-transparent p-2 rounded-full hover:scale-150 hover:text-gray-100 text-primary-orange transition-all duration-300" target="_blank">
                        <BsEyeFill size={30} />
                      </Link>
                      {item.git && (
                        <Link href={item.git} className="text-2xl hover:bg-gray-100 p-2 rounded-full hover:scale-110 text-gray-100 hover:text-primary-orange transition-all duration-200" target="_blank">
                          <BsGithub size={25} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};