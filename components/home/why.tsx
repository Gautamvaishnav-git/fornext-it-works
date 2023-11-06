import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";
import React from "react";

const Why = () => {
  return (
    <section className="md:py-8 pt-20">
      <h1 className="text-5xl font-extrabold text-center pb-8">Why we?</h1>
      <div className="md:max-w-6xl mx-auto max-w-xl">
        <Card
          title={
            <>
              <span className="text-theme"> grow </span>
              your Business with us
            </>
          }
          description="We are a team of experts who can help you grow your business. We are a team of experts who can help you grow your business. We are a team of experts who can help you grow your business. We are a team of experts who can help you grow your business."
          className="md:flex-row flex-col"
        />
        <Card
          title={
            <>
              <span className="text-amber-500"> fast </span>
              and
              <span className="text-amber-500">
                {" "}
                reliable{" "}
              </span>
              service
            </>
          }
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quos, voluptatibus, quibusdam quia quae quod voluptates laborum voluptate nemo sint. Quisquam voluptatum, quos, voluptatibus, quibusdam quia quae quod voluptates laborum voluptate nemo sint."
          className="md:flex-row-reverse md:pt-32 pt-20"
        />
      </div>
    </section>
  );
};

function Card({
  title,
  description,
  className,
  ...props
}: {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  className?: ClassValue;
  titleClassName?: ClassValue;
  descriptionClassName?: ClassValue;
}) {
  return (
    <div className={cn("flex items-center justify-between gap-4 md:flex-row flex-col", className)}>
      <h2
        className={cn("w-full md:text-6xl text-4xl font-extrabold", props.titleClassName)}
      >
        {title}
      </h2>
      <p className={cn("w-full leading-7", props.descriptionClassName)}>
        {description}
      </p>
    </div>
  );
}

export default Why;
