import React from "react";

export default function ShowMenu({
  isMobile,
  data: { title, text, btn1Text, btn2Text,btn1Click,btn2Click,textColor = "a8b",htmlElement},
}) {
  return (
    <div
      className="w-full h-full py-[20px] bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 overflow-x-hidden overflow-y-auto grid place-items-center z-10"
      style={{ "--cursor": isMobile ? "none" : "pointer" }}
    >
      <div className="w-full flex items-center flex-col bg-[--1f3] py-[45px] animate-popDialog">
        <h3 className="font-[700]  desktop:text-[16px] text-[14px] text-center tracking-[1px] uppercase text-[--a8b] mb-[23px] ">
          {title}
        </h3>
        <div className="font-[700] desktop:text-[40px] text-[24px] tracking-[2.5px] uppercase mb-[32px] flex items-center justify-center">
          {htmlElement}
          <span className=" desktop:ml-[24px] ml-[12px]" style={{color: `var(--${textColor})`}}>{text}</span>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-[--a8b] hover:bg-[--dbe]  shadow-b5 rounded-[10px] font-[700] tracking-[1px] text-center text-[16px] cursor-[--cursor] uppercase p-[17px] pt-[15px] mr-[16px]"
            onClick={btn1Click}
          >
            {btn1Text}
          </button>
          <button
            className="bg-[--f2b] hover:bg-[--ffc] shadow-b6 rounded-[10px] font-[700] tracking-[1px] text-center text-[16px] cursor-[--cursor] uppercase p-[17px] pt-[15px] "
            onClick={btn2Click}
          >
            {btn2Text}
          </button>
        </div>
      </div>
    </div>
  );
}
