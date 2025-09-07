import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export interface PDFData {
  name: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  experiences: Array<{
    company: string;
    position: string;
    period: string;
    description: string[];
  }>;
  skills: Array<{
    category: string;
    technologies: string[];
  }>;
  education: Array<{
    institution: string;
    course: string;
    period: string;
    status: string;
  }>;
}

export const generatePDF = async (data: PDFData) => {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  let yPosition = 20;

  // Cores
  const primaryColor = [249, 115, 22]; // Orange
  const secondaryColor = [59, 130, 246]; // Blue
  const darkColor = [31, 41, 55]; // Dark gray
  const lightGray = [107, 114, 128]; // Light gray

  // Header
  pdf.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  pdf.rect(0, 0, pageWidth, 40, 'F');
  
  // Nome
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(24);
  pdf.setFont('helvetica', 'bold');
  pdf.text(data.name, 20, 25);
  
  // Contato
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  pdf.text(`${data.email} | ${data.phone} | ${data.location}`, 20, 32);
  
  yPosition = 50;

  // Resumo Profissional
  pdf.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.text('RESUMO PROFISSIONAL', 20, yPosition);
  
  yPosition += 10;
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  const summaryLines = pdf.splitTextToSize(data.summary, pageWidth - 40);
  pdf.text(summaryLines, 20, yPosition);
  yPosition += summaryLines.length * 5 + 10;

  // Experiência Profissional
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.text('EXPERIÊNCIA PROFISSIONAL', 20, yPosition);
  yPosition += 10;

  data.experiences.forEach((exp, index) => {
    if (yPosition > pageHeight - 30) {
      pdf.addPage();
      yPosition = 20;
    }

    // Nome da empresa
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    pdf.text(exp.company, 20, yPosition);
    
    // Cargo
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
    pdf.text(exp.position, 20, yPosition + 5);
    
    // Período
    pdf.setFont('helvetica', 'italic');
    pdf.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
    pdf.text(exp.period, 20, yPosition + 10);
    
    yPosition += 15;
    
    // Descrições
    exp.description.forEach(desc => {
      if (yPosition > pageHeight - 20) {
        pdf.addPage();
        yPosition = 20;
      }
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
      const descLines = pdf.splitTextToSize(`• ${desc}`, pageWidth - 40);
      pdf.text(descLines, 25, yPosition);
      yPosition += descLines.length * 4 + 2;
    });
    
    yPosition += 5;
  });

  // Competências e Tecnologias
  if (yPosition > pageHeight - 50) {
    pdf.addPage();
    yPosition = 20;
  }

  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
  pdf.text('COMPETÊNCIAS E TECNOLOGIAS', 20, yPosition);
  yPosition += 10;

  data.skills.forEach(skill => {
    if (yPosition > pageHeight - 20) {
      pdf.addPage();
      yPosition = 20;
    }

    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    pdf.text(skill.category, 20, yPosition);
    
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
    pdf.text(skill.technologies.join(' • '), 20, yPosition + 5);
    
    yPosition += 10;
  });

  // Formação Acadêmica
  if (yPosition > pageHeight - 50) {
    pdf.addPage();
    yPosition = 20;
  }

  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
  pdf.text('FORMAÇÃO ACADÊMICA', 20, yPosition);
  yPosition += 10;

  data.education.forEach(edu => {
    if (yPosition > pageHeight - 20) {
      pdf.addPage();
      yPosition = 20;
    }

    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    pdf.text(edu.institution, 20, yPosition);
    
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
    pdf.text(edu.course, 20, yPosition + 5);
    
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'italic');
    pdf.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
    pdf.text(`${edu.period} (${edu.status})`, 20, yPosition + 10);
    
    yPosition += 15;
  });

  return pdf;
};

export const downloadPDF = async (data: PDFData, filename: string = 'curriculo-lua-rodrigues.pdf') => {
  try {
    const pdf = await generatePDF(data);
    pdf.save(filename);
  } catch (error) {
    console.error('Erro ao gerar PDF:', error);
    throw error;
  }
};
