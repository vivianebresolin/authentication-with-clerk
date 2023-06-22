import lockImg from "../../../../../assets/lock.png"

export default function Header() {
  return(
    <header className="bg-[#0077B6] pt-6 pb-4 px-4 md:pb-12 lg:py-24 flex flex-col items-center gap-8 lg:gap-16 w-full">
      <img src={lockImg} alt="A lock" className="w-14 lg:w-20"/>
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center text-white">Authentication<br/>with Clerk</h1>
      <button className="w-full sm:w-auto bg-black rounded-md shadow py-2 px-4">
        <a href="https://clerk.com/"target="_blank" className="text-white text-sm sm:text-base">Learn more about Clerk</a>
      </button>
    </header>
  );
}