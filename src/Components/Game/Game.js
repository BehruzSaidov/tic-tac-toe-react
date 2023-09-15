import React, { useEffect, useMemo, useState } from "react";
import { useContext } from "react";
import { Data } from "../../App";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Box from "./Box/Box";
import ShowMenu from "./ShowMenu/ShowMenu";
import { useNavigate } from "react-router-dom";

const GAME_COMBINATION = [
  [0, 1, 2],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [3, 4, 5],
  [6, 7, 8],
  [2, 5, 8],
  [1, 4, 7],
];

const X_SVG_ELEMENT = (color = "#31C3BD") => {
  return (
    <svg
      className="align-[initial] desktop:w-[64px] desktop:h-[64px] w-[30px] h-[30px]"
      width="64"
      height="64"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.681 1.63437C26.5094 0.462798 24.6099 0.4628 23.4383 1.63437L16 9.07271L8.56166 1.63437C7.39009 0.462798 5.49059 0.4628 4.31902 1.63437L1.63437 4.31902C0.462799 5.49059 0.462801 7.39009 1.63437 8.56166L9.07271 16L1.63437 23.4383C0.462798 24.6099 0.4628 26.5094 1.63437 27.681L4.31902 30.3656C5.49059 31.5372 7.39009 31.5372 8.56166 30.3656L16 22.9273L23.4383 30.3656C24.6099 31.5372 26.5094 31.5372 27.681 30.3656L30.3656 27.681C31.5372 26.5094 31.5372 24.6099 30.3656 23.4383L22.9273 16L30.3656 8.56166C31.5372 7.39009 31.5372 5.49059 30.3656 4.31902L27.681 1.63437Z"
        fill={color}
      ></path>
    </svg>
  );
};

const O_SVG_ELEMENT = (color = "#F2B137") => {
  return (
    <svg
      className="align-[initial] desktop:w-[64px] desktop:h-[64px] w-[30px] h-[30px]"
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
        fill={color}
      />
    </svg>
  );
};

