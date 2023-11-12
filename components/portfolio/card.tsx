import React from "react";

interface Props {
  title: string;
  description: string;
}

const Card: React.FC<Props> = ({ description, title }) => {
  return (
    <div className="bg-primary-foreground/30 shadow-lg border max-w-sm p-10 rounded-lg hover:bg-primary hover:text-primary-foreground duration-300">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm pt-4 leading-6">{description}</p>
    </div>
  );
};

export default Card;
