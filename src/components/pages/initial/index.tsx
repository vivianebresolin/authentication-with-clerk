import { Link } from "react-router-dom";
import Wrapper from "../../wrapper";
import AppParagraph from "../../AppParagraph";

export default function Initial() {
  return (
    <Wrapper>
      <div className="w-5/6 lg:w-3/4 xl:w-2/3 mx-auto">
        <h1 className="text-5xl lg:text-6xl font-bold text-center mb-5">Authentication with Clerk</h1>
        <AppParagraph otherCss="text-lg lg:text-xl">This is a simple web page that integrates authentication using Clerk and React.</AppParagraph>
        <div className="mt-10 md:mt-12 border-2 border-white rounded-md py-4 px-6">
          <AppParagraph otherCss="font-bold text-xl">How it works:</AppParagraph>
          <ul className="list-disc text-lg mt-2">
            <li>When you click the button 'Sign Up', you'll be redirect to Sign Up page. After login with a GitHub or Gmail account, you'll have access to the Home page.</li>
            <li className="mt-2">When you click the link 'Sign In', you'll be redirect to Sign In page. After login with a GitHub or Gmail account, you'll have access to the Home page. It is possible to use an e-mail and choose a password to sign in as well.</li>
          </ul>
          <div className="flex flex-col items-center">
            <Link to="/sign-up">
              <button className="bg-[#103FEF] py-2 px-4 mt-12 rounded-md text-2xl">Sign Up</button>
            </Link>
              <p className="mt-3 text-sm">
                Already have an account?
                <Link to="/sign-in">
                  <a className="ml-1 underline">Sign In</a>
                </Link>
              </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}