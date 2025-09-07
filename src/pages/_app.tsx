import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppProvider } from "../services/context";
import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import { LazyMotion, domAnimation } from "framer-motion";

const poppins = Poppins({
  weight: ["200", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "---font-poppins",
});

function MyApp({ Component, pageProps }: AppProps) {
  //time
  const [time, setTime] = useState("");
  const [hora, setHora] = useState(0);
  const [MsDeboasVindas, setMsDeboasVindas] = useState("");

  useEffect(() => {
    // Zero Vazio
    function zero(x: any) {
      if (x < 10) {
        x = "0" + x;
      }
      return x;
    }

    function handleGetTime() {
      //Seletor de hora
      let novaHora = new Date();

      let hora = novaHora.getHours();
      let minuto = novaHora.getMinutes();

      hora = zero(hora);
      minuto = zero(minuto);
      setHora(hora);
      setTime(`${hora} : ${minuto}`);

      //Mensagem
      if (hora >= 6 && hora < 12) {
        setMsDeboasVindas("Bom dia");
      } else if (hora >= 12 && hora < 18) {
        setMsDeboasVindas("Boa tarde");
      } else if (hora >= 18 && hora <= 23) {
        setMsDeboasVindas("Boa noite");
      } else if (hora >= 0 && hora < 6) {
        setMsDeboasVindas("Boa noite");
      } else {
        setMsDeboasVindas("Ola");
      }
    }

    handleGetTime();
  }, []);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <LazyMotion features={domAnimation}>
        <AppProvider>
          <main className={`${poppins.variable} font-sans`}>
            <Component {...pageProps} />
          </main>
        </AppProvider>
      </LazyMotion>
    </AnimatePresence>
  );
}

export default MyApp;
