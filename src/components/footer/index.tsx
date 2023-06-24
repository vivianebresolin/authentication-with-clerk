import gitHubLogo from "../../assets/github.png";
import linkedInLogo from "../../assets/linkedin.png";

function Footer() {
  return (
    <footer className="py-2 md:pt-12 flex flex-col items-center gap-2 sm:gap-3">
      <div className="flex gap-7">
        <a href="https://github.com/vivianebresolin" target="_blank">
          <img src={gitHubLogo} alt="GitHub logo" className="w-6 md:w-7"/>
        </a>
        <a href="https://www.linkedin.com/in/vivianebresolin/" target="_blank">
          <img src={linkedInLogo} alt="LinkedIn logo" className="w-6 md:w-7"/>
        </a>
      </div>
      <p className="text-sm md:text-base">	&copy; 2023 Viviane Viana Bresolin</p>
    </footer>
  );
}

export default Footer;