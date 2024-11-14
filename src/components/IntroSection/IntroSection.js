import React from "react";
import '../../components/IntroSection/introSection.css';

const IntroSection = () => (
  <>
    <div className="intro-section">
      <div className="flex flex-col lg:flex-row text-center lg:text-left sm:text-black sm:space-x-32 sm:ml-[9.625rem] sm:mr-[10.069rem] text-white max-[800px]:space-y-64">
        {/* h1 at the start of the section */}
        <h1 className="text-7xl sm:text-[10.75rem] inter-semibold uppercase lg:ml-4 mt-12">
          Moby™
        </h1>

        {/* Spacer for mobile to push h2 to the end */}
        <div className="flex-grow lg:hidden"></div>

        {/* Mobile text */}
        <h2 className="text-[1.25rem] sm:text-[10.75rem] inter-semibold lg:hidden mobile">
          Non-surgical medical services for enhanced sexual health
        </h2>

        {/* Desktop text */}
        <h2 className="text-[1.25rem] sm:text-[2.25rem] inter-semibold hidden lg:block lg:mr-4 desktop w-[24.375rem] sm:mt-12">
          Non-surgical medical services for enhanced sexual health
        </h2>
      </div>
    </div>
    <div className="flex flex-col intro-paragraph inter-semibold items-center sm:items-start mx-[1.781rem] sm:mx-[10.173rem] mt-[6.25rem]">
      <p className="paragraph text-[1.5rem] sm:text-[2.5rem] mb-8">
        Moby™ procedures are designed to work in synergy to restore{" "}
        <span>sexual health </span>
        and boost<span> performance. </span>
        Patients who undergo these procedures typically enjoy{" "}
        <span>firmer erections </span>
        and <span>increased pleasure</span> from sexual activities.
      </p>
      <p className="paragraph text-[1.5rem] sm:text-[2.5rem] mb-12">
        Rediscover the thrill of intimacy
        <span>
          <i> without</i> pills or surgical implants.
        </span>
      </p>

      {/* Button */}
      <div className="button-container mb-[2rem]">
        <button className="bg-sierra-blue text-white uppercase sm:text-[2.124rem] sm:w-[25.44rem] sm:h-[4.612rem] h-[2.714rem] w-[12.438rem] text-[1rem] flex text-center items-center justify-center">
          Book Now
        </button>
      </div>
    </div>
  </>
);

export default IntroSection;
