import React from "react";

export default React.memo(function Footer({selected,type,scores}) {

  return (
    <footer className="grid grid-cols-col3 gap-[20px]">
      <div className="desktop:text-[24px] text-[20px] py-[12px] desktop:first-line:text-[16px] first-line:text-[14px] first-line:font-[400] first-line:uppercase text-center font-[700] bg-[--31c] rounded-[15px] text-[--1a2] leading-[25px]">
        X (
        {type === 0
          ? selected === "x"
            ? "You"
            : "Cpu"
          : selected === "x"
          ? "p1"
          : "p2"}
        )
        <br />
        {selected === "x" ? scores.player1 : scores.player2}
      </div>

      <div className="desktop:text-[24px] text-[20px] py-[12px] desktop:first-line:text-[16px] first-line:text-[14px] first-line:font-[400] first-line:uppercase text-center font-[700] bg-[--a8b] rounded-[15px] text-[--1a2] leading-[25px]">
        TIES
        <br />
        {scores.equal}
      </div>

      <div className="desktop:text-[24px] text-[20px] py-[12px] desktop:first-line:text-[16px] first-line:text-[14px] first-line:font-[400] first-line:uppercase text-center font-[700] bg-[--f2b] rounded-[15px] text-[--1a2] leading-[25px]">
        O (
        {type === 0
          ? selected === "o"
            ? "You"
            : "Cpu"
          : selected === "o"
          ? "p1"
          : "p2"}
        )
        <br />
        {selected === "o" ? scores.player1 : scores.player2}
      </div>
    </footer>
  );
});
