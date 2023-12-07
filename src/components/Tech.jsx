import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <h1 className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">{technology.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");