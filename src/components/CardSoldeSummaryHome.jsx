import React from "react";

function CardSoldeSummaryHome() {
  return (
    <div className="self-stretch py-3 px-5 bg-[#1B1B1B] rounded-lg justify-between items-center inline-flex">
      <div className="relative">
        <div className="text-white text-[4vw]">Solde des cartes</div>
        <div className="text-white/50 text-[3vw]">Solde des cartes cummuler</div>
      </div>
      <div className="text-right text-white text-[4.5vw] font-bold ">400.000 F</div>
    </div>
  );
}

export default CardSoldeSummaryHome;
