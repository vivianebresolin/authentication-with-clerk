import { Link } from "react-router-dom";
import AppParagraph from "../../../../appParagraph";

function SectionTwo() {
  return ( 
    <section className="px-4 py-8 flex flex-col gap-6 bg-[#0096C7]">
      <h2 className="text-2xl text-center text-[#FE9D02]">Get Started</h2>
      <AppParagraph>Embark on your journey and experience the power of Clerk. Your authentication adventure starts now!</AppParagraph>
      <Link to="/sign-up">
        <button className="w-full sm:w-auto bg-white rounded-md shadow py-2 px-4">
          Sign Up
        </button>
      </Link>
      <p className="text-sm text-center">
        Already have an account?
        <Link to="/sign-in">
          <a className="ml-1 underline">Sign In</a>
        </Link>
      </p>
    </section>
  );
}

export default SectionTwo;