import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";

const WhoWeAre = () => {
  return (
    <section>
      <h2 className="text-6xl text-center font-extrabold pt-8">Who We Are?</h2>
      <div className="pt-24 md:max-w-6xl mx-auto max-w-xl">
        <Card
          title={
            <p>
              Team of skilled <span className="text-theme">developers</span>
            </p>
          }
          description={
            <p>
              We are a team of developers who are passionate about creating We
              are a team of developers who are passionate about creating We are
              are a team of developers who are passionate about creating We are
              are a team of
            </p>
          }
        />
        {/* creative designers */}
        <Card
          title={
            <p>
              With creative <span className="text-amber-500"> Designers </span>{" "}
              Squad
            </p>
          }
          description={
            <p>
              We are a team of developers who are passionate about creating We
              are a team of developers who are passionate about creating We are
              are a team of developers who are passionate about creating We are
              are a team of
            </p>
          }
          className="md:flex-row-reverse md:pt-32 pt-20"
        />
        {/* creative designers */}
        <Card
          title={
            <p>
              Supportive <span className="text-green-500">Team</span>
            </p>
          }
          description={
            <p>
              support We are a team of developers who are passionate about
              creating We are a team of developers who are passionate about
              creating We are are a team of developers who are passionate about
            </p>
          }
          className="md:py-32 py-20"
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

export default WhoWeAre;
