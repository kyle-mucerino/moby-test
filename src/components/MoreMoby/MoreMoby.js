import React from "react";
import '../MoreMoby/MoreMoby.css';
import yinYang from '../../assets/yinYang.png';

const MoreMoby = () => (
  <div className="synergy-container flex flex-col items-start sm:mx-[162.5px] sm:my-[164px] p-4">
    {/* Inner Content Container */}
    <div className="synergy-content-container flex flex-col items-center">
      {/* Header */}
      <h1 className="text-[48px] sm:text-[164px] synergy-header text-left leading-[54px] sm:leading-[172px]">
        Introducing Moby Synergy™
      </h1>

      {/* Subheader */}
      <p className="text-[36px] sm:text-[64px] text-left synergy-subheader-1 inter-semibold">
        Moby Shot™ <i> plus </i> Moby Wave™ <i> equals </i>
        <span-2> More Moby™ </span-2>
      </p>
      {/* Image */}
      <img
        src={yinYang}
        alt="Whale Yin Yang"
        className="sm:w-[799.7px] sm:h-[905px]"
      />
    </div>
    <p className="text-[20px] sm:text-[48px] synergy-subheader-2 text-left inter-semibold">
      By combining the
      <span> Moby Shot™ </span>
      and the
      <span> Moby Wave™ </span>
      we offer patients the potential for more
      <span> dramatic results.</span>
    </p>

    {/* CTA Buttons Container */}
    <div className="more-cta flex flex-row mt-[36px] sm:mt-[116px] inter-semibold">
      <button className="bg-sierra-blue rounded-full text-white learn-more">
        Learn More
      </button>
      <button className="text-sierra-blue border-2 border-blue-600 rounded-full ml-[36.25px] p-4 book">
        Book
      </button>
    </div>
  </div>
);

export default MoreMoby;