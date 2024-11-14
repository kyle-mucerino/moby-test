import React from "react";
import '../MobyTales/MobyTales.css';
import cards from "../../assets/tale-cards.png";
import plus from '../../assets/plus.png';
import plusMobile from '../../assets/plus-mobile.png';

const MobyTales = () => (
  <>
    <div className="flex flex-col tales justify-center items-center text-center sm:mb-[164px]">
      <h1 className="text-[48px] sm:text-[164px] inter-semibold mt-[56px]">
        Moby™ Tales
      </h1>
      <p className="text-[20px] leading-[26px] sm:text-[64px] sm:leading-[73.63px] inter-semibold max-[800px]:my-[24px] sm:w-[945.82px]">
        Stories of renewed confidence, performance, and pleasure
      </p>
      <div className="sm:h-[538.39px] sm:mt-[135.93px] mb-[24px]">
        <img src={cards} alt="Cards" className="" />
      </div>
      <button className="text-white text-[12px] sm:text-[33.98px] sm:leading-[39.28px] flex items-center my-[24px]">
        Learn More About Success Stories
        <img src={plus} alt="plus icon" className="hidden sm:flex" />
        <img src={plusMobile} alt="plus icon" className="flex sm:hidden" />
      </button>
    </div>
  </>
);

export default MobyTales;