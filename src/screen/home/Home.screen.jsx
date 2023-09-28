import { IonContent } from "@ionic/react";
import TransactionsHomeSection from "../../components/TransactionsList.jsx";
import HomeActionButtons from "../../components/HomeActionButtons.jsx";
import SoldeSummary from "../../components/SoldeSummary.jsx";
import CardSoldeSummaryHome from "../../components/CardSoldeSummaryHome.jsx";
import { useState } from "react";

function HomeScreen() {
  const [onScrolling, setOnScrolling] = useState(false);

  function handleScroll(ev) {
    //console.log(ev.detail.currentY);
    if (ev.detail.currentY > 1) setOnScrolling(true);
    if (ev.detail.currentY < 50) setOnScrolling(false);
  }

  return (
    <>
      <IonContent scrollEvents={true} onIonScroll={handleScroll}>
        <div className="h-[var(--ion-safe-area-top)] bg-black fixed top-0 left-0 right-0 w-full z-10"></div>
        <SoldeSummary onScrolling={onScrolling} />
        <CardSoldeSummaryHome />
        <HomeActionButtons />
        <TransactionsHomeSection />
      </IonContent>
    </>
  );
}
export default HomeScreen;
