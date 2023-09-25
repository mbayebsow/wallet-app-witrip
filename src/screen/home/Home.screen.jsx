import { IonContent } from "@ionic/react";
import SummaryHomeSection from "../../components/section/SummaryHomeSection.jsx";
import TransactionsHomeSection from "../../components/section/TransactionsHomeSection.jsx";
import HomeActionButtons from "../../components/HomeActionButtons.jsx";

function HomeScreen(){
  return(
    <>
      <IonContent>
        <div className="h-[var(--ion-safe-area-top)] bg-[var(--ion-color-primary)] fixed top-0 left-0 right-0 w-full z-10"></div>
        <SummaryHomeSection/>
        <HomeActionButtons/>
        <TransactionsHomeSection/>
      </IonContent>
    </>
  )
}
export default HomeScreen