import React from "react";
import '../MobyMax/MobyMax.css';

const MobyMax = () => (
  <>
    <div className="max hidden sm:flex">
      <h1 className="relative moby-max-header inter-semibold text-[48px] sm:text-[164px] ml-[164px]">
        Moby Max™
      </h1>
    </div>
    <div class="moby-max">
      <h1 className="relative moby-max-header inter-semibold text-[48px] sm:hidden flex ml-[22px] text-left">
        Moby Max™
      </h1>
      <h2 className="moby-max-subheader-1 inter-semibold ">
        Because <span>size</span> does matter..
      </h2>
      <h2 className="moby-max-subheader-2 inter-semibold">
        Because <span>bigger</span> is better
      </h2>
    </div>
    <div className="flex flex-col text-left text-[20px] sm:text-[48px] sm:mt-[112px] inter-semibold moby-max-subheader sm:mx-[164.5px] p-8">
      <p>
        Experience the thrill of more
        <span> girth </span>
        and deliver more
        <span> sexual satisfaction </span>
        with Moby Max™. This procedure, performed by a specialist, involves the
        <span> precise injection </span>
        of a<span> state-of-the-art filler </span>
        into the erectile tissues. The enhancements from Moby Max™ are
        <span> long-lasting</span>
        —however, a follow-up procedure will eventually be necessary to
        <span> maintain your gains. </span>
      </p>
      <div className="max-cta flex flex-row mt-[40px] sm:mt-[116px]">
        <button className="bg-sierra-blue rounded-full text-white learn-more">
          Learn More
        </button>
        <button className="text-sierra-blue border-2 border-blue-600 rounded-full ml-[36.25px] p-4 book">
          Book
        </button>
      </div>
    </div>
  </>
);

export default MobyMax;