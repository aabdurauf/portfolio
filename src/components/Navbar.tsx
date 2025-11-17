import { useEffect, useRef, useState } from "react";
import { navLinks } from "../constants";
import { styles } from "../styles";
import { Fade } from "hamburger-react";
import { IoMoon } from "react-icons/io5";
import { IoLanguageSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion"
import { getLang, saveLang } from "../utils/helper";
import { ThemeMenu } from "./";
import { useTheme } from "../context/themeContext";
import i18n from "../i18n";

const initialLang = getLang()

const Navbar = () => {
  const [active, setActive] = useState<string | null>("");
  const [toggle, setToggle] = useState<boolean>(false);
  const [langModal, setLangModal] = useState<boolean>(false);
  const [themeModal, setThemeModal] = useState<boolean>(false);
  const [activeLang, setActiveLang] = useState<string>(initialLang);
  const [mobileMenuTop, setMobileMenuTop] = useState(0);

  const { t } = useTranslation();
  const { theme } = useTheme()

  const navRef = useRef<HTMLHeadElement | null>(null);

  const clickHandler = (e: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(e.target as Node)) {
      setToggle(false);
      setLangModal(false);
      setThemeModal(false);
    }
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    const navHeight = navRef.current?.clientHeight ?? 0;

    let position = (section?.offsetTop ?? 0) - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
      behavior: "smooth"
    })
  }

  const activeOnScroll = () => {
    const top = window.scrollY;
    const navHeight = navRef.current?.clientHeight ?? 0;
    const sections = document.querySelectorAll("section")

    sections.forEach(section => {
      const offset = section.offsetTop - navHeight
      const sectionHeight = section.offsetHeight;
      const id = section.getAttribute("id")

      if (top >= offset && top < offset + sectionHeight) {
        setActive(id)
      }
    })
  }

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang)
    saveLang(lang)
  }

  useEffect(() => {
    if (navRef.current) {
      setMobileMenuTop(navRef.current.offsetHeight);
    }
  }, [navRef.current, toggle]);

  useEffect(() => {
    document.addEventListener("scroll", activeOnScroll)
    document.addEventListener("click", clickHandler);
    return () => {
      document.removeEventListener("click", clickHandler);
      document.removeEventListener("scroll", activeOnScroll)
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`${styles.paddingX} shadow-lg dark:shadow-none w-full flex items-center py-5 sticky top-0 right-0 left-0 z-20 dark:bg-primary bg-primaryLight`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <h1>
          <a
            href="/"
            className="dark:text-white text-primary text-[18px] font-bold cursor-pointer"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            Abdurauf.dev
          </a>
        </h1>
        <div className="flex items-center gap-5">
          <ul className="list-none hidden md:flex flex-row gap-10">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`${active === link.id ? "dark:text-white text-primary" : "text-secondaryLightText dark:text-secondary"} hover:text-primary dark:hover:text-white text-[18px] cursor-pointer font-medium nav-link duration-300 li`}
                onClick={(e) => {
                  e.preventDefault()
                  setActive(link.id)
                  scrollToSection(link.id)
                }}
              >
                <a href={`#${link.id}`}>{t(link.title)}</a>
              </li>
            ))}
          </ul>

          <div className="flex gap-5 md:text-[18px] text-[25px]">
            <div className="relative">
              <IoLanguageSharp
                onClick={() => {
                  setLangModal(!langModal)
                  setToggle(false)
                  setThemeModal(false)
                }}
                className="dark:text-white dark:hover:text-white hover:text-primary text-primary dark:md:text-secondary md:text-secondaryLightText cursor-pointer duration-300"
              />
              <AnimatePresence>
                {langModal && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-10 left-[50%] translate-x-[-50%] z-50 dark:border-[1px] py-1 px-4 rounded-lg dark:bg-primary bg-primaryLight shadow-lg dark:shadow-none"
                  >
                    <ul className="flex flex-col">
                      <li
                        onClick={() => {
                          changeLang("en")
                          setLangModal(false)
                          setActiveLang("en")
                        }}
                        className={`${activeLang === "en" ? "text-primary dark:text-white" : "text-secondaryLightText dark:text-secondary"} hover:text-primary dark:hover:text-white duration-300 cursor-pointer text-[16px]`}
                      >
                        EN
                      </li>
                      <li
                        onClick={() => {
                          changeLang("ru")
                          setLangModal(false)
                          setActiveLang("ru")
                        }}
                        className={`${activeLang === "ru" ? "text-primary dark:text-white" : "text-secondaryLightText dark:text-secondary"} hover:text-primary dark:hover:text-white duration-300 cursor-pointer text-[16px]`}
                      >
                        RU
                      </li>
                      <li
                        onClick={() => {
                          changeLang("uz")
                          setLangModal(false)
                          setActiveLang("uz")
                        }}
                        className={`${activeLang === "uz" ? "text-primary dark:text-white" : "text-secondaryLightText dark:text-secondary"} hover:text-primary dark:hover:text-white duration-300 cursor-pointer text-[16px]`}
                      >
                        UZ
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="relative">
              <IoMoon
                onClick={() => {
                  setThemeModal(!themeModal)
                  setToggle(false)
                  setLangModal(false)
                }}
                className="dark:text-white dark:hover:text-white hover:text-primary text-primary dark:md:text-secondary md:text-secondaryLightText cursor-pointer duration-300"
              />
              <ThemeMenu
                themeModal={themeModal}
                setThemeModal={setThemeModal}
              />
            </div>
          </div>

          {/* small size */}
          <div className="md:hidden flex flex-1 justify-end items-center">
            <Fade
              duration={0.3}
              toggled={toggle}
              onToggle={toggled => {
                if (!toggled) {
                  setToggle(false)
                } else {
                  setToggle(true)
                  setThemeModal(false)
                  setLangModal(false)
                }
              }}
              size={25}
              color={theme === "Light" ? "#111827" : "white"}
            />
            <AnimatePresence>
              {toggle && (
                <motion.ul
                  initial={{ transform: "translateY(-10px)", opacity: 0 }}
                  animate={{ transform: "translateY(0px)", opacity: 1 }}
                  exit={{ transform: "translateY(-10px)", opacity: 0 }}
                  style={{ top: mobileMenuTop }}
                  className={`shadow-lg dark:shadow-none absolute right-0 left-0 list-none flex pb-2 justify-end items-start flex-col gap-4 w-full dark:bg-primary bg-primaryLight`}
                >
                  {navLinks.map((link, index) => (
                    <li
                      key={index}
                      className={`${active === link.id ? "text-primary dark:text-white" : "text-secondaryLightText dark:text-secondary"} ${styles.paddingX}
                   hover:text-primary dark:hover:text-white font-poppins font-medium cursor-pointer text-[16px] py-2 duration-300 w-full`}
                      onClick={(e) => {
                        e.preventDefault()
                        setToggle(!toggle);
                        setActive(link.id);
                        scrollToSection(link.id)
                      }}
                    >
                      <a className="w-full block" href={`#${link.id}`}>
                        {t(link.title)}
                      </a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
