import Solde from "./Solde";
import ToggleHideSolde from "./ToggleHideSolde";

export default function FloatingSolde({ onScrolling }) {
  return (
    <div
      style={{
        transform: `translateY(${onScrolling ? 95 : 0}px)`,
        transition: "all .5s",
        marginTop: -100,
      }}
      className="bg-[--bg-100] w-fit mx-auto rounded-3xl fixed left-2 right-2 top-[var(--ion-safe-area-top)+2] z-10"
    >
      <div className="w-full flex justify-between items-center px-5 py-2 gap-5">
        <div className="text-white text-[4vw] font-bold">
          <Solde />
        </div>
        <ToggleHideSolde />
      </div>
    </div>
  );
}
