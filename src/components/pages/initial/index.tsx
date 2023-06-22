import Wrapper from "../../wrapper";
import Header from "./components/header";
import SectionOne from "./components/sectionOne";
import SectionTwo from "./components/sectionTwo";

export default function Initial() {
  return (
    <Wrapper>
      <Header/>
      <main>
        <SectionOne/>
        <SectionTwo/>
      </main>
    </Wrapper>
  );
}