import React from "react";
import prp from "../../assets/prp.png";
import '../MobyShot/MobyShot.css';
import leaves from "../../assets/Vector.png";
import faucet from "../../assets/Vector2.png";
import grid3 from "../../assets/GroupClock.png";
import hammer from "../../assets/Vector5.png";
import sex1 from "../../assets/Group.png";
import expandingArrows from "../../assets/expanding-arrows.png";

const MobyShotSection = () => (
  <div className="moby-shot flex flex-col items-start sm:mx-[156.44px] sm:my-[164px] inter-semibold p-4">
    <div className="frame-114 flex flex-col items-start max-[400px]:p-4">
      <div className="header-group text-left mb-4">
        <h2 className="header-gradient inter-semibold sm:mb-[42px] text-[72px] sm:text-[164px]">
          Moby Shot™
        </h2>
        <p className="text-[36px] sm:text-[64px] inter-semibold">
          Revitalize your erections with Hyper PRP™ growth factors.
        </p>
      </div>
      <div className="image-container w-full overflow-hidden">
        <img src={prp} alt="Prp Tube" className="w-full h-full object-cover" />
      </div>
      <div className="rich-text leading-relaxed inter-semibold text-[24px] sm:text-[48px] text-left">
        <p>
          Hyper PRP™ is derived from your own blood and contains an abundance of
          growth factors.
        </p>
      </div>
    </div>
    {/* Benefits Grid would go here */}
    <div className="benefits max-[400px]:p-4">
      {/* Benefits Subheader */}
      <h3 className="benefits-subheader text-left text-[24px] sm:text-[48px] sm:mb-[92px]">
        The growth factors in Hyper PRP™
        <span className="hidden sm:inline">
          {" "}
          <br />
        </span>
        helps you:
      </h3>

      {/* Benefits Grid */}
      <div
        className="sm:grid grid-cols-3 grid-rows-2 gap-8 hidden"
        style={{ height: "728.79px" }}
      >
        {/* Grid Item 1 */}
        <div className="grid-1 flex flex-col items-center justify-center bg-gray-200 rounded-lg p-8 shadow-md">
          <img src={leaves} alt="Benefit 1" className="mb-4" />
          <p className="text-center font-medium">
            Grow new <br></br> blood vessels
          </p>
        </div>

        {/* Grid Item 2 */}
        <div className="grid-2 flex flex-col items-center justify-center bg-gray-200 rounded-lg p-8 shadow-md">
          <img src={faucet} alt="Faucet with water flowing" className="mb-4" />
          <p className="text-center font-medium">Increase blood flow</p>
        </div>

        {/* Grid Item 3 */}
        <div className="grid-3 flex flex-col items-center justify-center bg-gray-200 rounded-lg p-8 shadow-md">
          <img src={grid3} alt="Clock" className="mb-4" />
          <p className="text-center font-medium">
            Heal and restore targeted tissue
          </p>
        </div>

        {/* Grid Item 4 */}
        <div className="grid-4 flex flex-col items-center justify-center bg-gray-200 rounded-lg p-8 shadow-md">
          <img src={hammer} alt="hammer" className="mb-4" />
          <p className="text-center font-medium">Get harder erections</p>
        </div>

        {/* Grid Item 5 */}
        <div className="grid-5 relative flex items-center justify-center bg-gray-200 rounded-lg p-8 shadow-md">
          {/* Image */}
          <img src={expandingArrows} alt="Expanding arrows" className="" />

          {/* Overlay Text */}
          <p className="absolute text-center">
            Grow new nerves for heightened sensations
          </p>
        </div>

        {/* Grid Item 6 */}
        <div className="grid-6 flex flex-col items-center justify-center bg-gray-200 rounded-lg p-8 shadow-md">
          <img src={sex1} alt="Benefit 6" className="mb-4" />
          <p className="text-center font-medium">
            Experience more intense intimacy
          </p>
        </div>
      </div>
    </div>

    {/* Mobile Grid */}
    <div className="grid grid-cols-2 gap-4 sm:hidden p-4">
      {/* Grid Item 1 */}
      <div className="mobile-grid-item bg-gray-200 flex flex-col items-center justify-center shadow-md p-4">
        <img src={leaves} alt="Benefit 1" className="benefit-img mb-2" />
        <p className="text-center font-medium text-[16px]">
          Grow new blood vessels
        </p>
      </div>
      {/* Grid Item 2 */}
      <div className="mobile-grid-item bg-gray-200 flex flex-col items-center justify-center shadow-md p-4">
        <img
          src={faucet}
          alt="Faucet with water flowing"
          className="benefit-img mb-2"
        />
        <p className="text-center font-medium text-[16px]">
          Increase blood flow
        </p>
      </div>
      <div className="mobile-grid-item bg-gray-200 flex flex-col items-center justify-center shadow-md p-4">
        <img
          src={grid3}
          alt="Faucet with water flowing"
          className="benefit-img mb-2"
        />
        <p className="text-center font-medium text-[16px]">
          Heal and restore targeted tissue
        </p>
      </div>
      <div className="mobile-grid-item bg-gray-200 flex flex-col items-center justify-center shadow-md p-4">
        <img
          src={hammer}
          alt="Faucet with water flowing"
          className="benefit-img mb-2"
        />
        <p className="text-center font-medium text-[16px]">
          Get harder erections
        </p>
      </div>
      {/* Grid Item 5 */}
      <div className="mobile-grid-item relative flex items-center justify-center bg-gray-200 shadow-md">
        {/* Image */}
        <img src={expandingArrows} alt="Expanding arrows" className="" />

        {/* Overlay Text */}
        <p className="absolute text-center text-[16px]">
          Grow new nerves for heightened sensations
        </p>
      </div>
      <div className="mobile-grid-item bg-gray-200 flex flex-col items-center justify-center shadow-md p-4">
        <img
          src={sex1}
          alt="Faucet with water flowing"
          className="benefit-img mb-2"
        />
        <p className="text-center font-medium text-[16px]">
          Increase blood flow
        </p>
      </div>
    </div>
    <div className="benefits-bottom-cta flex flex-col text-left sm:mt-[116px] p-4">
      <p className="benefits-bottom text-[20px] sm:text-[48px]">
        Each <span> Moby Shot™ </span>
        procedure takes about <span> 60 minutes </span>
        to complete. Patients often report more
        <span>noticeable results with two procedures.</span>
      </p>
      <div className="benefits-cta flex flex-row">
        <button className="bg-sierra-blue rounded-full text-white learn-more">
          Learn More
        </button>
        <button className="text-sierra-blue border-2 border-blue-600 rounded-full ml-[36.25px] p-4 book">
          Book
        </button>
      </div>
    </div>
  </div>
);

export default MobyShotSection;
