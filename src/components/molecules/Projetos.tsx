import { Section } from "@/atoms/Section";
import Banner4 from "../../assets/imgPortifolio/construcao.avif";
import canoasguitar from '../../assets/imgPortifolio/canoasgtshop.png';
import vipleiloes from '../../assets/imgPortifolio/vipleiloes.png';
import Banner5 from "../../assets/imgPortifolio/whats.png";
import { BsBehance, BsEyeFill, BsGithub } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { FaCss3, FaHtml5, FaPhp } from "react-icons/fa";
import { SiJavascript, SiSass, SiReact, SiNextdotjs } from "react-icons/si";

const ArrayPortifolio1a3 = [
  {
    title: "Gerador de links whatsapp",
    description:
      "Recurso para gerar links de WhatsApp, direcionar a conversa e enviar mensagens.",
    img: Banner5,
    projectSkill1: "HTML",
    projectSkill2: "CSS",
    projectSkill3: "JavaScript",
    link: "",
    git: "https://github.com/umrodrigues/gerar-link-whatsapp",
    linkLocal: "https://umrodrigues.github.io/gerar-link-whatsapp/",
  },
  {
    title: "Canoas Guitar Shop",
    description: "A Canoas Guitar Shop (CGS) é um eccomerce com sua sede em Canoas-RS, a loja é hospedada em uma platarorma, porém todo layout e configurações foram feitas pelo time da Lunaris Tech. Além da parte técnica neste cliente foi realizado toda assessoria de eccomerce com orientação das melhores formas de pagamento, envio, ferramentas de marketing e tudo que engloba a venda na internet.",
    img: canoasguitar,
    projectSkill1: "PHP",
    projectSkill2: "CSS",
    projectSkill3: "JavaScript",
    link: "https://www.canoasguitarshop.com.br/",
    git: "",
    linkLocal: "https://www.canoasguitarshop.com.br/",
  },
  {
    title: "Blog - Vip Leilões",
    description: "A Vip Leilões é uma empresa referência em leilões, neste cliente foi realizado manutenções no blog, o mesmo sendo Wordpress, pontos de seo, tagueamento e outras ferramentas de busca estavam sofrendo problemas. Onde o time da Lunaris Tech realizous as correções.",
    img: vipleiloes,
    projectSkill1: "PHP",
    projectSkill2: "CSS",
    projectSkill3: "JavaScript",
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
      default:
        return <BsEyeFill />;
    }
  }
  return (
    <div id="Projetos" className=" bg-neutral-900">
      <Section>
        <div className="text-white flex flex-col justify-center items-center max-w-7xl mx-auto px-5 lg:px-8 ">
          <div className="mx-auto max-w-7xl py-8 pb-10 px-4 text-center">
            <h3 className="mt-1 text-[2.75rem] text-degrade pb-4 font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Projetos
            </h3>
            <p className="text-zinc-100 max-w-md">
              Abaixo, você pode conferir alguns dos meus projetos, que incluem
              tanto projetos de estudo quanto projetos de trabalho
            </p>
          </div>
          <div className="flex w-full justify-center items-center flex-col border-b border-zinc-700 pb-20">
            <div className="flex w-full justify-center sm:justify-around flex-wrap gap-10 sm:gap-0 ">
              {ArrayPortifolio1a3.map((item, index) => (
                <div
                  key={index}
                  className="p-3 flex-initial cursor-default w-full md:w-1/2 lg:w-1/3 shadow-xl shadow-zinc-600"
                >
                  <div className="flex h-full flex-col justify-between items-center md:max-w-sm xl:max-w-xs p-1 rounded-lg shadow-lg vidro bg-neutral-700 hover:scale-105 transition-all duration-300">
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