import { DataShare, Download, Export, ViewOff } from "@carbon/icons-react";
import { IonButton, IonButtons, IonContent } from "@ionic/react";
import HomeActionButtons from "../HomeActionButtons.jsx";
import CardSoldeSummaryHome from "../CardSoldeSummaryHome.jsx";
import SoldeSummary from "../SoldeSummary.jsx";

function SummaryHomeSection() {
  return (
    <div className="pt-[var(--ion-safe-area-top)] bg-[var(--ion-color-primary)] w-full">
      <div className="h-fit w-full p-5 left-0 flex-col justify-start items-start gap-[4vh] inline-flex">
        <SoldeSummary/>
        <CardSoldeSummaryHome/>
      </div>
    </div>
  );
}
export default SummaryHomeSection
