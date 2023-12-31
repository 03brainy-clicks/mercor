import React from "react";
import Cash from "./assets/Vector.svg";
import Eye from "./assets/eye.svg";
import Apple from "./assets/apple.svg";
import Playstore from "./assets/playstore.svg";
import Phone from "./assets/intro-phone-1.png";
import DownArrow from "./assets/downarrow.svg";
import Twitch from "./assets/twitch.svg";
import Twitter from "./assets/twitter.svg";
import Instagram from "./assets/intagram.svg";
import Cubes from "./assets/intro-cubes-1.png";
import Cube from "./assets/intro-cube-1.png";
import Stair from "./assets/intro-stairs-1.png";
import Pillar from "./assets/intro-pillar-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-black ">
      <div className="h-full w-full rays  flex flex-col items-center justify-between ">
        {/* navigation */}
        <div className="flex mx-auto items-center justify-between w-11/12 py-7">
          <div className="lg:block hidden">
            <img src={Cash} alt="" />
          </div>
          <ul className="lg:flex hidden gap-7 agrandir text-white text-xs   font-extrabold ">
            <li className="cursor-pointer">SIGN IN</li>
            <li className="cursor-pointer">LEGAL</li>
            <li className="cursor-pointer">LICENSE</li>
            <li className="cursor-pointer">SECURITY</li>
            <li className="cursor-pointer">CAREER</li>
            <li className="cursor-pointer">PRESS</li>
            <li className="cursor-pointer">SUPPORT</li>
            <li className="cursor-pointer">STATUS</li>
            <li className="cursor-pointer">CODEBLOG</li>
          </ul>
          <div className="lg:block hidden">
            <img src={Eye} alt="" />
          </div>
          <div className="lg:hidden">
            <button>
              <FontAwesomeIcon icon={faBars} className="text-white" size="lg" />
            </button>
          </div>
        </div>

        {/* hero  */}
        <div className="relative space-y-1 w-9/12 mx-auto justify-center h-full flex flex-col items-center">
          {/* elements  */}
          <img src={Cube} alt="" className="absolute -top-8 left-0 w-[74px]" />
          <img src={Stair} alt="" className="-top-10 right-10 absolute" />
          <img
            src={Cubes}
            alt=""
            className="absolute -bottom-16 w-[188px] -left-5"
          />{" "}
          <img src={Pillar} alt="" className="absolute -bottom-32 right-32" />
          <div className="py-14"></div>
          <h1 className="font-extrabold  tracking-tight leading-[160px] relative  text-[12.063rem] agrandir text-white text-center">
            <span> CASH </span> <br />
            <div className="absolute -top-[85px] left-[calc(50%-175px)] z-10 ">
              <img src={Phone} alt="" className="mx-auto w-[390px]" />
            </div>
            <span className="relative z-10">APP</span>
          </h1>
        </div>

        {/* footer  */}
        <div className="w-11/12 mx-auto py-7 relative ">
          <div className="w-full flex lg:flex-row flex-col  items-center">
            <div className="flex lg:w-1/2 w-full lg:justify-start justify-center gap-5 mr-auto">
              <button className="bg-black border-2 border-white flex items-center gap-5 agrandir text-xs font-extrabold -white text-white py-3 px-5 rounded-md">
                <img src={Apple} alt="" /> <div>APP STORE</div>
              </button>{" "}
              <button className="bg-black border-2 border-white flex items-center gap-5 agrandir text-xs font-extrabold -white text-white py-3 px-5 rounded-md">
                <img src={Playstore} alt="" /> <div>PLAY STORE</div>
              </button>
            </div>
            <div className="lg:w-1/2 w-full flex md:flex-row flex-col gap-5 flex-wrap items-center  text-white justify-between">
              <img src={DownArrow} alt="" width={"20px"} className="lg:order-1 order-3" />
              <div className="lg:w-3/5 w-full ml-auto lg:order-2 order-1 text-[10px] mulish">
                <p className=" ">
                  Brokerage services by Cash App Investing LLC, member FINRA /
                  SIPC. See our BrokerCheck. Investing involves risk; you may
                  lose money. Bitcoin trading offered by Cash App. Cash App
                  Investing does not trade bitcoin and Cash App is not a member
                  of FINRA or SIPC. Cash App facilitates banking services
                  through Sutton Bank and Lincoln Savings Bank, Members FDIC.
                </p>
              </div>
              <div className="flex gap-9 items-center order-2">
                <img src={Twitch} alt="" className="w-[24px]" />
                <img src={Twitter} alt="" className="w-[21px]" />
                <img src={Instagram} alt="" className="w-[21px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