export default function Game() {
  const {
    isMobile,
    gameSettings: { selected, type },
  } = useContext(Data);

  const navigate = useNavigate();
  const checkCpu = !type && selected !== "x" ? false : true;

  const [list, setList] = useState(Array(9).fill(false));
  const [player, setPlayer] = useState(true);
  const [clickAble, setClickAble] = useState(checkCpu);
  const [cpu_, setCpu_] = useState(!checkCpu);
  const [scores, setScores] = useState({ player1: 0, player2: 0, equal: 0 });
  const [matchIndexs, setMatchIndexs] = useState([]);

  const [isOpenMenu, setIsOpenMenu] = useState({
    status: false,
    title: "",
    text: "",
    textColor: "",
    btn1Text: "",
    btn2Text: "",
    htmlElement: null,
    btn1Clcik: null,
    btn2Click: null,
  });

  const changeScore = (action) => {
    setScores((allScores) => ({
      ...allScores,
      [action]: allScores[action] + 1,
    }));
  };

  const changeCombination = (newIndex) => {
    const updatedArray = list.map((item, index) => {
      if (index === newIndex) {
        return !player ? "O" : "X";
      } else {
        return item;
      }
    });
    setList(updatedArray);

    for (var i = 0; i < GAME_COMBINATION.length; i++) {
      const [f, s, t] = GAME_COMBINATION[i];
      if (
        updatedArray[f] &&
        updatedArray[f] === updatedArray[s] &&
        updatedArray[f] === updatedArray[t]
      ) {
        setClickAble(false);
        setMatchIndexs([f, s, t]);

        var action, title, textColor, htmlElement;

        if (updatedArray[f].toLowerCase() === selected) {
          action = "player1";
          title = !type ? "YOU WON" : "PLAYER 1 WINS!";
        } else {
          title = !type ? "OH NO, YOU LOST… " : "PLAYER 2 WINS!";
          action = "player2";
        }

        if (updatedArray[f] === "X") {
          textColor = "31c";
          htmlElement = X_SVG_ELEMENT();
        } else {
          textColor = "f2b";
          htmlElement = O_SVG_ELEMENT();
        }
        changeScore(action);
        setTimeout(() => {
          setIsOpenMenu({
            ...isOpenMenu,
            status: true,
            title,
            textColor,
            htmlElement,
            text: "TAKES THE ROUND",
            btn1Text: "Quit",
            btn2Text: "Next Round",
            btn1Click: () => {
              navigate("/", { replace: true });
            },
            btn2Click: resetGame,
          });
        }, 500);
        return;
      }
    }

    if (updatedArray.filter((item) => item).length === 9) {
      changeScore("equal");
      setIsOpenMenu({
        ...isOpenMenu,
        status: true,
        title: "",
        textColor: "a8b",
        text: "ROUND TIED",
        btn1Text: "QUIT",
        btn2Text: "NEXT ROUND",
        btn1Click: () => navigate("/", { replace: true }),
        btn2Click: resetGame,
      });
      return;
    }

    if (!type && (selected === "x" ? true : false) == player) {
      setClickAble(false);
      setCpu_(true);
    }

    setPlayer(!player);
  };

  const resetRequest = () => {
    setIsOpenMenu({
      status: true,
      title: "",
      textColor: "a8b",
      text: "RESTART GAME?",
      btn1Text: "NO, CANCEL",
      btn2Text: "YES, RESTART",
      btn1Click: removeDialog,
      btn2Click: resetGame,
    });
  };

  const resetGame = () => {
    setPlayer(true);
    setClickAble(checkCpu);
    setMatchIndexs([]);
    setList(Array(9).fill(false));
    setCpu_(!checkCpu);
    removeDialog();
  };

  const removeDialog = () => {
    setIsOpenMenu(
      Object.fromEntries(Object.entries(isOpenMenu).map(([f, s]) => [f, null]))
    );
  };

  useEffect(() => {
    if (cpu_) {
      if (B(true) || B(false) || C()) {
        // console.log(true)
        return;
      }

      // agar quyidagilarga mos kelmasa
      const emptyList = list
        .map((i, index) => (i ? i : index))
        .filter((i) => typeof i === "number");
      const randomIndex = randomNumber(0, emptyList.length - 1);

      T(emptyList[randomIndex]);

      function B(notPlayer) {
        let positionIndexs = [];

        for (var i = 0; i < GAME_COMBINATION.length; i++) {
          const [f, s, t] = GAME_COMBINATION[i];

          const checkAvaliable = list[f] || list[s] || list[t];

          if (
            checkAvaliable &&
            (notPlayer
              ? checkAvaliable.toLowerCase() !== selected
              : checkAvaliable.toLowerCase() === selected)
          ) {
            const f1 = list[f],
              s1 = list[s],
              t1 = list[t];

            if (
              (f1 && f1 === s1 && !t1 && !positionIndexs.includes(t)) ||
              (s1 && s1 === f1 && !t1 && !positionIndexs.includes(t))
            ) {
              positionIndexs.push(t);
            }

            if (
              (f1 && f1 === t1 && !s1 && !positionIndexs.includes(s)) ||
              (t1 && t1 === f1 && !s1 && !positionIndexs.includes(s))
            ) {
              positionIndexs.push(s);
            }

            if (
              (s1 && s1 === t1 && !f1 && !positionIndexs.includes(f)) ||
              (t1 && t1 === s1 && !f1 && !positionIndexs.includes(f))
            ) {
              positionIndexs.push(f);
            }
          }
        }

        if (positionIndexs.length) {
          T(positionIndexs[randomNumber(0, positionIndexs.length - 1)]);
          return true;
        }
      }

      function C(){
        let positionIndexs = "";

        for (var i = 0; i < GAME_COMBINATION.length; i++) {
          const [f, s, t] = GAME_COMBINATION[i];

          const checkAvaliable = list[f] || list[s] || list[t];

          if (checkAvaliable && checkAvaliable.toLowerCase() !== selected) {
            const f1 = list[f],
              s1 = list[s],
              t1 = list[t];
            if (
              f1 &&
              !s1 &&
              !positionIndexs.includes(s1) &&
              !t1 &&
              !positionIndexs.includes(t1)
            ) {
              positionIndexs += s + "" + t;
            }
            if (
              s1 &&
              !f1 &&
              !positionIndexs.includes(f1) &&
              !t1 &&
              !positionIndexs.includes(t1)
            ) {
              positionIndexs += f + "" + t;
            }
            if (
              t1 &&
              !f1 &&
              !positionIndexs.includes(f1) &&
              !s1 &&
              !positionIndexs.includes(s1)
            ) {
              positionIndexs += s + "" + f;
            }
          }
        }

        if (positionIndexs.length) {
          T(+positionIndexs[randomNumber(0, positionIndexs.length - 1)]);
          return true;
        }
      }

      function T(index) {
        setTimeout(() => {
          setClickAble(true);
          changeCombination(index);
          setCpu_(false);
        }, randomNumber(8, 13) * 100);
      }
    }
  }, [cpu_, list, clickAble]);

  const renderList = useMemo(() => {
    return list.map((item, index) => {
      const match = matchIndexs.some((i) => i === index);
      return (
        <Box
          key={index}
          data={{ match, clickAble, index, item, changeCombination, player , selected ,type}}
        />
      );
    });
  }, [list, matchIndexs, clickAble, player]);

  return (
    <>
      <div
        className="w-full h-full grid place-items-center overflow-y-auto py-[30px] px-[20px]"
        style={{ "--cursor": isMobile ? "none" : "pointer" }}
      >
        <div className="max-w-460 w-full h-auto">
          {/* header start */}
          <Header player={player} resetRequest={resetRequest} />
          {/* header end */}
          {/* main start */}
          <ul className="grid grid-cols-col3 gap-[20px] list-none mb-[20px]">
            {renderList}
          </ul>
          {/* main end */}
          {/* footer start */}
          <Footer selected={selected} type={type} scores={scores} />
          {/* footer end */}
        </div>
      </div>

      {isOpenMenu.status ? (
        <ShowMenu isMobile={isMobile} data={isOpenMenu} />
      ) : null}
    </>
  );
}

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}
