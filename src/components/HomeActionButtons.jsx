import React from "react";
import { IonButton, IonItemDivider } from "@ionic/react";
import { DataShare, Download } from "@carbon/icons-react";

function HomeActionButtons() {
  return (
      <div className="bg-[var(--ion-color-primary)] gap-3 px-3 pb-3 fit w-full justify-between  items-center flex">
        <IonButton color="light" shape="round" className="w-full">
          <Download className="w-6 h-6 mr-3"/>
          Paiement
        </IonButton>

        <IonButton color="light" shape="round" className="w-full">
          <DataShare className="w-6 h-6 mr-3"/>
          Transfert
        </IonButton>
      </div>
  );
}

export default HomeActionButtons;
