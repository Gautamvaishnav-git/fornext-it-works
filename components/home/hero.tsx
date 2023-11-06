import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex items-center justify-between pt-7">
      <div className="md:block hidden">
        <h2 className="text-9xl font-extrabold tracking-wide">FOR NEXT</h2>
        <h2 className="text-7xl font-extrabold pt-3">Let's Grow together !</h2>
      </div>
      <div className="md:max-w-none max-w-xl mx-auto">
        <h1 className="md:text-5xl text-2xl sm:text-4xl font-bold md:text-left text-center">
          <span className="text-green-500">Grow</span> your
          <span className="text-theme"> business </span>
          with our team of <span className="font-extrabold">experts</span>
        </h1>
        <p className="py-6 md:block hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quos, voluptatibus, quibusdam quia quae quod voluptates
          laborum voluptate nemo sint. Quisquam voluptatum, quos, voluptatibus,
          quibusdam quia quae quod voluptates laborum voluptate nemo sint.
        </p>
        <div className="flex gap-2 md:justify-normal justify-center md:pt-0 pt-6">
          <Button>Work with us!</Button>
          <Button variant={"outline"}>Join us!</Button>
        </div>
      </div>
    </section>
  );
}
