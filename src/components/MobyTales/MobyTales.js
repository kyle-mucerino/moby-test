import React from "react";
import '../MobyTales/MobyTales.css';
import cards from "../../assets/tale-cards.png";
import plus from '../../assets/plus.png';
import plusMobile from '../../assets/plus-mobile.png';

const MobyTales = () => (
  <>
    <div className="flex flex-col tales justify-center items-center text-center sm:mb-[10.25rem]">
      <h1 className="text-[3rem] sm:text-[10.25rem] inter-semibold mt-[3.5rem]">
        Moby™ Tales
      </h1>
      <p className="text-[1.25rem] leading-[1.625rem] sm:text-[4rem] sm:leading-[4.602rem] inter-semibold max-[800px]:my-[1.5rem] sm:w-[59.114rem]">
        Stories of renewed confidence, performance, and pleasure
      </p>
      <div className="sm:h-[33.649rem] sm:mt-[8.496rem] mb-[1.5rem]">
        <img src={cards} alt="Cards" className="" />
      </div>
      <button className="text-white text-[0.75rem] sm:text-[2.124rem] sm:leading-[2.455rem] flex items-center my-[1.5rem]">
        Learn More About Success Stories
        <img src={plus} alt="plus icon" className="hidden sm:flex" />
        <img src={plusMobile} alt="plus icon" className="flex sm:hidden" />
      </button>
    </div>
  </>
);

export default MobyTales;