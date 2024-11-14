import React from "react";
import '../MobyMax/MobyMax.css';

const MobyMax = () => (
  <>
    <div className="max hidden sm:flex">
      <h1 className="relative moby-max-header inter-semibold text-[3rem] sm:text-[10.25rem] ml-[10.25rem]">
        Moby Max™
      </h1>
    </div>
    <div class="moby-max">
      <h1 className="relative moby-max-header inter-semibold text-[3rem] sm:hidden flex ml-[1.375rem] text-left">
        Moby Max™
      </h1>
      <h2 className="moby-max-subheader-1 inter-semibold ">
        Because <span>size</span> does matter..
      </h2>
      <h2 className="moby-max-subheader-2 inter-semibold">
        Because <span>bigger</span> is better
      </h2>
    </div>
    <div className="flex flex-col text-left text-[1.25rem] sm:text-[3rem] sm:mt-[7rem] inter-semibold moby-max-subheader sm:mx-[10.281rem] p-8">
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
      <div className="max-cta flex flex-row mt-[2.5rem] sm:mt-[7.25rem]">
        <button className="bg-sierra-blue rounded-full text-white learn-more">
          Learn More
        </button>
        <button className="text-sierra-blue border-2 border-blue-600 rounded-full ml-[2.266rem] p-4 book">
          Book
        </button>
      </div>
    </div>
  </>
);

export default MobyMax;