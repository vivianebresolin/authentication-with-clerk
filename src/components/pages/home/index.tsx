import { useUser, UserButton } from "@clerk/clerk-react";

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <>
      <UserButton/>
      <div className="text-black">Hello, {user.firstName || "visitor"}! Welcome!!</div>
    </>
  );
}