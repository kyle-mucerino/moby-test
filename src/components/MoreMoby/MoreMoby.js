import React from "react";
import '../MoreMoby/MoreMoby.css';
import yinYang from '../../assets/yinYang.png';

const MoreMoby = () => (
  <div className="synergy-container flex flex-col items-start sm:mx-[10.156rem] sm:my-[10.25rem] p-4 my-[3.875rem]">
    {/* Inner Content Container */}
    <div className="synergy-content-container flex flex-col items-center">
      {/* Header */}
      <h1 className="text-[3rem] sm:text-[10.25rem] synergy-header text-left leading-[3.375rem] sm:leading-[10.75rem] inter-semibold mb-[2.25rem] sm:mb-[5.25rem]">
        Introducing Moby Synergy™
      </h1>

      {/* Subheader */}
      <p className="text-[2.25rem] sm:text-[4rem] text-left synergy-subheader-1 inter-semibold leading-[2.5rem] sm:leading-[5.25rem]">
        Moby Shot™ <i> plus </i> Moby Wave™ <i> equals </i>
        <span-2> More Moby™ </span-2>
      </p>
      {/* Image */}
      <img
        src={yinYang}
        alt="Whale Yin Yang"
        className="sm:w-[49.981rem] sm:h-[56.563rem]"
      />
    </div>
    <p className="text-[1.25rem] sm:text-[3rem] synergy-subheader-2 text-left inter-semibold">
      By combining the
      <span> Moby Shot™ </span>
      and the
      <span> Moby Wave™ </span>
      we offer patients the potential for more
      <span> dramatic results.</span>
    </p>

    {/* CTA Buttons Container */}
    <div className="more-cta flex flex-row mt-[2.25rem] sm:mt-[7.25rem] inter-semibold  max-[800px]:mb-[2.125rem]">
      <button className="bg-sierra-blue rounded-full text-white learn-more">
        Learn More
      </button>
      <button className="text-sierra-blue border-2 border-blue-600 rounded-full ml-[2.266rem] p-4 book">
        Book
      </button>
    </div>
  </div>
);

export default MoreMoby;