import Wrapper from "../../wrapper";
import Header from "./components/header";
import SectionOne from "./components/sectionOne";

export default function Initial() {
  return (
    <Wrapper>
      <Header/>
      <main className="px-4">
        <SectionOne/>
      </main>
    </Wrapper>
  );
}