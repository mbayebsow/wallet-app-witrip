import React from "react";
import { ViewOff } from "@carbon/icons-react";

function SoldeSummary({ onScrolling }) {
  //console.log(onScrolling);
  return (
    <div
      className="pt-[var(--ion-safe-area-top)] bg-black w-full sticky top-0 z-10"
      style={{ transform: `translateY(-${onScrolling ? 40 : 0}px)`, transition: "all .1s" }}
    >
      <div
        style={{
          opacity: onScrolling ? 1 : 0,
          transition: "opacity .3s ease-in-out",
        }}
        className="text-white text-[5.5vw] text-center font-semibold w-full absolute bottom-4"
      >
        520.000 F
      </div>

      <div className="w-full overflow-hidden ion-padding">
        <div
          className="w-fit"
          style={{
            transition: "all .5s",
            opacity: onScrolling ? 0 : 1,
          }}
        >
          <div className="text-white text-[4vw]">Solde total</div>
          <div className="text-white text-[3vw]">In your Axis bank account *259</div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div
            className="text-white text-[7vw] font-bold"
            style={{
              opacity: onScrolling ? 0 : 1,
              transform: `translate(${onScrolling ? 80 : 0}%, ${onScrolling ? 5 : 0}%)`,
              transition: "all .3s",
              fontSize: `${7 - onScrolling / 20}vw`,
            }}
          >
            520.000 F
          </div>
          <ViewOff className="text-white mr-5 h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

export default SoldeSummary;
