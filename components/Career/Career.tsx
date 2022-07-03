import React from "react";
import CareerTile from "./CareerTile";

type Props = {};

export default function Career({}: Props) {
  return (
    <>
    <div className="container my-5">
      <div className="row career-filters"></div>

      <div className="row">
        {new Array(10).fill("").map((_, i) => {
          return (
            <CareerTile key={i} title={"stanowisko" + i} location="Wroclaw" />
          );
        })}
      </div>
    </div>
    <div className="container my-5">
        
    </div>
    </>
  );
}
