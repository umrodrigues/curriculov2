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
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d=""
              className="shape-fill"
            ></path>
          </svg>
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
