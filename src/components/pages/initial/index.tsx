import Wrapper from "../../wrapper";
import Header from "./components/header";
import SectionOne from "./components/sectionOne";
import SectionTwo from "./components/sectionTwo";
import Spacer from "./components/spacer";

export default function Initial() {
  return (
    <Wrapper>
      <Header/>
      <main>
        <SectionOne/>
        <SectionTwo/>
        <Spacer/>
      </main>
    </Wrapper>
  );
}