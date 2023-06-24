import { Link } from "react-router-dom";
import AppParagraph from "../../../../AppParagraph";

function SectionTwo() {
  return ( 
    <section className="px-4 py-8 md:py-12 lg:py-20 flex flex-col gap-6 md:gap-8 lg:gap-12 bg-[#0096C7]">
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-center text-[#FE9D02]">Get Started</h2>
      <AppParagraph otherCss="sm:w-1/2 sm:text-lg md:text-2xl mx-auto">Embark on your journey and experience the power of Clerk. Your authentication adventure starts now!</AppParagraph>
      <Link to="/sign-up" className="sm:mx-auto">
        <button className="w-full sm:w-auto text-lg md:text-2xl font-bold border-solid border-4 border-[#03045E] bg-white rounded-md shadow-lg py-2 px-6 md:px-8 lg:px-10">
          Sign Up
        </button>
      </Link>
      <p className="text-sm sm:text-base md:text-lg text-center">
        Already have an account?
        <Link to="/sign-in">
          <a className="ml-1 underline">Sign In</a>
        </Link>
      </p>
    </section>
  );
}

export default SectionTwo;


//#03045E - azul escuro
//#033E8A - azul