import React from "react";
import '../MobyWave/MobyWave.css';
import leaves from "../../assets/Vector.png";
import faucet from "../../assets/Vector2.png";
import hammer from "../../assets/Vector5.png";
import sex1 from "../../assets/Group.png";
import contractingArrows from "../../assets/contractingArrows.png";
import Banana from "../../assets/Banana.svg";
import tissue from "../../assets/tissue.svg";
import repair from "../../assets/Repair.png";
import growth from "../../assets/growth.png";


const MobyWave = () => (
  <>
    <div className="moby-wave max-h-screen my-[1.5rem]">
      <div className="flex flex-col text-left sm:items-center sm:text-center justify-between h-full p-4">
        {/* h1 at the start of the section */}
        <h1 className="text-7xl sm:text-[10.75rem] inter-semibold">
          Moby™ Wave
        </h1>

        {/* Spacer div to push h2 to the bottom */}
        <div className="flex-grow"></div>

        {/* Mobile text */}
        <h2 className="text-[2.25rem] sm:text-[4rem] inter-semibold lg:hidden mobile mt-auto">
          Next Gen Shockwave Therapy for More Intense Intimacy.
        </h2>

        {/* Desktop text */}
        <h2 className="text-[2.25rem] sm:text-[4rem] inter-semibold hidden lg:block desktop mt-auto sm:w-[67.688rem]">
          Next Gen Shockwave Therapy for More Intense Intimacy.
        </h2>
      </div>
    </div>
    {/* Benefits Grid would go here */}
    <div className="benefits max-[800px]:p-4 sm:mx-[9.778rem] sm:my-[10.25rem]">
      {/* Benefits Subheader */}
      <h3 className="benefits-subheader text-left text-[1.5rem] sm:text-[3rem] sm:mb-[5.75rem] inter-semibold">
        Moby Wave helps you:
      </h3>

      {/* Benefits Grid */}
      <div className="sm:grid grid-cols-3 grid-rows-2 gap-8 hidden">
        {/* Grid Item 1 */}
        <div className="grid-1 flex flex-col items-center justify-center bg-gray-200 rounded-lg p-8 shadow-md">
          <img src={growth} alt="Benefit 1" className="mb-4" />
          <p className="text-center inter-semibold">
            Release <br></br> growth factors
          </p>
        </div>

        {/* Grid Item 2 */}
        <div className="grid-2 flex flex-col items-center justify-center bg-gray-200 rounded-lg p-8 shadow-md">
          <img src={repair} alt="Wrench and screwdriver" className="mb-4" />
          <p className="text-center inter-semibold">
            Repairs aged blood vessels
          </p>
        </div>

        {/* Grid Item 3 */}
        <div className="grid-3 flex flex-col items-center justify-center bg-gray-200 rounded-lg p-8 shadow-md">
          <img src={leaves} alt="Leaves" className="mb-4" />
          <p className="text-center inter-semibold">Grow new blood vessels</p>
        </div>

        {/* Grid Item 4 */}
        <div className="grid-4 flex flex-col items-center justify-center bg-gray-200 rounded-lg p-8 shadow-md">
          <img src={faucet} alt="faucet with running water" className="mb-4" />
          <p className="text-center inter-semibold">Increase blood flow</p>
        </div>

        {/* Grid Item 5 */}
        <div className="grid-6 flex flex-col items-center justify-center bg-gray-200 rounded-lg p-8 shadow-md">
          <img src={hammer} alt="Benefit 6" className="mb-4" />
          <p className="text-center inter-semibold">Get harder erections</p>
        </div>
        {/* Grid Item 6 */}
        <div className="grid-6 flex flex-col items-center justify-center bg-gray-200 rounded-lg p-8 shadow-md">
          <img src={tissue} alt="Benefit 6" className="mb-4" />
          <p className="text-center inter-semibold">Regenerate nerve tissues</p>
        </div>
        {/* Grid Item 7 */}
        <div className="grid-6 flex flex-col items-center justify-center bg-gray-200 rounded-lg p-8 shadow-md">
          <img src={sex1} alt="Benefit 6" className="mb-4" />
          <p className="text-center inter-semibold">
            Experience more intense intimacy
          </p>
        </div>
        {/* Grid Item 8 */}
        <div className="grid-5 relative flex items-center justify-center bg-gray-200 rounded-lg p-8 shadow-md">
          {/* Image */}
          <img src={contractingArrows} alt="Contracting arrows" className="" />

          {/* Overlay Text */}
          <p className="absolute text-center inter-semibold">
            Reduce<br></br> scar tissue associated with Peyronie's <br></br>{" "}
            Disease
          </p>
        </div>
        {/* Grid Item 9 */}
        <div className="grid-6 flex flex-col items-center justify-center bg-gray-200 rounded-lg p-8 shadow-md">
          <img src={Banana} alt="banana" className="mb-4" />
          <p className="text-center inter-semibold">
            Decrease penile curvature and pain (Peyronie’s)
          </p>
        </div>
      </div>
    </div>
    {/* Mobile Grid */}
    <div className="grid grid-cols-2 gap-4 sm:hidden p-4">
      {/* Grid Item 1 */}
      <div className="mobile-grid-item bg-gray-200 flex flex-col items-center justify-center shadow-md p-4">
        <img src={growth} alt="Benefit 1" className="benefit-img mb-2" />
        <p className="text-center inter-semibold  text-[1rem]">
          Release growth factors
        </p>
      </div>
      {/* Grid Item 2 */}
      <div className="mobile-grid-item bg-gray-200 flex flex-col items-center justify-center shadow-md p-4">
        <img
          src={repair}
          alt="Faucet with water flowing"
          className="benefit-img mb-2"
        />
        <p className="text-center inter-semibold  text-[1rem]">
          Repairs aged blood vessels
        </p>
      </div>
      <div className="mobile-grid-item bg-gray-200 flex flex-col items-center justify-center shadow-md p-4">
        <img
          src={leaves}
          alt="Faucet with water flowing"
          className="benefit-img mb-2"
        />
        <p className="text-center inter-semibold  text-[1rem]">
          Grow new blood vessels
        </p>
      </div>
      <div className="mobile-grid-item bg-gray-200 flex flex-col items-center justify-center shadow-md p-4">
        <img
          src={faucet}
          alt="Faucet with water flowing"
          className="benefit-img mb-2"
        />
        <p className="text-center inter-semibold  text-[1rem]">
          Increase blood flow
        </p>
      </div>
      {/* Grid Item 5 */}
      <div className="mobile-grid-item bg-gray-200 flex flex-col items-center justify-center shadow-md p-4">
        <img
          src={hammer}
          alt="Faucet with water flowing"
          className="benefit-img mb-2"
        />
        <p className="text-center inter-semibold text-[1rem]">
          Get harder erections
        </p>
      </div>
      <div className="mobile-grid-item bg-gray-200 flex flex-col items-center justify-center shadow-md p-4">
        <img
          src={tissue}
          alt="Faucet with water flowing"
          className="benefit-img mb-2"
        />
        <p className="text-center inter-semibold text-[1rem]">
          Regenerative nerve tissues
        </p>
      </div>
      <div className="mobile-grid-item relative flex items-center justify-center bg-gray-200 shadow-md">
        {/* Image */}
        <img src={contractingArrows} alt="Expanding arrows" className="p-2" />

        {/* Overlay Text */}
        <p className="absolute text-center inter-semibold text-[1rem] p-2">
          Reduce<br></br> scar tissue associated with Peyronie's <br></br>{" "}
          Disease
        </p>
      </div>
      <div className="mobile-grid-item bg-gray-200 flex flex-col items-center justify-center shadow-md p-4">
        <img
          src={Banana}
          alt="Faucet with water flowing"
          className="benefit-img mb-2"
        />
        <p className="text-center inter-semibold text-[1rem]">
          Decrease penile curvature and pain (Peyroine's)
        </p>
      </div>
    </div>
    <div className="wave-grid-bottom sm:mt-[10.25rem] sm:mb-[5.75rem] w-[20.375rem] sm:w-[65.938rem] inter-semibold text-[1.25rem] sm:text-[3rem] text-left p-4 max-[800px]:p-4 sm:mx-[9.778rem] sm:my-[10.25rem]">
      Each Moby Wave™ procedure lasts about
      <span> 10-20 minutes</span> and
      <span> at least six procedures </span>
      are typically recommended.
    </div>
    <div className="wave-cta flex flex-row max-[800px]:p-4 sm:mx-[9.778rem] sm:my-[10.25rem]">
      <button className="bg-sierra-blue rounded-full text-white learn-more">
        Learn More
      </button>
      <button className="text-sierra-blue border-2 border-blue-600 rounded-full ml-[2.266rem] p-4 book">
        Book
      </button>
    </div>
  </>
);

export default MobyWave;