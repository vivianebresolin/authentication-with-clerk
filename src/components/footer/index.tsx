import gitHubLogo from "../../assets/github.png";
import linkedInLogo from "../../assets/linkedin.png";

function Footer() {
  return (
    <footer className="py-6 flex flex-col items-center gap-3">
      <div className="flex gap-5">
        <a href="https://github.com/vivianebresolin" target="_blank">
          <img src={gitHubLogo} alt="GitHub logo" className="w-7"/>
        </a>
        <a href="https://www.linkedin.com/in/vivianebresolin/" target="_blank">
          <img src={linkedInLogo} alt="LinkedIn logo" className="w-7"/>
        </a>
      </div>
      <p>	&copy; 2023 Viviane Viana Bresolin</p>
    </footer>
  );
}

export default Footer;