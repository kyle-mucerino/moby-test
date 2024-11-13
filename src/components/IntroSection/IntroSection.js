import React from "react";
import '../../components/IntroSection/introSection.css';

const IntroSection = () => (
  <>
    <div className="intro-section">
      <div className="flex flex-col lg:flex-row text-center lg:text-left sm:text-black sm:space-x-32 sm:ml-[154px] sm:mr-[161.1px] text-white max-[800px]:space-y-64">
        {/* h1 at the start of the section */}
        <h1 className="text-7xl sm:text-[172px] inter-semibold uppercase lg:ml-4 mt-12">
          Moby™
        </h1>

        {/* Spacer for mobile to push h2 to the end */}
        <div className="flex-grow lg:hidden"></div>

        {/* Mobile text */}
        <h2 className="text-[20px] sm:text-[172px] inter-semibold lg:hidden mobile">
          Non-surgical medical services for enhanced sexual health
        </h2>

        {/* Desktop text */}
        <h2 className="text-[20px] sm:text-[36px] inter-semibold hidden lg:block lg:mr-4 desktop w-[390px] sm:mt-12">
          Non-surgical medical services for enhanced sexual health
        </h2>
      </div>
    </div>
    <div className="flex flex-col intro-paragraph inter-semibold items-center sm:items-start mx-[28.5px] sm:mx-[162.76px] mt-[100px]">
      <p className="paragraph text-[24px] sm:text-[40px] mb-8">
        Moby™ procedures are designed to work in synergy to restore{" "}
        <span>sexual health </span>
        and boost<span> performance. </span>
        Patients who undergo these procedures typically enjoy{" "}
        <span>firmer erections </span>
        and <span>increased pleasure</span> from sexual activities.
      </p>
      <p className="paragraph text-[24px] sm:text-[40px] mb-12">
        Rediscover the thrill of intimacy
        <span>
          <i> without</i> pills or surgical implants.
        </span>
      </p>

      {/* Button */}
      <div className="button-container mb-[32px]">
        <button className="bg-sierra-blue text-white uppercase sm:text-[33.98px] sm:w-[407.04px] sm:h-[73.79px] h-[43.43px] w-[199px] text-[16px] flex text-center items-center justify-center">
          Book Now
        </button>
      </div>
    </div>
  </>
);

export default IntroSection;
