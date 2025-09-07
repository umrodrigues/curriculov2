import Head from "next/head";
import { About } from "@/molecules/About";
import { Home } from "@/molecules/Home";
import { ProjetoSection } from "../molecules/Projetos";
import { ContactSection } from "../molecules/Contact";
import { Experiencias } from "../molecules/Experiencias";
import { SkillsSection } from "../molecules/Skills";
import { Footer } from "../organisms/Footer";
import BackToTopButton from "../atoms/back-to-top";

export const HomePageTemplate = () => {
  return (
    <>
      <Head>
        <title>Curriculo </title>
        <link rel="shortcut icon" sizes="32/32" href="/favicon/favicon.ico" />
      </Head>

      <Home />
      <div className="">
        <div className="custom-shape-divider-bottom-1678425506">
         
        </div>
      </div>
      <main className="w-full flex flex-col ">
        <About />
        <SkillsSection/>
        <Experiencias />
        <ProjetoSection />
        <ContactSection />
        <BackToTopButton />
      </main>
      <Footer />
    </>
  );
};
