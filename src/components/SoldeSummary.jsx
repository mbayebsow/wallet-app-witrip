import Solde from "./Solde";
import ToggleHideSolde from "./ToggleHideSolde";

function SoldeSummary({ onScrolling }) {
  return (
    <div className="w-full mb-5 mt-2">
      <div
        className="w-fit"
        style={{
          transition: "all .6s",
          transform: `translateY(${onScrolling ? -95 : 0}px)`,
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
          <Solde />
        </div>
        <ToggleHideSolde />
      </div>
    </div>
  );
}

export default SoldeSummary;
