import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";

const How = () => {
  return (
    <div>
      <h1 className="text-5xl text-center font-extrabold md:pb-8 md:pt-0 pt-28">How ?</h1>
      <div className="md:max-w-6xl mx-auto max-w-xl">
        <Card
          title={
            <>
              <span className="text-theme">
                Support &nbsp;
              </span>
              for your business
            </>
          }
          description="We are a team of experts who can help you grow your business. We are a team of experts who can help you grow your business. We are a team of experts who can help you grow your business. We are a team of experts who can help you grow your business."
        />
        <Card
          title={
            <>
              <span className="text-amber-500">
                rapid
              </span>{" "}
              development and deployment
            </>
          }
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quos, voluptatibus, quibusdam quia quae quod voluptates laborum voluptate nemo sint. Quisquam voluptatum, quos, voluptatibus, quibusdam quia quae quod voluptates laborum voluptate nemo sint."
          className="md:flex-row-reverse md:pt-32 pt-20"
        />
      </div>
    </div>
  );
};

interface HowCardProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  className?: ClassValue;
  titleClassName?: ClassValue;
  descriptionClassName?: ClassValue;
}

function Card(props: HowCardProps) {
  return (
    <div className={cn("flex pt-2 justify-between gap-6 items-center md:flex-row flex-col", props.className)}>
      <h1
        className={cn("w-full md:text-6xl text-4xl font-extrabold", props.titleClassName)}
      >
        {props.title}
      </h1>
      <p className={cn("w-full leading-7", props.descriptionClassName)}>
        {props.description}
      </p>
    </div>
  );
}

export default How;
