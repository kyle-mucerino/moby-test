import React from "react";
import '../MobyWomen/MobyWomen.css';
import tail2 from '../../assets/tail2.png';

const MobyWomen = () => (
  <>
    <div className="flex flex-col moby-women text-left mx-[37.5px] sm:mx-[184.79px] justify-center items-start">
      <div className="header sm:h-[547px] sm:mt-[164px] h-[247px] w-[334px] sm:w-[851px] space-y-4">
        <h1 className="text-[48px] sm:text-[164px] leading-[54px] sm:leading-[172px]">Moby™ <br></br>for Women</h1>
        <p className="text-[36px] sm:text-[64px] sm:mt-[59px] leading-[40px] sm:leading-[72px]">
          Because her sexual health matters too.
        </p>
      </div>
      <div className="flex flex-col items-center justify-start">
          <img src={tail2} alt="Whale" className="object-cover" />
        <div className="women-cta flex flex-row mt-[48px] sm:mt-[96px]">
          <button className="bg-learn-blue rounded-full text-white learn-more-women inter-semibold">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </>
);
export default MobyWomen;
