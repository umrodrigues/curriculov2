import { useState } from 'react';
import { downloadPDF, PDFData } from '../../services/pdfGenerator';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import { useLoadingStore } from '../../stores/loadingStore';

interface DownloadPDFButtonProps {
  className?: string;
}

export const DownloadPDFButton = ({ className = '' }: DownloadPDFButtonProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { setLoading } = useLoadingStore();

  const pdfData: PDFData = {
    name: 'Luã Silva Rodrigues',
    email: 'luarodrigues1996@gmail.com',
    phone: '(51) 98655-2962',
    location: 'Canoas, Rio Grande do Sul',
    summary: 'Desenvolvedor Fullstack com mais de 5 anos de experiência em tecnologia, especializado no desenvolvimento web e soluções de software. Apaixonado por tecnologia, resolução de problemas e boas práticas de desenvolvimento, incluindo testes e documentação. Possuo um forte compromisso com a qualidade e colaboração, buscando constantemente aprimorar minhas habilidades e contribuir para ambientes inovadores e produtivos.',
    experiences: [
      {
        company: 'Lydia Sistemas Inteligentes',
        position: 'Desenvolvedor Fullstack | Especialista em Automação e IA',
        period: 'Março de 2024 - Dezembro de 2024',
        description: [
          'Desenvolvimento de soluções inteligentes com PHP, Laravel e MySQL',
          'Implementação de web scraping para coleta e processamento de dados',
          'Criação de automações avançadas utilizando IA e plataforma n8n',
          'Desenvolvimento de APIs robustas e integração de sistemas',
          'Otimização de processos através de automação inteligente'
        ]
      },
      {
        company: 'Veloce.tech',
        position: 'Desenvolvedor Fullstack',
        period: 'Dezembro de 2023 - Fevereiro de 2024',
        description: [
          'Desenvolvimento de novas features e correções',
          'Utilização das linguagens: Java 8, PHP 5, Docker, Python, JavaScript, Symphony, Laravel, Oracle, MySQL'
        ]
      },
      {
        company: 'Datum TI | Renner',
        position: 'Desenvolvedor Fullstack (React | Node.js)',
        period: 'Janeiro de 2023 - Outubro de 2024',
        description: [
          'Desenvolvimento do novo e-commerce das Lojas Renner',
          'Criação de hooks customizados para otimização do código',
          'Uso de TypeScript para garantir segurança e clareza no desenvolvimento',
          'Implementação de testes unitários com Jest para garantir qualidade',
          'Documentação de componentes com Storybook',
          'Trabalho em metodologias ágeis, com refinamentos constantes e entregas frequentes'
        ]
      },
      {
        company: 'Datum TI | Renner',
        position: 'Analista de Suporte N3 | Desenvolvedor Java (Spring Boot)',
        period: 'Agosto de 2022 - Fevereiro de 2023',
        description: [
          'Atendimento e resolução de chamados de Nível 3 com ServiceNow',
          'Desenvolvimento de soluções utilizando Java e Spring Boot',
          'Monitoramento de logs e sistemas com Graylog e Grafana',
          'Implementação de filas de mensagens com RabbitMQ',
          'Testes e documentação de APIs com Postman e Swagger'
        ]
      },
      {
        company: 'D Loja Virtual',
        position: 'Analista de Suporte | Infraestrutura | Desenvolvimento',
        period: 'Maio de 2021 - Setembro de 2022',
        description: [
          'Suporte técnico e análise de logs com Graylog',
          'Ajustes de layout utilizando CSS e JavaScript',
          'Gerenciamento de chamados e treinamento de novos colaboradores',
          'Desenvolvimento de documentação e treinamentos para uso do sistema F1 Commerce',
          'Monitoramento de servidores com Zabbix e ajustes em banco de dados MySQL'
        ]
      }
    ],
    skills: [
      {
        category: 'Desenvolvimento Web',
        technologies: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'Vue.js']
      },
      {
        category: 'Back-end',
        technologies: ['Java (Spring Boot)', 'PHP', 'Python', 'Symphony', 'Laravel', 'C#']
      },
      {
        category: 'Banco de Dados',
        technologies: ['MySQL', 'PostgreSQL', 'Oracle']
      },
      {
        category: 'Infraestrutura & Ferramentas',
        technologies: ['Docker', 'AWS', 'Zabbix', 'Graylog', 'Grafana', 'Kubernetes']
      },
      {
        category: 'Testes & Documentação',
        technologies: ['Jest', 'Swagger', 'Postman', 'Storybook']
      },
      {
        category: 'Automação & IA',
        technologies: ['n8n', 'Web Scraping', 'IA para Automações']
      },
      {
        category: 'Metodologias',
        technologies: ['Agile', 'Scrum', 'Kanban']
      },
      {
        category: 'Outros Conhecimentos',
        technologies: ['C++', 'RabbitMQ', 'Git', 'CI/CD']
      }
    ],
    education: [
      {
        institution: 'Anhanguera',
        course: 'Engenharia de Software',
        period: 'Março de 2024 - Janeiro de 2027',
        status: 'Em andamento'
      },
      {
        institution: 'Uniasselvi',
        course: 'Análise e Desenvolvimento de Sistemas',
        period: 'Março de 2022 - Janeiro de 2024',
        status: 'Concluído'
      },
      {
        institution: 'PUCRS',
        course: 'Engenharia Civil',
        period: 'Agosto de 2016 - Dezembro de 2022',
        status: 'Concluído'
      }
    ]
  };

  const handleDownload = async () => {
    setIsGenerating(true);
    setLoading(true, 'Gerando PDF do currículo...');
    try {
      await downloadPDF(pdfData, 'curriculo-lua-rodrigues.pdf');
    } catch (error) {
      console.error('Erro ao baixar PDF:', error);
      alert('Erro ao gerar o PDF. Tente novamente.');
    } finally {
      setIsGenerating(false);
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className={`
        inline-flex items-center justify-center gap-3
        px-6 py-3
        bg-zinc-800 hover:bg-zinc-700
        border border-zinc-600 hover:border-zinc-500
        text-white font-medium
        rounded-lg
        transition-all duration-200
        hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-zinc-900
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {isGenerating ? (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-zinc-400 border-t-white"></div>
          <span>Gerando PDF...</span>
        </>
      ) : (
        <>
          <BsFileEarmarkPdf className="text-lg" />
          <span>Baixar Currículo PDF</span>
        </>
      )}
    </button>
  );
};
