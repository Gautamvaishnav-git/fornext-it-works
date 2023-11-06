import Hero from "@/components/home/hero";
import How from "@/components/home/how";
import Why from "@/components/home/why";

export default function Home() {
  return (
    <section className="pt-8 max-w-7xl mx-auto">
      <div className="md:h-screen md:px-0 px-2">
        <Hero />
      </div>
      <div className="md:h-screen flex flex-col justify-center md:px-0 px-3">
        <Why />
      </div>
      <div className="md:h-screen flex flex-col justify-center md:px-0 px-3">
        <How />
      </div>
    </section>
  );
}
