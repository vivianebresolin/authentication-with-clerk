import Card from "../card";


export default function SectionOne() {
  return(
    <section className="py-8 flex flex-col gap-6">
      <h2 className="text-2xl text-center">How does it work</h2>
      <Card text="This is a student's seamless integration of Clerk with React and TailwindCss."/>
      <Card text="Effortlessly sign up with your trusted Gmail or GitHub account and gain access to the wonders of our Home page."/>
      <Card text="Already possess an account? Don't fret! Simply pursue the Sign In link to access the domain of authorized delight."/>
    </section>
  );
}