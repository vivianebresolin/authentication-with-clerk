import Card from "../card";


export default function SectionOne() {
  return(
    <section className="py-12 px-4 md:px-10 lg:py-20 flex flex-col gap-8 lg:gap-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">How does it work</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <Card text="This is a student's seamless integration of Clerk with React and TailwindCss."/>
        <Card css="md:mt-12" text="Effortlessly sign up with your trusted Gmail or GitHub account and gain access to the wonders of our Home page."/>
        <Card css="md:mt-24" text="Already possess an account? Don't fret! Simply pursue the Sign In link to access the domain of authorized delight."/>
      </div>
    </section>
  );
}