import { useUser, UserButton } from "@clerk/clerk-react";
import Footer from "../../footer";
import helloImg from "../../../assets/hello.png"

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <div className="h-screen flex flex-col items-center justify-between">
        <div className="p-4 w-full flex justify-end">
          <UserButton />
        </div>
        <div>
          <img src={helloImg} alt="Image of people waving hello" className="w-72 rounded-lg mb-6"/>
          <p className="text-white text-center text-2xl">Hello, {user.firstName || "visitor"}!<br/> Welcome!!</p>
        </div>
      <Footer/>
    </div>
  );
}