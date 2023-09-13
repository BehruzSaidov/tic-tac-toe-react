import React, { useState } from "react";
import { Data } from "../../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Menu() {

  const { changeGameSetting, isMobile } = useContext(Data);
  const [settings, setSettings] = useState({selected: "x"});
  const navigate = useNavigate();

  const setState = (action, value) => {
    setSettings({ ...settings, [action]: value });
  };

  const changeGlobalSate = (type=0) => {
    changeGameSetting({...settings, type: type});
    navigate('game');
  };
  

  const {selected,type}  = settings;
  
  return (
    <div
      className="w-full h-full flex justify-center items-center overflow-x-hidden overflow-y-auto p-[24px]"
      style={{ "--cursor": `${isMobile ? "none" : "pointer"}` }}
    >
      <div className="max-w-[460px] w-full m-[--margin] overflow-y-auto">
        <div className="w-full flex justify-center items-center mb-[40px]">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M31.9704 15.8706C31.9704 7.10551 24.8649 0 16.0998 0C7.33476 0 0.229248 7.10551 0.229248 15.8706C0.229248 24.6357 7.33476 31.7412 16.0998 31.7412C24.8649 31.7412 31.9704 24.6357 31.9704 15.8706ZM9.63405 15.8706C9.63405 12.2996 12.5289 9.4048 16.0998 9.4048C19.6708 9.4048 22.5656 12.2996 22.5656 15.8706C22.5656 19.4416 19.6708 22.3364 16.0998 22.3364C12.5289 22.3364 9.63405 19.4416 9.63405 15.8706Z"
              fill="#F2B137"
            />
          </svg>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.681 1.63437C26.5094 0.462798 24.6099 0.4628 23.4383 1.63437L16 9.07271L8.56166 1.63437C7.39009 0.462798 5.49059 0.4628 4.31902 1.63437L1.63437 4.31902C0.462799 5.49059 0.462801 7.39009 1.63437 8.56166L9.07271 16L1.63437 23.4383C0.462798 24.6099 0.4628 26.5094 1.63437 27.681L4.31902 30.3656C5.49059 31.5372 7.39009 31.5372 8.56166 30.3656L16 22.9273L23.4383 30.3656C24.6099 31.5372 26.5094 31.5372 27.681 30.3656L30.3656 27.681C31.5372 26.5094 31.5372 24.6099 30.3656 23.4383L22.9273 16L30.3656 8.56166C31.5372 7.39009 31.5372 5.49059 30.3656 4.31902L27.681 1.63437Z"
              fill="#31C3BD"
            />
          </svg>
        </div>

        <div className="p-[24px] bg-[--1f3] rounded-[10px] mb-[40px] shadow-b1">
          <h3 className="font-[700] text-[--a8b] text-center text-[16px] mb-[40px]">
            PICK PLAYER 1’S MARK
          </h3>

          <div className="p-[8px] rounded-[10px] bg-[--1a2] mb-[17px] flex">

            <button onClick={() => {
                setState('selected',"x");
            }} className={`py-[11px] rounded-[10px] flex-1 flex justify-center items-center cursor-[--cursor]  ${selected === "x" ? "bg-[--a8b]" : "hover:bg-[#A8BFC90D]" }`}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27.681 1.63437C26.5094 0.462798 24.6099 0.4628 23.4383 1.63437L16 9.07271L8.56166 1.63437C7.39009 0.462798 5.49059 0.4628 4.31902 1.63437L1.63437 4.31902C0.462799 5.49059 0.462801 7.39009 1.63437 8.56166L9.07271 16L1.63437 23.4383C0.462798 24.6099 0.4628 26.5094 1.63437 27.681L4.31902 30.3656C5.49059 31.5372 7.39009 31.5372 8.56166 30.3656L16 22.9273L23.4383 30.3656C24.6099 31.5372 26.5094 31.5372 27.681 30.3656L30.3656 27.681C31.5372 26.5094 31.5372 24.6099 30.3656 23.4383L22.9273 16L30.3656 8.56166C31.5372 7.39009 31.5372 5.49059 30.3656 4.31902L27.681 1.63437Z"
                  fill={`${selected === "x" ? "#1A2A33" : "#A8BFC9" }`} 
                />
              </svg>
            </button>

            <button onClick={() => {
                setState('selected',"o");
            }} className={`py-[11px] rounded-[10px] flex-1 flex justify-center items-center cursor-[--cursor] ${selected === "o" ? "bg-[--a8b]" : "hover:bg-[#A8BFC90D]" }`}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M31.9704 15.8706C31.9704 7.10551 24.8649 0 16.0998 0C7.33476 0 0.229248 7.10551 0.229248 15.8706C0.229248 24.6357 7.33476 31.7412 16.0998 31.7412C24.8649 31.7412 31.9704 24.6357 31.9704 15.8706ZM9.63405 15.8706C9.63405 12.2996 12.5289 9.4048 16.0998 9.4048C19.6708 9.4048 22.5656 12.2996 22.5656 15.8706C22.5656 19.4416 19.6708 22.3364 16.0998 22.3364C12.5289 22.3364 9.63405 19.4416 9.63405 15.8706Z"
                  fill={`${selected === "o" ? "#1A2A33" : "#A8BFC9" }`}
                />
              </svg>
            </button>
          </div>
            <p className="font-[500] tracking-[0.875px] text-center text-[--a8b] opacity-[0.5] ">REMEMBER : X GOES FIRST</p>

        </div>

        <button onClick={() =>  changeGlobalSate()} className="bg-[--f2b] pt-[17px] pb-[25px] cursor-[--cursor] text-[--1a2] text-center  rounded-[15px] tracking-[1.25px] block w-full font-[700] shadow-b2 desktop:text-[20px] text-[16px] hover:bg-[--ffc] mb-[20px] ">NEW GAME (VS CPU)</button>

        <button onClick={()=> changeGlobalSate(1)} className="bg-[--31c] pt-[17px] pb-[25px] cursor-[--cursor] text-[--1a2] text-center  rounded-[15px] tracking-[1.25px] block w-full font-[700] shadow-b3 desktop:text-[20px] text-[16px] hover:bg-[--65e]">NEW GAME  (VS PLAYER)</button>

      </div>
    </div>
  );
}
