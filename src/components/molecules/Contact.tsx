import { BsWhatsapp, BsTelephoneOutboundFill } from "react-icons/bs";
import { Section } from "@/atoms/Section";
import Link from "next/link";
import { useRouter } from "next/router";

export const ContactSection = () => {
  const router = useRouter();

  return (
    <div id="contato" className="z-50 bg-neutral-900">
      <Section>
        <div className="text-gray-100 pt-5 pb-20  grid  md:py-32 lg:grid-cols-4 max-w-3xl ">
          <div className="flex justify-center items-center md:items-start px-4  text-base  gap-2 flex-col lg:col-span-3">
            <h3 className=" text-[2.50rem] text-center leading-8 pb-10 text-degrade font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Entre em contato
            </h3>

            <p className="text-justify px-2 md:text-left text-base leading-relaxed max-w-md">
              Gostou do que viu? 
              <br />
              Entre em contato!
            </p>
          </div>
          <div className="w-full flex justify-center items-center pt-24 pb-4">
            <button
              onClick={() => {
                setTimeout(() => {
                  router.push(
                    "https://api.whatsapp.com/send?phone=5551986552962"
                  );
                }, 300)
              }}
              aria-label="Whatsapp"
              className="custom-button"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span className="flex justify-center items-center gap-1 py-2 text-sm lg:text-base">
                <BsWhatsapp className="inline lg:mr-2 text-2xl" />
                Whatsapp
              </span>
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
};
