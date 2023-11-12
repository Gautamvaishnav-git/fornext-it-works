import React from "react";
import projects from "./categories.json";
import Card from "./card";
import { cn } from "@/lib/utils";

const Showcase = () => {
  return (
    <div className="pb-10 pt-20 max-w-7xl mx-auto">
      {projects.map((category, i) => (
        <div key={category.category} className="pb-10">
          <h2 className={cn("text-4xl font-extrabold text-center pb-10")}>
            {category.category}
          </h2>
          <div className="flex gap-10 flex-wrap md:justify-start justify-center">
            {category.projects.map((project) => (
              <Card
                title={project.title}
                description={project.description}
                key={project.title}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Showcase;
