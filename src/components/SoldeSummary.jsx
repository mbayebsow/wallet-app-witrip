import React from "react";
import { ViewOff } from "@carbon/icons-react";

function SoldeSummary() {
  return (
    <div className="self-stretch justify-between items-center inline-flex">
      <div className="w-fit h-fil relative">
        <div className="text-white/50 text-[4vw]">Solde total</div>
        <div className="text-white/50 text-[3vw]">In your Axis bank account *259</div>
        <div className="text-white text-[6.5vw] font-bold">50.000 FCFA</div>
      </div>
      <div className="w-10 h-10 bg-white/20 text-white rounded-full flex-col justify-center items-center inline-flex">
        <ViewOff/>
      </div>
    </div>
  );
}

export default SoldeSummary;
