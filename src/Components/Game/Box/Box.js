import React from "react";

export default function Box({data: {match,player,item ,clickAble, changeCombination,index}}) {

  return (
    <li
      key={index}
      className={`desktop:h-[140px] h-[96px] flex items-center justify-center rounded-[15px] ${
        match
          ? player
            ? "bg-[--31c] shadow-b3"
            : "bg-[--f2b] shadow-b2"
          : "bg-[--1f3] shadow-b1"
      }  cursor-[--cursor]`}
      onClick={
        typeof item === "boolean" && clickAble
          ? () => changeCombination(index)
          : null
      }
    >
      {item === "X" ? (
        <svg
          width="64"
          height="64"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="desktop:w-[64px] desktop:h-[64px] w-[40px] h-[40px]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.681 1.63437C26.5094 0.462798 24.6099 0.4628 23.4383 1.63437L16 9.07271L8.56166 1.63437C7.39009 0.462798 5.49059 0.4628 4.31902 1.63437L1.63437 4.31902C0.462799 5.49059 0.462801 7.39009 1.63437 8.56166L9.07271 16L1.63437 23.4383C0.462798 24.6099 0.4628 26.5094 1.63437 27.681L4.31902 30.3656C5.49059 31.5372 7.39009 31.5372 8.56166 30.3656L16 22.9273L23.4383 30.3656C24.6099 31.5372 26.5094 31.5372 27.681 30.3656L30.3656 27.681C31.5372 26.5094 31.5372 24.6099 30.3656 23.4383L22.9273 16L30.3656 8.56166C31.5372 7.39009 31.5372 5.49059 30.3656 4.31902L27.681 1.63437Z"
            fill={match ? "#1F3641" : "#31C3BD"}
          ></path>
        </svg>
      ) : item === "O" ? (
        <svg
          className="desktop:w-[64px] desktop:h-[64px] w-[40px] h-[40px]"
          width="64"
          height="64"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.9704 15.8706C31.9704 7.10551 24.8649 0 16.0998 0C7.33476 0 0.229248 7.10551 0.229248 15.8706C0.229248 24.6357 7.33476 31.7412 16.0998 31.7412C24.8649 31.7412 31.9704 24.6357 31.9704 15.8706ZM9.63405 15.8706C9.63405 12.2996 12.5289 9.4048 16.0998 9.4048C19.6708 9.4048 22.5656 12.2996 22.5656 15.8706C22.5656 19.4416 19.6708 22.3364 16.0998 22.3364C12.5289 22.3364 9.63405 19.4416 9.63405 15.8706Z"
            fill={match ? "#1F3641" : "#F2B137"}
          ></path>
        </svg>
      ) : null}
    </li>
  );
};
