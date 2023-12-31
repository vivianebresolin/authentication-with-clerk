import Footer from "../../footer";
import Header from "./components/header";
import SectionOne from "./components/sectionOne";
import SectionThree from "./components/sectionThree";
import SectionTwo from "./components/sectionTwo";
import Spacer from "./components/spacer";

export default function Initial() {
  return (
    <>
      <Header/>
      <main>
        <SectionOne/>
        <SectionTwo/>
        <Spacer/>
        <SectionThree/>
      </main>
      <Footer/>
    </>
  );
}