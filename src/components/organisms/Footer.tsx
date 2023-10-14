import Link from "next/link";
import styles from './Organisms.module.scss'
import { FooterNavigation } from "./mocks/footer.mock";


export const Footer = () => {
  return (
    <footer className={styles.containerFooter} aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto  py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
        <div className="flex justify-between items-center flex-wrap w-full gap-5 ">
          {FooterNavigation.social.map((item, index) => (
            <div key={index}>
              <div className="bg-gray-200 bg-opacity-30 p-3  hover:scale-125 rounded-full group shadow-xl flex justify-center flex-col border-2 border-gray-500 border-opacity-40  hover:border-primary-orange transition-all duration-300 cursor-pointer">
                <Link href={item.href}
                    className="text-gray-200
                    group-hover:text-primary-blue"
                    target="_blank"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-7 w-7" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8 flex justify-center items-center">
          <p className="text-xs sm:text-sm text-center text-gray-50 xl:text-center" >
            &copy; 2023 Luã Rodrigues , Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
