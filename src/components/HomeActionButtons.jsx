import React, { useState } from "react";
import { IonButton, IonNavLink, IonModal, IonContent } from "@ionic/react";
import { DataShare, Download } from "@carbon/icons-react";

import TransfertScreen from "../screen/transfert/Transfert.screen";

function HomeActionButtons() {
  const [openPaymentModal, setOpenPaymentModal] = useState(false);

  return (
    <>
      <IonModal isOpen={openPaymentModal} breakpoints={[0, 0.5]} initialBreakpoint={0.5} onDidDismiss={() => setOpenPaymentModal(false)}>
        <IonContent>paiement</IonContent>
      </IonModal>
      <div className="bg-black gap-3 px-3 pb-3 fit w-full justify-between  items-center flex">
        <IonButton onClick={() => setOpenPaymentModal(true)} color="secondary" className="w-full">
          <Download className="w-6 h-6 mr-3" />
          Paiement
        </IonButton>

        <IonNavLink routerDirection="forward" component={() => <TransfertScreen />} className="w-full p-0 h-fit m-0">
          <IonButton color="secondary" className="w-full">
            <DataShare className="w-6 h-6 mr-3" />
            Transfert
          </IonButton>
        </IonNavLink>
      </div>
    </>
  );
}

export default HomeActionButtons;
