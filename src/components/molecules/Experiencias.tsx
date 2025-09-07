import Image from "next/image";
import {
  BsCalendar,
  BsFileEarmarkPdf,
  BsFillBriefcaseFill,
  BsInfoCircleFill,
  BsJournalBookmarkFill,
} from "react-icons/bs";
import { useState } from "react";
import logoRenner from "../../assets/rennerlogo.png";
import velocelogo from "../../assets/velocelogo.png"
import simploImage from "../../assets/simplo7img.jpg";
import ImageABout from "../../assets/perfil.webp";
import Link from "next/link";
import { Section } from "../atoms/Section";

export const Experiencias = () => {
  return (
    <div id="experiencias" className="z-50 py-6 sm:py-8 px-3 sm:px-4 lg:px-6 bg-neutral-900">
      <Section>
        <div className="text-gray-100 py-6 sm:py-8 max-w-5xl pb-16 sm:pb-20 border-b sm:border-b-0 border-zinc-700 flex justify-center items-center flex-col lg:col-span-2">
          <div className="md:mx-auto w-full md:max-w-lg lg:max-w-xl sm:px-4 lg:px-6">
            <div className="text-center w-full">
              <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-degrade">
                Experiências
              </h2>
              <p className="text-2xl sm:text-3xl font-bold tracking-tight lg:text-4xl xl:text-5xl">
                Profissionais
              </p>
            </div>

            <div className="flex justify-center text-sm sm:text-base w-full flex-col gap-3 sm:gap-4">
              <p
                className="text-center leading-relaxed mb-4 sm:mb-5 px-2"
              >
                Um pouco sobre as minhas experiências de trabalho.
              </p>
              
             
              <div
                className="flex px-2 sm:px-4 w-full hover:scale-105 transition-all duration-300 justify-center flex-col"
              >
                <div className="shadow-2xl md:flex-col rounded-xl hover:scale-105 transition-all duration-300 border border-zinc-400">
                  <div className="md:px-4 text-gray-100 bg-zinc-600 rounded-tl-xl md:flex-col md:space-y-4 rounded-bl-none rounded-tr-xl py-2 sm:py-3 justify-center items-center">
                    <div className="flex justify-center flex-col md:flex-row items-center text-sm sm:text-base">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md flex items-center justify-center">
                        <span className="text-white font-bold text-xs sm:text-sm">L</span>
                      </div>
                      <h2 className="text-center md:text-clip md:ml-2 text-sm sm:text-base">
                        {" "}
                        Lydia Sistemas Inteligentes
                      </h2>
                    </div>
                  </div>
                  <div className="text-center flex items-center flex-col  bg-zinc-500 rounded-b-xl w-full leading-relaxed px-5 py-2 md:py-5 text-sm">
                    <p>
                    Desenvolvedor Fullstack | Especialista em Automação e IA
                    <br />
                    Desenvolvimento de soluções inteligentes com PHP, Laravel e MySQL.
                    <br />
                    Implementação de web scraping para coleta e processamento de dados.
                    <br />
                    Criação de automações avançadas utilizando IA e plataforma n8n.
                    <br />
                    Desenvolvimento de APIs robustas e integração de sistemas.
                    <br />
                    Otimização de processos através de automação inteligente.
                      </p>
                    <div className="flex flex-wrap w-full py-4 md:px-10 justify-around items-center">
                      <span className="flex justify-center items-center">
                        <h3 className="font-semibold">De:</h3>
                        <BsCalendar className="inline mx-1" />
                        03/11/2024
                      </span>

                      <span className="flex justify-center items-center">
                        <h3 className="font-semibold">Ate:</h3>
                        <BsCalendar className="inline mx-1" />
                        <h3 className="font-semibold text-primary-orange">
                          05/09/2025
                        </h3>
                      </span>
                    </div>
                    <div className="py-2.5">
                      <Link href="#"
                          target="_blank"
                          className="bg-gradient-to-r from-blue-600 to-purple-600 px-16 rounded-md  md:w-auto md:px-10 py-1 flex justify-between items-center hover:scale-105 transition-all duration-300"
                        >
                          <span className="text-gray-100 text-base font-bold">
                            Saiba mais
                          </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="flex justify-center mx-2 h-full "
              >
                <div
                  className="w-[2px] h-32 bg-zinc-300 bg-opacity-90 "
                ></div>
              </div>

              <div
                className="flex px-4 sm:w-auto hover:scale-105 transition-all duration-300 justify-center flex-col w-full "
              >
                <div className="shadow-2xl md:flex-col rounded-xl hover:scale-105 transition-all duration-300 border border-zinc-400 ">
                  <div className=" md:px-4   text-gray-100 bg-zinc-600 rounded-tl-xl md:flex-col md:space-y-4  rounded-bl-none rounded-tr-xl  py-3  justify-center items-center ">
                    <div className="flex justify-center flex-col md:flex-row items-center  text-base  ">
                      <Image
                        className="rounded-md"
                        src={velocelogo}
                        alt={"veloce logo"}
                        width={40}
                        height={40}
                        priority
                      />
                      <h2 className="text-center md:text-clip md:ml-2">
                        {" "}
                        Veloce.tech
                      </h2>
                    </div>
                  </div>
                  <div className="text-center flex items-center flex-col  bg-zinc-500 rounded-b-xl w-full leading-relaxed px-5 py-2 md:py-5 text-sm">
                    <p>
                    Desenvolvedor Fullstack
                    <br />
                    Desenvolvimento de novas features e correções.
                    <br />
                    Utilização das linguagens: Java 8, PHP 5, Docker, Python, JavaScript, Symphony, Laravel, Oracle, Mysql.
                      </p>
                    <div className="flex flex-wrap w-full py-4 md:px-10 justify-around items-center">
                      <span className="flex justify-center items-center">
                        <h3 className="font-semibold">De:</h3>
                        <BsCalendar className="inline mx-1" />
                        20/12/2023
                      </span>

                      <span className="flex justify-center items-center">
                        <h3 className="font-semibold">Ate:</h3>
                        <BsCalendar className="inline mx-1" />
                        <h3 className="font-semibold text-primary-orange">
                          28/02/2024
                        </h3>
                      </span>
                    </div>
                    <div className="py-2.5">
                      <Link href="https://www.linkedin.com/company/velocetechoficial/posts/?feedView=all"
                          target="_blank"
                          className="bg-[#012d74] px-16 rounded-md  md:w-auto md:px-10 py-1 flex justify-between items-center hover:scale-105"
                        >
                          <span className="text-gray-100 text-base font-bold">
                            Saiba mais
                          </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="flex justify-center mx-2 h-full "
              >
                <div
                  className="w-[2px] h-32 bg-zinc-300 bg-opacity-90 "
                ></div>
              </div>


              <div
                className="flex px-4 sm:w-auto hover:scale-105 transition-all duration-300 justify-center flex-col w-full "
              >
                <div className="shadow-2xl md:flex-col rounded-xl hover:scale-105 transition-all duration-300 border border-zinc-400 ">
                  <div className=" md:px-4   text-gray-100 bg-zinc-600 rounded-tl-xl md:flex-col md:space-y-4  rounded-bl-none rounded-tr-xl  py-3  justify-center items-center ">
                    <div className="flex justify-center flex-col md:flex-row items-center  text-base  ">
                      <Image
                        className="rounded-md"
                        src={logoRenner}
                        alt={"logo Renner"}
                        width={40}
                        height={40}
                        priority
                      />
                      <h2 className="text-center md:text-clip md:ml-2">
                        {" "}
                        Datum | Renner S.A.
                      </h2>
                    </div>
                  </div>
                  <div className="text-center flex items-center flex-col  bg-zinc-500 rounded-b-xl w-full leading-relaxed px-5 py-2 md:py-5 text-sm">
                    <p>
                    Desenvolvedor Fullstack Java | React | Node | Typescript
                    <br />
                    Desenvolvimento do novo e-commerce das Lojas Renner.
                    <br />
                    Criação de hooks customizados para otimização do código.
                    <br />
                    Métodos ageis
                    <br />
                    Uso de TypeScript para garantir segurança e clareza no desenvolvimento.
                    <br />
                    Implementação de testes unitários com Jest para garantir qualidade(coverage 85%);
                    <br />  
                   Documentação de componentes com Storybook.
                   <br /> 
                    Trabalho em metodologias ágeis, com refinamentos constantes e entregas frequentes.

                      </p>
                    <div className="flex flex-wrap w-full py-4 md:px-10 justify-around items-center">
                      <span className="flex justify-center items-center">
                        <h3 className="font-semibold">De:</h3>
                        <BsCalendar className="inline mx-1" />
                        01/01/2023
                      </span>

                      <span className="flex justify-center items-center">
                        <h3 className="font-semibold">Ate:</h3>
                        <BsCalendar className="inline mx-1" />
                        <h3 className="font-semibold text-primary-orange">
                          31/10/2024
                        </h3>
                      </span>
                    </div>
                    <div className="py-2.5">
                      <Link href="https://www.linkedin.com/company/datumti/mycompany/"
                          target="_blank"
                          className="bg-[#012d74] px-16 rounded-md  md:w-auto md:px-10 py-1 flex justify-between items-center hover:scale-105"
                        >
                          <span className="text-gray-100 text-base font-bold">
                            Saiba mais
                          </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="flex justify-center mx-2 h-full "
              >
                <div
                  className="w-[2px] h-32 bg-zinc-300 bg-opacity-90 "
                ></div>
              </div>

              <div
                className="flex px-4 sm:w-auto hover:scale-105 transition-all duration-300 justify-center flex-col w-full "
              >
                <div className="shadow-2xl md:flex-col rounded-xl hover:scale-105 transition-all duration-300 border border-zinc-400 ">
                  <div className=" md:px-4   text-gray-100 bg-zinc-600 rounded-tl-xl md:flex-col md:space-y-4  rounded-bl-none rounded-tr-xl  py-3  justify-center items-center ">
                    <div className="flex justify-center flex-col md:flex-row items-center  text-base  ">
                      <Image
                        className="rounded-md"
                        src={logoRenner}
                        alt={"logo Renner"}
                        width={40}
                        height={40}
                        priority
                      />
                      <h2 className="text-center md:text-clip md:ml-2">
                        {" "}
                        Datum | Renner S.A.
                      </h2>
                    </div>
                  </div>
                  <div className="text-center flex items-center flex-col  bg-zinc-500 rounded-b-xl w-full leading-relaxed px-5 py-2 md:py-5 text-sm">
                    <p>
                    Desenvolvedor Java | Spring Boot | Docker | Graphana
                    <br />
                    Atendimento e resolução de chamados de Nível 3 com ServiceNow.
                    <br />
                    Desenvolvimento de soluções utilizando Java e Spring Boot.
                    <br />
                    Monitoramento de logs e sistemas com Graylog e Grafana.
                    <br />
                    Implementação de filas de mensagens com RabbitMQ.
                    <br />
                    Testes e documentação de APIs com Postman e Swagger.
                      </p>
                    <div className="flex flex-wrap w-full py-4 md:px-10 justify-around items-center">
                      <span className="flex justify-center items-center">
                        <h3 className="font-semibold">De:</h3>
                        <BsCalendar className="inline mx-1" />
                        01/08/2022
                      </span>

                      <span className="flex justify-center items-center">
                        <h3 className="font-semibold">Ate:</h3>
                        <BsCalendar className="inline mx-1" />
                        <h3 className="font-semibold text-primary-orange">
                          28/02/2023
                        </h3>
                      </span>
                    </div>
                    <div className="py-2.5">
                      <Link href="https://www.linkedin.com/company/datumti/mycompany/"
                          target="_blank"
                          className="bg-[#012d74] px-16 rounded-md  md:w-auto md:px-10 py-1 flex justify-between items-center hover:scale-105"
                        >
                          <span className="text-gray-100 text-base font-bold">
                            Saiba mais
                          </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="flex justify-center mx-2 h-full "
              >
                <div
                  className="w-[2px] h-32 bg-zinc-300 bg-opacity-90 "
                ></div>
              </div>

              <div
                className="flex px-4 bg hover:scale-105 transition-all duration-300 justify-center flex-col w-full "
              >
                <div className="shadow-2xl md:flex-col rounded-xl hover:scale-105 transition-all duration-300 border border-zinc-400 ">
                  <div className=" md:px-4  text-gray-100 bg-zinc-600 rounded-tl-xl md:flex-col md:space-y-4  rounded-bl-none rounded-tr-xl  py-4  justify-center items-center ">
                    <div className="flex flex-col md:flex-row justify-center items-center text-base  ">
                      <Image
                        className="rounded-md"
                        src={simploImage}
                        alt={"logo workana"}
                        width={30}
                        height={30}
                        priority
                      />
                      <h2 className="md:ml-2">Simplo7 | Dloja virtual </h2>
                    </div>
                  </div>
                  <div className="text-center flex items-center flex-col   bg-zinc-500 rounded-b-xl w-full leading-relaxed px-5 py-2 md:py-5 text-sm">
                    <p>
                    Analista de Infraestrutura e Desenvolvedor PHP
                    <br />
                    <br />
                    Monitoria de servidores via Zabbix.
                    <br />
                    Configurações e manutenção de servidores e máquinas virtuais.
                    <br />
                    Instalação e otimização de recursos pertinentes à infraestrutura da empresa.
                    <br />
                    Manutenção de Código e Correção de bugs;
                    <br />
                    Modelagem e manutenção de Banco de Dados.
                    <br />
                    Analise de logs com Graylog.
                    <br />
                    Alterações visuais em lojas virtuais dos clientes com HTML, CSS E Js.
                    <br />

                    Auxiliar atendentes de Nível 1 sobre as duvidas referente a plataforma de ecommerce da empresa.
                    <br />
                    <br />

                    Competências: JSON · XML · WAMP · Servidor Apache · PHP · Arquitetura MVC · Git · JavaScript · JQuery · CakePHP · API REST · MySQL
                    </p>
                    <div className="flex flex-wrap w-full py-4 md:px-10 justify-around items-center">
                      <span className="flex justify-center items-center">
                        <h3 className="font-semibold">De:</h3>
                        <BsCalendar className="inline mx-1" />
                        01/05/2021
                      </span>

                      <span className="flex justify-center items-center">
                        <h3 className="font-semibold">Ate:</h3>
                        <BsCalendar className="inline mx-1" />
                        30/09/2022
                      </span>
                    </div>
                    <div className="py-2.5">
                      <Link href="https://www.linkedin.com/company/simplo-7/"
                          target="_blank"
                          className="bg-[#4d2d9f] rounded-md px-16 py-1 flex justify-between items-center  hover:scale-105 transition-all duration-200"
                        >
                          <span className="text-white text-sm font-bold">
                            Saiba mais 
                          </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
