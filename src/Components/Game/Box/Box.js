import React from "react";

export default function Box({
  data: {
    match,
    player,
    item = "",
    clickAble,
    changeCombination,
    index,
    selected,
    type,
  },
}) {
  const matchClass = match ? "match" : "";
  const clazz =
    item === "X"
      ? item.toLowerCase()
      : item === "O"
      ? item.toLowerCase()
      : type
      ? player
        ? "_x"
        : "_o"
      : selected !== "x" && !player
      ? "_o"
      : selected !== "o" && player
      ? "_x"
      : "";

  return (
    <li
      key={index}
      className={`desktop:h-[140px] h-[96px] relative flex items-center justify-center rounded-[15px] ${
        match
          ? player
            ? "bg-[--31c] shadow-b3"
            : "bg-[--f2b] shadow-b2"
          : "bg-[--1f3] shadow-b1"
      }  cursor-[--cursor] ${clazz} ${matchClass}`}
      onClick={
        typeof item === "boolean" && clickAble
          ? () => changeCombination(index)
          : null
      }
    ></li>
  );
}
