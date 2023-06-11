import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaJava, FaDocker, FaSass, FaDev,FaLaravel,FaNode, FaVuejs, FaCodeBranch,FaLinux, FaNetworkWired, FaMailBulk, FaJenkins } from "react-icons/fa";
import { SiTypescript, SiMysql, SiSpring, SiSass, SiPython, SiCsharp, SiPhp, SiRuby } from "react-icons/si";
import { useState } from "react";
import React from "react";



export const navigation = [
  {
    label: "Hooks customizados",
    icon: FaCodeBranch,
  },
  {
    label: "Testes unitários com Jest",
    icon: FaCodeBranch,
  },
  {
    label: "Documentação com storybook",
    icon: FaCodeBranch,
  },
  {
    label: "Layout Responsivo",
    icon: FaCodeBranch,

  },
  {
    label: "Sistemas Operacionais GNU/Linux",
    icon: FaLinux,
  },

  {
    label: "Cake PHP",
    icon: FaLinux,
  },
  {
    label: "Metodologias ágeis, Scrum, Kambam",
    icon: FaLinux,
  },
  {
    label: "Conceitos de rede de computadores (TCP/IP, Switch, Roteador, Firewall, VPN)",
    icon: FaLinux,
  },
  {
    label: "Laravel",
    icon: FaLaravel,

  },
  {
    label: "Node.js",
    icon: FaNode,

  },
  {
    label: "Vue.js",
    icon: FaVuejs,

  },
  {
    label: "Configuração de placas e rotas de rede",
    icon: FaNetworkWired,
  },
  {
    label: "Servidor SSH",
    icon: FaCodeBranch,
  },
  {
    label: "Servidor Web ( Apache e Nginx)",
    icon: FaCodeBranch,
  },
  {
    label: "Arquiteturas de Hardware de computadores ( SCSI, RAID, HBA )",
    icon: FaCodeBranch,
  },
  {
    label: "Servidor de e-mail ( Postfix / Qmail ou Sendmail )",
    icon: FaMailBulk,
  },
  {
    label: "Instalação de pacotes ( .rpm / .deb )",
    icon: FaCodeBranch,
  },
  {
    label: "Shell Script",
    icon: FaCodeBranch,
  },
  {
    label: "Editores de texto ( vi / vim / emacs / mcedit )",
    icon: FaCodeBranch,
  },
  {
    label: "Agendamento de tarefas ( cron / at )",
    icon: FaCodeBranch,
  },
  {
    label: "Kubernets",
    icon: FaCodeBranch,
  },
  {
    label: "Jenkins",
    icon: FaJenkins,
  },
  {
    label: "Inglês Avançado",
    icon: FaCodeBranch,
  },
  {
    label: "Postmann e Insomnia",
    icon: FaCodeBranch,
  },
  {
    label: "RabbitMq",
    icon: FaCodeBranch,
  },
  {
    label: "Graphana",
    icon: FaCodeBranch,
  },
  {
    label: "Swagger",
    icon: FaCodeBranch,
  },

  {
    label: "HTML5",
    icon: FaHtml5,
  },
  {
    label: "CSS3",
    icon: FaCss3Alt,
  },
  {
    label: "JavaScript",
    icon: FaJs,
  },
  {
    label: "TypeScript",
    icon: SiTypescript,
  },
  {
    label: "React",
    icon: FaReact,
  },
  {
    label: "MySQL",
    icon: SiMysql,
  },
  {
    label: "Java",
    icon: FaJava,
  },
  {
    label: "Spring",
    icon: SiSpring,
  },
  {
    label: "Docker",
    icon: FaDocker,
  },
  {
    label: "Sass",
    icon: FaSass,
  },
  {
    label: "Python",
    icon: SiPython,
  },
  {
    label: "C#",
    icon: SiCsharp,
  },
  {
    label: "PHP",
    icon: SiPhp,
  },
];

export const SkillsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full flex flex-col overflow-hidden">
      <div className="pb-10 w-full lg:pb-32 bg-neutral-900 flex gap-10 flex-col">
        <div className="text-center w-full">
          <h2 className="text-lg font-semibold text-white">Sobre</h2>
          <p className="text-2xl font-bold text-white tracking-tight sm:text-4xl lg:text-5xl">
            Skills
          </p>
        </div>
      </div>

      <div className="flex justify-center py-8">
        <ul className="list-disc text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {navigation.map((item, index) => (
            <li
              key={index}
              className={`mb-2 text-primary-white flex items-center`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: hoveredIndex === index ? "scale(1.2)" : "scale(1)",
                transition: "transform 0.3s ease",
                display: "flex",
                alignItems: "center",
              }}
            >
              {item.icon && (
                <div className="mr-2">
                  {React.createElement(item.icon, {
                    className: "text-4xl text-primary-white",
                  })}
                </div>
              )}
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};