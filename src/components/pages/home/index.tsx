import { useUser, UserButton } from "@clerk/clerk-react";

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <>
      <UserButton/>
      <div>Hello, {user.firstName}! Welcome!!</div>
    </>
  );
}