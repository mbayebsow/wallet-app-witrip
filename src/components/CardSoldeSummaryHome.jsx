import React from "react";

function CardSoldeSummaryHome() {
  return (
    <div className="bg-black w-full ion-padding">
      <div className="self-stretch py-3 px-5 w-full bg-[#ffffff3b] rounded-lg justify-between items-center inline-flex">
        <div className="relative">
          <div className="text-white text-[4vw]">Solde des cartes</div>
          <div className="text-white/50 text-[3vw]">Solde des cartes cummuler</div>
        </div>
        <div className="text-right text-white text-[4.5vw] font-bold ">400.000 F</div>
      </div>
    </div>
  );
}

export default CardSoldeSummaryHome;
