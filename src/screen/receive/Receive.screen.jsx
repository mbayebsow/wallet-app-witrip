import { DataShare, Events, Need, Wallet } from "@carbon/icons-react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
} from "@ionic/react";

export default function ReceiveScreen() {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text=""></IonBackButton>
          </IonButtons>
          <IonTitle>Paiement</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Paiement</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="ion-padding">
          <div className="grid grid-flow-row-dense gap-[3vw] grid-cols-2 grid-rows-2">
            <div className="bg-[#DEF1FE] ion-padding pr-10 rounded-xl">
              <Wallet className="text-[#0377F5] w-12 h-12 mb-3" />
              <h2>Recharger mon compte</h2>
            </div>
            <div className="bg-[#FFECEF] ion-padding pr-10 rounded-xl">
              <DataShare className="text-[#EB445A] w-12 h-12 mb-3" />
              <h2>Generer un lien de paiement</h2>
            </div>
            <div className="bg-[#DCFEF8] ion-padding pr-10 rounded-xl">
              <Need className="text-[#0FBA9B] w-12 h-12 mb-3" />
              <h2>Demander un paiement</h2>
            </div>
            <div className="bg-[#FAF9DE] ion-padding pr-10 rounded-xl">
              <Events className="text-[#FFC409] w-12 h-12 mb-3" />
              <h2>Paiement groupé</h2>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
