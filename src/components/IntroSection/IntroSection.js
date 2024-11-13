import React from "react";
import '../../components/IntroSection/introSection.css';

const IntroSection = () => (
  <div className="relative z-10 flex flex-col lg:flex-row text-center lg:text-left sm:text-black max-[400px]:justify-between sm:space-x-32 intro-section">
    {/* h1 at the start of the section */}
    <h1 className="text-7xl sm:text-[200px] inter-semibold uppercase mt-4 lg:mt-0 lg:ml-4">
      Moby™
    </h1>

    {/* Spacer for mobile to push h2 to the end */}
    <div className="flex-grow lg:hidden"></div>

    {/* Mobile text */}
    <h2 className="text-[20px] sm:text-[172px] inter-semibold mb-4 lg:mb-0 lg:hidden mobile">
      Non-surgical medical services for enhanced sexual health
    </h2>

    {/* Desktop text */}
    <h2 className="text-[32px] sm:text-[36px] inter-semibold hidden lg:block lg:mr-4 desktop w-[390px]">
      Non-surgical medical services for enhanced sexual health
    </h2>
  </div>
);

export default IntroSection;
