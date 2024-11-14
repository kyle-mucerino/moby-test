import React from "react";
import '../MobyWomen/MobyWomen.css';
import tail2 from '../../assets/tail2.png';

const MobyWomen = () => (
  <>
    <div className="flex flex-col moby-women text-left mx-[2.344rem] sm:mx-[11.549rem] justify-center items-start">
      <div className="header sm:h-[34.188rem] sm:mt-[10.25rem] h-[15.438rem] w-[20.875rem] sm:w-[53.188rem] space-y-4">
        <h1 className="text-[3rem] sm:text-[10.25rem] leading-[3.375rem] sm:leading-[10.75rem]">
          Moby™ <br></br>for Women
        </h1>
        <p className="text-[2.25rem] sm:text-[4rem] sm:mt-[3.688rem] leading-[2.5rem] sm:leading-[4.5rem]">
          Because her sexual health matters too.
        </p>
      </div>
      <div className="flex flex-col items-center justify-start">
        <img src={tail2} alt="Whale" className="object-cover" />
        <div className="women-cta flex flex-row mt-[3rem] sm:mt-[6rem]">
          <button className="bg-learn-blue rounded-full text-white learn-more-women inter-semibold">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </>
);
export default MobyWomen;
