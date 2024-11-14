import React from "react";
import '../Footer/Footer.css';
import footer from '../../assets/footerWhale.png';

const Footer = () => (
  <>
    <div className="footer flex flex-col">
      <div className="footer-header sm:h-[607.83px] sm:w-[1230.08px] text-left">
        <h1 className="text-[16px] sm:text-[58.93px] mb-[24px] sm:mb-[40.51px] text-white inter-semibold">
          MOBY™
        </h1>
        <div className="flex justify-between sm:h-[187.43px] sm:w-[1267.43px] text-white sm:gap-y-[20px] sm:gap-x-[106.8px]">
          {/* Column 1 */}
          <div className="grid grid-rows-3 w-[140px] gap-y-[20px]">
            <div className="grid-1-footer">
              <p className="text-[5.6px] sm:text-[20.61px] uppercase">
                Providers
              </p>
            </div>
            <div className="grid-7-footer">
              <p className="text-[5.6px] sm:text-[20.615px] uppercase">
                Locations
              </p>
            </div>
            <div className="grid-11-footer">
              <p className="text-[5.6px] sm:text-[20.615px] uppercase">
                Who we are
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="grid grid-rows-3 w-[145px] gap-y-[20px]">
            <div className="grid-2-footer">
              <p className="text-[5.6px] sm:text-[20.61px] uppercase">
                Moby™ Shot
              </p>
            </div>
            <div className="grid-8-footer">
              <p className="text-[5.6px] sm:text-[20.615px] uppercase">
                Moby™ Wave
              </p>
            </div>
            <div className="grid-12-footer">
              <p className="text-[5.6px] sm:text-[20.615px] uppercase">
                Moby™ Max
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="grid grid-rows-3 w-[185px] gap-y-[20px]">
            <div className="grid-3-footer">
              <p className="text-[5.6px] sm:text-[20.61px] uppercase">
                Moby™ Synergy
              </p>
            </div>
            <div className="grid-9-footer">
              <p className="text-[5.6px] sm:text-[20.615px] uppercase">
                Moby™ Women
              </p>
            </div>
            <div className="grid-13-footer">
              <p className="text-[5.6px] sm:text-[20.615px] uppercase">
                Our patients
              </p>
            </div>
          </div>

          {/* Column 4 */}
          <div className="grid grid-rows-3 w-[255px] gap-y-[20px]">
            <div className="grid-4-footer">
              <p className="text-[5.6px] sm:text-[20.615px] uppercase">
                Testosterone
              </p>
            </div>
            <div className="grid-10-footer">
              <p className="text-[5.6px] sm:text-[20.615px] uppercase">
                Erectile Dysfunction
              </p>
            </div>
            <div className="grid-14-footer">
              <p className="text-[5.6px] sm:text-[20.615px] uppercase">
                Medical terms
              </p>
            </div>
          </div>

          {/* Column 5 */}
          <div className="grid grid-rows-3 w-[180px] gap-y-[20px]">
            <div className="grid-5-footer">
              <p className="text-[5.6px] sm:text-[20.615px] uppercase">
                Instagram
              </p>
            </div>
            <div className="grid-6-footer">
              <p className="text-[5.6px] sm:text-[20.615px] uppercase">
                Contact Us
              </p>
            </div>
          </div>
        </div>
        <img src={footer} alt="Whale" className="sm:mt-[121.91px] mt-[36px]" />
      </div>
    </div>
  </>
);

export default Footer;