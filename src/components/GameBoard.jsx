import React, { useEffect, useState } from "react";
// import Grid from "react-css-grid";
import mario from "../assets/img/mario.png";
import green from "../assets/img/green.png";

export default function GameBoard() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    const userWidth = prompt("Please enter board width");
    const userHeight = prompt("Please enter board height");
    const userTotal = new Array(userWidth * userHeight).fill(0);

    const setGreens = (userWidth) => {
      let totalCopy = [...userTotal];
      let center = totalCopy.length % 2 === 0 ? (totalCopy.length - userWidth)/2 : Math.floor(totalCopy.length/2 )
      console.log(center)

      for (let i = 0; i < userWidth; i++) {
        var r = Math.floor(Math.random() * userTotal.length);
        if ( i !== center) {
          totalCopy[r] = 1;
          console.log(r);
        }
      }
      totalCopy[center] = 2
      setTotal(totalCopy);
    };

    setWidth(Number(userWidth));
    setHeight(Number(userHeight));
    setGreens(userWidth);
  }, []);

  return (
    <div className="game-board" width={50} gap={0}>
      {width &&
        height &&
        total.map((item, idx) => (
          <div key={idx} className="tile" style={{ width: `${100 / width}%` }}>
            {/* <span>{item}</span> */}
            {item ? (
              <img
                src={item === 1 ? green : mario}
                alt="mario"
                width="30px"
                height="30px"
              />
            ) : null}
          </div>
        ))}
    </div>
  );
}
