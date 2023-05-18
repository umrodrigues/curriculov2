import { useRef } from "react";
import {
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  m,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import Image from "next/image";

interface ParallaxProps {
  baseVelocity: number;
  reverse?: boolean;
  className?: string;
}

const skillsFron = {
  html: {
    title: "Html",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    porcentagem: "w-[99%]",
  },
  css: {
    title: "Css",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    porcentagem: "w-[98%]",
  },
  javascript: {
    title: "Javascript",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
    porcentagem: "w-[90%]",
  },
  typescript: {
    title: "Typescript",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg",
    porcentagem: "w-[90%]",
  },
  next: {
    title: "Next",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    porcentagem: "w-[93%]",
  },
  react: {
    title: "React",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    porcentagem: "w-[95%]",
  },
  git: {
    title: "Git",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-plain-wordmark.svg",

    porcentagem: "w-[78%]",
  },
  node: {
    title: "Node",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    porcentagem: "w-[88%]",
  },
  adonis: {
    title: "Adonis",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/adonisjs/adonisjs-original.svg",
    porcentagem: "w-[78%]",
  },
};

const skills = {
  html: {
    title: "Html",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    porcentagem: "w-[99%]",
  },
  css: {
    title: "Css",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    porcentagem: "w-[98%]",
  },
  javascript: {
    title: "Javascript",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
    porcentagem: "w-[90%]",
  },
  typescript: {
    title: "Typescript",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg",
    porcentagem: "w-[90%]",
  },
  next: {
    title: "Next",  
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-line.svg",
    porcentagem: "w-[93%]",
  },
  react: {
    title: "React",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    porcentagem: "w-[95%]",
  },
  git: {
    title: "Git",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-plain-wordmark.svg",

    porcentagem: "w-[78%]",
  },
  node: {
    title: "Node",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    porcentagem: "w-[88%]",
  },
  adonis: {
    title: "Adonis",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/adonisjs/adonisjs-original.svg",
    porcentagem: "w-[78%]",
  },
};

export const ParallaxText = ({
  baseVelocity = 100,
  className,
  reverse,
}: ParallaxProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v: number) => `${wrap(-0, -25, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t: any, delta: number) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={`parallax py-2 ${className || ""}`}>
      {reverse ? (
        <m.div className="scroller" style={{ x }}>
          {Object.values(skills)
            .reverse()
            .map((item, index) => (
              <span
                key={index}
                className="w-[150px] h-[150px] rotate-[10deg] md:rotate-[5deg]"
              >
                <Image
                  src={item.source}
                  alt={item.title}
                  width={150}
                  height={150}
                  loading={"eager"}
                />
              </span>
            ))}
          {Object.values(skills)
            .reverse()
            .map((item, index) => (
              <span
                key={index}
                className="w-[150px] h-[150px] rotate-[10deg] md:rotate-[5deg]"
              >
                <Image
                  src={item.source}
                  alt={item.title}
                  width={150}
                  height={150}
                  loading={"eager"}
                />
              </span>
            ))}
        </m.div>
      ) : (
        <m.div className="scroller" style={{ x }}>
          {Object.values(skills).map((item, index) => (
            <span
              key={index}
              className="w-[150px] h-[150px] rotate-[10deg] md:rotate-[5deg]"
            >
              <Image
                src={item.source}
                alt={item.title}
                width={150}
                height={150}
                loading={"eager"}
              />
            </span>
          ))}
          {Object.values(skills).map((item, index) => (
            <span
              key={index}
              className="w-[150px] h-[150px] rotate-[10deg] md:rotate-[5deg]"
            >
              <Image
                src={item.source}
                alt={item.title}
                width={150}
                height={150}
                loading={"eager"}
              />
            </span>
          ))}
        </m.div>
      )}
    </div>
  );
};
