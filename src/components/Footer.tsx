import { instagram, telegram, linkedin, github2, githubLight } from "../assets";
import { SectionWrapper } from "../hoc";
import { useTheme } from "../context/themeContext";

const Footer = () => {
  const { theme } = useTheme()

  return (
    <>
      <div className="flex w-full justify-start gap-4">
        <a href="https://github.com/aabdurauf/" className="w-10">
          {theme === "Dark" ?
            <img src={github2} alt="github_icon" />
            :
            <img src={githubLight} alt="github_icon" />
          }
        </a>
        <a href="https://www.instagram.com/abdurauf_a_/" className="w-10">
          <img src={instagram} alt="instagram_icon" />
        </a>
        <a href="https://t.me/abduraufss" className="w-10">
          <img src={telegram} alt="telegram_icon" />
        </a>
        <a href="https://www.linkedin.com/in/abdurauf-ashurov-656415213/" className="w-10">
          <img src={linkedin} alt="linkedin_icon" />
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Footer, "footer");
