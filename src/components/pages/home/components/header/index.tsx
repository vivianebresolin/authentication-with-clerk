import lockImg from "../../../../../assets/lock.png"

export default function Header() {
  return(
    <header className="bg-[#0077B6] pt-6 pb-4 px-4 flex flex-col items-center gap-8 w-full">
      <img src={lockImg} alt="A lock" className="w-14"/>
      <h1 className="text-4xl sm:text-5xl text-center">Authentication<br/>with Clerk</h1>
      <button className="w-full sm:w-auto bg-black rounded-md shadow py-2 px-4 text-sm">
        <a href="https://clerk.com/"target="_blank">Learn more about Clerk</a>
      </button>
    </header>
  );
}