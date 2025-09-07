import { BsWhatsapp } from "react-icons/bs";
import { Section } from "@/atoms/Section";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export const ContactSection = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="contato" className="z-50 bg-neutral-900">
      <Section>
        <div className="text-gray-100 py-8 sm:py-12 px-3 sm:px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-degrade font-bold tracking-tight mb-4">
                  Entre em contato
                </h3>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
                  Gostou do que viu? Entre em contato e vamos conversar sobre seu próximo projeto!
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <button
                  onClick={() => {
                    setTimeout(() => {
                      router.push("https://api.whatsapp.com/send?phone=5551986552962");
                    }, 300);
                  }}
                  aria-label="WhatsApp"
                  className="group relative inline-flex items-center justify-center px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-500/50 overflow-hidden"
                >
                  {/* Efeito de brilho animado */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  {/* Ícone com animação */}
                  <BsWhatsapp className="text-2xl sm:text-3xl mr-3 group-hover:animate-bounce" />
                  
                  {/* Texto */}
                  <span className="relative z-10">Conversar no WhatsApp</span>
                  
                  {/* Efeito de pulso */}
                  <div className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
                </button>
              </div>
            </div>

            {/* Informações adicionais */}
            <div className={`mt-8 sm:mt-12 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-zinc-700/50 max-w-2xl mx-auto">
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  <span className="text-primary-orange font-semibold">Resposta rápida garantida!</span>
                  <br />
                  Estou sempre disponível para discutir novas oportunidades e projetos interessantes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
