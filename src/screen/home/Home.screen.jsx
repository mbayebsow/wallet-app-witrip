import { IonContent, IonPage } from "@ionic/react";
import { useState } from "react";

import TransactionsHomeSection from "../../components/TransactionsList.jsx";
import HomeActionButtons from "../../components/HomeActionButtons.jsx";
import SoldeSummary from "../../components/SoldeSummary.jsx";
import CardSoldeSummaryHome from "../../components/CardSoldeSummaryHome.jsx";
import FloatingSolde from "../../components/FloatingSolde.jsx";

function HomeScreen() {
  const [onScrolling, setOnScrolling] = useState(false);

  function handleScroll(ev) {
    if (ev.detail.currentY > 1) setOnScrolling(true);
    if (ev.detail.currentY < 100) setOnScrolling(false);
  }

  return (
    <IonPage>
      <IonContent scrollEvents={true} onIonScroll={handleScroll}>
        <div className="h-[var(--ion-safe-area-top)] w-full bg-white/50 backdrop-blur-lg fixed top-0 z-10" />
        <div className="mt-[var(--ion-safe-area-top)] p-2 relative">
          <FloatingSolde onScrolling={onScrolling} />

          <div className="rounded-3xl overflow-hidden bg-black ion-padding ">
            <SoldeSummary onScrolling={onScrolling} />
            <CardSoldeSummaryHome />
            <HomeActionButtons />
          </div>
        </div>
        <TransactionsHomeSection />
      </IonContent>
    </IonPage>
  );
}
export default HomeScreen;
