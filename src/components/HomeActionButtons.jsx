import { DataShare, Download } from "@carbon/icons-react";
import { IonButton } from "@ionic/react";

function HomeActionButtons() {
  return (
    <div className="bg-[--bg-100] gap-3 fit w-full justify-between  items-center flex">
      <IonButton
        routerLink="/paiement"
        routerDirection="forward"
        color="light"
        className="rounded-xl flex items-center w-full"
      >
        <Download className="w-6 h-6 mr-3" />
        Recevoir
      </IonButton>

      <IonButton
        color="light"
        routerLink="/transfert"
        routerDirection="forward"
        className="rounded-xl flex items-center w-full"
      >
        <DataShare className="w-6 h-6 mr-3" />
        Transfert
      </IonButton>
    </div>
  );
}

export default HomeActionButtons;
