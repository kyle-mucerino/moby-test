import React from "react";
import prp from "../assets/prp.png";

const MobyShotSection = () => (
  <div className="moby-shot flex flex-col items-start mx-[156.44px] my-[164px] inter-semibold">
    <div className="frame-114 flex flex-col items-start gap-[50px]">
      <div className="header-group text-left">
        <h2 className="header-gradient font-semibold inter-semibold mb-[42px]">
          Moby Shot™
        </h2>
        <p className="subheader text-[64px] inter-semibold">
          Revitalize your erections with Hyper PRP™ growth factors.
        </p>
      </div>
      <div className="image-container w-full h-[965.07px] overflow-hidden">
        <img src={prp} alt="Prp Tube" className="w-full h-full object-cover" />
      </div>
      <div className="rich-text leading-relaxed inter-semibold text-[48px]">
        <p>
          Hyper PRP™ is derived from your own blood and contains an abundance of
          growth factors.
        </p>
      </div>
    </div>
    {/* Benefits Grid would go here */}
  </div>
);

export default MobyShotSection;
